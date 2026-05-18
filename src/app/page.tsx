import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content slide-up">
            <h1>Hungry? We&apos;ve Got You Covered.</h1>
            <p>
              Nowlny is your premium food delivery partner. Get your favorite
              meals from top restaurants delivered fast and fresh to your
              doorstep.
            </p>

            <div className="store-buttons">
              <Link href="/" className="store-btn">
                <div className="store-btn-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </Link>
              <Link href="/" className="store-btn">
                <div className="store-btn-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="hero-image slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div
              style={{ position: "relative", width: "300px", height: "600px" }}
            >
              <Image
                src="/app_screenshot_1.png"
                alt="Nowlny App Screenshot 1"
                fill
                style={{ objectFit: "contain", borderRadius: "24px" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="section"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>Why Choose Nowlny?</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              We bring the best food experience to your fingertips.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                🚀
              </div>
              <h3>Fast Delivery</h3>
              <p>Hot and fresh food delivered in record time.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                🍔
              </div>
              <h3>Best Restaurants</h3>
              <p>We partner with the top-rated restaurants in your city.</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                💳
              </div>
              <h3>Easy Payment</h3>
              <p>Secure and seamless payment options for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "center" }}>
            <div className="hero-image slide-up">
              <div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "600px",
                }}
              >
                <Image
                  src="/app_screenshot_2.png"
                  alt="Nowlny App Screenshot 2"
                  fill
                  style={{ objectFit: "contain", borderRadius: "24px" }}
                />
              </div>
            </div>
            <div className="hero-content">
              <h2>A Premium Experience</h2>
              <p>
                Our app is designed to be intuitive and beautiful. Browse menus,
                customize your orders, and track your delivery in real-time.
              </p>
              <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                <li
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                    ✓
                  </span>{" "}
                  Real-time order tracking
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                    ✓
                  </span>{" "}
                  Personalized recommendations
                </li>
                <li
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                    ✓
                  </span>{" "}
                  24/7 customer support
                </li>
              </ul>
              <Link href="/" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{ backgroundColor: "var(--bg-secondary)", textAlign: "center" }}
      >
        <div className="container">
          <h2>Get Started Today</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto" }}>
            Download the Nowlny app now and enjoy your first delivery for free!
          </p>
          <div className="store-buttons" style={{ justifyContent: "center" }}>
            <Link
              href="/"
              className="store-btn"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="store-btn-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </Link>
            <Link
              href="/"
              className="store-btn"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="store-btn-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
