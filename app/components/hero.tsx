import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="h-screen">
            <Navbar />
            <section className="flex justify-center">
                <div className="min-w-50 priColor self-start mt-[10vh]">
                    <h2 className="text-3xl">Obsidian</h2>
                    <motion.div
                        animate={{
                            width: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="relative left-0 top-0 h-[0.65px] bg-[#f1f1f1]"
                    >
                    </motion.div>
                </div>
                <motion.div
                    animate={{
                        y: [5, -5, 5], // up and down float
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="w-fit"
                >
                    <Image
                        width={600}
                        height={600}
                        src="/obsidian.png"
                        alt="Obsidian Image"
                        priority
                    />
                </motion.div>
                <div className="min-w-50 priColor self-end mb-[35vh]">
                    <h2 className="text-3xl">Living</h2>
                    <motion.div
                        animate={{
                            width: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="relative left-0 top-0 h-[0.65px] bg-[#f1f1f1]"
                    >
                    </motion.div>
                </div>
            </section>
        </section>
    )
}
