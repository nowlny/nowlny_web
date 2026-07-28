import Image from "next/image";

// Realistic iPhone-style device frame. The screenshot fills the screen area;
// bezel, Dynamic Island, and side buttons are drawn with CSS so any raw
// app screenshot renders like a real device mockup.
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[471/1024] ${className}`}>
      {/* Side buttons (behind the frame body) */}
      <div className="absolute -left-[2px] top-[18%] w-[3px] h-[4%] bg-gradient-to-b from-[#3a3a3c] via-[#5a5a5e] to-[#3a3a3c] rounded-l-md"></div>
      <div className="absolute -left-[2px] top-[26%] w-[3px] h-[7%] bg-gradient-to-b from-[#3a3a3c] via-[#5a5a5e] to-[#3a3a3c] rounded-l-md"></div>
      <div className="absolute -left-[2px] top-[35%] w-[3px] h-[7%] bg-gradient-to-b from-[#3a3a3c] via-[#5a5a5e] to-[#3a3a3c] rounded-l-md"></div>
      <div className="absolute -right-[2px] top-[28%] w-[3px] h-[11%] bg-gradient-to-b from-[#3a3a3c] via-[#5a5a5e] to-[#3a3a3c] rounded-r-md"></div>

      {/* Titanium frame */}
      <div className="absolute inset-0 rounded-[3.2rem] bg-gradient-to-b from-[#4a4a4e] via-[#2c2c2e] to-[#4a4a4e] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
        {/* Black bezel */}
        <div className="w-full h-full rounded-[3rem] bg-black p-[10px]">
          {/* Screen */}
          <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-[#0a0a0a]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 220px, 260px"
              className="object-cover"
              priority={priority}
            />

            {/* Dynamic Island */}
            <div className="absolute top-[1.8%] left-1/2 -translate-x-1/2 w-[30%] h-[3.4%] bg-black rounded-full z-20"></div>

            {/* Subtle glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
