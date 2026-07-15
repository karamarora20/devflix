/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActiveFocus } from "../types";
import { Play, CheckCircle, Info, Flame, Award, Calendar } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ActiveFocusProps {
  items: ActiveFocus[];
}

export default function ActiveFocusRail({ items }: ActiveFocusProps) {
  const [selectedFocus, setSelectedFocus] = useState<ActiveFocus | null>(null);

  return (
    <section className="py-12 px-[4%] md:px-12 relative z-20 -mt-20 md:-mt-24">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-5 h-5 text-red-500 animate-pulse" />
        <h2 className="font-bebas text-3xl md:text-4xl text-on-surface tracking-wide">
          Current Employment (Active Production)
        </h2>
      </div>

      <div className="flex overflow-x-auto gap-5 pb-8 hide-scrollbar snap-x scroll-smooth">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedFocus(item)}
            className="min-w-[280px] md:min-w-[340px] bg-surface-container-high rounded-md overflow-hidden hover-scale group cursor-pointer snap-start flex-shrink-0 border border-white/5 hover:border-red-500/40 transition-all duration-300 shadow-md"
            id={`active-focus-${item.id}`}
          >
            {/* Visual Header / Poster Container */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.posterUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Active Status Badge */}
              <span className="absolute top-3 left-3 bg-red-600 text-white font-mono text-[9px] font-extrabold px-2 py-0.5 rounded tracking-widest flex items-center gap-1 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                {item.status}
              </span>

              {/* Company Indicator */}
              <span className="absolute bottom-3 left-3 text-white/90 text-xs font-semibold drop-shadow font-mono">
                {item.company}
              </span>
            </div>

            {/* Custom Watch Progress Bar */}
            <div className="w-full h-1 bg-white/20 relative">
              <div 
                className="h-full bg-red-600 transition-all duration-500" 
                style={{ width: `${item.progress}%` }}
              />
            </div>

            {/* Progress Label and Content */}
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center text-xs text-secondary/70 font-mono">
                <span>{item.duration}</span>
                <span className="text-red-500 font-bold">
                  {item.status === "ACTIVE NOW" ? "Current Role" : "Completed Season"}
                </span>
              </div>

              <h3 className="font-bebas text-2xl text-on-surface tracking-wide group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-secondary font-medium leading-relaxed truncate">
                {item.role}
              </p>
              
              <p className="text-[11px] text-secondary/80 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] text-red-500/80 hover:text-red-500 font-bold tracking-wider uppercase flex items-center gap-1">
                  <Play className="w-3 h-3 fill-red-500 text-red-500" />
                  Review Role Details
                </span>
                <span className="text-[10px] text-secondary/65 group-hover:text-on-surface transition-colors">
                  Tap for Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Focus Sprints Details Modal Overlay */}
      <AnimatePresence>
        {selectedFocus && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-surface-container-low max-w-lg w-full rounded-lg border border-white/10 overflow-hidden shadow-2xl relative"
              id="active-focus-modal"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFocus(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/90 text-white w-8 h-8 rounded-full flex items-center justify-center border border-white/10 cursor-pointer transition-colors"
              >
                ✕
              </button>

              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={selectedFocus.posterUrl} 
                  alt={selectedFocus.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-red-600 text-white font-mono text-[9px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase mb-2 inline-block">
                    {selectedFocus.status}
                  </span>
                  <h3 className="font-bebas text-4xl text-on-surface tracking-wide drop-shadow-md">
                    {selectedFocus.title}
                  </h3>
                  <p className="text-sm text-secondary/95 font-mono drop-shadow-sm mt-1">
                    {selectedFocus.role} • {selectedFocus.company}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-secondary uppercase font-mono block mb-1">
                    Tenure Engagement
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 rounded-full" style={{ width: `100%` }} />
                    </div>
                    <span className="text-sm font-bold text-red-500 font-mono shrink-0">
                      {selectedFocus.status === "ACTIVE NOW" ? "Fully Committed" : "Success Release"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface tracking-wide">
                    <Award className="w-4 h-4 text-red-500" />
                    Role Responsibilities & Achievements
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">
                    {selectedFocus.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-secondary/60 block mb-0.5">Timeline</span>
                    <span className="font-semibold text-on-surface flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      {selectedFocus.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-secondary/60 block mb-0.5">Current Phase</span>
                    <span className="font-semibold text-on-surface flex items-center gap-1 text-red-500">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                      {selectedFocus.status === "ACTIVE NOW" ? "Active Full-Time" : "Past Tenure"}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedFocus(null)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-sans text-xs font-bold cursor-pointer"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
