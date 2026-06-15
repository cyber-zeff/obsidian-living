"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                bg-[#090909]
                border-t
                border-white/5
                text-white
            "
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="
                        h-100
                        w-100
                        rounded-full
                        bg-white/2
                        blur-[120px]
                    "
                />
            </div>

            <div
                className="
                    relative
                    z-10
                    max-w-7xl
                    mx-auto
                    px-6
                    md:px-12
                    py-24
                    md:py-32
                "
            >
                {/* Main Footer Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.h2
                        whileHover={{
                            color: "#ffffff",
                        }}
                        className="
                            text-[3rem]
                            sm:text-[5rem]
                            md:text-[7rem]
                            lg:text-[9rem]
                            font-light
                            tracking-[0.18em]
                            text-white/10
                            transition-colors
                            duration-700
                            select-none
                        "
                    >
                        OBSIDIAN
                    </motion.h2>

                    <div className="mt-6 h-px w-full bg-white/10" />

                    <div
                        className="
                            mt-10
                            flex
                            flex-col
                            md:flex-row
                            md:items-end
                            md:justify-between
                            gap-10
                        "
                    >
                        <p
                            className="
                                max-w-md
                                text-sm
                                md:text-base
                                leading-relaxed
                                text-white/45
                            "
                        >
                            Crafted for those who seek more than a residence —
                            spaces defined by elegance, intention, and timeless
                            architecture.
                        </p>

                        <button
                            className="
                                border
                                border-white/15
                                px-8
                                py-4
                                uppercase
                                tracking-[0.25em]
                                text-[11px]
                                font-medium
                                backdrop-blur-md
                                transition-all
                                duration-500
                                hover:bg-white
                                hover:text-black
                                hover:border-white
                            "
                        >
                            Contact
                        </button>
                    </div>
                </motion.div>

                {/* Bottom Row */}
                <div
                    className="
                        mt-24
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        gap-6
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                    "
                >
                    <span>© 2026 Obsidian</span>

                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="hover:text-white/60 transition-colors"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="hover:text-white/60 transition-colors"
                        >
                            Behance
                        </a>

                        <a
                            href="#"
                            className="hover:text-white/60 transition-colors"
                        >
                            Dribbble
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}