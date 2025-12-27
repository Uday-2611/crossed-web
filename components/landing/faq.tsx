"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
    {
        question: "How do matches work?",
        answer: "Crossed uses privacy-preserving location data to find people who frequently visit the same places as you. When you have a significant overlap with someone, and your preferences align, you get crossed!",
    },
    {
        question: "Do you track real-time location?",
        answer: "No. We prioritize your privacy. We use background location updates to build a history of visited zones, but we do not broadcast your real-time location to other users or track you live.",
    },
    {
        question: "Is my data private?",
        answer: "Absolutely. Your location history is stored securely and is only used to generate matches. We do not sell your location data to third parties.",
    },
    {
        question: "When is the app launching?",
        answer: "We are currently in beta testing. You can follow our progress on GitHub or sign up for updates to be the first to know when we launch publicly.",
    },
]

export function FAQ() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-3xl px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-4 text-3xl font-medium tracking-tight text-black sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-neutral-500">
                        Everything you need to know about Crossed.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-medium text-black hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-500">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
