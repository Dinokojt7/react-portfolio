"use client";

import { motion } from "framer-motion";
import TechCarousel from "./ToolCarousel";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-start justify-center relative overflow-hidden pt-12 md:pt-16"
    >
      {/* Main Container */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Sun Container - Centered above text, original size */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mb-2 -mt-12 -right-22"
          >
            {/* Outer Glow Layer 1 */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-2 bg-linear-to-br from-white/40 via-yellow-200/10 to-yellow-200/70 rounded-full blur-2xl"
            />

            {/* Outer Glow Layer 2 */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -inset-2 bg-linear-to-br from-white/30 via-orange-100/20 to-yellow-100/15 rounded-full blur-xl"
            />

            {/* Sun Body with subtle x movement */}
            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative mt-16 w-24 h-24 md:w-12 md:h-12"
            >
              {/* Sun Core */}
              <div className="absolute inset-0 bg-linear-to-br from-white/60 to-orange-500 rounded-full shadow-xl shadow-yellow-200/50"></div>

              {/* Subtle inner glow */}
              <motion.div
                animate={{ opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-br from-white/30 to-red-600/30 rounded-full blur-md"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="relative z-10 mt-18">
            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
            >
              <span className="text-white">TIISETSO DINOKO</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="font-['Fira_Code',monospace] text-xl md:text-xl lg:text-2xl tracking-wider text-white uppercase leading-1.5 mt-8"
            >
              Software Engineer, Front End & Mobile Developer
            </motion.p>
          </div>

          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
