"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/" },
    { name: "About", href: "/" },
];

export default function Navbar() {
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
                px-12
                py-8
                flex
                items-center
                justify-between
                text-white
            "
        >
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

            {/* Nav Links */}
            <ul className="flex items-center gap-12">
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

            {/* Contact */}
            <motion.button
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
            </motion.button>
        </motion.nav>
    );
}