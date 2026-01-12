"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plus } from "lucide-react"

const features = [
    {
        title: "Find connections where you actually spend time",
    },
    {
        title: "Your location history stays private and secure",
    },
    {
        title: "Meet people who enjoy the same spots",
    },
    {
        title: "Real conversations with timed and intentional matches",
    },
]

export function Features() {
    return (
        <section className="py-24">
            <div className="mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center w-full md:w-[50vw]">
                        <motion.h2
                            className="mb-4 text-3xl font-medium tracking-tight text-black sm:text-4xl"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Crossed?
                        </motion.h2>
                        <motion.p
                            className="mb-8 text-lg text-neutral-500"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We believe dating apps should enhance your real life, not replace it. Crossed is designed to bring serendipity back to meeting people.
                        </motion.p>

                        <div className="space-y-1">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex justify-start items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="flex h-12 shrink-0 items-center justify-start rounded-xl text-black">
                                        <Plus className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base text-neutral-500">{feature.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative items-center w-full md:w-[50vw] flex justify-center md:justify-end mt-12 md:mt-0">
                        <motion.div
                            className="relative w-full md:w-[80%] h-[50vh] md:h-[80vh] rounded-3xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image
                                src="/images/mock-login.png"
                                alt="Features Screenshot"
                                fill
                                className="object-cover object-[50%_30%]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
