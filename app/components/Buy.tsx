"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
    {
        title: "Skyline Residence",
        type: "Apartment · Rent",
        price: "$2,800 / month",
        image: "/prop1.jpg",
    },
    {
        title: "Obsidian Heights",
        type: "Luxury Apartment · Sale",
        price: "$1.2M",
        image: "/prop2.jpg",
    },
    {
        title: "Minimal Loft",
        type: "Studio · Rent",
        price: "$1,600 / month",
        image: "/prop3.jpg",
    },
];

export default function PropertiesPreview() {
    return (
        <section className="relative bg-[#090909] text-white py-28 md:py-40 overflow-hidden">

            {/* subtle glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[500px] w-[500px] bg-white/[0.02] blur-[140px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row md:justify-between md:items-end gap-6"
                >
                    <div>
                        <p className="uppercase tracking-[0.35em] text-white/40 text-xs">
                            Properties
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light leading-tight max-w-2xl">
                            Curated spaces for
                            modern living.
                        </h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="
                            border
                            border-white/15
                            px-8
                            py-4
                            uppercase
                            tracking-[0.25em]
                            text-[11px]
                            font-medium
                            hover:bg-white
                            hover:text-black
                            transition-all
                            duration-500
                        "
                    >
                        View More
                    </motion.button>
                </motion.div>

                {/* GRID */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {properties.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 0.9,
                                delay: i * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{ y: -8 }}
                            className="
                                group
                                relative
                                overflow-hidden
                                border
                                border-white/10
                                bg-white/[0.01]
                            "
                        >
                            {/* IMAGE */}
                            <div className="relative h-[320px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-110
                                        opacity-80
                                    "
                                />

                                {/* overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-light tracking-wide">
                                    {item.title}
                                </h3>

                                <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
                                    {item.type}
                                </p>

                                <div className="flex justify-between items-center pt-4">
                                    <span className="text-white/70 text-sm">
                                        {item.price}
                                    </span>

                                    <span className="text-white/30 text-xs uppercase tracking-[0.25em] group-hover:text-white transition">
                                        Explore
                                    </span>
                                </div>
                            </div>

                            {/* hover border glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}