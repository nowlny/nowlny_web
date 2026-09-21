"use client";

import { useState } from "react";
import Link from "next/link";

const inputClasses =
  "w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main placeholder-text-muted/50";

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
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "An error occurred.");
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

    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-lg relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Delete Account</h1>
          <p className="text-text-muted leading-relaxed">
            Deleting your account will anonymize your personal data, revoke
            your tokens, and free your phone number for re-signup. This action
            cannot be undone.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-10 animate-slide-up animation-delay-200">
          {step === "phone" && (
            <form onSubmit={handleRequestOtp} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold tracking-wide text-text-muted">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +96178783668"
                  required
                  className={inputClasses}
                />
              </div>

              {errorMessage && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full disabled:opacity-60 disabled:pointer-events-none"
              >
                {isLoading ? "Sending..." : "Request OTP"}
              </button>
            </form>
          )}

          {step === "otp" && (
            <form onSubmit={handleVerifyAndDelete} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="otp" className="text-sm font-semibold tracking-wide text-text-muted">
                  ENTER OTP
                </label>
                <p className="text-sm text-text-muted">
                  A verification code has been sent to {phoneNumber}
                </p>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 4-6 digit code"
                  required
                  className={inputClasses}
                />
              </div>

              {errorMessage && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-[0_4px_14px_rgba(220,38,38,0.3)] disabled:opacity-60 disabled:pointer-events-none"
              >
                {isLoading ? "Deleting..." : "Verify & Delete Account"}
              </button>

              <button
                type="button"
                onClick={() => setStep("phone")}
                disabled={isLoading}
                className="text-text-muted hover:text-text-main text-sm underline underline-offset-4 transition-colors disabled:opacity-60"
              >
                Change Phone Number
              </button>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-3xl">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-3">Account Deleted</h2>
              <p className="text-text-muted mb-8">
                Your account and all associated personal data have been
                successfully deleted.
              </p>
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
            </div>
          )}

          {step === "error" && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-3xl">
                !
              </div>
              <h2 className="text-2xl font-bold text-red-400 mb-3">Action Failed</h2>
              <p className="text-text-muted mb-8">{errorMessage}</p>
              <button
                onClick={() => {
                  setStep("phone");
                  setPhoneNumber("");
                  setOtp("");
                  setErrorMessage("");
                }}
                className="btn-primary"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
