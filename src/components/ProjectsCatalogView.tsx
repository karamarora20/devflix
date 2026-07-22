import { useState } from "react";
import { Project } from "../types";
import { MY_PROFILE } from "../data";
import { Search, Filter, Star, Code, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ProjectPoster from "./ProjectPoster";

interface ProjectsCatalogViewProps {
  projects: Project[];
  onProjectSelect: (id: string) => void;
}

export default function ProjectsCatalogView({
  projects,
  onProjectSelect,
}: ProjectsCatalogViewProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"match" | "year" | "level">("match");
  const [searchQuery, setSearchQuery] = useState("");

  const genres = [
    { label: "All Genres", value: "All" },
    { label: "Python & AI", value: "Python" },
    { label: "FastAPI & APIs", value: "FastAPI" },
    { label: "AWS & Cloud", value: "AWS" },
    { label: "Databases & Vector DBs", value: "DB" }
  ];

  // Filtering logic
  const filtered = projects.filter((p) => {
    const matchesGenre = selectedGenre === "All" || p.genres.some(g => {
      const genreLower = g.toLowerCase();
      const selectedLower = selectedGenre.toLowerCase();
      if (selectedLower === "db") {
        return genreLower.includes("db") || genreLower.includes("sql") || genreLower === "redis" || genreLower === "opensearch";
      }
      if (selectedLower === "aws") {
        return genreLower.includes("aws") || genreLower === "s3" || genreLower === "sqs" || genreLower === "dynamodb";
      }
      return genreLower.includes(selectedLower);
    });

    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.techStack.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "year") {
      return b.year.localeCompare(a.year);
    }
    if (sortBy === "level") {
      const levelWeight = { "Expert": 4, "Advanced": 3, "Intermediate": 2, "Beginner": 1 };
      return (levelWeight[b.level] || 0) - (levelWeight[a.level] || 0);
    }
    return 0;
  });

  return (
    <div className="relative w-full min-h-[85vh] overflow-hidden">
      {/* Background image backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-102"
          style={{ backgroundImage: `url('${MY_PROFILE.workspaceBackground}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <section className="relative z-10 py-20 px-[4%] md:px-12 max-w-7xl mx-auto space-y-16">
        {/* 1. Cinematic Stats Bar (Fills out the sparse content feeling beautifully) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-surface-container-low/60 p-6 md:p-8 rounded-xl border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <BarChart2 className="w-24 h-24 text-white" />
          </div>
          
          <div className="space-y-1 md:space-y-2 border-r border-white/5 pr-4">
            <span className="text-[10px] font-bold tracking-widest text-secondary font-mono uppercase block">Full-Stack Active</span>
            <h2 className="font-bebas text-3xl md:text-5xl text-on-surface tracking-wide">2+ Seasons</h2>
            <p className="text-xs text-secondary/70">Years of systems & application releases</p>
          </div>

          <div className="space-y-1 md:space-y-2 lg:border-r border-white/5 pl-2 md:pl-4">
            <span className="text-[10px] font-bold tracking-widest text-secondary font-mono uppercase block">Critics' Consensus</span>
            <h2 className="font-bebas text-3xl md:text-5xl text-green-500 tracking-wide flex items-center gap-1.5">
              <Star className="w-5 h-5 fill-green-500 text-green-500 hidden sm:inline" />
              94% Fresh
            </h2>
            <p className="text-xs text-secondary/70">Average peer recommendation rating</p>
          </div>

          <div className="space-y-1 md:space-y-2 border-r border-white/5 pl-2 md:pl-4">
            <span className="text-[10px] font-bold tracking-widest text-secondary font-mono uppercase block">Codebase Telemetry</span>
            <h2 className="font-bebas text-3xl md:text-5xl text-primary-container tracking-wide">4,800+</h2>
            <p className="text-xs text-secondary/70 font-mono">lines of code written</p>
          </div>

          <div className="space-y-1 md:space-y-2 pl-2 md:pl-4">
            <span className="text-[10px] font-bold tracking-widest text-secondary font-mono uppercase block">Uptime Target</span>
            <h2 className="font-bebas text-3xl md:text-5xl text-on-surface tracking-wide">99.98%</h2>
            <p className="text-xs text-secondary/70">Continuous integration target achieved</p>
          </div>
        </div>

        {/* 2. Interactive Catalog Header & Filter Controllers */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-bebas text-3xl sm:text-5xl md:text-[96px] text-on-surface tracking-wide uppercase leading-none">
                Catalog Titles
              </h1>
              <p className="text-secondary text-sm max-w-md mt-2">
                Browse original software series releases. Filter by tech genres, sort by scores, or find targeted key systems.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search by tech, stack, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container-high/60 border border-white/10 rounded-md py-2.5 pl-10 pr-4 text-xs font-medium text-on-surface placeholder:text-secondary/50 focus:outline-none focus:border-primary-container focus:bg-surface-container-high transition-all"
              />
            </div>
          </div>

          {/* Categories Bar & Sorting */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pt-4 border-t border-white/5">
            {/* Genre bubbles */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {genres.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setSelectedGenre(g.value)}
                  className={`text-xs px-4 py-2 rounded-full font-semibold cursor-pointer transition-all border ${
                    selectedGenre === g.value
                      ? "bg-white text-black border-white shadow"
                      : "bg-surface-container-high text-secondary hover:text-on-surface border-white/5 hover:border-white/15"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Sorting trigger */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-auto text-xs font-medium text-secondary">
              <span className="flex items-center gap-1.5 font-semibold">
                <Filter className="w-3.5 h-3.5" />
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-surface-container-high border border-white/10 text-on-surface text-xs rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:border-primary-container transition-all"
              >
                <option value="year">Release Year (Newest)</option>
                <option value="level">Level (Expert First)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Catalog Video Grid */}
        <AnimatePresence mode="popLayout">
          {sorted.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {sorted.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={p.id}
                  onClick={() => onProjectSelect(p.id)}
                  className="bg-surface-container-high rounded-md overflow-hidden cursor-pointer group border border-white/5 hover:border-primary-container/30 transition-all duration-300 shadow hover:scale-[1.03]"
                  id={`catalog-project-${p.id}`}
                >
                  {/* Poster Display */}
                  <div className="aspect-[16/10] sm:aspect-[2/3] overflow-hidden relative">
                    <ProjectPoster project={p} aspectRatio="wide" className="sm:aspect-[2/3]" hoverScale={true} />
                    {/* Subtle vignette gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

                    {/* Level text */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="font-mono text-[9px] text-white font-extrabold bg-red-600/90 px-1.5 py-0.5 rounded tracking-wide uppercase shadow">
                        {p.level}
                      </span>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-4 space-y-2.5">
                    <div className="flex justify-between items-center text-xs text-secondary/60">
                      <span>{p.year}</span>
                      <span className="truncate max-w-[150px] text-[10px] font-mono text-secondary/80">
                        {p.edition}
                      </span>
                    </div>

                    <h3 className="font-bebas text-2xl text-on-surface tracking-wide group-hover:text-primary-container transition-colors truncate">
                      {p.title}
                    </h3>

                    <p className="text-xs text-secondary line-clamp-2 leading-relaxed min-h-[32px]">
                      {p.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                      {p.genres.map((g) => (
                        <span key={g} className="text-[9px] font-semibold bg-white/5 border border-white/5 px-2 py-0.5 rounded text-secondary">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-surface-container-low/40 rounded-xl border border-white/5"
            >
              <div className="max-w-md mx-auto space-y-4">
                <Code className="w-12 h-12 text-secondary/40 mx-auto" />
                <h3 className="font-bebas text-2xl text-white tracking-wide">No Titles Found</h3>
                <p className="text-xs text-secondary">
                  We couldn't find any releases under your filter queries. Try selecting another technology track or adjusting your search parameters.
                </p>
                <button
                  onClick={() => { setSelectedGenre("All"); setSearchQuery(""); }}
                  className="text-xs font-bold text-primary-container bg-primary-container/10 border border-primary-container/20 px-4 py-2 rounded hover:bg-primary-container/20 transition-all cursor-pointer"
                >
                  Reset Search Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
