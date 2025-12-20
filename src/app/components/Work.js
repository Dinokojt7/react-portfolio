"use client";

import { useState } from "react";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get projects starting from index 1 (skip the first one)
  const projectList = projects.slice(1);
  // Get the third project (index 3 from original array)
  const thirdProject = projects[3];

  return (
    <section id="work" className="px-4 md:px-8 lg:px-16 relative">
      {/* Background covering entire section */}
      <div className="absolute inset-0 bg-[#1b1b1e] -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column - 40% width */}
          <div className="lg:w-2/5">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white text-left">
                <div>My</div>
                <div className="relative">Work</div>
              </h2>
            </div>
            {/* Body text */}
            <p className="text-gray-300 text-lg leading-relaxed text-left font-bold max-w-lg font-['Fira_Code',monospace]">
              Deployed scalable ecommerce, booking and services web and hybrid
              mobile apps using React SPA and PWA solutions. I am also
              interested in working with cross-functional teams to deliver
              user-centric solutions that drive engagement and growth.
            </p>
          </div>

          {/* Middle column - 20% width */}
          <div className="lg:w-1/5 flex flex-col justify-center items-start">
            <div className="space-y-4 mt-8 lg:mt-0 w-full flex flex-col items-start">
              {/* Arrow image */}
              <div className="w-40 h-40 ml-auto -mr-10">
                <img
                  src="/images/arrow.png"
                  alt="Arrow indicator"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Featured Project text - smaller */}
              <div className="text-white text-lg font-bold font-['Fira_Code',monospace] mt-2 ml-auto -mr-2">
                Featured Project
              </div>

              {/* Izinto Project text - bigger */}
              <div className="text-white text-3xl font-bold font-['Fira_Code',monospace] ml-auto -mr-2">
                Izinto App
              </div>
            </div>
            {/* CTA Button - aligned right */}
            <Link href={`/project/${projects[0]?.slug}`} className="block">
              <button className="max-w-2xl text-sm font-['Fira_Code',monospace] px-2 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow rounded w-ful mt-3 border-0 cursor-pointer transition-colors duration-300 ml-auto -mr-2">
                View Project
              </button>
            </Link>
          </div>

          {/* Right column - 40% width - Much larger phone */}
          <div className="lg:w-2/5 flex items-start justify-start h-full">
            <div className="relative w-full h-full min-h-100 max-h-125">
              <div className="relative w-full h-full flex items-center justify-start px-8 pb-8">
                {/* Phone image with CSS animation */}
                <img
                  src="/images/mobile-mock.png"
                  alt="Phone rocking"
                  className="w-[95%] h-auto max-h-[95%] object-contain slow-rock-animation"
                />

                {/* Glow effects */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/15 to-pink-500/10 blur-3xl rounded-full -z-10"></div>
                <div className="absolute -inset-4 bg-linear-to-br from-blue-600/5 to-purple-600/5 blur-2xl rounded-full -z-20"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Two column grid of project images in rounded containers */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.slice(0, 2).map((project, index) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Combined rounded container with background */}
                <div className="bg-[#2a2a2e5d] rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#2a2a2e5d]">
                  {/* Image container */}
                  <div className="overflow-hidden">
                    <img
                      src={`/images/portfolio-image${index + 1}.jpg`}
                      alt={project.title}
                      className={`w-full h-64 md:h-80 object-cover transition-all duration-500 ${
                        hoveredProject === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Text container with padding */}
                  <div className="p-6">
                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h4>

                    {/* Strategy / Show Project - Animated on hover */}
                    <div className="relative h-6 overflow-hidden">
                      {/* Strategy Text (default) */}
                      <div
                        className={`transition-transform duration-300 ${
                          hoveredProject === index
                            ? "-translate-y-full opacity-0"
                            : "translate-y-0 opacity-100"
                        }`}
                      >
                        <p className="text-gray-300 text-sm">
                          {project.strategy || "Full-stack development"}
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
                        <p className="text-purple-400 font-semibold text-sm">
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
          <div className="mt-8">
            <Link
              href={`/project/${thirdProject.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Full width rounded container with background */}
              <div className="bg-[#2a2a2e5d] rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#2a2a2e5d]">
                {/* Full width image */}
                <div className="overflow-hidden">
                  <img
                    src={`/images/portfolio-image3.jpg`}
                    alt={thirdProject.title}
                    className={`w-full h-80 md:h-96 object-cover transition-all duration-500 ${
                      hoveredProject === 3 ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                {/* Text container with padding */}
                <div className="p-6">
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {thirdProject.title}
                  </h4>

                  {/* Strategy / Show Project - Animated on hover */}
                  <div className="relative h-6 overflow-hidden">
                    {/* Strategy Text (default) */}
                    <div
                      className={`transition-transform duration-300 ${
                        hoveredProject === 3
                          ? "-translate-y-full opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <p className="text-gray-300">
                        {thirdProject.strategy || "Full-stack development"}
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
                      <p className="text-purple-400 font-semibold">
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

      {/* Keep the CSS animation styles */}
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

        .slow-rock-animation {
          animation: slowRock 8s ease-in-out infinite;
          transform-style: preserve-3d;
          transform-origin: center center;
          transition: transform 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
