"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import Link from "next/link";
import { X } from "lucide-react";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              ? "text-[#48bfe3]"
              : hoveredItem === item.name
                ? "text-[#48bfe3]"
                : "text-[#0e9594]"
          }`}
        >
          //
        </span>
        <div className="flex flex-col items-end">
          <span
            className={`text-xs font-['Fira_Code',monospace] font-semibold tracking-wider transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-[#48bfe3]"
                : hoveredItem === item.name
                  ? "text-[#48bfe3]"
                  : "text-[#0e9594]"
            }`}
          >
            {item.index}
          </span>
          <span
            className={`text-lg font-semibold font-['Fira_Code',monospace] tracking-tighter transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-[#48bfe3]"
                : hoveredItem === item.name
                  ? "text-[#48bfe3]"
                  : "text-[#0e9594]"
            }`}
          >
            {item.name}
          </span>
        </div>
      </Link>
    </div>
  );

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1e]/80 backdrop-blur-lg "
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-1 pb-2">
                    {/* Mobile menu button on left */}
                    <div className="md:hidden flex items-center justify-between">
                      <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                      >
                        {isMobileMenuOpen ? (
                          <X size={28} className="text-[#48bfe3]" />
                        ) : (
                          <div className="space-y-1.5">
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-4 h-0.5 bg-white"></div>
                          </div>
                        )}
                      </button>

                      {/* Logo/Name in center on mobile */}
                      <Link
                        href="/"
                        className="flex items-baseline space-x-1 hover:opacity-90 transition-opacity"
                      >
                        <motion.span className="font-['Fira_Code',monospace] text-3xl font-black text-[#48bfe3] transition-colors duration-300 cursor-pointer">
                          TiisetsoDinoko
                        </motion.span>
                        <div className="flex items-end space-x-1">
                          <motion.span className="text-4xl text-white font-mono">
                            .
                          </motion.span>
                          <motion.span className="text-xl font-black text-purple-600 font-mono">
                            _
                          </motion.span>
                        </div>
                      </Link>

                      {/* Spacer for balance */}
                      <div className="w-10"></div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-center items-center">
                      <div className="flex items-center space-x-8 lg:space-x-12 font-mono">
                        {navItems.map((item) => (
                          <NavItem key={item.name} item={item} />
                        ))}
                      </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                      {isMobileMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="md:hidden mt-4 bg-[#0a0a1a]/95 backdrop-blur-lg rounded-lg border border-[#38a3a5]/20 shadow-2xl"
                        >
                          <div className="py-4 px-3 space-y-2">
                            {navItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-between p-3 hover:bg-[#38a3a5]/10 rounded-lg transition-colors group"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-lg font-['Fira_Code'] text-[#48bfe3]">
                                    //
                                  </span>
                                  <div className="flex flex-col items-end font-mono">
                                    <span className="text-xs text-gray-400">
                                      {item.index}
                                    </span>
                                    <span className="text-gray-200 lowercase tracking-wider mt-1">
                                      {item.name}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-[#38a3a5] font-mono text-sm">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </motion.div>
  );
}
