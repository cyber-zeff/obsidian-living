"use client"

import Hero from "./components/Hero";
// flow: nav -: hero -: footer -: main (form, properties, about, sponsors/partners, contact) -: GSAP animations -: responsive design
// theme: black (111112), white (f1f1f1), and purple (obsidian wala color)

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
