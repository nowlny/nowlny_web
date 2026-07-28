import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nowlny is a Lebanese food delivery platform connecting customers, restaurants, drivers, and delivery fleets — built in Lebanon, for Lebanon.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Nowlny</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Food delivery built in Lebanon, for Lebanon — by people who know
            exactly how food, streets, and life work here.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-12 animate-slide-up animation-delay-200">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-text-main mb-8 font-light">
              Nowlny started in 2026 with a simple observation: Lebanon&apos;s
              food scene is extraordinary, but ordering it wasn&apos;t. Global
              delivery apps weren&apos;t built for how we actually live — where
              cash is still king, where prices move between lira and dollars,
              and where half the table wants the menu in Arabic.
            </p>

            <p className="text-text-muted mb-8">
              So we built the whole thing ourselves, from the ground up. Not
              just a customer app, but a complete platform: an app for
              customers to order and track their food live on a map, an app for
              restaurants to manage menus and orders, an app for drivers to
              navigate and earn, and an app for delivery companies to run their
              fleets. Four apps, one connected system — every order flows
              through it in real time, from the moment you tap
              &quot;checkout&quot; to the knock on your door.
            </p>

            <p className="text-text-muted mb-12">
              We&apos;re proudly local. Restaurants on Nowlny keep control of
              their menus, their delivery zones, and even their own drivers if
              they have them. Customers pay the way Lebanon actually pays —
              cash on delivery, with change ready. And the entire experience
              works in both English and Arabic. When you order through Nowlny,
              your money stays in the neighborhood: with the restaurant that
              cooked your meal and the driver who brought it to you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-border-subtle">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-primary">🎯</span> Our Mission
                </h2>
                <p className="text-text-muted leading-relaxed">
                  To give Lebanon a delivery experience as good as its food:
                  fast, transparent, and fair — connecting local restaurants,
                  drivers, and customers with technology that respects how
                  people here actually eat, pay, and live.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                  <span className="text-primary">⭐</span> What We Stand For
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Local First</strong>
                      <span className="text-text-muted text-sm">
                        We champion Lebanese restaurants and drivers. Your
                        order supports your own community, not a distant
                        corporation.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Full Transparency</strong>
                      <span className="text-text-muted text-sm">
                        Watch your driver on a live map, see every order
                        status, and talk to your driver directly in the app.
                        No guessing, no waiting in the dark.
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white block mb-1">Built for Here</strong>
                      <span className="text-text-muted text-sm">
                        Cash on delivery, English and Arabic, local delivery
                        zones — designed around Lebanon&apos;s reality, not
                        imported from somewhere else.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border-subtle text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Join Us on the Journey
              </h2>
              <p className="text-text-muted mb-8 max-w-xl mx-auto">
                Hungry? Download the app. Run a restaurant or a delivery
                fleet? Let&apos;s grow together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/lb/app/nowlny/id6778863532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Nowlny
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white border border-border-subtle hover:border-primary/50 hover:bg-bg-glass transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
