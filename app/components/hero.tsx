"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-[#090909] text-white">
            <Navbar />

            {/* ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-150 w-150 rounded-full bg-white/3 blur-[120px]" />
            </div>

            {/* background word */}
            <h1 className="absolute inset-0 flex items-center justify-center text-[14rem] font-light tracking-[0.25em] text-white/3 select-none">
                OBSIDIAN
            </h1>

            {/* IMAGE */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                    initial={{
                        y: -260,
                        opacity: 0,
                        scale: 0.95,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 2.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* FLOAT (only after landing) */}
                    <motion.div
                        animate={{
                            y: [5, -10, 5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2.3,
                        }}
                    >
                        <Image
                            src="/obsidian.png"
                            alt="Obsidian"
                            width={620}
                            height={620}
                            priority
                            className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* LEFT TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 2.5,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-16 bottom-20 w-65"
            >
                <h2 className="text-xl tracking-[0.25em] uppercase text-white/80">
                    Obsidian
                </h2>

                {/* LINE REVEAL (FIXED + PREMIUM VERSION) */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 2.3,
                        duration: 1.2,
                    }}
                    style={{ transformOrigin: "left" }}
                    className="h-px bg-white/15 origin-left mt-3"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2.9,
                        duration: 1,
                    }}
                    className="mt-4 text-sm leading-relaxed text-white/50"
                >
                    Crafted for those who seek more than a residence — spaces
                    defined by elegance and intention.
                </motion.p>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 2.5,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute right-16 bottom-20 w-65 text-right"
            >
                <h2 className="text-xl tracking-[0.25em] uppercase text-white/80">
                    Living
                </h2>

                {/* LINE REVEAL */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 2.3,
                        duration: 1.2,
                    }}
                    style={{ transformOrigin: "right" }}
                    className="h-px bg-white/15 origin-left mt-3"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2.9,
                        duration: 1,
                    }}
                    className="mt-4 text-sm leading-relaxed text-white/50"
                >
                    Where timeless architecture meets modern comfort,
                    creating homes that inspire every day.
                </motion.p>
            </motion.div>
        </section>
    );
}