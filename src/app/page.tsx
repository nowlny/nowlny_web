import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/TiltCard";
import MagneticButton from "./components/MagneticButton";
import DeliveryGame from "./components/DeliveryGame";
import ScrollReveal from "./components/ScrollReveal";
import InfiniteMarquee from "./components/InfiniteMarquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 lg:pt-0">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nowlny is live in Lebanon!
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Hungry? <br />
                We&apos;ve Got You{" "}
                <span className="text-gradient-primary">Covered.</span>
              </h1>

              <p className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed">
                Nowlny is your premium food delivery partner. Get your favorite
                meals from top restaurants delivered fast and fresh to your
                doorstep.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticButton
                  href="https://apps.apple.com/lb/app/nowlny/id6778863532"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-white text-black px-6 py-3.5 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-600 font-medium">
                      Download on the
                    </span>
                    <span className="text-base font-bold">App Store</span>
                  </div>
                </MagneticButton>

                <MagneticButton
                  href="/"
                  className="flex items-center justify-center sm:justify-start gap-3 bg-white text-black px-6 py-3.5 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.14 7.636 1.158.33A.954.954 0 0 0 0 1.168v13.665a.954.954 0 0 0 1.158.837l13.982-7.306a.95.95 0 0 0 0-1.688v-.04Zm-13.626 5.34V3.023l6.58 3.513-6.58 3.514Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-600 font-medium">
                      GET IT ON
                    </span>
                    <span className="text-base font-bold">Google Play</span>
                  </div>
                </MagneticButton>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-slide-up animation-delay-200 group">
              <TiltCard className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] animate-float">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full"></div>
                <Image
                  src="/app_screenshot_new.png"
                  alt="Nowlny App Screenshot"
                  fill
                  className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/50 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Nowlny?</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We bring the best food experience to your fingertips with features
              designed for your convenience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Fast Delivery",
                desc: "Hot and fresh food delivered in record time straight to your door.",
              },
              {
                icon: "🍔",
                title: "Top Restaurants",
                desc: "We partner with the highest-rated and most loved restaurants in your city.",
              },
              {
                icon: "💳",
                title: "Easy Payment",
                desc: "Secure and seamless payment options including Apple Pay and Cash on Delivery.",
              },
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} direction="up">
                <TiltCard className="h-full">
                  <div className="glass-panel p-10 text-center h-full border-transparent bg-bg-surface/50">
                    <div className="text-5xl mb-6 bg-primary/10 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center drop-shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal
              direction="left"
              className="relative flex justify-center order-2 lg:order-1 group"
            >
              <TiltCard className="relative w-[300px] h-[600px]">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                <Image
                  src="/app_screenshot_2.png"
                  alt="Nowlny App Experience"
                  fill
                  className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                />
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Premium{" "}
                <span className="text-gradient-primary">Experience</span>
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Our app is designed to be intuitive and beautiful. Browse menus
                with stunning imagery, customize your orders easily, and track
                your delivery in real-time.
              </p>

              <ul className="space-y-6 mb-10">
                {[
                  "Real-time GPS order tracking",
                  "Personalized food recommendations",
                  "24/7 priority customer support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 bg-bg-glass p-4 rounded-xl border border-border-subtle hover:border-primary/50 hover:bg-bg-glass-hover hover:translate-x-2 transition-all cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="https://apps.apple.com/lb/app/nowlny/id6778863532"
                className="btn-primary"
              >
                Explore Features
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mini Game Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a <span className="text-gradient-primary">Break?</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Play Nowlny Dash while you wait for your food! Catch the falling
              items using your mouse.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <DeliveryGame />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <ScrollReveal
          direction="up"
          className="container mx-auto px-6 max-w-4xl relative z-10 text-center"
        >
          <TiltCard>
            <div className="glass-panel p-12 md:p-20 relative overflow-hidden border-transparent bg-bg-surface/50">
              {/* Inner Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
                Get Started Today
              </h2>
              <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto relative z-10">
                Download the Nowlny app now and enjoy a seamless food delivery
                experience with exclusive offers.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <MagneticButton
                  href="https://apps.apple.com/lb/app/nowlny/id6778863532"
                  className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                  <span className="font-bold text-lg">App Store</span>
                </MagneticButton>

                <MagneticButton
                  href="/"
                  className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.14 7.636 1.158.33A.954.954 0 0 0 0 1.168v13.665a.954.954 0 0 0 1.158.837l13.982-7.306a.95.95 0 0 0 0-1.688v-.04Zm-13.626 5.34V3.023l6.58 3.513-6.58 3.514Z" />
                  </svg>
                  <span className="font-bold text-lg">Google Play</span>
                </MagneticButton>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </section>
    </div>
  );
}
