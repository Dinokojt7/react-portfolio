"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname(); // Get current path

  // Check if we're on home page or project page
  const isHomePage = pathname === "/";

  // Links change based on page
  const navItems = isHomePage
    ? [
        { name: "home", href: "#home", index: "01" },
        { name: "expertise", href: "#expertise", index: "02" },
        { name: "work", href: "#work", index: "03" },
        { name: "experience", href: "#experience", index: "04" },
        { name: "contact", href: "#contact", index: "05" },
      ]
    : [
        { name: "home", href: "/#home", index: "01" },
        { name: "expertise", href: "/#expertise", index: "02" },
        { name: "work", href: "/#work", index: "03" },
        { name: "experience", href: "/#experience", index: "04" },
        { name: "contact", href: "/#contact", index: "05" },
      ];

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

  // Nav Item Component for Desktop
  const NavItemDesktop = ({ item }) => (
    <div
      className="group"
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <Link
        href={item.href}
        className="flex items-center space-x-2 font-mono transition-all duration-300"
        onClick={() => isOpen && setIsOpen(false)}
      >
        <span
          className={`font-['Fira_Code', monospace] text-lg mt-2.5 font-semibold transition-colors duration-300 lowercase ${
            hoveredItem === null
              ? "text-white"
              : hoveredItem === item.name
                ? "text-white"
                : "text-white/70"
          }`}
        >
          //
        </span>
        <div className="flex flex-col items-end">
          <span
            className={`text-xs font-['Fira_Code',monospace] font-black tracking-wider transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-white"
                : hoveredItem === item.name
                  ? "text-white"
                  : "text-white/70"
            }`}
          >
            {item.index}
          </span>
          <span
            className={`text-lg font-black font-['Fira_Code',monospace] tracking-tighter transition-colors duration-300 lowercase ${
              hoveredItem === null
                ? "text-white"
                : hoveredItem === item.name
                  ? "text-white"
                  : "text-white/70"
            }`}
          >
            {item.name}
          </span>
        </div>
      </Link>
    </div>
  );

  return (
    <motion.nav
      key="scrolled-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="top-0 left-0 right-0 z-50  backdrop-blur-lg"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-1 pb-2">
        {/* Mobile menu button on left, logo in center */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
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

          {/* Empty div for spacing on right side */}
          <div className="w-10"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-start justify-between">
          {/* Logo/Name Section with link to home */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-8"
          >
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

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItemDesktop key={item.name} item={item} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          className="md:hidden overflow-hidden bg-[#0a0a1a]/95 backdrop-blur-lg rounded-lg mt-4 border border-[#48bfe3]/20 shadow-2xl"
        >
          <div className="py-6 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between p-3 hover:bg-[#48bfe3]/10 rounded-lg transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-4">
                  <Code2 size={16} className="text-[#48bfe3]" />
                  <div className="flex flex-col items-end font-mono">
                    <span className="text-xs text-gray-400">{item.index}</span>
                    <span className="text-gray-200 lowercase tracking-wider mt-1">
                      {item.name}
                    </span>
                  </div>
                </div>
                <span className="text-[#48bfe3] font-mono">//</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
