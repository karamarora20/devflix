/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Info, ChevronDown, ChevronUp, Terminal, Cpu, Database, Zap, Sparkles } from "lucide-react";
import { useState } from "react";
import { MY_PROFILE } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface BillboardProps {
  onPlayClick: () => void;
  onMoreInfoClick?: () => void;
}

export default function Billboard({ onPlayClick }: BillboardProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [activeTab, setActiveTab] = useState<"dossier" | "interview" | "specs">("dossier");
  const [expandedQa, setExpandedQa] = useState<number | null>(0);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const stats = [
    { label: "Algorithms", val: "400+ LeetCode", icon: <Cpu className="w-4 h-4 text-red-500" /> },
    { label: "APIs In Prod", val: "50+ Active", icon: <Terminal className="w-4 h-4 text-red-500" /> },
    { label: "Cloud Badge", val: "AWS Certified", icon: <Zap className="w-4 h-4 text-red-500" /> },
    { label: "RAG Accuracy", val: "+70% Gain", icon: <Sparkles className="w-4 h-4 text-red-500" /> }
  ];

  const interviewQA = [
    {
      q: "How do you handle severe database scaling bottlenecks?",
      a: "By leveraging DynamoDB single-table design with GSIs to achieve sub-10ms read latency, paired with advanced Redis sliding-window caching and PostgreSQL Row-Level Security for multi-tenant isolation."
    },
    {
      q: "What is your approach to optimizing search correctness in RAG?",
      a: "I deploy hybrid search pipelines (BM25 keyword matches + vector embedding indexes) coupled with Cohere reranking stages. I also replace traditional OCR extraction with LLM-generated contextual descriptions for a 70% accuracy boost."
    },
    {
      q: "How do you structure resilient asynchronous architectures?",
      a: "Using FastAPI, Python AsyncIO, and SQS event message queues with dead-letter queue (DLQ) pathways, exponential retry patterns, and containerized microservices managed via AWS Docker tasks."
    }
  ];

  return (
    <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-20 px-[4%] md:px-12 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full transform scale-105 animate-pulse-slow"
          style={{ backgroundImage: `url('${MY_PROFILE.workspaceBackground}')` }}
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 max-w-3xl md:max-w-none w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 bg-primary-container text-white flex items-center justify-center font-bold text-xs rounded-sm">N</span>
          <span className="text-secondary tracking-widest text-xs font-bold uppercase">Original Developer Series</span>
        </div>

        <h1 className="font-bebas text-6xl sm:text-7xl md:text-[120px] text-on-surface leading-none pt-2 mb-3 tracking-wide drop-shadow-xl select-none">
          KARAM ARORA
        </h1>

        <div className="mb-8 w-full md:w-[70vw] md:max-w-none">
          <p className={`font-sans text-base md:text-lg text-on-surface-variant drop-shadow-md leading-relaxed ${isBioExpanded ? "" : "line-clamp-3 md:line-clamp-none"}`}>
            {MY_PROFILE.bio}
          </p>
          <button
            onClick={() => setIsBioExpanded(!isBioExpanded)}
            className="md:hidden mt-2 text-xs font-bold text-red-500 hover:text-red-400 focus:outline-none transition-colors"
          >
            {isBioExpanded ? "See less" : "See more"}
          </button>
        </div>

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
            className={`px-8 py-3 rounded-md transition-all duration-200 font-bold text-sm md:text-base flex items-center gap-2 border shadow-md hover:scale-[1.03] ${
              showMoreInfo 
                ? "bg-red-600 border-red-500 text-white" 
                : "bg-surface-container/80 backdrop-blur border-surface-variant border-opacity-50 text-white hover:bg-surface-variant"
            }`}
          >
            <Info className="w-5 h-5" />
            {showMoreInfo ? "Hide Details" : "More Info"}
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
              className="mt-8 p-6 rounded-lg bg-surface-container-high/95 backdrop-blur-md border border-white/10 max-w-2xl shadow-2xl relative z-20"
            >
              {/* Header inside drawer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={MY_PROFILE.portraitUrl}
                    alt="Karam Portrait"
                    className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-md"
                  />
                  <div>
                    <h3 className="font-bebas text-xl text-on-surface tracking-wide">
                      Executive Production Dossier
                    </h3>
                    <p className="text-[10px] font-mono text-secondary">BUILDER ID: SYSTEM_SDE_KARAM</p>
                  </div>
                </div>
                {/* Tab Controls */}
                <div className="flex bg-surface-container-low p-1 rounded-md border border-white/5 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveTab("dossier")}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-all ${
                      activeTab === "dossier" ? "bg-red-600 text-white shadow-sm" : "text-secondary hover:text-white"
                    }`}
                  >
                    Behind The Scenes
                  </button>
                  <button
                    onClick={() => setActiveTab("interview")}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-all ${
                      activeTab === "interview" ? "bg-red-600 text-white shadow-sm" : "text-secondary hover:text-white"
                    }`}
                  >
                    Director's Q&amp;A
                  </button>
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-all ${
                      activeTab === "specs" ? "bg-red-600 text-white shadow-sm" : "text-secondary hover:text-white"
                    }`}
                  >
                    Production Gear
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[180px]">
                {/* Tab 1: Dossier / Behind the Scenes */}
                {activeTab === "dossier" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <p className="text-xs text-secondary/90 leading-relaxed font-sans">
                      A deep-dive review of Karam's engineering outputs. Currently focused on building high-performance APIs and advanced agentic AI architectures designed to mitigate production bottlenecks.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {stats.map((st, i) => (
                        <div key={i} className="bg-surface-container-low border border-white/5 p-3 rounded flex flex-col justify-between hover:border-red-500/20 transition-all duration-300">
                          <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono font-bold text-secondary uppercase">
                            {st.icon}
                            {st.label}
                          </div>
                          <span className="text-sm font-semibold text-on-surface">{st.val}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Tab 2: Q&A / Interview */}
                {activeTab === "interview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2.5"
                  >
                    {interviewQA.map((item, i) => {
                      const isExpanded = expandedQa === i;
                      return (
                        <div
                          key={i}
                          className="bg-surface-container-low border border-white/5 rounded overflow-hidden"
                        >
                          <button
                            onClick={() => setExpandedQa(isExpanded ? null : i)}
                            className="w-full text-left p-3 flex justify-between items-center hover:bg-white/5 transition-all"
                          >
                            <span className="text-xs font-semibold text-on-surface pr-4">{item.q}</span>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-red-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-secondary shrink-0" />}
                          </button>
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-white/5 bg-surface-container-high/30"
                              >
                                <p className="p-3 text-[11px] text-secondary/90 leading-relaxed font-mono">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}

                {/* Tab 3: Production Specs / Gear */}
                {activeTab === "specs" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
                  >
                    <div className="space-y-3 bg-surface-container-low/50 p-4 rounded border border-white/5">
                      <h4 className="font-mono font-bold text-[10px] text-red-500 uppercase tracking-wider mb-2">Core Core Engine (Backend)</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between font-mono text-[10px] text-secondary mb-1">
                            <span>FastAPI, Python &amp; AsyncIO</span>
                            <span>Expert</span>
                          </div>
                          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 rounded-full" style={{ width: "98%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-mono text-[10px] text-secondary mb-1">
                            <span>PostgreSQL Row-Level Security</span>
                            <span>Expert</span>
                          </div>
                          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 rounded-full" style={{ width: "95%" }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 bg-surface-container-low/50 p-4 rounded border border-white/5">
                      <h4 className="font-mono font-bold text-[10px] text-red-500 uppercase tracking-wider mb-2">Cognitive Systems (Applied AI)</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between font-mono text-[10px] text-secondary mb-1">
                            <span>LangGraph Multi-Agent Workflows</span>
                            <span>Expert</span>
                          </div>
                          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 rounded-full" style={{ width: "96%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-mono text-[10px] text-secondary mb-1">
                            <span>Hybrid Search &amp; RAG Systems</span>
                            <span>Expert</span>
                          </div>
                          <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 rounded-full" style={{ width: "98%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

