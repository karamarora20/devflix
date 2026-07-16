/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SkillCategory, Skill } from "../types";
import { Play, Info, Award, Terminal, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillsViewProps {
  categories: SkillCategory[];
}

export default function SkillsView({ categories }: SkillsViewProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [viewProgressActive, setViewProgressActive] = useState(false);

  return (
    <main className="flex-1 w-full relative pb-24">
      {/* Hero Section: Ongoing Mastery (Server Room background) */}
      <section className="relative w-full min-h-[65vh] md:h-[820px] flex items-start md:items-end justify-start pt-4 md:pt-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/bg.png')" 
            }}
          />
          {/* Cinematic dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-[4%] pb-12">
          <div className="max-w-3xl">
            <h2 className="font-bebas text-2xl md:text-3xl text-primary-container mb-2 tracking-wider">
              Ongoing Mastery
            </h2>
            <h1 className="font-bebas text-5xl md:text-[96px] text-on-surface mb-2 leading-tight pt-1 tracking-wide">
              FASTAPI &amp; CLOUD INFRASTRUCTURE
            </h1>
            <p className="font-sans text-sm md:text-base text-secondary mb-8 max-w-2xl leading-relaxed">
              Designing high-throughput asynchronous services, containerizing cloud-native pipelines, and orchestrating multi-agent LLM systems. The next season of backend performance optimization starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setViewProgressActive(true)}
                className="bg-on-surface text-background font-bold text-sm md:text-base px-8 py-3 rounded-md flex items-center gap-2 hover:bg-secondary transition-colors cursor-pointer"
              >
                <Play className="w-5 h-5 fill-background text-background" />
                View Progress
              </button>
              
              <button 
                onClick={() => {
                  const fastApiSkill = categories
                    .flatMap(c => c.skills)
                    .find(s => s.id === "fastapi");
                  if (fastApiSkill) setSelectedSkill(fastApiSkill);
                }}
                className="bg-surface-container-high bg-opacity-70 text-on-surface border border-outline-variant font-bold text-sm md:text-base px-8 py-3 rounded-md flex items-center gap-2 hover:bg-surface-container-highest transition-colors cursor-pointer"
              >
                <Info className="w-5 h-5 text-on-surface" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Simulator Modal */}
      {viewProgressActive && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface-container-low max-w-lg w-full rounded-lg border border-white/10 overflow-hidden shadow-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bebas text-2xl text-primary-container tracking-wide flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Backend &amp; AI Engineering Learning Curve
              </h3>
              <button onClick={() => setViewProgressActive(false)} className="text-secondary hover:text-white">✕</button>
            </div>
            
            <p className="text-sm text-secondary mb-6 leading-relaxed">
              My progressive path through asynchronous application patterns, cloud-native caching layers, relational tenant isolation, and agentic AI graphs:
            </p>

            <div className="space-y-4 font-sans text-xs md:text-sm">
              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Asynchronous REST API Core (FastAPI)</span>
                  <span className="text-green-500">100% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Relational Tenant Isolation &amp; PostgreSQL RLS</span>
                  <span className="text-green-500">95% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[95%] rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>LangGraph Multi-Agent Workflows &amp; Vector Databases</span>
                  <span className="text-primary-container">80% In Progress</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[80%] rounded-full" />
                </div>
              </div>
            </div>

            <button 
              onClick={() => setViewProgressActive(false)}
              className="mt-6 w-full bg-primary-container text-white py-2 rounded-md font-bold text-sm"
            >
              Close Ledger
            </button>
          </div>
        </div>
      )}

      {/* Category Rows of Skill Tiles */}
      <div className="px-[4%] md:px-12 mt-12 flex flex-col gap-12">
        {categories.map((category) => (
          <section key={category.id} className="relative group">
            <h3 className="font-bebas text-2xl md:text-3xl text-on-surface mb-6 tracking-wide">
              {category.title}
            </h3>
            
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-8 pt-2 snap-x">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className="skill-card flex-none w-64 md:w-80 aspect-video bg-surface-container-high rounded-lg overflow-hidden relative border border-white/5 hover:border-primary-container/50 snap-start cursor-pointer transition-all duration-300 hover:scale-[1.04]"
                >
                  <img 
                    alt={skill.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                    src={skill.imageUrl} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h4 className="font-bebas text-xl md:text-2xl text-on-surface mb-1 tracking-wide">
                      {skill.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] md:text-xs font-bold text-green-500">
                        {skill.matchScore}% Match
                      </span>
                      <span className="text-[9px] md:text-[10px] text-secondary border border-surface-variant px-1.5 py-0.5 rounded uppercase font-semibold">
                        {skill.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
              <div className="h-44 relative">
                <img 
                  src={selectedSkill.imageUrl} 
                  alt={selectedSkill.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
                <button 
                  onClick={() => setSelectedSkill(null)} 
                  className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/95 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-green-500 uppercase tracking-widest block mb-1">
                      {selectedSkill.matchScore}% Match Rate
                    </span>
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

                <div className="border-t border-white/5 pt-4">
                  <h4 className="text-xs font-bold uppercase text-secondary/70 tracking-widest mb-3">
                    Demonstrated Proficiency Specs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-secondary font-medium">
                    {(selectedSkill.specs).map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                        <span className="truncate" title={spec}>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
