"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTABanner() {
    return (
        <section className="py-24">
            <div className="mx-auto px-6">
                <motion.div
                    className="relative overflow-hidden rounded-md bg-neutral-100 px-6 py-12 md:px-16 text-center sm:px-12 sm:py-24 flex w-[90vw] md:w-[80vw] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="z-10 mx-auto max-w-2xl flex flex-col md:flex-row gap-8 md:gap-20 items-center">
                        <h2 className="mb-6 text-3xl tracking-tight text-black sm:text-4xl md:text-5xl text-start">
                            Be the first to try Crossed
                        </h2>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="https://github.com/Uday-2611/crossed.git" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="rounded-full bg-black text-white">
                                    View on GitHub
                                    <ArrowRight />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
