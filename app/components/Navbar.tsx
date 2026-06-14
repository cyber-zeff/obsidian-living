
export default function Navbar() {
    return (
        <nav className="py-5 flex items-center justify-around priColor">
            <div className="hFont text-2xl">Obsidian Living</div>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <a
                            href="/"
                            className="group relative overflow-hidden px-2 py-1 inline-flex items-center justify-center before:absolute before:inset-0
                            before:bg-[#8b5ce9] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
                            <span className="relative z-10 h-[1.5em] overflow-hidden">
                                {/* Current text */}
                                <span
                                    className="block transition-transform duration-300 group-hover:translate-y-full">
                                    Home
                                </span>

                                {/* Incoming text */}
                                <span
                                    className="absolute left-0 top-0 block -translate-y-full transition-transform duration-300 group-hover:translate-y-0" >
                                    Home
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="group relative overflow-hidden px-2 py-1 inline-flex items-center justify-center before:absolute before:inset-0
                            before:bg-[#8b5ce9] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
                            <span className="relative z-10 h-[1.5em] overflow-hidden">
                                {/* Current text */}
                                <span
                                    className="block transition-transform duration-300 group-hover:translate-y-full">
                                    Buy
                                </span>

                                {/* Incoming text */}
                                <span
                                    className="absolute left-0 top-0 block -translate-y-full transition-transform duration-300 group-hover:translate-y-0" >
                                    Buy
                                </span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="group relative overflow-hidden px-2 py-1 inline-flex items-center justify-center before:absolute before:inset-0
                            before:bg-[#8b5ce9] before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
                            <span className="relative z-10 h-[1.5em] overflow-hidden">
                                {/* Current text */}
                                <span
                                    className="block transition-transform duration-300 group-hover:translate-y-full">
                                    About
                                </span>

                                {/* Incoming text */}
                                <span
                                    className="absolute left-0 top-0 block -translate-y-full transition-transform duration-300 group-hover:translate-y-0" >
                                    About
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="hFont bg-[#8b5ce9] text-white px-4 py-2 rounded-md hover:bg-[#6e41c9]">Contact</button>
            </div>
        </nav>
    )
}
