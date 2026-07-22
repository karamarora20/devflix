/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Project } from "../types";
import { Play, Code, ArrowLeft, Lock } from "lucide-react";
import ProjectPoster from "./ProjectPoster";

interface ProjectDetailViewProps {
  project: Project;
  allProjects: Project[];
  onProjectSelect: (id: string) => void;
  onBackClick: () => void;
}

export default function ProjectDetailView({
  project,
  allProjects,
  onProjectSelect,
  onBackClick,
}: ProjectDetailViewProps) {
  const [activeTab, setActiveTab] = useState<"episodes" | "trailers" | "moreLikeThis">("episodes");
  const [demoActive, setDemoActive] = useState(false);

  // Filter other projects for the "More Like This" section
  const otherProjects = allProjects.filter((p) => p.id !== project.id);

  return (
    <main className="w-full relative pb-20">
      {/* Back Button */}
      <button 
        onClick={onBackClick}
        className="fixed top-28 left-6 md:left-16 z-40 bg-black/60 hover:bg-black/95 text-white p-3 rounded-full border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
        title="Back to Projects"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Hero Section (Massive Billboard) */}
      <section className="relative w-full min-h-[70vh] md:h-[820px] flex items-start md:items-end justify-start pt-4 md:pt-0 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-102"
            style={{ backgroundImage: `url('${project.billboardUrl}')` }}
          />
          {/* Cinematic dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-[4%] pb-4 md:pb-6 md:w-[65%] lg:w-[50%]">
          {/* Genre / Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {project.genres.map((g, idx) => (
              <span key={g} className="flex items-center">
                <span className="font-semibold text-[10px] md:text-xs text-secondary tracking-widest uppercase">
                  {g}
                </span>
                {idx < project.genres.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container mx-2" />
                )}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-bebas text-4xl md:text-7xl lg:text-[85px] leading-tight pt-1 text-on-surface uppercase mb-2 mt-1 drop-shadow-xl select-none">
            {project.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-xs md:text-sm">
            <span className="text-secondary font-medium">{project.year}</span>
            <span className="border border-outline/50 text-secondary px-2 py-0.5 rounded text-[10px] md:text-xs uppercase tracking-wider font-semibold">
              {project.level}
            </span>
            <span className="text-secondary/90 font-medium">{project.edition}</span>
          </div>

          {/* Description */}
          <p className="font-sans text-sm md:text-base text-on-surface/90 mb-8 drop-shadow-md leading-relaxed">
            {project.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setDemoActive(true)}
              className="bg-white hidden text-black px-8 py-3 rounded-md font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300 hover:scale-[1.03]"
            >
              <Play className="w-4 h-4 fill-black text-black" />
              Live Demo
            </button>
            
            {project.url ? (
              <a 
                href={project.url}
                target="_blank" 
                rel="noreferrer"
                className="bg-surface-variant/80 backdrop-blur text-on-surface px-8 py-3 rounded-md font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all duration-300 border border-white/10 hover:scale-[1.03]"
              >
                <Code className="w-4 h-4" />
                View Code
              </a>
            ) : (
              <div 
                className="bg-surface-container-high/40 text-secondary/80 px-8 py-3 rounded-md font-bold text-xs md:text-sm flex items-center justify-center gap-2 border border-white/10 cursor-default select-none group"
                title="This is a proprietary production system built for enterprise workflows."
              >
                <Lock className="w-4 h-4 text-red-500 group-hover:animate-bounce" />
                <span>Enterprise Product (Proprietary)</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Demo Overlay Simulator */}
      {demoActive && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface-container-low max-w-4xl w-full rounded-lg border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-surface-container-high px-6 py-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-3 font-semibold text-sm text-secondary tracking-wide">
                  {project.title} - System Console Simulator v4.2
                </span>
              </div>
              <button 
                onClick={() => setDemoActive(false)}
                className="text-secondary hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-8 font-mono text-xs md:text-sm text-green-400 bg-black space-y-4 max-h-[60vh] overflow-y-auto">
              <div>&gt; INIT SYSTEM PROTOCOLS... OK</div>
              <div>&gt; ESTABLISHING WEBSOCKET CHANNEL TO SERVER POOL [13.19.0.4]... SUCCESS</div>
              <div>&gt; SEEDING MEMORY BUFFER AND D3 GRAPH CLUSTERS... OK</div>
              <div className="text-white bg-primary-container/20 p-4 rounded border border-primary-container/30">
                <span className="font-bold text-primary-container">SYSTEM NOTICE:</span> Immersive simulator active. Connecting to database schemas and authenticating root developer account...
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded border border-white/10 text-on-surface">
                  <h4 className="font-bold text-green-500 mb-2">Metrics Feed</h4>
                  <p>Status: ACTIVE</p>
                  <p>Database Latency: 12ms</p>
                  <p>Ingestion Stream: 48,290 items/sec</p>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10 text-on-surface">
                  <h4 className="font-bold text-green-500 mb-2">Service Cluster</h4>
                  <p>Active Instances: 16</p>
                  <p>Node.js Health: 99.4%</p>
                  <p>Redis Cache Hits: 98.2%</p>
                </div>
              </div>
              <button 
                onClick={() => setDemoActive(false)}
                className="mt-4 bg-primary-container hover:bg-opacity-80 text-white px-4 py-2 rounded font-sans font-bold"
              >
                Close Simulator Console
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Content Container */}
      <div className="w-full px-[4%] md:px-12 mt-16">
        {/* Section Tab Selectors */}
        <div className="flex items-center gap-8 border-b border-surface-variant/30 mb-12">
          <button 
            onClick={() => setActiveTab("episodes")}
            className={`font-bebas text-xl md:text-2xl pb-4 transition-colors ${
              activeTab === "episodes" 
                ? "text-on-surface border-b-4 border-primary-container" 
                : "text-secondary hover:text-on-surface"
            }`}
          >
            Episodes (Key Features)
          </button>

          <button 
            onClick={() => setActiveTab("moreLikeThis")}
            className={`font-bebas text-xl md:text-2xl pb-4 transition-colors ${
              activeTab === "moreLikeThis" 
                ? "text-on-surface border-b-4 border-primary-container" 
                : "text-secondary hover:text-on-surface"
            }`}
          >
            More Like This
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column depending on selected Tab */}
          <div className="lg:col-span-8">
            {activeTab === "episodes" && (
              <div className="flex flex-col gap-4">
                <h2 className="font-bebas text-2xl md:text-3xl text-on-surface mb-4">
                  Key Features
                </h2>
                {project.features.map((feature, idx) => (
                  <div 
                    key={feature.id}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 py-6 border-b border-surface-variant/20 hover:bg-surface-container-low transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-pointer group"
                  >
                    <div className="font-bebas text-4xl md:text-5xl text-surface-variant group-hover:text-on-surface transition-colors w-12 shrink-0">
                      {idx + 1}
                    </div>

                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-2 gap-4">
                        <h3 className="font-bold text-base md:text-lg text-on-surface tracking-wide">
                          {feature.title}
                        </h3>
                        <span className="font-mono text-xs text-primary-container font-semibold bg-primary-container/10 px-2 py-0.5 rounded">
                          {feature.version}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "moreLikeThis" && (
              <div>
                <h2 className="font-bebas text-2xl md:text-3xl text-on-surface mb-6">
                  Recommended Projects for You
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {otherProjects.map((p) => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        onProjectSelect(p.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-surface-container-high rounded overflow-hidden cursor-pointer group border border-white/5 hover:border-primary-container/30 transition-all duration-300 shadow hover:scale-[1.03]"
                    >
                      <div className="aspect-[2/3] overflow-hidden relative">
                        <ProjectPoster project={p} aspectRatio="poster" hoverScale={true} />
                      </div>
                      <div className="p-3">
                        <h3 className="font-bebas text-lg text-on-surface tracking-wide group-hover:text-primary-container transition-colors truncate">
                          {p.title}
                        </h3>
                        <p className="text-[10px] text-secondary truncate">
                          {p.genres.join(" • ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: About details */}
          <div className="lg:col-span-4 pl-0 lg:pl-8 border-l border-white/5 space-y-6">
            <h2 className="font-bebas text-2xl md:text-3xl text-on-surface mb-6">
              About Title
            </h2>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <span className="font-semibold text-secondary block text-xs tracking-wider uppercase mb-1">
                  Tech Stack
                </span>
                <p className="text-on-surface font-medium">{project.techStack}</p>
              </div>

              <div>
                <span className="font-semibold text-secondary block text-xs tracking-wider uppercase mb-1">
                  Role Played
                </span>
                <p className="text-on-surface font-medium">{project.role}</p>
              </div>

              <div>
                <span className="font-semibold text-secondary block text-xs tracking-wider uppercase mb-1">
                  Duration
                </span>
                <p className="text-on-surface font-medium">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
