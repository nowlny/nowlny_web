import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <Link
              href="/"
              className="logo"
              style={{ marginBottom: "1rem", display: "flex" }}
            >
              <Image
                src="/logotransparentDark.png"
                alt="Nowlny Logo"
                width={150}
                height={150}
              />
            </Link>
            <p style={{ fontSize: "0.875rem" }}>
              The ultimate food delivery experience. Fast, fresh, and reliable.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/help">Help Center</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Download</h4>
            <ul className="footer-links">
              <li>
                <Link href="https://apps.apple.com/lb/app/nowlny/id6778863532">App Store</Link>
              </li>
              <li>
                <Link href="/">Google Play</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nowlny. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="https://www.instagram.com/nowlnylb" className="nav-link" target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61589544729149" className="nav-link" target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
