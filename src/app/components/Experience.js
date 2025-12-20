"use client";

import { useState } from "react";
import { Plus, Minus, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import projects from "@/data/projects.json";

export default function Experience() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const experienceData = projects;

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const stripUrl = (url) => {
    if (!url) return "";
    return url.replace(/^https?:\/\/(www\.)?/, "");
  };

  return (
    <section
      id="experience"
      className="pt-20 px-4 md:px-8 lg:px-16 bg-[#1b1b1e]"
    >
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Main Header */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center mb-12">
          My Experience
        </h2>

        {/* Accordion Container */}
        <div className="space-y-4">
          {experienceData.map((item) => (
            <div key={item.id} className="overflow-hidden">
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded transition-all duration-300 ${
                  openAccordion === item.id
                    ? "bg-[#6930c3]"
                    : "bg-[#4b208f] hover:bg-[#6930c3]"
                }`}
              >
                {/* Left side: Role @ Client */}
                <div className="flex items-center text-left">
                  <span className="text-gray-100 text-lg font-semibold">
                    {item.role}
                  </span>
                  <span className="mx-2 text-gray-100">@</span>
                  <span className="text-gray-100 font-semibold">
                    {item.client}
                  </span>
                </div>

                {/* Right side: Period + Icon */}
                <div className="flex items-center gap-4">
                  <span className="text-gray-100 font-semibold">
                    {item.period}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 
                   
                  `}
                  >
                    {openAccordion === item.id ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openAccordion === item.id
                    ? "max-h-125 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#6138f63f] rounded p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left column (3/4 width) */}
                    <div className="lg:col-span-3 space-y-6">
                      {/* Row 1: Location with link */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-purple-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-300">{item.location}</span>
                        </div>
                        {item.liveUrl && (
                          <div className="flex items-center gap-2">
                            <a
                              href={item.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-1 text-gray-400 hover:text-[#0e9594] transition-colors"
                            >
                              <span className=" bg-purple-400 rounded ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-5 h-5 text-[#6138f6ea] rotate-315"
                                >
                                  {/* Keep original horizontal arrow */}
                                  <line x1="3" y1="12" x2="17" y2="12" />
                                  <polyline points="14 7 19 12 14 17" />
                                </svg>
                              </span>
                              <span>{stripUrl(item.liveUrl)}</span>
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Row 2: Role Description */}
                      <div>
                        <p className="text-gray-300 leading-relaxed">
                          {item.roleDescription}
                        </p>
                      </div>

                      {/* Row 3: Extended Stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.extendedStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-[#023e8a] text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column (1/4 width) - Logo */}
                    <div className="lg:col-span-1 flex items-center justify-center">
                      {item.logo && (
                        <div className="w-32 h-32  flex items-center justify-center p-4">
                          <img
                            src={item.logo}
                            alt={`${item.client} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
