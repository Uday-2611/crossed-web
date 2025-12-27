"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 md:pb-24 bg-[#ffffff]">
      <div className="flex justify-center pt-8">
        <span className="text-3xl font-bold tracking-tight text-black">Crossed</span>
      </div>

      <div className="container mx-auto flex flex-col gap-12 lg:flex-col lg:items-center pt-28">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center gap-8 text-center lg:text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-semibold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-6xl leading-14">
              Meet someone special where <br className="hidden md:inline" /> you already love to be.
            </h1>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://github.com/Uday-2611/crossed.git" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-foreground text-primary-foreground hover:bg-foreground flex justify-center items-center sm:w-auto">
                View on GitHub
                <ArrowRight />
              </Button>
            </a>
            <Button size="lg" className="w-full rounded-full bg-neutral-200 text-black hover:bg-gray-200 sm:w-auto">
              Download coming soon
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Mockup Placeholder */}
        <div className="relative flex-1">
          <motion.div
            className="mx-auto w-full overflow-hidden rounded-lg border-none shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[90vw] md:w-[70vw] h-[50vh] md:h-[70vh]">
              <Image
                src="/images/hero.jpg"
                alt="App Screenshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
