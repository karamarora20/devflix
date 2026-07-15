/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, GraduationCap, Calendar, Award, BookOpen, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function ExperienceEducation() {
  const experiences = [
    {
      role: "Software Developer (SDE 1)",
      company: "Genpact",
      period: "Jul 2024 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Designed and delivered a multimodal RAG system supporting text and image searches, scaling smoothly to 1,000+ concurrent sessions.",
        "Engineered reliable asynchronous backends and automated event-driven messaging queues using FastAPI and Python.",
        "Optimized vector search capabilities with BM25 hybrid indexing and Cohere reranking architectures, achieving high correctness.",
        "Maintained scalable, secure Docker containers deployed within Amazon Web Services (AWS) ecosystem."
      ],
      highlights: ["AWS Bedrock", "FastAPI", "OpenSearch", "Docker"]
    },
    {
      role: "Application Engineering Intern",
      company: "Genpact",
      period: "Jan 2024 - Jun 2024",
      location: "Bengaluru, India",
      achievements: [
        "Assisted in packaging and containerizing legacy backend APIs using multi-stage Docker profiles.",
        "Contributed to asynchronous REST endpoint configurations, debugging, and mock telemetry trials.",
        "Wrote structural automation scripts to validate API responses and assisted in database schema migrations."
      ],
      highlights: ["Python", "Docker", "REST APIs", "PostgreSQL"]
    }
  ];

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering (CSE)",
    institution: "NIIT university",
    period: "2020 - 2024",
    location: "Rajasthan, India",
    details: "Graduated with strong foundations in Data Structures & Algorithms, Distributed Databases, Operating Systems, and Cloud Architectures.",
    coursework: ["Advanced Algorithms", "System Design", "Cloud Computing", "NoSQL Databases","Artificial Intelligence"]
  };

  return (
    <section className="py-16 px-[4%] md:px-12 relative z-20 space-y-12">
      {/* Visual Header */}
      <div>
        <div className="flex items-center gap-2 mb-1.5 text-primary-container font-mono text-xs font-bold tracking-widest uppercase">
          <Layers className="w-4 h-4 text-red-500" />
          Background & Credentials
        </div>
        <h2 className="font-bebas text-3xl md:text-5xl text-on-surface tracking-wide uppercase">
          Production Credits (CV)
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Experience - Left Columns (Col Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <Briefcase className="w-5 h-5 text-red-500" />
            <h3 className="font-bebas text-2xl text-on-surface tracking-wide">
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface-container-low border border-white/5 hover:border-red-500/20 p-6 rounded-lg relative overflow-hidden transition-all duration-300 shadow-xl group"
              >
                {/* Visual red vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h4 className="font-bebas text-2xl text-on-surface group-hover:text-red-500 transition-colors leading-none tracking-wide">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-secondary font-mono font-bold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-secondary/60">
                    <span className="flex items-center gap-1.5 sm:justify-end text-red-500 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="mt-0.5">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-xs text-secondary/85 leading-relaxed flex items-start gap-2">
                      <span className="text-red-500 font-extrabold mt-0.5 shrink-0">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.highlights.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold uppercase bg-surface-container-high text-secondary/90 px-2 py-0.5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education - Right Columns (Col Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <GraduationCap className="w-5 h-5 text-red-500" />
            <h3 className="font-bebas text-2xl text-on-surface tracking-wide">
              Education
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-surface-container-low border border-white/5 hover:border-red-500/20 p-6 rounded-lg relative overflow-hidden transition-all duration-300 shadow-xl group"
          >
            {/* Visual accent top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              <div>
                <span className="inline-block bg-red-600/10 text-red-500 border border-red-500/20 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase mb-2">
                  Academic Season
                </span>
                <h4 className="font-bebas text-3xl text-on-surface leading-none tracking-wide">
                  {education.degree}
                </h4>
                <p className="text-sm font-semibold text-primary-container font-sans mt-1">
                  {education.major}
                </p>
              </div>

              <div className="space-y-1.5 text-xs font-mono text-secondary/60 border-y border-white/5 py-3">
                <div className="flex justify-between">
                  <span>Institution:</span>
                  <span className="font-semibold text-on-surface text-right max-w-[180px] truncate" title={education.institution}>
                    {education.institution}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-semibold text-red-500">{education.period}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-semibold text-on-surface">{education.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold text-secondary uppercase font-mono block">
                  Curriculum Overview
                </span>
                <p className="text-xs text-secondary/80 leading-relaxed">
                  {education.details}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-bold text-secondary uppercase font-mono block">
                  Core Modules
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold bg-surface-container-high text-secondary/90 px-2 py-0.5 rounded border border-white/5">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
