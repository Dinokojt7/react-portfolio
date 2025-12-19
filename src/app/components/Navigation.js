"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import

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
    <div
      className="relative z-40 pt-4"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="mx-12 mb-4">
        <div className="flex items-start justify-between">
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
              <motion.span className="font-['Fira_Code',monospace] text-3xl font-black text-[#0e9594] transition-colors duration-300 cursor-pointer">
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
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
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
                    <span className="text-xs text-gray-400">{item.index}</span>
                    <span className="text-gray-200 lowercase tracking-wider mt-1">
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
              className="w-full mt-6 py-3 bg-linear-to-r from-[#38a3a5] to-white/70 text-white font-mono tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#38a3a5]/20 transition-all duration-300"
            >
              compile contact
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;
