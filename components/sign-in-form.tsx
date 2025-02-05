"use client"

import { useState } from "react"
import Link from "next/link"
import { DiscIcon as Discord, Instagram, Youtube, Newspaper } from "lucide-react"

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })

  return (
    <div className="w-full min-h-screen bg-[#121212] relative overflow-hidden px-6 lg:px-8 py-12 flex flex-col justify-between">
  <div className="radial-gradient absolute w-[335px] h-[354px] top-[-37px] left-[42px] pointer-events-none"></div>

  <div className="relative z-10 flex flex-col items-center">
    {/* Logo */}
    <div className="w-[149px] h-[55px] mb-10 text-center">
      <span className="text-gray-300 text-3xl font-semibold">Logo</span>
    </div>

    {/* Form */}
    <div className="w-full max-w-[320px] space-y-8">
      <div className="text-center">
        <h2 className="text-gray-300 text-lg font-light text-[16px]">Sign up or Login with</h2>
      </div>

      <div className="space-y-4">
        <button
          type="button"
          className="w-full h-12 flex items-center justify-center gap-2 bg-[#262626] hover:bg-opacity-80 text-gray-300 rounded-lg transition-colors font-thin px-4 text-[14px]"
        >
          <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px"><path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/></svg>
          Apple
        </button>
        <button
          type="button"
          className="w-full h-12 flex items-center justify-center gap-2 bg-[#262626] hover:bg-opacity-80 text-gray-300 rounded-lg transition-colors font-thin px-4 text-[14px]"
        >
          <svg width="24px" height="24px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
          Google
        </button>
      </div>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 bg-[#121212] text-gray-500 text-xs">OR</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-base font-light mb-2 text-[16px]">
            Email
          </label>
          <input
            type="email"
            placeholder="name@host.com"
            className="w-full h-10 bg-[#262626] border-none rounded-lg px-4 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 text-[15px] opacity-90 "
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-gray-300 text-base font-light mb-2 text-[16px]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full h-10 bg-[#262626] border-none rounded-lg px-4 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 text-[15px] opacity-90"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value, // Corrected to "name"
              }))
            }
            />
            
        </div>
        <div>
          <label className="block text-gray-300 text-base font-light mb-2 text-[16px]">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 bg-[#262626] border-none rounded-lg px-4 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 text-[15px] opacity-90" 
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          />
          <div className="text-left">
              <Link href="#" className="text-[#6B66FF]  hover:text-gray-300 hover:text-opacity-80 font-light transition-colors text-[12px] pt-2">
                Forgot your password?
              </Link>
            </div>
        </div>
  
    </div>

      <button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity font-light flex items-center justify-center text-[16px]"
      >
        Sign in
      </button>

      <div className="text-center">
        <span className="text-gray-400 text-sm font-light text-[14px]">Need an account? </span>
        <Link href="/signup" className="text-[#6B66FF] hover:text-gray-300 text-sm font-light text-[14px]">
          Sign up
        </Link>
      </div>
    </div>
  </div>


       {/* Social Icons */}
       <div className="relative z-10 mt-20">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#" className="w-10 h-10 flex items-center justify-center">
            <img
              src="discord.png"
              alt="Discord"
              className="w-full h-full"
            />
          </Link>
          <Link href="#" className="w-10 h-10 flex items-center justify-center">
            <img
              src="instagram.png"
              alt="Instagram"
              className="w-full h-full"
            />
          </Link>
          <Link href="#" className="w-10 h-10 flex items-center justify-center">
            <img
              src="Twitter.png"
              alt="Twitter"
              className="w-full h-full"
            />
          </Link>
          <Link href="#" className="w-10 h-10 flex items-center justify-center">
            <img
              src="Youtube.png"
              alt="Youtube"
              className="w-full h-full"
            />
          </Link>
        </div>
      </div>

        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gray-400">
            Terms of Service
          </Link>
        </div>
      </div>

  )
}

