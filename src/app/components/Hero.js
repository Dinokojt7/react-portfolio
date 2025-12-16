"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechCarousel from "./ToolCarousel";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-start justify-center relative overflow-hidden pt-20 md:pt-32"
    >
      {/* Background linear */}
      <div className="absolute inset-0 "></div>

      {/* Main Container - Positioned high */}
      <div className="relative z-20 container mx-auto px-4 mt-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Images Container - Positioned high */}
          <div className="relative flex items-center justify-center -mt-12">
            {/* Left Image - Your 3D Geometrics (Large) */}
            <div className="relative z-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-64 h-64 md:w-96 md:h-96"
              >
                {/* Your Cube Image */}
                <div className="absolute inset-0">
                  <img
                    src="/images/cube-dark.png"
                    alt="3D Cube Geometric"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>

                {/* Glow effect from sun */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-linear-to-r from-white/10 to-orange-500/10 rounded-full blur-xl"
                />
              </motion.div>
            </div>

            {/* Right Image - Sun (Smaller, Pulsing) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute right-0 -translate-y-2 -translate-x-1/2 z-0"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                {/* Outer Glow Layer 1 - Strongest */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-2 translate-x-1/2 bg-gradient-to-br from-white/40 via-yellow-200/10 to-yellow-200/70 rounded-full blur-2xl"
                />

                {/* Outer Glow Layer 2 - Medium */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -inset-2 bg-gradient-to-br from-white/30 via-orange-100/20 to-yellow-100/15 rounded-full blur-xl"
                />

                {/* Outer Glow Layer 3 - Faint */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -inset-16 bg-gradient-to-br from-green-200/20 via-orange-300/15 to-red-400/10 rounded-full blur-lg"
                />

                {/* Sun Body */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
                >
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
                  >
                    <div className=" bg-white/50 rounded-full animate-pulse">
                      <div className="relative w-32 h-32 md:w-12 md:h-12"></div>
                    </div>

                    {/* Sun Image Placeholder */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/60 to-orange-500 rounded-full shadow-xl shadow-yellow-200/50"></div>

                    {/* Pulsing effect */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-linear-to-br from-white/30 to-red-600/30 rounded-full blur-md"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Text Content - Directly On Top of Images */}
          <div className="relative z-10 -mt-48 md:-mt-64">
            {/* Main Name - Very Big, Full Caps, Tight Tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-none"
            >
              <span className="text-white">TIISETSO DINOKO</span>
            </motion.h1>

            {/* Title - Capitalized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="font-['ui-monospace', 'SFMono-Regular', 'Menlo', monospace] text-lg md:text-xl lg:text-xl font-bold tracking-wider text-gray-300 uppercase leading-1.5 mt-2"
            >
              Software Engineer, Front End & Mobile Developer
            </motion.p>

            {/* Glow Effect from Sun to Text */}
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -z-10 -inset-x-20 top-1/2 h-64 bg-linear-to-r from-transparent via-yellow-500/10 to-transparent blur-3xl"
            />
          </div>
          <TechCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
