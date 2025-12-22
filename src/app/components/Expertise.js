"use client";

import { useEffect, useRef, useState } from "react";

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="pt-12 md:pt-20 px-4 md:px-8 lg:px-16 bg-[#1b1b1e] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Header with animation */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My Expertise
        </h2>

        {/* Grid Container with external borders only */}
        <div
          className={`border-t border-l border-white relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Grid with internal borders */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Item 1: Software Development */}
            <div
              className={`relative p-4 sm:p-6 md:p-8 border-r-0 md:border-r border-b border-white transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                {/* Desktop Image */}
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mt-1 sm:mt-2">
                  <img
                    src="/images/desktop.png"
                    alt="Desktop Development"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-white">
                    <div className="relative overflow-hidden">
                      {/* Animated background  */}
                      <div
                        className={`absolute top-5 -left-4 right-4 sm:bottom-4 sm-bottom-10 sm:w-2/7 md:w-3/7 sm:right-2 w-2/6 bg-pink-600/90 h-1/4  ease-out -z-10 transition-all duration-1000 delay-600 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                      ></div>
                      {/* Email text - smaller on mobile */}
                      <span className="inline-block">Software</span>
                    </div>

                    <div className="relative">Development</div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-3 sm:gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 sm:w-0.8 h-16 sm:h-18 md:h-20 ml-3 sm:ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white text-sm sm:text-base font-medium font-['Fira_Code',monospace]">
                    Experienced in both functional and OOP: Dart, Python, Java,
                    JavaScript, TypeScript.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 2: Frontend Development */}
            <div
              className={`relative p-4 sm:p-6 md:p-8 border-r-0 md:border-r border-b border-white transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                {/* React Image */}
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mt-1">
                  <img
                    src="/images/react.png"
                    alt="React Development"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-white">
                    {" "}
                    <div className="relative overflow-hidden">
                      {/* Animated background  */}
                      <div
                        className={`absolute top-5 -left-4 right-4 sm:bottom-4 sm-bottom-10 sm:w-4/6 md:w-4/7 sm:right-2 w-3/7 bg-blue-600/90 h-1/4  ease-out -z-10 transition-all duration-1000 delay-600 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                      ></div>
                      {/* Email text - smaller on mobile */}
                      <span className="inline-block">Frontend Dev</span>
                    </div>
                    <div className="relative">React, NextJS</div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-3 sm:gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 sm:w-0.8 h-16 sm:h-18 md:h-20 ml-3 sm:ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white text-sm sm:text-base font-medium font-['Fira_Code',monospace]">
                    Passionate about UI/UX. Over 5 years of development
                    experience in HTML, CSS, JS, React and NextJS frameworks.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 3: Flutter Development */}
            <div
              className={`relative p-4 sm:p-6 md:p-8 border-r-0 md:border-r border-b border-white transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                {/* Flutter/Phone Image */}
                <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mt-1 sm:mt-2">
                  <img
                    src="/images/flutter.png"
                    alt="Flutter Development"
                    className="w-full h-full object-contain filter "
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-xl sm:text-2xl font-semibold text-white">
                    {" "}
                    <div className="relative overflow-hidden">
                      <div
                        className={`absolute top-5 -left-4 right-6 sm:bottom-4 sm-bottom-10 sm:w-3/6 md:w-3/6 sm:right-2 w-3/8 bg-orange-600/90 h-1/4  ease-out -z-10 transition-all duration-1000 delay-600 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
                      ></div>
                      {/* Email text - smaller on mobile */}
                      <span className="inline-block">Flutter Dev</span>
                    </div>
                    <div className="relative">
                      <div className="text-lg sm:text-xl font-bold text-white mt-1">
                        Android, iOS
                      </div>
                      {/* Orange underline */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-3 sm:gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 sm:w-0.8 h-16 sm:h-18 md:h-20 ml-3 sm:ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white text-sm sm:text-base font-medium font-['Fira_Code',monospace]">
                    Skilled in developing hybrid mobile apps and cross-platform
                    solutions using the Flutter framework.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-xs sm:text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 4: Quote - No borders at all */}
            <div
              className={`relative p-4 sm:p-6 md:p-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Purple line full height of box */}
              <div
                className={`absolute top-8 bottom-10 sm:top-12 md:top-14 md:bottom-10 left-4 sm:left-10 md:left-8 w-1 sm:w-1.5 md:w-1.5 bg-linear-to-b from-purple-500 via-purple-600 to-purple-700 transition-all duration-1000 delay-800 ${isVisible ? "scale-y-100" : "scale-y-0"}`}
              ></div>

              {/* Content */}
              <div className="pl-8 sm:pl-4 md:pl-6">
                {/* Main quote */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white my-4 sm:my-5 md:my-6 leading-snug sm:leading-tight">
                  Sometimes the best way to solve a problem is to help others.
                </h3>

                {/* Attribution */}
                <div className="text-white/80 text-sm sm:text-base md:text-lg">
                  - Uncle Iroh, 'Avatar: The Last Airbender'
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Image - Positioned to overlap with grid above */}
      <div
        className={`relative z-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        style={{ marginTop: "-40px" }}
      >
        {" "}
        {/* Adjust this value as needed */}
        <img
          src="/images/hello-world.webp"
          alt="Decorative background"
          className="w-full max-w-lg mx-auto h-auto opacity-30"
        />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes scaleY {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        .delay-100 {
          animation-delay: 100ms;
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
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-800 {
          animation-delay: 800ms;
        }
        .delay-900 {
          animation-delay: 900ms;
        }

        /* Global selection styles */
        ::selection {
          background-color: rgba(255, 182, 193, 0.8);
          color: white;
        }

        ::-moz-selection {
          background-color: rgba(255, 182, 193, 0.8);
          color: white;
        }

        * {
          -webkit-tap-highlight-color: rgba(255, 182, 193, 0.8);
        }

        /* Mobile touch-friendly adjustments */
        @media (max-width: 768px) {
          #expertise {
            padding-bottom: 80px;
          }

          .border-r-0 {
            border-right: 0 !important;
          }
        }

        /* Ensure proper spacing on smallest screens */
        @media (max-width: 640px) {
          #expertise {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Expertise;
