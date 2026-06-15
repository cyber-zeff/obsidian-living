"use client"

import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// flow: nav -: hero -: footer -: main (form, properties, about, sponsors/partners, contact) -: GSAP animations -: responsive design
// theme: black (111112), white (f1f1f1), and purple (obsidian wala color)

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
