import Link from "next/link";
import TiltCard from "./components/TiltCard";
import MagneticButton from "./components/MagneticButton";
import ScrollReveal from "./components/ScrollReveal";
import PhoneFrame from "./components/PhoneFrame";

const APP_STORE_URL = "https://apps.apple.com/lb/app/nowlny/id6778863532";
const RESTO_APP_STORE_URL =
  "https://apps.apple.com/lb/app/nowlny-restaurant/id6778846700";

function AppleLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    </svg>
  );
}

function GooglePlayLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M15.14 7.636 1.158.33A.954.954 0 0 0 0 1.168v13.665a.954.954 0 0 0 1.158.837l13.982-7.306a.95.95 0 0 0 0-1.688v-.04Zm-13.626 5.34V3.023l6.58 3.513-6.58 3.514Z" />
    </svg>
  );
}

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
                Order from your favorite local restaurants, watch your driver
                arrive on a live map, and pay cash at your door. Food delivery
                built for Lebanon, in English and Arabic.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticButton
                  href={APP_STORE_URL}
                  className="flex items-center justify-center sm:justify-start gap-3 bg-text-main text-bg-base px-6 py-3.5 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <AppleLogo />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] text-gray-600 font-medium">
                      Download on the
                    </span>
                    <span className="text-base font-bold">App Store</span>
                  </div>
                </MagneticButton>

                <div
                  aria-disabled="true"
                  className="relative flex items-center justify-center sm:justify-start gap-3 bg-text-main/5 border border-text-main/10 text-text-main/50 px-6 py-3.5 rounded-2xl select-none"
                >
                  <GooglePlayLogo />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium">GET IT ON</span>
                    <span className="text-base font-bold">Google Play</span>
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                    SOON
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Live order tracking
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Cash on delivery
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary">✓</span> English &amp; Arabic
                </span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-primary/30 blur-[80px] rounded-full"></div>
                <div className="relative w-[220px] md:w-[260px]">
                  <PhoneFrame
                    src="/app_screenshot_new.png"
                    alt="The Nowlny app home screen showing featured restaurants in Lebanon"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/50 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Nowlny?</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Not just another delivery app. Every feature below is live in the
              app today.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📍",
                title: "Live Driver Tracking",
                desc: "Watch your driver move on a real map from pickup to your doorstep, with live order status at every step.",
              },
              {
                icon: "👥",
                title: "Group Orders",
                desc: "Share one cart with friends or coworkers. Everyone adds their own meal through an invite link, and it all arrives together.",
              },
              {
                icon: "🎬",
                title: "Discover Reels",
                desc: "Scroll a video feed of real dishes from local restaurants and order what makes you hungry on the spot.",
              },
              {
                icon: "🃏",
                title: "Meal Matchmaker",
                desc: "Can't decide where to eat? Swipe on meals with your friends and let the group's matches pick tonight's restaurant.",
              },
              {
                icon: "💬",
                title: "In-App Chat & Calls",
                desc: "Message or voice-call your driver directly inside the app — no need to share your phone number.",
              },
              {
                icon: "💵",
                title: "Cash on Delivery",
                desc: "Pay in cash when your food arrives. Tell us how much change you need and the driver comes prepared.",
              },
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={(idx % 3) * 150} direction="up">
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

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Craving to{" "}
              <span className="text-gradient-primary">Doorstep</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Four simple steps — and you can follow every one of them live in
              the app.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Browse & Order",
                desc: "Explore local restaurants, build your cart, and place your order in a few taps.",
              },
              {
                step: "02",
                title: "Restaurant Confirms",
                desc: "The restaurant accepts your order instantly and starts preparing your food fresh.",
              },
              {
                step: "03",
                title: "Driver Picks Up",
                desc: "A nearby driver collects your order and heads your way on the fastest route.",
              },
              {
                step: "04",
                title: "Track & Enjoy",
                desc: "Follow the driver live on the map, chat if you need to, and pay cash at your door.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} direction="up">
                <div className="relative glass-panel p-8 h-full border-transparent bg-bg-surface/50">
                  <div className="text-5xl font-extrabold text-gradient-primary mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform / Ecosystem Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-surface/50 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One Platform, <span className="text-gradient">Four Apps</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Nowlny isn&apos;t just a customer app. We built the entire
              delivery ecosystem — for restaurants, drivers, and delivery fleets
              — connected in real time.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🍔",
                name: "Nowlny",
                audience: "For Customers",
                desc: "Order food, track your driver live, and pay cash on delivery.",
                href: APP_STORE_URL,
                cta: "On the App Store",
              },
              {
                icon: "🏪",
                name: "Nowlny Resto",
                audience: "For Restaurants",
                desc: "Receive and manage orders, edit your menu, post reels and stories, and coordinate your own drivers.",
                href: RESTO_APP_STORE_URL,
                cta: "On the App Store",
              },
              {
                icon: "🛵",
                name: "Nowlny Delivery",
                audience: "For Drivers",
                desc: "Get delivery jobs, navigate to the restaurant and customer, and track your earnings.",
                href: null,
                cta: "Rolling out",
              },
              {
                icon: "🚚",
                name: "Nowlny Delivery Company",
                audience: "For Fleets",
                desc: "Manage your driver fleet, accept pickup requests, and define your delivery zones.",
                href: null,
                cta: "Rolling out",
              },
            ].map((app, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} direction="up">
                <div className="glass-panel p-8 h-full flex flex-col border-transparent bg-bg-surface/50">
                  <div className="text-4xl mb-5 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {app.icon}
                  </div>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">
                    {app.audience}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{app.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
                    {app.desc}
                  </p>
                  {app.href ? (
                    <Link
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-text-main hover:text-primary transition-colors"
                    >
                      <AppleLogo size={16} />
                      {app.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted">
                      {app.cta}
                      <span className="bg-primary/15 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                        SOON
                      </span>
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal
            direction="up"
            delay={200}
            className="text-center mt-12"
          >
            <p className="text-text-muted">
              Own a restaurant or a delivery fleet?{" "}
              <Link
                href="/contact"
                className="text-primary font-semibold hover:underline"
              >
                Partner with us
              </Link>
            </p>
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
                Download Nowlny on the App Store and get your favorite food
                delivered — fresh, fast, and tracked live to your door.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <MagneticButton
                  href={APP_STORE_URL}
                  className="flex items-center justify-center gap-3 bg-text-main text-bg-base px-8 py-4 rounded-2xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] group"
                >
                  <AppleLogo size={24} />
                  <span className="font-bold text-lg">App Store</span>
                </MagneticButton>

                <div
                  aria-disabled="true"
                  className="relative flex items-center justify-center gap-3 bg-text-main/5 border border-text-main/10 text-text-main/50 px-8 py-4 rounded-2xl select-none"
                >
                  <GooglePlayLogo size={24} />
                  <span className="font-bold text-lg">Google Play</span>
                  <span className="absolute -top-2.5 -right-2.5 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                    SOON
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </section>
    </div>
  );
}
