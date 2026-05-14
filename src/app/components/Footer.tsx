import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              Nowl<span>ny</span>
            </Link>
            <p style={{ fontSize: '0.875rem' }}>
              The ultimate food delivery experience. Fast, fresh, and reliable.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/help">Help Center</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Download</h4>
            <ul className="footer-links">
              <li><Link href="/">App Store</Link></li>
              <li><Link href="/">Google Play</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nowlny. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" className="nav-link">Twitter</Link>
            <Link href="/" className="nav-link">Instagram</Link>
            <Link href="/" className="nav-link">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
