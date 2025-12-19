"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import Link from "next/link";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowNav(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "home", href: "#home", index: "01" },
    { name: "expertise", href: "#expertise", index: "02" },
    { name: "work", href: "#work", index: "03" },
    { name: "experience", href: "#experience", index: "04" },
    { name: "contact", href: "#contact", index: "05" },
  ];

  const NavItem = ({ item }) => (
    <div
      className="group"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Link
        href={item.href}
        className="flex items-center space-x-2 font-mono transition-all duration-300"
      >
        <span
          className={`font-['Fira_Code', monospace] text-lg mt-2.5 font-semibold transition-colors duration-300 lowercase ${
            hoveredItem === null
              ? "text-[#13adad]"
              : hoveredItem === item.name
                ? "text-[#13adad]"
                : "text-[#0e9594]"
          }`}
        >
          //
        </span>
        <div className="flex flex-col items-end">
          <span
            className={`text-xs font-['Fira_Code',monospace] font-semibold tracking-wider transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-[#13adad]"
                : hoveredItem === item.name
                  ? "text-[#13adad]"
                  : "text-[#0e9594]"
            }`}
          >
            {item.index}
          </span>
          <span
            className={`text-lg font-semibold font-['Fira_Code',monospace] tracking-tighter transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-[#13adad]"
                : hoveredItem === item.name
                  ? "text-[#13adad]"
                  : "text-[#0e9594]"
            }`}
          >
            {item.name}
          </span>
        </div>
      </Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Top part with image background */}
      <div className="relative">
        {/* Hero background image for entire top section */}
        <div
          className="relative min-h-screen"
          style={{
            backgroundImage: "url('/images/hero-cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Gradient overlay at bottom of hero section for blending */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#1b1b1e] to-transparent"></div>

          {/* Navigation and Hero content */}
          <div className="relative z-40">
            {/* Initial Navigation (Top Left) */}
            <Navigation isScrolled={false} />

            {/* Scroll-triggered Navigation (Centered) */}
            <AnimatePresence>
              {showNav && (
                <motion.nav
                  key="scrolled-nav"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1e]/60 backdrop-blur-lg"
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="max-w-7xl mx-auto px-10 pt-2 pb-4">
                    <div className="flex justify-center items-center">
                      <div className="flex items-center space-x-12 font-mono">
                        {navItems.map((item) => (
                          <NavItem key={item.name} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>

            {/* Hero Section with ref */}
            <div ref={heroRef}>
              <Hero />
            </div>
          </div>
        </div>
      </div>
      <Expertise />
      <Work />
      <Experience />
      <Footer />
    </motion.div>
  );
}
