import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Nowl<span>ny</span>
        </Link>
        
        <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />
        <label htmlFor="menu-toggle" className="menu-toggle-label" aria-label="Toggle menu">
          <span className="burger-icon">☰</span>
          <span className="close-icon">✕</span>
        </label>
        
        <nav className="nav">
          <Link href="/" id="nav-home" className="nav-link active">Home</Link>
          <Link href="/about" id="nav-about" className="nav-link">About</Link>
          <Link href="/contact" id="nav-contact" className="nav-link">Contact Us</Link>
          <Link href="/privacy" id="nav-privacy" className="nav-link">Privacy</Link>
          <Link href="/" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
            Download App
          </Link>
        </nav>
      </div>
    </header>
  );
}
