/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SkillCategory, Skill } from "../types";
import { 
  Award, Terminal, CheckCircle2, 
  Brain, Database, Cpu, Cloud, Server, 
  ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillsViewProps {
  categories: SkillCategory[];
}

export default function SkillsView({ categories }: SkillsViewProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Helper to map category IDs to representative icons
  const getCategoryIcon = (categoryId: string | undefined, sizeClass = "w-6 h-6") => {
    switch (categoryId) {
      case "languages":
        return <Terminal className={sizeClass} />;
      case "backend_apis":
        return <Server className={sizeClass} />;
      case "databases":
        return <Database className={sizeClass} />;
      case "cloud_infra":
        return <Cloud className={sizeClass} />;
      case "ai_engineering":
        return <Brain className={sizeClass} />;
      case "system_design":
        return <Cpu className={sizeClass} />;
      default:
        return <Award className={sizeClass} />;
    }
  };

  // Find category for selected skill to display appropriate icon in detailed view
  const selectedSkillCategory = selectedSkill
    ? categories.find((c) => c.skills.some((s) => s.id === selectedSkill.id))
    : undefined;

  return (
    <main className="flex-1 w-full relative pb-24 px-[4%] md:px-12 mt-28">
      {/* Page Title & Visual Cue */}
      <div className="mb-12 text-left relative max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 mb-3">
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary-container animate-pulse" />
          <span className="text-[10px] font-bold text-primary-container uppercase tracking-widest font-mono">
            Technical Expertise Ledger
          </span>
        </div>
        <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-on-surface tracking-wide uppercase leading-none">
          Skills Dashboard
        </h1>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-sans">
          A modular inventory detailing core proficiencies, architectural methodologies, and specific stack specifications. Click on any individual node to inspect verified implementation and design patterns.
        </p>
      </div>

      {/* Primary Bento Grid Layout */}
 

      {/* Core Capabilities Title */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bebas text-2xl md:text-3xl text-on-surface tracking-wide uppercase">
          Core Capabilities
        </h2>
      </div>

      {/* Bento Grid of Core Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="rounded-xl bg-surface-container-high/40 border border-white/5 p-5 md:p-6 flex flex-col justify-between hover:border-primary-container/20 hover:bg-surface-container-high/60 transition-all duration-300 shadow-md group/card"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded bg-primary-container/5 text-primary-container border border-primary-container/10 group-hover/card:bg-primary-container/10 group-hover/card:text-primary-container transition-colors duration-300">
                    {getCategoryIcon(category.id, "w-5 h-5")}
                  </div>
                  <h3 className="font-bebas text-xl md:text-2xl text-on-surface tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>
                <span className="text-[10px] bg-white/5 text-secondary px-2 py-0.5 rounded font-mono font-semibold">
                  {category.skills.length} Items
                </span>
              </div>

              {/* Category Skills List */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-background/25 border border-transparent hover:border-white/5 hover:bg-background/60 transition-all duration-200 cursor-pointer group/item"
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className="font-sans text-sm font-semibold text-on-surface group-hover/item:text-primary-container transition-colors truncate">
                        {skill.title}
                      </span>
                      <span className="text-[9px] text-secondary/60 uppercase tracking-wider font-semibold">
                        {skill.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-secondary/35 group-hover/item:text-primary-container group-hover/item:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Skill Detailed Info Drawer/Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-surface-container-low max-w-lg w-full rounded-lg border border-white/10 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dynamic fully-code-styled header replacing unmaintainable images */}
              <div className="h-44 relative bg-gradient-to-br from-surface-container-highest to-surface-container-low flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
                {/* Tech grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
                
                {/* Pulsing visual glow and category icon */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="p-4 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container shadow-[0_0_20px_rgba(var(--primary-container),0.1)]">
                    {getCategoryIcon(selectedSkillCategory?.id, "w-8 h-8")}
                  </div>
                  <span className="text-[10px] text-secondary/60 uppercase tracking-widest font-mono font-bold">
                    {selectedSkillCategory?.title || "Core Capability"}
                  </span>
                </div>
                
                <button 
                  onClick={() => setSelectedSkill(null)} 
                  className="absolute top-4 right-4 bg-black/60 cursor-pointer text-white rounded-full p-1.5 hover:bg-black/95 transition-colors z-20"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bebas text-3xl text-on-surface tracking-wide leading-none">
                      {selectedSkill.title}
                    </h3>
                  </div>
                  <span className="bg-primary-container text-white text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {selectedSkill.level}
                  </span>
                </div>

                <p className="font-sans text-sm text-secondary leading-relaxed">
                  {selectedSkill.details}
                </p>

                {selectedSkill.specs && selectedSkill.specs.length > 0 && (
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-xs font-bold uppercase text-secondary/70 tracking-widest mb-3">
                      Demonstrated Proficiency Specs
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-secondary font-medium">
                      {selectedSkill.specs.map((spec, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                          <span className="truncate" title={spec}>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
