"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
    {
        name: "Alex",
        role: "Designer",
        content: "Crossed made meeting people feel natural again. No pressure, just organic connections in places I already love.",
        avatar: "/avatars/alex.jpg",
        initials: "AL",
    },
    {
        name: "Jordan",
        role: "Developer",
        content: "I found my co-founder at a coffee shop we both frequented. Crossed helped us break the ice.",
        avatar: "/avatars/jordan.jpg",
        initials: "JO",
    },
    {
        name: "Taylor",
        role: "Photographer",
        content: "Finally, an app that respects my privacy and doesn't drain my battery with constant tracking.",
        avatar: "/avatars/taylor.jpg",
        initials: "TA",
    },
]

export function Testimonials() {
    return (
        <section className="py-24">
            <div className="mx-auto px-6 md:px-20">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="mb-4 inline-block rounded-full bg-neutral-200 px-4 py-2 text-sm font-medium text-black">
                        Community Stories
                    </span>
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Loved by locals everywhere.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full border-none shadow-none bg-transparent rounded-none">
                                <CardContent className="flex h-full flex-col p-8">
                                    <div className="mb-4 flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 fill-black text-black" />
                                        ))}
                                    </div>
                                    <p className="mb-6 flex-1 text-lg italic text-neutral-500">
                                        &ldquo;{item.content}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={item.avatar} alt={item.name} />
                                            <AvatarFallback className="bg-neutral-200 text-black">{item.initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-black">{item.name}</p>
                                            <p className="text-sm text-neutral-500">{item.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
