"use client";

import { useState } from "react";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get projects starting from index 1 (skip the first one)
  const projectList = projects.slice(1);
  // Get the third project (index 0 from original array)
  const thirdProject = projects[0];

  return (
    <section
      id="work"
      className="px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background covering entire section */}
      <div className="absolute inset-0 bg-[#1b1b1e] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Mobile: Header and text above everything */}
        <div className="lg:hidden mb-8">
          {/* Header with slide-in animation */}
          <div className="mb-6 animate-slideInLeft">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white text-left">
              <div>My</div>
              <div className="relative">Work</div>
            </h2>
          </div>
          {/* Body text */}
          <p className="text-gray-300 text-base leading-relaxed text-left font-bold max-w-lg font-['Fira_Code',monospace] animate-fadeIn delay-200">
            Deployed scalable ecommerce, booking and services web and hybrid
            mobile apps using React SPA and PWA solutions. I am also interested
            in working with cross-functional teams to deliver user-centric
            solutions that drive engagement and growth.
          </p>
        </div>

        {/* Main content with fade-in animation */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 animate-fadeIn">
          {/* Left column - 40% width - Desktop only */}
          <div className="hidden lg:block lg:w-2/5">
            {/* Header with slide-in animation */}
            <div className="mb-6 sm:mb-8 animate-slideInLeft">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-left">
                <div>My</div>
                <div className="relative">Work</div>
              </h2>
            </div>
            {/* Body text */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-left font-bold max-w-lg font-['Fira_Code',monospace] animate-fadeIn delay-200">
              Deployed scalable ecommerce, booking and services web and hybrid
              mobile apps using React SPA and PWA solutions. I am also
              interested in working with cross-functional teams to deliver
              user-centric solutions that drive engagement and growth.
            </p>
          </div>

          {/* Middle and Right columns stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row items-start lg:w-3/5">
            {/* Mobile: Device image at the top of the middle section */}
            <div className="lg:hidden w-full mb-8 relative h-70 sm:h-87.5 animate-slideInRight delay-300">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Phone image with CSS animation */}
                <img
                  src="/images/mobile-mock.png"
                  alt="Phone rocking"
                  className="w-[80%] h-auto max-h-[90%] object-contain slow-rock-animation"
                />

                {/* Glow effects */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/15 to-pink-500/10 blur-2xl rounded-full -z-10"></div>
                <div className="absolute -inset-2 bg-linear-to-br from-blue-600/5 to-purple-600/5 blur-xl rounded-full -z-20"></div>
              </div>
            </div>

            {/* Middle column - On mobile: full width, left aligned; On desktop: 33% width */}
            <div className="w-full lg:w-1/3 flex flex-col justify-start lg:pt-12 xl:pt-16">
              {" "}
              {/* Added top padding on large screens */}
              <div className="space-y-3 sm:space-y-4 w-full flex flex-col items-start animate-slideInUp delay-300">
                {/* Arrow image with pulse animation - Left aligned on mobile */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 lg:ml-auto lg:-mr-6 lg:mt-10 animate-softPulse">
                  <img
                    src="/images/arrow.png"
                    alt="Arrow indicator"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Featured Project text - Left aligned on mobile */}
                <div className="text-white text-base sm:text-lg font-bold font-['Fira_Code',monospace]   lg:-ml-2">
                  Featured Project
                </div>

                {/* Izinto Project text - Left aligned on mobile */}
                <div className="text-white text-2xl sm:text-3xl font-bold font-['Fira_Code',monospace]  lg:-ml-2">
                  Izinto App
                </div>
              </div>
              {/* CTA Button */}
              <Link
                href={`/project/${projects[0]?.slug}`}
                className="block w-auto mt-4 animate-fadeIn delay-400"
              >
                <button className="text-xs sm:text-sm font-['Fira_Code',monospace] px-4 sm:px-6 py-3 sm:py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow rounded border-0 cursor-pointer transition-all duration-300   lg:-ml-2">
                  View Project
                </button>
              </Link>
            </div>

            {/* Right column - Desktop only (device image) */}
            <div className="hidden lg:flex lg:w-2/3 items-start justify-start h-full">
              <div className="relative w-full h-full min-h-75 sm:min-h-100 max-h-125 animate-slideInRight delay-500">
                <div className="relative w-full h-full flex items-center justify-start px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                  {/* Phone image with CSS animation */}
                  <img
                    src="/images/mobile-mock.png"
                    alt="Phone rocking"
                    className="w-[90%] sm:w-[95%] h-auto max-h-[90%] sm:max-h-[95%] object-contain slow-rock-animation"
                  />

                  {/* Glow effects */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/15 to-pink-500/10 blur-2xl sm:blur-3xl rounded-full -z-10"></div>
                  <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-br from-blue-600/5 to-purple-600/5 blur-xl sm:blur-2xl rounded-full -z-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two column grid of project images in rounded containers */}
        <div className="mt-12 lg:mt-8 sm:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectList.slice(0, 2).map((project, index) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="group animate-staggerFadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-[#2a2a2e5d] rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#2a2a2e5d] group-hover:shadow-xl group-hover:shadow-purple-900/20">
                  {/* Image container */}
                  <div className="overflow-hidden">
                    <img
                      src={`${project.images[0]}`}
                      alt={project.title}
                      className={`w-full h-48 sm:h-64 md:h-80 object-cover transition-all duration-500 ${
                        hoveredProject === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Text container with padding */}
                  <div className="p-4 sm:p-6">
                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>

                    {/* Type / Show Project - Animated on hover */}
                    <div className="relative h-6 overflow-hidden">
                      {/* Type Text (default) */}
                      <div
                        className={`transition-transform duration-300 ${
                          hoveredProject === index
                            ? "-translate-y-full opacity-0"
                            : "translate-y-0 opacity-100"
                        }`}
                      >
                        <p className="text-gray-300 text-xs sm:text-sm">
                          {project.type || "Full-stack development"}
                        </p>
                      </div>

                      {/* Show Project Text (on hover) */}
                      <div
                        className={`absolute top-0 left-0 w-full transition-transform duration-300 ${
                          hoveredProject === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-full opacity-0"
                        }`}
                      >
                        <p className="text-purple-400 font-semibold text-xs sm:text-sm">
                          Show Project ―
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Full width third project in rounded container */}
        {thirdProject && (
          <div className="mt-8 sm:mt-8 animate-fadeIn delay-600">
            <Link
              href={`/project/${thirdProject.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Full width rounded container with background */}
              <div className="bg-[#2a2a2e5d] rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#2a2a2e5d] group-hover:shadow-xl group-hover:shadow-purple-900/20">
                {/* Full width image */}
                <div className="overflow-hidden">
                  <img
                    src={`${thirdProject.images[0]}`}
                    alt={thirdProject.title}
                    className={`w-full h-64 sm:h-80 md:h-142  object-cover transition-all duration-500 ${
                      hoveredProject === 3 ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                {/* Text container with padding */}
                <div className="p-4 sm:p-6">
                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {thirdProject.title}
                  </h4>

                  {/* Type / Show Project - Animated on hover */}
                  <div className="relative h-6 overflow-hidden">
                    {/* Type Text (default) */}
                    <div
                      className={`transition-transform duration-300 ${
                        hoveredProject === 3
                          ? "-translate-y-full opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <p className="text-gray-300 text-sm sm:text-base">
                        {thirdProject.type || "Full-stack development"}
                      </p>
                    </div>

                    {/* Show Project Text (on hover) */}
                    <div
                      className={`absolute top-0 left-0 transition-transform duration-300 ${
                        hoveredProject === 3
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                    >
                      <p className="text-purple-400 font-semibold text-sm sm:text-base">
                        Show Project ―
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Enhanced CSS animation styles */}
      <style jsx>{`
        @keyframes slowRock {
          0%,
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
          25% {
            transform: perspective(1000px) rotateY(30deg);
          }
          75% {
            transform: perspective(1000px) rotateY(-30deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes staggerFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slow-rock-animation {
          animation: slowRock 8s ease-in-out infinite;
          transform-style: preserve-3d;
          transform-origin: center center;
          transition: transform 0.4s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-softPulse {
          animation: softPulse 4s ease-in-out infinite;
        }

        .animate-staggerFadeIn {
          opacity: 0;
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
}
