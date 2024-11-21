

import HeroSection from "./components/Hero";
import React from "react";
import Navbar from "./components/Nav";
import { AboutSection } from "./components/AboutSection";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Navbar Component */}
      <Navbar />

      <div className="container mx-auto px-12 py-4">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        <section id="AboutSection">
          <AboutSection />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
