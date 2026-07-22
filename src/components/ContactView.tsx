/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { Message } from "../types";
import { Play, Send, CheckCircle, FileText, Trash2, MailOpen, Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { MY_PROFILE } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ContactViewProps {
  onSendMessage: (message: Omit<Message, "id" | "timestamp">) => void;
  sentMessages: Message[];
  onDeleteMessage?: (id: string) => void;
}

export default function ContactView({ onSendMessage, sentMessages, onDeleteMessage }: ContactViewProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !text) return;
    onSendMessage({ name, email, text });
    setName("");
    setEmail("");
    setText("");
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-12 px-[4%] md:px-0">
      {/* Background Cinema Still */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity scale-102"
          style={{ backgroundImage: `url('${MY_PROFILE.workspaceBackground}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/95" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start relative z-10 px-4 md:px-12">
        {/* Left Column: Director Profile & Credits */}
        <div className="md:col-span-5 flex flex-col gap-8 md:pr-4">
          <div className="space-y-4">
            <h1 className="font-bebas text-3xl sm:text-5xl text-on-surface md:hidden mb-2 tracking-wide">
              CONTACT
            </h1>

            <div className="relative group cursor-default">
              <div className="w-full aspect-[2/3] md:aspect-[3/4] rounded-lg overflow-hidden border border-outline-variant/30 transition-transform duration-500 ease-out group-hover:scale-[1.02] bg-surface-container shadow-2xl relative">
                <img
                  alt="Karam Arora Portrait"
                  className="w-full h-full object-cover"
                  src={MY_PROFILE.portraitUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                {/* Match Score Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="text-green-500 font-bold text-sm shadow-md drop-shadow">
                    99% Match
                  </span>
                  <span className="bg-surface-container-high text-on-surface px-2.5 py-0.5 rounded text-[10px] font-bold w-fit opacity-90 border border-outline-variant/30 shadow-md">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bebas text-2xl text-on-surface mb-2 tracking-wide">
                Cast &amp; Crew
              </h2>
              <div className="h-[1px] w-full bg-outline-variant/30 mb-4" />

              <dl className="grid grid-cols-1 gap-4 text-sm">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-secondary w-24 flex-shrink-0 font-medium">Director:</dt>
                  <dd className="text-on-surface font-semibold">Karam Arora</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-secondary w-24 flex-shrink-0 font-medium">Producer:</dt>
                  <dd className="text-on-surface font-semibold">SDE 1 Backend &amp; AI Systems</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-secondary w-24 flex-shrink-0 font-medium">Genres:</dt>
                  <dd className="text-on-surface flex flex-wrap gap-2 font-semibold">
                    <span className="hover:text-primary-container transition-colors cursor-pointer">Python</span>
                    <span className="text-outline-variant/50">•</span>
                    <span className="hover:text-primary-container transition-colors cursor-pointer">FastAPI</span>
                    <span className="text-outline-variant/50">•</span>
                    <span className="hover:text-primary-container transition-colors cursor-pointer">AWS</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowResume(true)}
                className="w-full bg-inverse-surface text-on-secondary-fixed font-bold text-sm px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-secondary transition-colors duration-200 cursor-pointer shadow-lg hover:scale-[1.01]"
              >
                <Play className="w-4 h-4 fill-on-secondary-fixed text-on-secondary-fixed" />
                Play Resume (PDF Mode)
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Channels & Interactive Profiles */}
        <div className="md:col-span-7 flex flex-col justify-center h-full relative">
          <div className="bg-surface-container-low/85 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden group">
            {/* Subtle card lighting glow */}
            <div className="absolute -inset-10 bg-primary-container/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h1 className="font-bebas text-3xl sm:text-5xl md:text-[96px] text-on-surface mb-2 tracking-wide">
                DIRECT CHANNELS
              </h1>

              <p className="font-sans text-base text-secondary mb-8 max-w-xl leading-relaxed">
                Connect with Karam Arora through official channels or explore his active production codebases and professional networks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Channel */}
                <a
                  href="mailto:karam.arora2002@gmail.com"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">Primary Email</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">karam.arora2002@gmail.com</span>
                  </div>
                </a>

                {/* Phone Channel */}
                <a
                  href="tel:+918368055676"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">Hotline Support</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">+91 83680 55676</span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a
                  href="https://github.com/karamarora20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">Source Repository</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">github.com/karamarora20</span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href="https://www.linkedin.com/in/karam-arora-896952200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">LinkedIn Network</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">linkedin.com/in/karam-arora-896952200</span>
                  </div>
                </a>

                {/* LeetCode Channel */}
                <a
                  href="https://leetcode.com/u/arorakaram41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300 font-mono text-sm font-bold flex-shrink-0">
                      LC
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">LeetCode Profile</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">leetcode.com/u/arorakaram41</span>
                  </div>
                </a>

                {/* Resume PDF Channel */}
                <a
                  href="https://drive.google.com/file/d/1lfaIxNrlx4yEGvB8Bmnc4nuzgQ91gY8Y/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/channel flex flex-col justify-between bg-surface-container-high/30 border border-white/5 rounded-xl p-5 hover:bg-surface-container-high/70 hover:border-primary-container/30 transition-all duration-300 min-h-[140px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover/channel:bg-primary-container group-hover/channel:text-white transition-all duration-300">
                      <FileText className="w-5 h-5" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-secondary/30 group-hover/channel:text-on-surface transition-colors" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] font-bold text-secondary/60 font-mono uppercase block tracking-wider mb-1">Official Playbill</span>
                    <span className="text-sm font-semibold text-on-surface block truncate">Download Resume PDF</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Resume View Overlay */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-surface-container-low max-w-2xl w-full rounded-lg border border-white/10 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-surface-container-high px-6 py-4 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-container" />
                  <span className="font-semibold text-sm tracking-wide font-sans">
                    Karam Arora Resume.pdf - Reader Mode
                  </span>
                </div>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-secondary hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans text-xs md:text-sm text-secondary leading-relaxed">
                <div className="text-center space-y-2 border-b border-white/5 pb-6">
                  <h2 className="font-bebas text-4xl text-on-surface tracking-wide leading-none">KARAM ARORA</h2>
                  <p className="text-primary-container font-semibold">SDE 1 — Backend &amp; AI Systems Engineer</p>
                  <p className="text-xs font-mono">
                    <a href="mailto:karam.arora2002@gmail.com" className="hover:text-primary-container hover:underline transition-colors">karam.arora2002@gmail.com</a> | <a href="tel:+91-8368055676" className="hover:text-primary-container hover:underline transition-colors">+91-8368055676</a> | Bengaluru, India
                  </p>
                  <p className="text-[10px] text-secondary/60 font-mono">
                    <a href="https://github.com/karamarora20" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container hover:underline transition-colors">github.com/karamarora20</a> | <a href="https://www.linkedin.com/in/karam-arora-896952200/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container hover:underline transition-colors">linkedin.com/in/karam-arora-896952200</a> | <a href="https://leetcode.com/u/arorakaram41" target="_blank" rel="noopener noreferrer" className="hover:text-primary-container hover:underline transition-colors">leetcode.com/u/arorakaram41</a>
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Professional Experience</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Software Developer - Genpact, Bengaluru</span>
                      <span className="font-mono text-secondary">Jul 2024 - Present</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Led the design &amp; delivery of an AWS-based multimodal RAG system handling 1,000 concurrent users under sub-10s latency, boosting search correctness by 70%.</li>
                      <li>Engineered OpenSearch hybrid search pipelines (BM25 + vector + reranking) to optimize retrieval correctness on evaluated queries by 20%.</li>
                      <li>Designed DynamoDB single-table schemas for a warehouse inventory system handling 400K+ SKUs, guaranteeing single-digit millisecond latency.</li>
                      <li>Architected a fault-tolerant document ingestion pipeline using Lambda, SQS, and S3 with exponential backoff and dead-letter queues.</li>
                      <li>Built and maintained 50+ backend APIs using FastAPI, PostgreSQL, and MongoDB across AWS and Azure cloud platforms.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Application Engineering Intern - Genpact, Bengaluru</span>
                      <span className="font-mono text-secondary">Jan 2024 - Jun 2024</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Developed full-stack RAG solutions with Angular, Python, and AWS Bedrock/Kendra for intelligent document search.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Key Projects</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">TenantGuard — Multi-Tenant SaaS Backend</span>
                      <span className="font-mono text-secondary">Python, FastAPI, Postgres RLS</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Architected PostgreSQL Row-Level Security (RLS) policies for complete database tenant isolation.</li>
                      <li>Configured Redis sliding-window rate limiters and RBAC subscription metrics.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Automated Test Generation &amp; Execution System</span>
                      <span className="font-mono text-secondary">LangGraph, ChromaDB</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Engineered a 3-agent graph using LangGraph to automatically parse user stories and generate integration tests with a 70% pass rate.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Education</h3>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-on-surface">NIIT University - B.Tech in Computer Science</span>
                    <span className="font-mono text-secondary">2020 - 2024 | CGPA: 8.15 / 10</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Certifications &amp; Achievements</h3>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs font-sans">
                    <li><span className="font-bold text-on-surface">LeetCode Problem Solving:</span> Solved 400+ DSA problems covering algorithms and optimization.</li>
                    <li><span className="font-bold text-on-surface">AWS Certified Cloud Practitioner:</span> Earned the AWS CCP certification (Valid 2025 - 2028).</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-surface-container-high border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setShowResume(false)}
                  className="bg-primary-container cursor-pointer text-white px-5 py-2 rounded font-semibold text-xs hover:opacity-85"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
