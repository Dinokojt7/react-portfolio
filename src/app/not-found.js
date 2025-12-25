import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1b1b1e] text-white p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number with glow effect */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Favicon image with glow effect */}
            <div className="relative w-full h-full">
              <img
                src="/favicon-512x512.png"
                alt="404"
                className="w-full h-full object-contain opacity-90"
              />
              {/* Gradient overlay for color effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#48bfe3]/20 via-purple-500/20 to-red-500/20 mix-blend-overlay rounded-full"></div>
            </div>

            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-linear-to-r from-[#48bfe3] via-purple-500 to-red-500 blur-3xl opacity-30 -z-10 rounded-full scale-110"></div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold mb-4 font-['Fira_Code',monospace]">
          // Page not found
        </h2>

        <p className="text-gray-200 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Code block style message */}
        <div className="bg-[#1b1b1e] border border-[#48bfe3]/30 rounded-lg p-6 mb-8 font-['Fira_Code',monospace] text-left">
          <div className="text-[#6e6e6e]">
            <span className="text-purple-500">if</span>(
            <span className="text-[#48bfe3]">page</span> ==={" "}
            <span className="text-yellow-300">&quot;not_found&quot;</span>){" "}
            {"{"}
          </div>
          <div className="ml-4">
            <span className="text-red-400">redirect</span>(
            <span className="text-green-400">return_home</span>);
          </div>
          <div>{"}"}</div>
        </div>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-linear-to-r from-[#48bfe3] to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 font-['Fira_Code',monospace]"
        >
          &lt;return to homepage/&gt;
        </Link>

        {/* Navigation suggestions */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-[#48bfe3]">
            // Quick Navigation
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#home"
              className="px-4 py-2 bg-[#1b1b1e] border border-gray-800 rounded hover:border-[#48bfe3] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#expertise"
              className="px-4 py-2 bg-[#1b1b1e] border border-gray-800 rounded hover:border-[#48bfe3] transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="/#work"
              className="px-4 py-2 bg-[#1b1b1e] border border-gray-800 rounded hover:border-[#48bfe3] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-[#1b1b1e] border border-gray-800 rounded hover:border-[#48bfe3] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
