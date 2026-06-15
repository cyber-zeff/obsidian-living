"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/Buy" },
    { name: "About", href: "/#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{
                opacity: 0,
                y: -25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                absolute
                top-0
                left-0
                right-0
                z-50
                px-6
                md:px-12
                py-6
                md:py-8
                text-white
            "
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                    }}
                >
                    <Image
                        width={42}
                        height={42}
                        src="/obsidian.png"
                        alt="Obsidian"
                        priority
                        className="object-contain"
                    />
                </motion.div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-12">
                    {navLinks.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{
                                opacity: 0,
                                y: -10,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.2 + index * 0.1,
                                duration: 0.8,
                            }}
                        >
                            <a
                                href={item.href}
                                className="
                                    group
                                    relative
                                    uppercase
                                    tracking-[0.25em]
                                    text-[11px]
                                    font-medium
                                    text-white/55
                                    transition-colors
                                    duration-500
                                    hover:text-white
                                "
                            >
                                {item.name}

                                <span
                                    className="
                                        absolute
                                        left-0
                                        -bottom-2
                                        h-px
                                        w-0
                                        bg-white
                                        transition-all
                                        duration-500
                                        ease-out
                                        group-hover:w-full
                                    "
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Contact */}
                <motion.a
                    href="/#contact"
                    initial={{
                        opacity: 0,
                        y: -10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.8,
                    }}
                    whileHover={{
                        scale: 1.02,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    className="
                        hidden md:block
                        relative
                        overflow-hidden
                        border
                        border-white/15
                        px-6
                        py-3
                        uppercase
                        tracking-[0.25em]
                        text-[11px]
                        font-medium
                        text-white
                        backdrop-blur-md
                        bg-white/2
                        transition-all
                        duration-500
                        hover:bg-white
                        hover:text-black
                        hover:border-white
                    "
                >
                    Contact
                </motion.a>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                        md:hidden
                        flex
                        flex-col
                        gap-1.5
                        z-50
                    "
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                            isOpen
                                ? "rotate-45 translate-y-2"
                                : ""
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                            isOpen
                                ? "-rotate-45 -translate-y-2"
                                : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="
                            md:hidden
                            mt-6
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/80
                            backdrop-blur-xl
                            p-6
                        "
                    >
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() =>
                                            setIsOpen(false)
                                        }
                                        className="
                                            uppercase
                                            tracking-[0.25em]
                                            text-xs
                                            text-white/70
                                            hover:text-white
                                            transition-colors
                                        "
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            href="/#contact"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.3,
                            }}
                            className="
                                mt-8
                                w-full
                                border
                                border-white/15
                                py-3
                                uppercase
                                tracking-[0.25em]
                                text-xs
                                font-medium
                                text-white
                                hover:bg-white
                                hover:text-black
                                transition-all
                                duration-300
                            "
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}