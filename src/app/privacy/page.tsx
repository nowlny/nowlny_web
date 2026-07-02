export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Privacy Policy</h1>
          <p className="text-lg text-text-muted">
            Last updated: May 14, 2026
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 animate-slide-up animation-delay-200">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <p className="text-xl text-white mb-10 font-light">
              At Nowlny, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">01.</span> Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information that you provide directly to us when you create an account, make a purchase, or communicate with us. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-muted">
                  <li>Name and contact information</li>
                  <li>Delivery address</li>
                  <li>Payment information</li>
                  <li>Order history</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">02.</span> How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-muted">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Improve our services and develop new features</li>
                  <li>Send you promotional offers and updates (with your consent)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">03.</span> Information Sharing
                </h2>
                <p>
                  We may share your information with third-party service providers who perform services for us, such as payment processing and delivery. We do not sell your personal information to third parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">04.</span> Security
                </h2>
                <p>
                  We use reasonable administrative, technical, and physical security measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>
              
              <section className="pt-8 border-t border-border-subtle">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-primary text-xl">05.</span> Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact our privacy team at{' '}
                  <a href="mailto:privacy@nowlny.com" className="text-primary hover:underline font-medium">privacy@nowlny.com</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
