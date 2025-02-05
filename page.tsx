import { NavbarComponent } from "@/components/navbar"
import { FloatingText } from "@/components/floating-text"
import { FloatingImages } from "@/components/floating-images"
import { BackgroundLines } from "@/components/background-lines"
import { GlowingButton } from "@/components/glowing-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements - Moved down */}
      <div className="absolute inset-0 translate-y-32">
        <BackgroundLines />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-cyan-400 to-transparent opacity-50 blur-3xl" />
        <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-gradient-to-bl from-purple-600 to-transparent opacity-30 blur-3xl" />
      </div>

      <NavbarComponent />

      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            From Your Vision to Stunning Creations
            <br />
            Crafted by <span className="text-cyan-400">Sarwam AI</span>
          </h1>
          <div className="mt-8">
            <GlowingButton />
          </div>
        </div>

        {/* Center Circle and Animations Container - Moved down */}
        <div className="relative mt-48">
          {" "}
          {/* Increased top margin */}
          {/* Gray Circle - Moved down */}
          <div
            className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gray-800 rounded-full z-20 shadow-2xl"
            style={{
              boxShadow: "0 0 100px 20px rgba(0,0,0,0.5)",
            }}
          />
          {/* Text Animation Container */}
          <div className="absolute inset-0 z-10">
            <FloatingText />
          </div>
          {/* Images Container */}
          <div className="absolute inset-0 z-30">
            <FloatingImages />
          </div>
        </div>
      </div>
    </main>
  )
}

