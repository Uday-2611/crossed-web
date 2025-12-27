"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-black/20" />
                        <span className="text-xl font-bold tracking-tight text-black">Crossed</span>
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-neutral-500">
                        <a href="#" className="hover:text-black transition-colors">Privacy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms</a>
                        <a href="#" className="hover:text-black transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Crossed. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
