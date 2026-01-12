"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/icon-light.png"
                            alt="Crossed Logo"
                            width={32}
                            height={32}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold tracking-tight text-black">Crossed</span>
                    </div>

                    <div className="flex gap-6 text-sm font-medium text-neutral-500">
                        <a href="#" className="hover:text-black transition-colors">Privacy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms</a>
                        <a href="#" className="hover:text-black transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex gap-4">
                            <a href="https://github.com/Uday-2611" target="_blank" rel="noopener noreferrer" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/udayagarwal2611/" target="_blank" rel="noopener noreferrer" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:udayagarwal234@gmail.com" className=" p-2 text-neutral-500 transition-colors hover:text-black">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Crossed. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
