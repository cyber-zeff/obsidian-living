"use client"

import About from "./components/About";
import PropertiesPreview from "./components/Buy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertiesPreview />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
