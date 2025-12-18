"use client";

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="pt-20 px-4 md:px-8 lg:px-16 bg-[#1b1b1e] "
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Header */}
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white text-center mb-10">
          My Expertise
        </h2>

        {/* Grid Container with external borders only */}
        <div className="border-t border-l border-white relative">
          {/* Grid with internal borders */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Item 1: Software Development - Updated to match item 2 */}
            <div className="relative p-8 border-r border-b border-white">
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-4 mb-3">
                {/* Desktop Image */}
                <div className="shrink-0 w-12 h-12 mt-2">
                  <img
                    src="/images/desktop.png"
                    alt="Desktop Development"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-white">
                    <div>Software</div>
                    <div className="relative">
                      Development
                      <div className="absolute left-0 -top-2/5 w-2/6 h-2 bg-pink-600/70"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 h-20 ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white font-medium font-['Fira_Code',monospace]">
                    Experienced in both functional and OOP: Dart, Python, Java,
                    JavaScript, TypeScript.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 2: Frontend Development */}
            <div className="relative p-8 border-r border-b border-white">
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-4 mb-3">
                {/* React Image */}
                <div className="shrink-0 w-12 h-12 mt-1">
                  <img
                    src="/images/react.png"
                    alt="React Development"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-white">
                    <div>Frontend Dev</div>
                    <div className="relative">
                      React, NextJS
                      <div className="absolute left-0 -top-2/5 w-2/6 h-2 bg-linear-to-r from-blue-600/70 to-blue-700/70"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 h-20 ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white font-medium font-['Fira_Code',monospace]">
                    Passionate about UI/UX. Over 5 years of development
                    experience in HTML, CSS, JS, React and NextJS frameworks.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 3: Flutter Development - Updated to match item 2 */}
            <div className="relative p-8 border-r border-b border-white">
              {/* Row 1: Image and Header inline */}
              <div className="flex items-start gap-4 mb-3">
                {/* Flutter/Phone Image */}
                <div className="shrink-0 w-12 h-12 mt-3">
                  <img
                    src="/images/flutter.png"
                    alt="Flutter Development"
                    className="w-full h-full object-contain color-white"
                  />
                </div>

                {/* Header Text */}
                <div className="flex-1">
                  <div className="text-2xl font-semibold z-10 text-white">
                    <div>Flutter Dev</div>
                    <div className="relative">
                      <div className="text-xl font-bold text-white mt-1">
                        Android, iOS
                      </div>
                      {/* Orange underline */}
                      <div className="absolute left-0 -top-3/5 w-3/7 z-0 h-2 bg-linear-to-r from-orange-500/80 to-orange-600/80"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Opening <h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace] mb-1">
                &lt;h3&gt;
              </div>

              {/* Row 3: Vertical line and Body text */}
              <div className="flex items-start gap-4 mb-1">
                {/* Vertical line */}
                <div className="w-0.5 h-20 ml-4 bg-[#6e6e6e]"></div>

                {/* Body Text */}
                <div className="flex-1">
                  <p className="text-white font-medium font-['Fira_Code',monospace]">
                    Skilled in developing hybrid mobile apps and cross-platform
                    solutions using the Flutter framework.
                  </p>
                </div>
              </div>

              {/* Row 4: Closing </h3> tag */}
              <div className="text-[#6e6e6e] text-sm font-['Fira_Code',monospace]">
                &lt;/h3&gt;
              </div>
            </div>

            {/* Item 4: Quote - No borders at all (UNCHANGED) */}
            <div className="relative p-3">
              {/* Purple line full height of box */}
              <div className="absolute top-10 left-8 bottom-4 w-2 bg-linear-to-b from-purple-500 via-purple-600 to-purple-700"></div>

              {/* Content */}
              <div className="pl-12">
                {/* Main quote */}
                <h3 className="text-3xl md:text-3xl top-5 font-bold text-white my-6 leading-tight">
                  Sometimes the best way to solve a problem is to help others.
                </h3>

                {/* Attribution */}
                <div className="text-white/80 text-lg ">
                  - Uncle Iroh, 'Avatar: The Last Airbender'
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Image - Positioned below the grid */}
      <div className=" bottom-35 left-1/2 -translate-x-1/2 w-full max-w-xl pointer-events-none relative z-10">
        <img
          src="/images/hello-world.webp"
          alt="Decorative background"
          className="w-full h-auto opacity-30"
          style={{
            transform:
              "translateY(40%)" /* Top 20% overlaps with grid bottom */,
          }}
        />
      </div>

      {/* Global selection styles */}
      <style jsx global>{`
        ::selection {
          background-color: rgba(255, 182, 193, 0.3);
          color: white;
        }

        ::-moz-selection {
          background-color: rgba(255, 182, 193, 0.3);
          color: white;
        }

        * {
          -webkit-tap-highlight-color: rgba(255, 182, 193, 0.3);
        }

        /* Ensure the section has enough height for the image */
        #expertise {
          min-height: 180vh;
          padding-bottom: 120px; /* Add space for the image below */
        }
      `}</style>
    </section>
  );
};

export default Expertise;
