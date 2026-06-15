"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const properties = [
    {
        id: 1,
        title: "Skyline Residence",
        type: "Apartment",
        status: "Rent",
        price: "$2,800 / month",
        image: "/prop1.jpg",
    },
    {
        id: 2,
        title: "Obsidian Heights",
        type: "Flat",
        status: "Buy",
        price: "$1.2M",
        image: "/prop2.jpg",
    },
    {
        id: 3,
        title: "Minimal Loft",
        type: "Apartment",
        status: "Rent",
        price: "$1,600 / month",
        image: "/prop3.jpg",
    },
    {
        id: 4,
        title: "City Glass House",
        type: "Flat",
        status: "Buy",
        price: "$980K",
        image: "/prop1.jpg",
    },
    {
        id: 5,
        title: "Zen Heights",
        type: "Apartment",
        status: "Rent",
        price: "$2,200 / month",
        image: "/prop2.jpg",
    },
];

export default function BuyPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [page, setPage] = useState(1);

    const perPage = 3;

    const filtered = useMemo(() => {
        return properties.filter((item) => {
            const matchSearch =
                item.title.toLowerCase().includes(search.toLowerCase());

            const matchFilter =
                filter === "All"
                    ? true
                    : filter === "Apartment" || filter === "Flat"
                        ? item.type === filter
                        : item.status === filter;

            return matchSearch && matchFilter;
        });
    }, [search, filter]);

    const totalPages = Math.ceil(filtered.length / perPage);

    const paginated = filtered.slice(
        (page - 1) * perPage,
        page * perPage
    );

    return (
        <>
            <Navbar />
            <section className="relative min-h-screen bg-[#090909] text-white py-28 overflow-hidden">

                {/* glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-[500px] w-[500px] bg-white/[0.02] blur-[140px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                    {/* HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-10"
                    >
                        <p className="uppercase tracking-[0.35em] text-white/40 text-xs">
                            Properties
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light">
                            Discover your next space.
                        </h1>
                    </motion.div>

                    {/* SEARCH + FILTERS */}
                    <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">

                        {/* search */}
                        <input
                            type="text"
                            placeholder="Search properties..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="
                            w-full md:w-1/3
                            bg-transparent
                            border-b
                            border-white/15
                            py-3
                            text-white
                            placeholder:text-white/30
                            outline-none
                            focus:border-white/40
                        "
                        />

                        {/* filters */}
                        <div className="flex flex-wrap gap-3">

                            {["All", "Rent", "Buy", "Apartment", "Flat"].map(
                                (f) => (
                                    <button
                                        key={f}
                                        onClick={() => {
                                            setFilter(f);
                                            setPage(1);
                                        }}
                                        className={`
                                        px-5 py-2 text-xs uppercase tracking-[0.2em]
                                        border transition-all duration-300
                                        ${filter === f
                                                ? "bg-white text-black border-white"
                                                : "border-white/15 text-white/60 hover:text-white hover:border-white/40"
                                            }
                                    `}
                                    >
                                        {f}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {paginated.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.1,
                                }}
                                whileHover={{ y: -6 }}
                                className="
                                group
                                border
                                border-white/10
                                bg-white/[0.01]
                                overflow-hidden
                            "
                            >
                                <div className="relative h-[300px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="
                                        object-cover
                                        opacity-80
                                        group-hover:scale-110
                                        transition-transform
                                        duration-700
                                    "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>

                                <div className="p-6 space-y-2">
                                    <h3 className="text-lg font-light">
                                        {item.title}
                                    </h3>

                                    <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
                                        {item.type} · {item.status}
                                    </p>

                                    <div className="pt-4 flex justify-between items-center">
                                        <span className="text-white/70 text-sm">
                                            {item.price}
                                        </span>

                                        <span className="text-white/30 text-xs uppercase tracking-[0.25em] group-hover:text-white transition">
                                            View
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="mt-16 flex justify-center gap-3">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i + 1)}
                                className={`
                                w-10 h-10 text-xs border transition
                                ${page === i + 1
                                        ? "bg-white text-black border-white"
                                        : "border-white/15 text-white/60 hover:text-white"
                                    }
                            `}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}