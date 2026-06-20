"use client";

import { useState } from "react";
import Link from "next/link";

export default function DeleteAccount() {
  const [step, setStep] = useState<"phone" | "otp" | "success" | "error">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch("https://app.nowlny.com/api/v1/auth/customer/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      
      if (!res.ok) {
        throw new Error("Failed to request OTP. Please check your phone number and try again.");
      }
      
      setStep("otp");
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyAndDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    setIsLoading(true);
    setErrorMessage("");
    try {
      // 1. Verify OTP
      const verifyRes = await fetch("https://app.nowlny.com/api/v1/auth/customer/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, code: otp }),
      });
      
      if (!verifyRes.ok) {
        throw new Error("Invalid OTP. Please check the code and try again.");
      }
      
      const data = await verifyRes.json();
      const token = data.accessToken || data.access_token;
      
      if (!token) {
        throw new Error("Authentication failed. No token received.");
      }

      // 2. Delete Account
      const deleteRes = await fetch("https://app.nowlny.com/api/v1/auth/me", {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (deleteRes.status === 200 || deleteRes.ok) {
        setStep("success");
      } else if (deleteRes.status === 409) {
        setErrorMessage("This account has already been deleted.");
        setStep("error");
      } else {
        throw new Error("Failed to delete account. Please try again later or contact support.");
      }

    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fade-in">
      <section className="section" style={{ paddingTop: "10rem", minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "500px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Delete Account
          </h1>
          <p style={{ textAlign: "center", marginBottom: "3rem", color: "var(--text-secondary)" }}>
            Deleting your account will anonymize your personal data, revoke your tokens, and free your phone number for re-signup. This action cannot be undone.
          </p>

          {step === "phone" && (
            <form onSubmit={handleRequestOtp} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label htmlFor="phone" style={{ fontWeight: "600" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +96171916674"
                  required
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {errorMessage && (
                <div style={{ color: "#ef4444", fontSize: "0.875rem", padding: "0.5rem", backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: "4px" }}>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                style={{ width: "100%", opacity: isLoading ? 0.7 : 1 }}
              >
                {isLoading ? "Sending..." : "Request OTP"}
              </button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleVerifyAndDelete} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label htmlFor="otp" style={{ fontWeight: "600" }}>
                  Enter OTP
                </label>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
                  A verification code has been sent to {phoneNumber}
                </p>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 4-6 digit code"
                  required
                  style={{
                    padding: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {errorMessage && (
                <div style={{ color: "#ef4444", fontSize: "0.875rem", padding: "0.5rem", backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: "4px" }}>
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                style={{ width: "100%", opacity: isLoading ? 0.7 : 1, backgroundColor: "#ef4444", color: "white" }}
              >
                {isLoading ? "Deleting..." : "Verify & Delete Account"}
              </button>
              
              <button
                type="button"
                onClick={() => setStep("phone")}
                disabled={isLoading}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginTop: "0.5rem"
                }}
              >
                Change Phone Number
              </button>
            </form>
          )}

          {step === "success" && (
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "rgba(34, 197, 94, 0.1)", borderRadius: "12px", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
              <div style={{ color: "#22c55e", fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h2 style={{ marginBottom: "1rem", color: "#22c55e" }}>Account Deleted</h2>
              <p style={{ color: "var(--text-primary)" }}>
                Your account and all associated personal data have been successfully deleted.
              </p>
              <Link href="/" className="btn btn-primary" style={{ display: "inline-block", marginTop: "1.5rem" }}>
                Return to Home
              </Link>
            </div>
          )}
          
          {step === "error" && (
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "rgba(239, 68, 68, 0.1)", borderRadius: "12px", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
              <div style={{ color: "#ef4444", fontSize: "3rem", marginBottom: "1rem" }}>!</div>
              <h2 style={{ marginBottom: "1rem", color: "#ef4444" }}>Action Failed</h2>
              <p style={{ color: "var(--text-primary)" }}>
                {errorMessage}
              </p>
              <button 
                onClick={() => {
                  setStep("phone");
                  setPhoneNumber("");
                  setOtp("");
                  setErrorMessage("");
                }} 
                className="btn btn-primary" 
                style={{ display: "inline-block", marginTop: "1.5rem" }}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
