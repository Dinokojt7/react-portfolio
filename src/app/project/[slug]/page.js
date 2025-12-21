"use client";

import { useState, useEffect } from "react";
import Navigation from "@/app/components/Navigation";
import projects from "@/data/projects.json";
import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function ProjectPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    setIsMounted(true);

    // Find current project index
    if (slug) {
      const index = projects.findIndex((p) => p.slug === slug);
      if (index !== -1) {
        setCurrentProjectIndex(index);
      }
    }

    // Handle scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  // Don't render anything until mounted (to avoid hydration mismatch)
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#1b1b1e]">
        <Navigation isScrolled={true} />
        <main className="pt-24 px-4">
          <div className="text-white">Loading...</div>
        </main>
      </div>
    );
  }

  const project = projects[currentProjectIndex] || projects[0];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1b1b1e]">
        <Navigation isScrolled={true} />
        <main className="pt-24 px-4">
          <h1 className="text-white">Project not found</h1>
        </main>
      </div>
    );
  }

  const formatTitle = (title) => {
    return title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-");
  };

  const splitTitle = (formattedTitle) => {
    const words = formattedTitle.split("-");
    const mid = Math.ceil(words.length / 2);
    return {
      firstLine: words.slice(0, mid).join("-"),
      secondLine: words.slice(mid).join("-"),
    };
  };

  const formattedTitle = formatTitle(project.title);
  const { firstLine, secondLine } = splitTitle(formattedTitle);

  const nextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setCurrentProjectIndex(nextIndex);
    router.push(`/project/${projects[nextIndex].slug}`);
  };

  const prevProject = () => {
    const prevIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length;
    setCurrentProjectIndex(prevIndex);
    router.push(`/project/${projects[prevIndex].slug}`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextProjectData = projects[(currentProjectIndex + 1) % projects.length];

  return (
    <>
      <div className="min-h-screen bg-[#1b1b1e]">
        <Navigation isScrolled={true} />

        <main className="pt-24 px-4 md:px-8 lg:px-8 pb-4">
          <div className="max-w-6xl mx-auto">
            {/* Title section */}
            <div className="mb-16 md:mb-22">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white text-left">
                <div className="relative">
                  <div>{firstLine}</div>
                  <div className="relative">{secondLine}</div>
                </div>
              </h1>
            </div>

            {/* Two column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-22">
              {/* Left column - Project description */}
              <div>
                <p className="text-gray-300 text-lg font-semibold tracking-tight leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Right column */}
              <div>
                {project.strategy && project.strategy.trim() !== "" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    {/* Grid content when strategy exists */}
                    <div className="space-y-8 border-t border-gray-400 pt-4">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                          Strategy
                        </h3>
                        <p className="text-gray-300 text-lg font-semibold tracking-tight leading-relaxed">
                          {project.strategy}
                        </p>
                      </div>

                      <div className="space-y-8 border-t border-gray-400 pt-4">
                        <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                          Technology
                        </h3>
                        <ul className="space-y-1">
                          {project.techStack.map((tech, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-lg font-semibold tracking-tight leading-relaxed"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-8 border-t border-gray-400 pt-4">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                          Client
                        </h3>
                        <p className="text-gray-300 text-lg font-semibold tracking-tight leading-relaxed">
                          {project.client || "Various clients"}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Open Project link (always shown, positioned appropriately) */}
                <div
                  className={
                    project.strategy && project.strategy.trim() !== ""
                      ? "mt-8"
                      : "mt-6"
                  }
                >
                  <Link
                    href={project.liveUrl || project.githubUrl || "#"}
                    target="_blank"
                    className="group flex items-center gap-2 text-xl font-bold text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    <span>Open Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Full width vertical image gallery */}
            {project.images && project.images.length > 0 && (
              <div className="mt-24">
                <div className="space-y-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-auto object-contain "
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="">
            <p className="text-gray-300 text-sm font-semibold my-4 tracking-tight leading-relaxed">
              © 2024. Made with passion by Tiisetso Dinoko.
            </p>
          </div>
        </main>

        {/* Desktop: Next Project Navigation Container */}
        <div className="hidden lg:block fixed bottom-8 right-4 w-60 h-36 bg-white rounded-lg shadow-2xl z-40 p-3">
          <div className="flex flex-col h-full">
            {/* First row: Next Project with arrows */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center justify-between gap-10 w-full">
                <span className="text-black font-['Fira_Code',monospace] text-sm font-bold">
                  Next Project
                </span>
                <div className="flex items-end gap-2">
                  <button
                    onClick={prevProject}
                    className="p-1 hover:bg-gray-100 rounded transition-colors group"
                  >
                    <ArrowLeft className="w-5 h-5 text-black group-hover:text-purple-600 transition-colors" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-1 hover:bg-gray-100 rounded transition-colors group"
                  >
                    <ArrowRight className="w-5 h-5 text-black group-hover:text-purple-600 transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Second row: Next project name */}
            <div className="flex-1">
              <Link
                href={`/project/${nextProjectData?.slug}`}
                className="block h-full "
              >
                <h3 className="text-xl font-semibold text-black font-['Fira_Code',monospace] leading-tight">
                  {nextProjectData?.title || "No more projects"}
                </h3>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile: Scroll to top button - Purple arrow on hover */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded shadow-2xl z-40 flex items-center justify-center group"
          >
            <ArrowUp className="w-6 h-6 text-purple-600 group-hover:text-purple-800 transition-colors" />
          </button>
        )}
      </div>
      <style jsx global>{`
        ::selection {
          background-color: rgba(255, 200, 210, 0.4);
          color: white;
        }

        ::-moz-selection {
          background-color: rgba(255, 200, 210, 0.4);
          color: white;
        }

        * {
          -webkit-tap-highlight-color: rgba(255, 200, 210, 0.4);
        }
      `}</style>
    </>
  );
}
