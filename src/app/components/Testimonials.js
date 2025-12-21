"use client";

import { useState, useEffect } from "react";
import testimonials from "@/data/testimonials.json";

const Testimonials = () => {
  // Split testimonials into two columns
  const leftColumn = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const rightColumn = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section
      id="testimonials"
      className="w-full  bg-[#1b1b1e] pt-44 flex flex-col md:flex-row"
    >
      {/* Left Column - Pink Background */}
      <div className="w-full md:w-1/2 bg-[#b084cc] flex items-center justify-center py-8 md:pt-8 md:pb-24">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-2xl mx-auto">
          {/* First row: Quotes image */}
          <div className="mb-6">
            <img
              src="/images/quote.png"
              alt="Quotes"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </div>

          {/* Testimonial text */}
          <div className="space-y-6">
            {leftColumn.map((testimonial, index) => (
              <div key={testimonial.id}>
                <p className="text-white text-base md:text-lg leading-relaxed font-medium mb-4 text-left">
                  "{testimonial.information}"
                </p>

                {/* Author */}
                <p className="text-white text-lg md:text-xl font-bold mb-1 text-left">
                  {testimonial.author}
                </p>

                {/* Company */}
                <p className="text-white text-base md:text font-semiobold text-left">
                  {testimonial.company}
                </p>

                {/* Divider (except for last item) */}
                {index < leftColumn.length - 1 && (
                  <div className="my-6 h-px bg-white/30 w-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Blue Background */}
      <div className="w-full md:w-1/2 bg-[#6930c3] flex items-center justify-center py-8 md:py-0">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-2xl mx-auto">
          {/* First row: Quotes image */}
          <div className="mb-6">
            <img
              src="/images/quote.png"
              alt="Quotes"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </div>

          {/* Testimonial text */}
          <div className="space-y-6">
            {rightColumn.map((testimonial, index) => (
              <div key={testimonial.id}>
                <p className="text-white text-base md:text-lg leading-relaxed font-medium mb-4 text-left">
                  "{testimonial.information}"
                </p>

                {/* Author */}
                <p className="text-white text-lg md:text-xl font-bold mb-1 text-left">
                  {testimonial.author}
                </p>

                {/* Company */}
                <p className="text-white text-base md:text font-semibold text-left">
                  {testimonial.company}
                </p>

                {/* Divider (except for last item) */}
                {index < rightColumn.length - 1 && (
                  <div className="my-6 h-px bg-white/30 w-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Style for testimonial text selection */}
      <style jsx>{`
        ::selection {
          background-color: rgba(255, 255, 255, 0.3);
          color: #000;
        }

        ::-moz-selection {
          background-color: rgba(255, 255, 255, 0.3);
          color: #000;
        }

        @media (max-width: 768px) {
          #testimonials {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
