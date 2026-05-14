export default function Contact() {
  return (
    <div className="fade-in">
      <section className="section" style={{ paddingTop: '10rem' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Contact Us</h1>
          
          <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Have questions or need support? Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '600' }}>Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '600' }}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontWeight: '600' }}>Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>
            
            <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </form>
          
          <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p>Or reach us directly at:</p>
            <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>support@nowlny.com</p>
            <p>1-800-NOWLNY</p>
            <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
              WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>+1234567890</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
