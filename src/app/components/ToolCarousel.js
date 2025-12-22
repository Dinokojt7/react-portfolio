"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechToolbox = () => {
  const tools = [
    { name: "Firebase" },
    { name: "Netlify" },
    { name: "Google Cloud", size: "lg" },
    { name: "Vercel1" },
    { name: "Git", size: "sm" },
    { name: "Postman" },
    { name: "Jest" },
    { name: "Twilio" },
    { name: "Cloudflare" },
    { name: "Google Play", size: "lg" },
  ];

  const [displayTools, setDisplayTools] = useState(tools.slice(0, 5));
  const [nextIndex, setNextIndex] = useState(5);
  const [isSliding, setIsSliding] = useState(false);

  const slideNext = () => {
    if (isSliding) return;
    setIsSliding(true);

    setTimeout(() => {
      const newDisplayTools = [
        ...displayTools.slice(1),
        tools[nextIndex % tools.length],
      ];
      setDisplayTools(newDisplayTools);
      setNextIndex((prev) => (prev + 1) % tools.length);
      setIsSliding(false);
    }, 300);
  };

  const slidePrev = () => {
    if (isSliding) return;
    setIsSliding(true);

    setTimeout(() => {
      const prevIndex = (nextIndex - 6 + tools.length) % tools.length;
      const newDisplayTools = [tools[prevIndex], ...displayTools.slice(0, 4)];
      setDisplayTools(newDisplayTools);
      setNextIndex((prev) => (prev - 1 + tools.length) % tools.length);
      setIsSliding(false);
    }, 300);
  };

  return (
    <div className="mt-20 md:mt-24 w-full">
      {/* Featured Toolbox Header */}
      <div className="text-center">
        <h2 className="text-lg md:text-lg font-bold tracking-wide uppercase text-gray-400">
          FEATURED TOOLBOX
        </h2>
      </div>

      {/* Carousel Container with Arrows */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={slidePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer"
          aria-label="Previous tools"
        >
          <ChevronLeft className="w-6 h-6 text-white/60 hover:text-white pointer-cursor" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer"
          aria-label="Next tools"
        >
          <ChevronRight className="w-6 h-6 text-white/60 hover:text-white pointer-cursor" />
        </button>

        {/* Sliding Container */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-4 overflow-hidden px-10">
          <div
            className={`flex justify-center items-center gap-4 md:gap-6 lg:gap-4 transition-transform duration-300 ease-in-out ${
              isSliding ? "-translate-x-6" : "translate-x-0"
            }`}
          >
            {displayTools.map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="relative">
                {/* Tool Container with conditional sizing */}
                <div
                  className={`relative ${
                    tool.size === "lg"
                      ? "w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-40"
                      : tool.size === "sm"
                        ? "w-12 h-12 md:w-20 md:h-20 lg:w-26 lg:h-20"
                        : "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-32"
                  }`}
                >
                  {/* Single image with fixed grayscale filter */}
                  <img
                    src={`/images/tools/${tool.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.png`}
                    alt={tool.name}
                    className={`absolute inset-0 w-full h-full object-contain ${
                      tool.size === "lg"
                        ? "p-2 md:p-4"
                        : tool.size === "sm"
                          ? "p-1 md:p-2"
                          : "p-3"
                    }`}
                    style={{ filter: "brightness(0) invert(0.6)" }}
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
