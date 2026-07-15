/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Info, Award, Code, CheckCircle } from "lucide-react";
import { useState } from "react";
import { MY_PROFILE } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface BillboardProps {
  onPlayClick: () => void;
  onMoreInfoClick?: () => void;
}

export default function Billboard({ onPlayClick }: BillboardProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <section className="relative min-h-[85vh] md:h-[870px] w-full flex items-start md:items-end pt-4 md:pt-0 pb-20 px-[4%] md:px-12 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full transform scale-105"
          style={{ backgroundImage: `url('${MY_PROFILE.workspaceBackground}')` }}
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 bg-primary-container text-white flex items-center justify-center font-bold text-xs rounded-sm">N</span>
          <span className="text-secondary tracking-widest text-xs font-bold uppercase">Original Developer</span>
        </div>

        <h1 className="font-bebas text-6xl sm:text-7xl md:text-[120px] text-on-surface leading-tight pt-2 mb-3 tracking-wide drop-shadow-xl select-none">
          KARAM ARORA
        </h1>

        <p className="font-sans text-base md:text-lg text-on-surface-variant mb-8 max-w-2xl drop-shadow-md leading-relaxed">
          {MY_PROFILE.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          {/* View Latest Work Button */}
          <button
            onClick={onPlayClick}
            className="bg-white text-black px-8 py-3 rounded-md hover:bg-opacity-80 transition-all duration-200 font-bold text-sm md:text-base flex items-center gap-2 shadow-lg hover:scale-[1.03]"
          >
            <Play className="w-5 h-5 fill-black text-black" />
            View Latest Work
          </button>

          {/* More Info Button */}
          <button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            className="bg-surface-container/80 backdrop-blur text-white px-8 py-3 rounded-md hover:bg-surface-variant transition-all duration-200 font-bold text-sm md:text-base flex items-center gap-2 border border-surface-variant border-opacity-50 shadow-md hover:scale-[1.03]"
          >
            <Info className="w-5 h-5 text-white" />
            {showMoreInfo ? "Hide Bio" : "More Info"}
          </button>
        </div>

        {/* Dynamic Interactive Bio Drawer (Visible on clicking More Info) */}
        <AnimatePresence>
          {showMoreInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-8 p-6 rounded-lg bg-surface-container-high/90 backdrop-blur-md border border-white/15 max-w-2xl shadow-2xl relative z-20"
            >
              <div className="flex gap-4 items-start">
                <img
                  src={MY_PROFILE.portraitUrl}
                  alt="Karam Portrait"
                  className="w-16 h-16 rounded-lg object-cover border border-white/20 shadow-md flex-shrink-0 hidden sm:block"
                />
                <div>
                  <h3 className="font-bebas text-2xl text-on-surface mb-2 tracking-wide flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary-container" />
                    Karam Arora | Developer Profile
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    Backend engineer with 2 years of production experience building scalable APIs, event-driven pipelines, and cloud-native systems on AWS. Specialize in FastAPI, PostgreSQL, AWS serverless and container orchestration, and building agentic AI graphs using LangGraph to solve complex real-world accuracy and scaling bottlenecks.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-container" />
                        <span className="text-secondary font-medium">Asynchronous APIs &amp; FastAPI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-container" />
                        <span className="text-secondary font-medium">RAG &amp; LangGraph Workflows</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-container" />
                        <span className="text-secondary font-medium">PostgreSQL &amp; DynamoDB Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary-container" />
                        <span className="text-secondary font-medium">AWS &amp; Cloud-Native Scaling</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
