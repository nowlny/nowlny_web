import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Nowlny — ordering, payment, delivery tracking, and partnering with us.",
};

const faqs = [
  {
    q: "What is Nowlny?",
    a: "Nowlny is a Lebanese food delivery platform. You order from local restaurants through the app, a driver picks up your food, and you follow the delivery live on a map until it reaches your door.",
  },
  {
    q: "Where is Nowlny available?",
    a: "Nowlny is live in Lebanon. Each restaurant defines its own delivery zones, so the restaurants you see in the app are the ones that deliver to your location.",
  },
  {
    q: "How do I pay for my order?",
    a: "Cash on delivery. When you check out, you can tell us how much change you need and the driver will come prepared. Digital payment options are on our roadmap.",
  },
  {
    q: "Can I track my order?",
    a: "Yes. Once a driver picks up your order, you can watch them move on a live map inside the app, see every status update, and even chat with or call your driver without leaving the app.",
  },
  {
    q: "Is Nowlny available on Android?",
    a: "The iOS app is live on the App Store today. The Android version is coming to Google Play soon — follow us on Instagram @nowlnylb to hear the moment it launches.",
  },
  {
    q: "Does the app support Arabic?",
    a: "Yes. The entire app works in both English and Arabic — switch languages anytime from your profile settings.",
  },
  {
    q: "What are Group Orders?",
    a: "Group Orders let several people share one cart. Start a group order, send the invite link to friends or coworkers, everyone adds their own meal, and the whole order is delivered together.",
  },
  {
    q: "I own a restaurant. How do I join Nowlny?",
    a: "Download the Nowlny Resto app from the App Store and register your restaurant — you can build your menu, set delivery zones and opening hours, and start receiving orders. You can also contact us and we'll help you get set up.",
  },
  {
    q: "I'm a driver or run a delivery company. Can I work with Nowlny?",
    a: "Yes — restaurants and delivery companies on Nowlny invite and manage their own drivers, and delivery companies handle pickup requests through a dedicated app. Get in touch through our contact page and we'll onboard you.",
  },
  {
    q: "How do I delete my account?",
    a: "You can delete your account from inside the app, or use the delete account page on this website. Deletion is permanent and removes your personal data.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to know about ordering with Nowlny. Can&apos;t
            find your answer?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact us
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4 animate-slide-up animation-delay-200">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="glass-panel group open:border-primary/30"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-lg text-text-main [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-muted leading-relaxed">
                {faq.a}
                {faq.q === "How do I delete my account?" && (
                  <>
                    {" "}
                    <Link href="/delete-account" className="text-primary hover:underline font-medium">
                      Delete your account here
                    </Link>
                    .
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
