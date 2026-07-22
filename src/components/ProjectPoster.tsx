/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Project } from "../types";
import { Terminal, Cpu, Database, Sparkles, Workflow, Shield, Code, Server, Zap, Layers } from "lucide-react";

interface ProjectPosterProps {
  project: Project;
  aspectRatio?: "video" | "poster" | "wide" | "square" | "fill";
  className?: string;
  hoverScale?: boolean;
  showOverlayDetails?: boolean;
  altText?: string;
}

// Rich deterministic color & icon themes for procedural poster generation
const THEMES = [
  {
    bgGradient: "from-slate-950 via-slate-900 to-cyan-950",
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/40",
    glowColor: "rgba(6, 182, 212, 0.25)",
    topBarColor: "bg-cyan-500",
    icon: Terminal,
    category: "AI & SYSTEMS"
  },
  {
    bgGradient: "from-neutral-950 via-stone-900 to-red-950",
    accentColor: "text-red-400",
    borderColor: "border-red-500/30",
    badgeBg: "bg-red-500/10 text-red-300 border-red-500/40",
    glowColor: "rgba(239, 68, 68, 0.25)",
    topBarColor: "bg-red-600",
    icon: Cpu,
    category: "DEEP LEARNING"
  },
  {
    bgGradient: "from-slate-950 via-blue-950 to-indigo-950",
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/40",
    glowColor: "rgba(59, 130, 246, 0.25)",
    topBarColor: "bg-blue-500",
    icon: Database,
    category: "CLOUD ARCHITECTURE"
  },
  {
    bgGradient: "from-neutral-950 via-amber-950 to-stone-900",
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/40",
    glowColor: "rgba(245, 158, 11, 0.25)",
    topBarColor: "bg-amber-500",
    icon: Sparkles,
    category: "GEN AI PIPELINES"
  },
  {
    bgGradient: "from-slate-950 via-emerald-950 to-zinc-950",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
    glowColor: "rgba(16, 185, 129, 0.25)",
    topBarColor: "bg-emerald-500",
    icon: Workflow,
    category: "FULLSTACK & SERVICES"
  },
  {
    bgGradient: "from-slate-950 via-purple-950 to-zinc-950",
    accentColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    badgeBg: "bg-violet-500/10 text-violet-300 border-violet-500/40",
    glowColor: "rgba(139, 92, 246, 0.25)",
    topBarColor: "bg-violet-500",
    icon: Shield,
    category: "ENTERPRISE SECURITY"
  }
];

function getThemeForProject(project: Project) {
  let hash = 0;
  const str = project.id + project.title;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % THEMES.length;
  return THEMES[index];
}

export default function ProjectPoster({
  project,
  aspectRatio = "video",
  className = "",
  hoverScale = true,
  altText
}: ProjectPosterProps) {
  const [imageError, setImageError] = useState(false);

  // Aspect ratio classes mapping
  const aspectClasses = {
    video: "aspect-video",
    poster: "aspect-[2/3]",
    wide: "aspect-[16/10]",
    square: "aspect-square",
    fill: "w-full h-full"
  }[aspectRatio];

  const theme = getThemeForProject(project);
  const IconComponent = theme.icon;

  const hasImage = Boolean(project.posterUrl && project.posterUrl.trim() !== "" && !imageError);

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-surface-container-high border border-white/10 shadow-lg group/poster ${aspectClasses} ${className}`}
    >
      {hasImage ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={project.posterUrl}
            alt={altText || project.title}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover ${
              hoverScale ? "transition-transform duration-700 ease-out group-hover/poster:scale-105" : ""
            }`}
            referrerPolicy="no-referrer"
          />
          {/* Subtle glossy vignette framing */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : (
        /* Enhanced Procedural Cinematic Tech Cover */
        <div
          className={`w-full h-full bg-gradient-to-br ${theme.bgGradient} p-4 sm:p-5 flex flex-col justify-between relative select-none overflow-hidden border ${theme.borderColor} transition-colors duration-500`}
        >
          {/* Background Ambient Glow & Lighting */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 group-hover/poster:opacity-100 opacity-70"
            style={{ backgroundColor: theme.glowColor }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Micro Grid Mesh Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

          {/* Top Accent Brand Strip */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] ${theme.topBarColor} opacity-80`} />

          {/* Large Watermark Icon */}
          <div className="absolute -right-6 -bottom-6 opacity-[0.08] group-hover/poster:opacity-[0.14] transition-opacity duration-500 pointer-events-none transform -rotate-12 scale-150">
            <IconComponent className="w-36 h-36 text-white" />
          </div>

          {/* Top Bar Navigation & Badges */}
          <div className="relative z-10 flex justify-between items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${theme.topBarColor} animate-pulse`} />
              <span className="font-mono text-[9px] font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">
                {theme.category}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span
                className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border ${theme.badgeBg} uppercase tracking-wider shadow-sm`}
              >
                {project.level}
              </span>
              <span className="font-mono text-[10px] text-white/60 font-semibold tracking-wider">
                {project.year}
              </span>
            </div>
          </div>

          {/* Center Title & Metadata */}
          <div className="relative z-10 my-auto py-2">
            {/* Series Tagline */}
            <div className="flex items-center gap-1.5 mb-1">
              <Code className={`w-3.5 h-3.5 ${theme.accentColor} shrink-0`} />
              <span className="text-[10px] font-mono text-white/70 font-semibold tracking-wide uppercase truncate">
                {project.edition || "FEATURED PROJECT"}
              </span>
            </div>

            {/* Main Title with Display Styling */}
            <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight line-clamp-2 drop-shadow-md group-hover/poster:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Bottom Footer Details */}
          <div className="relative z-10 pt-2 border-t border-white/10 flex justify-between items-center text-[9px] font-mono text-white/70">
            <div className="flex items-center gap-1 truncate max-w-[80%]">
              <Layers className="w-3 h-3 text-white/40 shrink-0" />
              <span className="truncate font-medium text-white/80">
                {project.genres.slice(0, 3).join(" • ")}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-black/40 px-1.5 py-0.5 rounded border border-white/10 shrink-0">
              <Zap className={`w-2.5 h-2.5 ${theme.accentColor}`} />
              <span className="text-[8px] font-bold uppercase tracking-wider text-white/90">PROD</span>
            </div>
          </div>

          {/* Subtle Hover Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover/poster:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </div>
      )}
    </div>
  );
}
