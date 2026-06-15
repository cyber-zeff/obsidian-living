"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            className="
                relative
                bg-[#090909]
                text-white
                overflow-hidden
                py-40
                md:py-56
            "
        >
            {/* Background Word */}
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.5 }}
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[5rem]
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
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 80,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <p
                        className="
                            uppercase
                            tracking-[0.35em]
                            text-white/40
                            text-xs
                        "
                    >
                        About
                    </p>

                    <h2
                        className="
                            mt-6
                            text-4xl
                            md:text-6xl
                            lg:text-7xl
                            font-light
                            leading-[1.05]
                            max-w-4xl
                        "
                    >
                        Spaces designed around
                        light, proportion,
                        and timeless living.
                    </h2>
                </motion.div>

                {/* Growing Line */}
                <motion.div
                    initial={{
                        scaleY: 0,
                    }}
                    whileInView={{
                        scaleY: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.4,
                    }}
                    style={{
                        transformOrigin: "top",
                    }}
                    className="
                        mt-16
                        h-32
                        w-px
                        bg-white/15
                    "
                />

                {/* Description */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                    className="
                        mt-12
                        max-w-2xl
                        text-white/50
                        leading-relaxed
                        text-base
                        md:text-lg
                    "
                >
                    Obsidian represents a philosophy of refined living.
                    Every residence is crafted with careful attention
                    to material, atmosphere, and architectural clarity,
                    creating environments that remain beautiful for decades.
                </motion.p>

                {/* Stats */}
                <div
                    className="
                        mt-24
                        grid
                        grid-cols-3
                        gap-8
                        md:gap-16
                    "
                >
                    {[
                        ["12+", "Projects"],
                        ["50+", "Residences"],
                        ["8", "Awards"],
                    ].map(([number, label], index) => (
                        <motion.div
                            key={label}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.2 * index,
                            }}
                        >
                            <h3
                                className="
                                    text-3xl
                                    md:text-5xl
                                    font-light
                                "
                            >
                                {number}
                            </h3>

                            <p
                                className="
                                    mt-3
                                    uppercase
                                    tracking-[0.25em]
                                    text-[10px]
                                    text-white/40
                                "
                            >
                                {label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}