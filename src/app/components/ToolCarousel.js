"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechToolbox = () => {
  const tools = [
    { name: "Firebase" },
    { name: "Netlify" },
    { name: "Google Cloud" },
    { name: "Vercel" },
    { name: "Git" },
    { name: "Postman" },
    { name: "Jest" },
    { name: "Twilio" },
    { name: "Cloudflare" },
    { name: "Google Play" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get 5 tools starting from currentIndex
  const getVisibleTools = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const index = (currentIndex + i) % tools.length;
      return tools[index];
    });
  };

  const visibleTools = getVisibleTools();

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tools.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <div
      className="mt-20 md:mt-32 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Toolbox Header */}
      <div className="text-center mb-12">
        <h2
          className={`text-2xl md:text-3xl font-bold tracking-wide uppercase transition-colors duration-300 ${
            isHovered ? "text-white" : "text-gray-500"
          }`}
        >
          FEATURED TOOLBOX
        </h2>
        <div
          className={`h-0.5 mx-auto mt-4 transition-all duration-300 ${
            isHovered ? "w-32 bg-white" : "w-24 bg-gray-600"
          }`}
        />
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={slidePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Tools Row - Simple display */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-4">
          {visibleTools.map((tool, index) => (
            <div
              key={`${tool.name}-${currentIndex}-${index}`}
              className="relative"
            >
              {/* Tool Container */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                {/* Charcoal Version (shown when not hovered) */}
                <img
                  src={`/images/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}.png`}
                  alt={tool.name}
                  className={`absolute inset-0 w-full h-full object-contain p-3 transition-all duration-300 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ filter: "brightness(0) invert(0.6)" }}
                />

                {/* Color Version (shown when hovered) */}
                <img
                  src={`/images/tools/${tool.name.toLowerCase().replace(/\s+/g, "-")}.png`}
                  alt={tool.name}
                  className={`absolute inset-0 w-full h-full object-contain p-3 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    filter: "none", // Original colors
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechToolbox;
