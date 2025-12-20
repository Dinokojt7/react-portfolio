export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-20 px-4 md:px-8 lg:px-16 bg-linear-to-b from-[#1b1b1e] via-[#1b1b1e] via-25% to-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Header - smaller on mobile */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-center mb-6 sm:mb-12">
          <div>Avalaible for select freelance</div>
          <div className="relative">opportunities</div>
        </h2>

        {/* Same two-line text - smaller on mobile */}
        <p className="text-white text-base sm:text-xl font-bold mb-8 sm:mb-12 font-['Fira_Code',monospace] px-2">
          Have an exciting project you need help with?
          <br />
          Send me an email or contact me via social media dm!
        </p>

        {/* Contact links container */}
        <div className="space-y-6 sm:space-y-8">
          {/* Email with bottom-to-top animated background - responsive */}
          <div className="relative inline-block">
            <a
              href="mailto:jacobdinoko@gmail.com"
              className="group relative z-10 inline-block"
            >
              <div className="relative overflow-hidden">
                {/* Animated background - adjusted for mobile */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-4 sm:left-8 sm:right-8 bg-purple-600 h-1/6 group-hover:h-1/2 transition-all duration-300 ease-out -z-10"></div>
                {/* Email text - smaller on mobile */}
                <span className="text-xl sm:text-3xl font-bold text-white font-['Fira_Code',monospace] px-4 sm:px-8 py-3 sm:py-4 inline-block">
                  jacobdinoko@gmail.com
                </span>
              </div>
            </a>
          </div>

          {/* Social links - smaller on mobile */}
          <div className="space-y-3 sm:space-y-4">
            <a
              href="https://www.linkedin.com/in/tiisetso-dinoko-6bb84280/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="text-lg sm:text-2xl font-bold text-gray-300 font-['Fira_Code',monospace] group-hover:text-[#0e9594] transition-colors duration-300">
                LinkedIn
              </span>
              <span className="sr-only">
                https://www.linkedin.com/in/tiisetso-dinoko-6bb84280/
              </span>
            </a>

            <a
              href="https://x.com/tiisetso_dinoko"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="text-lg sm:text-2xl font-bold text-gray-300 font-['Fira_Code',monospace] group-hover:text-[#0e9594] transition-colors duration-300">
                Twitter
              </span>
              <span className="sr-only">https://x.com/tiisetso_dinoko</span>
            </a>

            <a
              href="https://github.com/Dinokojt7"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="text-lg sm:text-2xl font-bold text-gray-300 font-['Fira_Code',monospace] group-hover:text-[#0e9594] transition-colors duration-300">
                Github
              </span>
              <span className="sr-only">https://github.com/Dinokojt7</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
