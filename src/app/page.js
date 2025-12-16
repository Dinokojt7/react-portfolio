"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Expertise from "./components/Expertise";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        // Hide nav while hero is visible, show after hero scrolls past
        setShowNav(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative "
    >
      <div className=" py-4 bg-[radial-gradient(circle_at_center,#35393c,#1a1f37,#0b132b)]">
        {/* Initial Navigation (Top Left) */}
        <Navigation isScrolled={false} />

        {/* Scroll-triggered Navigation (Centered) */}
        <AnimatePresence>{showNav && <ScrolledNavigation />}</AnimatePresence>

        {/* Hero Section with ref */}
        <div ref={heroRef}>
          <Hero />
        </div>
      </div>
      <Expertise />
      <Work />
      <Experience />
      <Footer />
    </motion.div>
  );
}

// Scrolled Navigation Component
const ScrolledNavigation = () => {
  const navItems = [
    { name: "home", href: "#home", index: "01" },
    { name: "expertise", href: "#expertise", index: "02" },
    { name: "work", href: "#work", index: "03" },
    { name: "experience", href: "#experience", index: "04" },
    { name: "contact", href: "#contact", index: "05" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/60 backdrop-blur-lg border-b border-[#38a3a5]/20 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-12 py-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-12 font-mono">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-3 text-[#38a3a5] hover:text-white transition-colors duration-300"
              >
                <span className="text-[#8b5cf6]/70 font-light">//</span>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400 font-light tracking-wider">
                    {item.index}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
