"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative bg-[#090909] text-white overflow-hidden py-28 sm:py-36 md:py-52">

            {/* BACKGROUND WORD (slow float, not scroll math) */}
            <motion.h2
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[4rem]
                    sm:text-[7rem]
                    md:text-[10rem]
                    lg:text-[14rem]
                    font-light
                    tracking-[0.2em]
                    text-white/[0.03]
                    select-none
                    pointer-events-none
                "
            >
                ELEGANCE
            </motion.h2>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

                {/* ABOUT LABEL */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.8 }}
                    className="uppercase tracking-[0.35em] text-white/40 text-xs"
                >
                    About
                </motion.p>

                {/* MAIN HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="
                        mt-6
                        text-3xl
                        sm:text-4xl
                        md:text-6xl
                        lg:text-7xl
                        font-light
                        leading-[1.1]
                        max-w-4xl
                    "
                >
                    Spaces shaped by light,
                    proportion, and quiet
                    architectural intention.
                </motion.h2>

                {/* LINE */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    style={{ transformOrigin: "top" }}
                    className="mt-14 h-28 w-px bg-white/15"
                />

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="mt-10 max-w-xl text-white/50 leading-relaxed text-sm sm:text-base"
                >
                    Obsidian is a study in restraint — where material,
                    space, and light are composed to create homes that
                    feel timeless rather than designed.
                </motion.p>

                {/* STATS (STAGGER = KEY DIFFERENCE) */}
                <div className="mt-20 grid grid-cols-3 gap-6 md:gap-16 text-center md:text-left">

                    {[
                        ["12+", "Projects"],
                        ["50+", "Residences"],
                        ["8", "Awards"],
                    ].map(([num, label], i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{
                                duration: 0.9,
                                delay: i * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="text-2xl sm:text-4xl font-light">
                                {num}
                            </div>
                            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/40">
                                {label}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}