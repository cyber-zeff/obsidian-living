"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#090909]
                text-white
            "
        >
            <Navbar />

            {/* Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="
                        h-87.5
                        w-87.5
                        sm:h-125
                        sm:w-125
                        lg:h-150
                        lg:w-150
                        rounded-full
                        bg-white/3
                        blur-[120px]
                    "
                />
            </div>

            {/* Background Word */}
            <h1
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    font-light
                    tracking-[0.15em]
                    text-white/3
                    select-none
                    text-[4rem]
                    sm:text-[6rem]
                    md:text-[9rem]
                    lg:text-[14rem]
                "
            >
                OBSIDIAN
            </h1>

            {/* Main Image */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
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
                            className="
                                w-65
                                sm:w-87.5
                                md:w-112.5
                                lg:w-155
                                h-auto
                                drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                            "
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Content */}
            {/* DESKTOP / TABLET CONTENT */}
            <div
                className="
        absolute
        bottom-8
        sm:bottom-12
        lg:bottom-20
        left-0
        right-0
        z-20
        px-6
        md:px-12
        lg:px-16
        hidden
        md:block
    "
            >
                <div className="flex justify-between items-end">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 2.5,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-xs"
                    >
                        <h2 className="text-lg md:text-xl tracking-[0.25em] uppercase text-white/80">
                            Obsidian
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                delay: 2.3,
                                duration: 1.2,
                            }}
                            style={{ transformOrigin: "left" }}
                            className="h-px bg-white/15 mt-3"
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
                            Crafted for those who seek more than a residence — spaces of elegance and intention.
                        </motion.p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 2.5,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-xs text-right"
                    >
                        <h2 className="text-lg md:text-xl tracking-[0.25em] uppercase text-white/80">
                            Living
                        </h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                delay: 2.3,
                                duration: 1.2,
                            }}
                            style={{ transformOrigin: "right" }}
                            className="h-px bg-white/15 mt-3"
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
                </div>
            </div>

            {/* MOBILE CONTENT */}
            <>
                {/* TOP LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 2.5,
                        duration: 1,
                    }}
                    className="
            md:hidden
            absolute
            top-28
            left-6
            z-20
        "
                >
                    <h2
                        className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-white/75
            "
                    >
                        Obsidian
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            delay: 2.3,
                            duration: 1.2,
                        }}
                        style={{ transformOrigin: "left" }}
                        className="mt-3 h-px w-20 bg-white/15"
                    />
                </motion.div>

                {/* BOTTOM RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 2.5,
                        duration: 1,
                    }}
                    className="
            md:hidden
            absolute
            bottom-10
            right-6
            z-20
            text-right
        "
                >
                    <h2
                        className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-white/75
            "
                    >
                        Living
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            delay: 2.3,
                            duration: 1.2,
                        }}
                        style={{ transformOrigin: "right" }}
                        className="mt-3 h-px w-20 bg-white/15 ml-auto"
                    />
                </motion.div>
            </>
        </section>
    );
}