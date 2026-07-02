export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Nowlny</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Revolutionizing the food delivery experience by combining cutting-edge technology with a passion for gastronomy.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 animate-slide-up animation-delay-200">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-text-main mb-8 font-light">
              Welcome to Nowlny, where we believe that great food should be
              accessible to everyone, anywhere, at any time. Founded in 2026, we
              have been on a mission to redefine food delivery.
            </p>
            
            <p className="text-text-muted mb-12">
              Our platform connects you with the finest local restaurants,
              offering a diverse range of cuisines to satisfy every craving.
              Whether you&apos;re in the mood for a quick bite or a gourmet feast,
              Nowlny delivers it with speed and care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-border-subtle">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-primary">🎯</span> Our Mission
                </h2>
                <p className="text-text-muted leading-relaxed">
                  To provide the fastest, most reliable, and most delightful food
                  delivery service while supporting local businesses and empowering our communities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-primary">⭐</span> Our Values
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Quality Guaranteed</strong>
                      <span className="text-text-muted text-sm">We ensure that your food arrives as fresh as it left the kitchen.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Lightning Speed</strong>
                      <span className="text-text-muted text-sm">Our dedicated fleet and optimized routing ensures timely deliveries.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Continuous Innovation</strong>
                      <span className="text-text-muted text-sm">We continuously improve our app to provide a seamless user experience.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
