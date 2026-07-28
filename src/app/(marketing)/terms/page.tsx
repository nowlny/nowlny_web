import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using the Nowlny platform.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: (
      <p>
        By creating an account or using the Nowlny mobile application or
        website (together, the &quot;Service&quot;), you agree to these Terms
        of Service. If you do not agree, please do not use the Service.
      </p>
    ),
  },
  {
    title: "What Nowlny Does",
    body: (
      <p>
        Nowlny is a marketplace that connects customers with independent local
        restaurants, drivers, and delivery companies in Lebanon. Restaurants
        prepare your food and set their own menus, prices, delivery zones, and
        opening hours. Delivery is carried out by drivers working with the
        restaurant or a partnered delivery company.
      </p>
    ),
  },
  {
    title: "Accounts",
    body: (
      <p>
        You register with your phone number and verify it with a one-time
        code. You are responsible for the activity on your account and for
        keeping your contact details accurate. You must be legally capable of
        entering into a purchase to place orders. You can delete your account
        at any time from the app or through the delete-account page on this
        website.
      </p>
    ),
  },
  {
    title: "Orders & Payment",
    body: (
      <p>
        When you place an order, the restaurant may accept or reject it (for
        example, if an item is unavailable). Prices, delivery fees, and
        estimated times are shown before you confirm. Payment is currently
        made in cash upon delivery. Please have payment ready when your order
        arrives; you can request change in advance through the app.
      </p>
    ),
  },
  {
    title: "Cancellations",
    body: (
      <p>
        Orders can only be cancelled before the restaurant starts preparing
        them. If a restaurant rejects or cannot fulfill your order, you will
        be notified in the app. Repeatedly refusing delivered orders may lead
        to account suspension.
      </p>
    ),
  },
  {
    title: "Acceptable Use",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Do not place fake, fraudulent, or abusive orders.</li>
        <li>Do not harass restaurants, drivers, or other users, including in chat, calls, reviews, or reels comments.</li>
        <li>Do not post unlawful, misleading, or offensive content.</li>
        <li>Do not attempt to disrupt, reverse-engineer, or gain unauthorized access to the Service.</li>
      </ul>
    ),
  },
  {
    title: "Content & Reviews",
    body: (
      <p>
        Ratings, reviews, and other content you submit must be honest and
        based on your real experience. By submitting content you grant Nowlny
        a non-exclusive license to display it within the Service. We may
        remove content that violates these terms.
      </p>
    ),
  },
  {
    title: "Liability",
    body: (
      <p>
        Food is prepared by independent restaurants; they are responsible for
        its quality, ingredients, and allergen information. Nowlny provides
        the Service &quot;as is&quot; and, to the extent permitted by law, is
        not liable for indirect damages or events outside our reasonable
        control. Nothing in these terms excludes liability that cannot be
        excluded under applicable law.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these terms as the Service evolves. Material changes
        will be announced in the app or on this website, and continued use of
        the Service after changes take effect constitutes acceptance.
      </p>
    ),
  },
  {
    title: "Governing Law & Contact",
    body: (
      <p>
        These terms are governed by the laws of Lebanon. Questions? Contact us
        at{" "}
        <a href="mailto:nowlnylb@gmail.com" className="text-primary hover:underline font-medium">
          nowlnylb@gmail.com
        </a>{" "}
        or via WhatsApp at{" "}
        <a href="https://wa.me/96171916674" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          +961 71 916 674
        </a>
        .
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 relative overflow-hidden animate-fade-in">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Terms of Service</h1>
          <p className="text-lg text-text-muted">Last updated: July 21, 2026</p>
        </div>

        <div className="glass-panel p-8 md:p-12 animate-slide-up animation-delay-200">
          <div className="prose prose-invert prose-lg max-w-none text-text-muted">
            <div className="space-y-12">
              {sections.map((section, idx) => (
                <section key={idx} className={idx === sections.length - 1 ? "pt-8 border-t border-border-subtle" : undefined}>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-primary text-xl">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>{" "}
                    {section.title}
                  </h2>
                  {section.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
