'use client'
import { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Initialize Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function DiscordLanding() {
  const [discordIcon, setDiscordIcon] = useState("/Component 1.png"); // Default icon

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom right, rgba(85, 165, 175, 0.75), rgba(54, 95, 174, 0.5), rgba(0, 0, 0, 1))",
          opacity: 0.9, // Adjust opacity for extra effect
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex items-center justify-between h-full">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 ${poppins.className}`}
            >
              Be part of a creative community!
            </h1>
            <button
              className="flex items-center justify-center gap-2 w-[245px] h-[51px] rounded-[18px] text-white bg-[#5865F2] hover:bg-white hover:text-[#5865F2] hover:shadow-none transition duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5865F2]"
              onMouseEnter={() => setDiscordIcon("/discrord_blue.png")} // Change icon on hover
              onMouseLeave={() => setDiscordIcon("/Component 1.png")} // Revert on leave
            >
              <Image src={discordIcon} alt="Discord Icon" width={24} height={24} />
              <span className="text-base font-medium">Join Discord Server</span>
            </button>
          </div>

          {/* Right Content - GIF */}
          <div className="hidden md:block relative w-96 h-96">
            <Image
              src="/face.gif"
              alt="Creative visual effect"
              width={299}
              height={291}
              className="rounded-[56px] animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
