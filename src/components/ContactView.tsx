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
                  <dd className="text-on-surface font-semibold">Senior AI Engineer — Backend &amp; AI Systems</dd>
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
              className="bg-surface-container-low max-w-2xl w-full max-h-[80vh] sm:max-h-[85vh] flex flex-col rounded-lg border border-white/10 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-surface-container-high px-4 py-3 md:px-6 md:py-4 border-b border-white/5 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-5 h-5 text-primary-container shrink-0" />
                  <span className="font-semibold text-sm tracking-wide font-sans truncate">
                    Karam Arora Resume.pdf - Reader Mode
                  </span>
                </div>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-secondary hover:text-white p-1 shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-6 max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] overflow-y-auto font-sans text-xs md:text-sm text-secondary leading-relaxed flex-1">
                <div className="text-center space-y-2 border-b border-white/5 pb-6">
                  <h2 className="font-bebas text-4xl text-on-surface tracking-wide leading-none">KARAM ARORA</h2>
                  <p className="text-primary-container font-semibold">Senior AI Engineer — Backend &amp; AI Systems Engineer</p>
                  <p className="text-xs font-mono">
                    <a href="mailto:karam.arora2002@gmail.com" className="hover:text-primary-container hover:underline transition-colors">karam.arora2002@gmail.com</a> | <a href="tel:+91-8368055676" className="hover:text-primary-container hover:underline transition-colors">+91-8368055676</a> | Bengaluru, India
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Summary</h3>
                  <p className="text-secondary/80 text-xs md:text-sm">
                    Backend engineer with 2+ years of production experience building scalable APIs, event-driven pipelines, and cloud-native systems on AWS. Applied that foundation to AI — designing retrieval systems, agentic pipelines, and LLM infrastructure that solves real accuracy and scalability problems.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Professional Experience</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Senior AI Engineer | Genpact, Bengaluru</span>
                      <span className="font-mono text-secondary">Oct 2026 – Present</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">AI Engineer | Genpact, Bengaluru</span>
                      <span className="font-mono text-secondary">Jul 2024 – Sep 2026</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Led design and delivery of a multimodal RAG system on AWS (Bedrock, OpenSearch, S3), handling 1,000 concurrent users under sub-10s latency — replaced Textract OCR with LLM-generated image descriptions (+70% retrieval accuracy) and added a hybrid BM25 + vector search pipeline with a reranker (+20% correctness over dense-only baseline).</li>
                      <li>Designed single-table DynamoDB schema with GSIs for the stock management system, handling 400K+ SKUs at single-digit millisecond read latency.</li>
                      <li>Architected a fault-tolerant async document ingestion pipeline using AWS Lambda, SQS, and S3, with exponential backoff and dead-letter queues for failed messages.</li>
                      <li>Built backend systems and database design for 4 production-grade Gen AI POCs under a Genpact–AWS partnership across supply chain domains, adopted by Technical Consulting for client deployment pitches.</li>
                      <li>Built and maintained backend APIs and services using FastAPI, PostgreSQL, and MongoDB across AWS and Azure, supporting production workflow systems.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Application Engineering Intern | Genpact, Bengaluru</span>
                      <span className="font-mono text-secondary">Jan 2024 – Jun 2024</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Built a full-stack RAG application using Angular, Python, AWS Bedrock, and Amazon Kendra for intelligent document retrieval and question-answering, contributing to cloud deployment and event-driven indexing pipelines.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Projects</h3>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">TenantGuard — Multi-Tenant SaaS Backend</span>
                      <span className="font-mono text-secondary">FastAPI, PostgreSQL RLS</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Architected a multi-tenant SaaS backend using FastAPI and PostgreSQL Row-Level Security (RLS), enforcing tenant isolation at the database layer — making cross-tenant data leaks structurally impossible even if application code has a bug, with JWT authentication and session-scoped tenant context.</li>
                      <li>Implemented Redis-backed sliding-window rate limiting and Role-Based Access Control (RBAC) with subscription-aware quotas for Free, Pro, and Enterprise tenants.</li>
                      <li>Built asynchronous REST APIs using SQLAlchemy Async for order and invoice management, with per-tenant API usage metering, an invoice state machine (draft→issued→paid/void), and overage-based billing simulation.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-on-surface">Automated Test Generation and Execution System</span>
                      <span className="font-mono text-secondary">LangGraph, ChromaDB</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs">
                      <li>Built a 3-agent LangGraph pipeline (Scenario Generator, Validator, Test Generator) that converts user stories and acceptance criteria into executable integration tests, achieving a 70% pass rate across a 20-API backend.</li>
                      <li>Implemented RAG-based API selection using ChromaDB and OpenAPI specs to scope test generation to only relevant endpoints, with async execution, persistent state, failure recovery, and non-blocking email notifications.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Education</h3>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-on-surface">B.Tech in Computer Science at NIIT University</span>
                    <span className="font-mono text-secondary">2020 – 2024 | CGPA: 8.15/10</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="font-bebas text-xl text-on-surface tracking-wide border-b border-white/5 pb-1">Certifications &amp; Achievements</h3>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-secondary/80 text-xs font-sans">
                    <li><span className="font-bold text-on-surface">LeetCode Problem Solving:</span> Ongoing — solved 400+ DSA problems covering algorithms, data structures, and optimization techniques.</li>
                    <li><span className="font-bold text-on-surface">AWS Certified Cloud Practitioner:</span> Earned the AWS Certified Cloud Practitioner certification (2025 – 2028).</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 md:p-4 bg-surface-container-high border-t border-white/5 flex justify-end shrink-0">
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
