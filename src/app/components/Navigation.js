"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrolledNav, setShowScrolledNav] = useState(false);

  const navItems = [
    { name: "home", href: "#home", index: "01" },
    { name: "expertise", href: "#expertise", index: "02" },
    { name: "work", href: "#work", index: "03" },
    { name: "experience", href: "#experience", index: "04" },
    { name: "contact", href: "#contact", index: "05" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      // Show scrolled nav when hero is completely out of view
      setShowScrolledNav(heroRect.bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Initial Navigation - Scrolls with page (NOT fixed) */}
      <div className="relative z-40">
        <div className="mx-12 mb-4">
          <div className="flex items-start justify-between">
            {/* Logo/Name Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-8"
            >
              {/* Name with dot and underscore */}
              <div className="flex items-baseline space-x-1">
                <motion.span className="font-['Fira_Code',monospace] text-3xl font-black text-[#0e9594] hover:text-[#127475] transition-colors duration-300 cursor-pointer">
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
              </div>

              {/* Desktop Navigation Items - Inline with logo */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="group"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 font-mono hover:text-[#38a3a5] transition-colors duration-300 text-gray-300"
                    >
                      {/* // comment inline */}
                      <span className="text-white font-['Fira_Code', monospace] text-lg mt-2.5 font-semibold group-hover:cursor-pointer  ">
                        //
                      </span>
                      {/* Column layout with index on top right */}
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-['Fira_Code',monospace] font-black tracking-wider group-hover:cursor-pointer">
                          {item.index}
                        </span>
                        <span className="text-lg font-black text-white font-['Fira_Code',monospace] tracking-tighter">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={
              isOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            className="md:hidden overflow-hidden bg-[#0a0a1a]/95 backdrop-blur-lg rounded-lg mt-4 border border-[#38a3a5]/20 shadow-2xl"
          >
            <div className="py-6 px-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between p-3 hover:bg-[#38a3a5]/10 rounded-lg transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-4">
                    <Code2 size={16} className="text-[#38a3a5]" />
                    <div className="flex flex-col items-end font-mono">
                      <span className="text-xs text-gray-400">
                        {item.index}
                      </span>
                      <span className="text-gray-200 uppercase tracking-wider mt-1">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#38a3a5] font-mono">//</span>
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 bg-linear-to-r from-[#38a3a5] to-purple-600 text-white font-mono uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#38a3a5]/20 transition-all duration-300"
              >
                compile contact
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolled Navigation (after hero) - Fixed at top */}
      <AnimatePresence>
        {showScrolledNav && (
          <motion.nav
            key="scrolled-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/90 backdrop-blur-lg border-b border-[#38a3a5]/20 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-12 py-4">
              <div className="flex justify-center items-center">
                <div className="flex items-center space-x-12">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center space-x-3 text-[#38a3a5] hover:text-white transition-colors duration-300 font-mono"
                    >
                      {/* // comment inline */}
                      <span className="text-[#8b5cf6]/70 font-light">//</span>

                      {/* Column layout with index on top right */}
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-400 font-light tracking-wider">
                          {item.index}
                        </span>
                        <span className="text-sm font-medium uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 mt-1">
                          {item.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
