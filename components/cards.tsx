"use client"
import { Card } from "@heroui/react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { motion, type MotionValue } from "framer-motion"

const poppins = Poppins({
  weight: ["100"],
  subsets: ["latin"],
})

interface CardProps {
  title: string
  description: string
  image: string
  progress: MotionValue<number>
}

export default function Cards({ title, description, image, progress }: CardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        className="w-[1024px] h-[568px] relative overflow-hidden size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-50%"
        radius="lg"
        style={{
          borderRadius: "39px",
          position: "relative",
          backgroundColor: "#151515",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/Rectangle.png" alt="Background" layout="fill" objectFit="cover" className="opacity-80" />
        </div>

        {/* Custom Slider */}
        <div className="absolute top-10 left-8 z-10 h-[491px] w-[1px] bg-zinc-800">
          {/* Slider Track */}
          <div className="absolute inset-0 w-full bg-white rounded-full" />

          {/* Slider Thumb */}
          <motion.div
            className="absolute w-3 h-3 -left-[5px] bg-white rounded-full"
            style={{
              top: progress,
            }}
          />
        </div>

        {/* Decorative Arrow */}
        <div className="absolute bottom-[140px] left-[370px]">
          <Image
            src="/arrow.png"
            alt="Curved arrow"
            width={130}
            height={70}
            className="object-contain transform rotate-[1deg]"
          />
        </div>

        {/* Content Container */}
        <div className="relative flex items-center justify-between p-12 w-full h-full">
          <div className="flex flex-col max-w-[450px] text-white relative ml-[60px] mt-[-90px]">
            <h2 className="text-[40px] mb-6 font-extralight">{title}</h2>
            <p className={`${poppins.className} text-[16px] font-extralight leading-snug max-w-[400px]`}>
              {description}
            </p>
          </div>

          <div
            className="absolute top-[50%] left-[530px] translate-y-[-50%] w-[1px] h-[309.5px]"
            style={{ backgroundColor: "#545454" }}
          />

          <div className="w-[420px] h-[450px] rounded-[39px] overflow-hidden shadow-lg relative">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </div>
      </Card>
    </div>
  )
}

