"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechToolbox = () => {
  const tools = [
    { name: "Firebase" },
    { name: "Netlify" },
    { name: "Google Cloud" },
    { name: "Vercel1" },
    { name: "Git" },
    { name: "Postman" },
    { name: "Jest" },
    { name: "Twilio" },
    { name: "Cloudflare" },
    { name: "Google Play" },
  ];

  const [displayTools, setDisplayTools] = useState(tools.slice(0, 5));
  const [nextIndex, setNextIndex] = useState(5);
  const [isSliding, setIsSliding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Slide every 5 seconds
  useEffect(() => {
    if (!isHovered && !isSliding) {
      const interval = setInterval(() => {
        performSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isSliding]);

  const performSlide = () => {
    if (isSliding) return;
    setIsSliding(true);

    // Animation duration
    setTimeout(() => {
      // Remove first, add next
      const newDisplayTools = [
        ...displayTools.slice(1),
        tools[nextIndex % tools.length],
      ];
      setDisplayTools(newDisplayTools);
      setNextIndex((prev) => (prev + 1) % tools.length);
      setIsSliding(false);
    }, 300);
  };

  const slideNext = () => {
    performSlide();
  };

  const slidePrev = () => {
    if (isSliding) return;
    setIsSliding(true);

    // For previous: remove last, add previous to beginning
    setTimeout(() => {
      const prevIndex = (nextIndex - 6 + tools.length) % tools.length;
      const newDisplayTools = [tools[prevIndex], ...displayTools.slice(0, 4)];
      setDisplayTools(newDisplayTools);
      setNextIndex((prev) => (prev - 1 + tools.length) % tools.length);
      setIsSliding(false);
    }, 300);
  };

  return (
    <div
      className="mt-20 md:mt-24 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Toolbox Header */}
      <div className="text-center">
        <h2
          className={`text-2xl md:text-lg font-semibold tracking-wide uppercase transition-colors duration-300 ${
            isHovered ? "text-white" : "text-gray-500"
          }`}
        >
          FEATURED TOOLBOX
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 mt-8">
        {/* Left Arrow */}
        <button
          onClick={slidePrev}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-30 p-3 bg-gray-800/50 hover:bg-white/20 rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideNext}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-30 p-3 bg-gray-800/50 hover:bg-white/20 rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Sliding Container */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-4 overflow-hidden">
          <div
            className={`flex justify-center items-center gap-4 md:gap-6 lg:gap-4 transition-transform duration-300 ease-in-out ${
              isSliding ? "-translate-x-6" : "translate-x-0"
            }`}
          >
            {displayTools.map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="relative">
                {/* Tool Container */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                  {/* Gray Version (shown when not hovered) */}
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
                    style={{ filter: "none" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechToolbox;
