"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
    {
        title: "Save meaningful locations",
        description: "Mark the places you love - coffee shops, parks, libraries, or gyms."
    },
    {
        title: "Find people who share your places",
        description: "Discover others who frequent the same spots. Shared places mean shared interests."
    },
    {
        title: "Chat and connect intentionally",
        description: "Break the ice with context using our clean, minimalist chat experience."
    },
    {
        title: "Turn moments into matches",
        description: "Go from 'crossed paths' to real connections in the real world."
    },
    {
        title: "Stay safe and secure",
        description: "Your location effectively remains private ~ matches happen in the background."
    },
]

export function HowItWorks() {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        className="mb-4 text-3xl font-medium tracking-tight text-black sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        How Crossed Works
                    </motion.h2>
                    <motion.p
                        className="mx-auto max-w-2xl text-lg text-neutral-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        From your favorite coffee shop to the local park, find connections in the places that matter to you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 lg:divide-x divide-neutral-300">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full border-none shadow-none rounded-none text-start">
                                <CardHeader className="flex-col px-6 pt-8 text-start flex items-start h-20">
                                    <CardTitle className="text-xl font-bold text-black">
                                        {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-6 pb-8 flex items-start">
                                    <p className="leading-relaxed text-neutral-600">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
