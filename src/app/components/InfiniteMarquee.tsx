export default function InfiniteMarquee() {
  const words = [
    "Fast Delivery", "🔥", 
    "Top Restaurants", "🍔", 
    "24/7 Support", "🛵", 
    "Fresh Food", "🍕", 
    "Premium Quality", "✨",
    "Live Tracking", "📍"
  ];
  
  return (
    <div className="w-full bg-primary/5 border-y border-primary/10 py-6 overflow-hidden relative flex shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
      {/* Left/Right Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee whitespace-nowrap flex items-center w-max">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-12 px-6 items-center">
            {words.map((word, idx) => (
              <span key={idx} className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-primary/80 drop-shadow-md">
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
