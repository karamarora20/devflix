/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";
import { ChevronRight, Play } from "lucide-react";
import { useRef, useEffect } from "react";

interface ProjectRailProps {
  title?: string;
  projects: Project[];
  onProjectClick: (id: string) => void;
}

export default function ProjectRail({ title = "My List", projects, onProjectClick }: ProjectRailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || projects.length <= 1) return;

    let intervalId: any;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!container) return;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by approximately one card width (w-64 is 256px, w-80 is 320px) + gap
          const scrollAmount = window.innerWidth >= 768 ? 336 : 272; // width + gap
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3500);
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [projects]);

  return (
    <section className="py-16 px-[4%] md:px-12 relative z-20 -mt-24 md:-mt-32">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bebas text-3xl md:text-4xl text-on-surface tracking-wide">
          {title}
        </h2>
        <span className="text-xs text-secondary/70 flex items-center gap-1 cursor-pointer hover:text-on-surface transition-colors">
          Swipe/Scroll Left
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 pb-8 hide-scrollbar snap-x scroll-smooth"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.id)}
            className="flex-none w-64 md:w-80 aspect-video relative rounded-lg overflow-hidden hover-scale group cursor-pointer snap-start bg-surface-container-high border border-white/5 hover:border-primary-container/30 transition-all duration-300"
          >
            {/* Poster Image */}
            <img
              className="w-full h-full object-cover group-hover:scale-105 group-hover:blur-[3px] transition-all duration-500"
              src={project.posterUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay details - Cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-green-500 font-bold text-sm">
                  {project.matchScore}% Match
                </span>
                {/* <div className="flex gap-2">
                  <button className="p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white" title="Like">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white" title="Share">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div> */}
              </div>

              <h3 className="font-bebas text-2xl text-white mb-1 tracking-wide leading-none">
                {project.title}
              </h3>

              <p className="text-[10px] text-secondary font-bold tracking-wider uppercase mb-2">
                {project.genres.join(" • ")}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-white/95 mt-1 font-medium bg-primary-container/90 py-1.5 px-3 rounded text-center justify-center">
                <Play className="w-3 h-3 fill-white text-white" />
                View Details
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
