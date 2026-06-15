"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen bg-[#090909] text-white overflow-hidden flex items-center">
            
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-125 w-125 rounded-full bg-white/2 blur-[140px]" />
            </div>

            {/* Background word */}
            <motion.h1
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
                    text-white/3
                    select-none
                    pointer-events-none
                "
            >
                CONNECT
            </motion.h1>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="uppercase tracking-[0.35em] text-white/40 text-xs">
                        Contact
                    </p>

                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-light leading-[1.1] max-w-3xl">
                        Let’s build something
                        timeless together.
                    </h2>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                    className="mt-16 max-w-2xl space-y-8"
                >
                    {/* Name */}
                    <motion.input
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 },
                        }}
                        type="text"
                        placeholder="Your Name"
                        className="
                            w-full
                            bg-transparent
                            border-b
                            border-white/15
                            py-4
                            text-white
                            placeholder:text-white/30
                            outline-none
                            focus:border-white/40
                            transition
                        "
                    />

                    {/* Email */}
                    <motion.input
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 },
                        }}
                        type="email"
                        placeholder="Email Address"
                        className="
                            w-full
                            bg-transparent
                            border-b
                            border-white/15
                            py-4
                            text-white
                            placeholder:text-white/30
                            outline-none
                            focus:border-white/40
                            transition
                        "
                    />

                    {/* Message */}
                    <motion.textarea
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0 },
                        }}
                        rows={4}
                        placeholder="Tell us about your vision..."
                        className="
                            w-full
                            bg-transparent
                            border-b
                            border-white/15
                            py-4
                            text-white
                            placeholder:text-white/30
                            outline-none
                            focus:border-white/40
                            transition
                            resize-none
                        "
                    />

                    {/* Button */}
                    <motion.button
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="
                            mt-10
                            border
                            border-white/15
                            px-10
                            py-4
                            uppercase
                            tracking-[0.25em]
                            text-[11px]
                            font-medium
                            text-white
                            backdrop-blur-md
                            bg-white/0
                            hover:bg-white
                            hover:text-black
                            hover:border-white
                            transition-all
                            duration-500
                        "
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Footer mini info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-20 flex flex-col md:flex-row justify-between gap-6 text-white/30 text-xs tracking-[0.25em]"
                >
                    <span>karachi · pakistan</span>
                    <span>obsidian studios</span>
                    <span>© 2026</span>
                </motion.div>

            </div>
        </section>
    );
}