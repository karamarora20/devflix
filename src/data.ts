/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Notification, ActiveFocus, Review } from "./types";

export const MY_PROFILE = {
  name: "Karam Arora",
  title: "SDE 1 — Backend Engineer & AI Systems Builder",
  avatarUrl: "/avatar.png",
  portraitUrl: "/avatar.png",
  workspaceBackground: "/bg.png",
  bio: "Backend engineer with 2 years of production experience building scalable APIs, event-driven pipelines, and cloud-native systems on AWS. Applied that foundation to AI — designing retrieval systems, agentic pipelines, and LLM infrastructure that solves real accuracy and scalability problems.",
  genres: ["Python", "FastAPI", "AWS", "NoSQL", "LangGraph", "Docker"],
  resumeUrl: "https://drive.google.com/file/d/1lfaIxNrlx4yEGvB8Bmnc4nuzgQ91gY8Y/view?usp=drive_link"
};

export const ACTIVE_FOCUS_DATA: ActiveFocus[] = [
  {
    id: "active_1",
    title: "Software Developer",
    role: "Backend & AI Systems Builder",
    company: "Genpact",
    progress: 100,
    duration: "Jul 2024 - Present",
    description: "Designing and scaling cloud-native REST APIs, event-driven message queues, and high-performance retrieval-augmented generation (RAG) pipelines on AWS. Orchestrating containerized microservices and optimizing database transaction speeds.",
    posterUrl: "/multimodal_rag.png",
    status: "ACTIVE NOW"
  },
  {
    id: "active_2",
    title: "Application Engineering Intern",
    role: "Cloud Backend Developer",
    company: "Genpact",
    progress: 100,
    duration: "Jan 2024 - Jun 2024",
    description: "Assisted in containerizing legacy backend APIs using Docker and orchestrated multi-stage builds. Contributed to asynchronous endpoint integrations, testing automation, and database indexing schema designs.",
    posterUrl: "/tenantguard.png",
    status: "COMPLETED"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "multimodal_rag",
    title: "Multimodal RAG System",
    matchScore: 99,
    year: "2024",
    level: "Expert",
    edition: "Production Series",
    genres: ["AWS", "OpenSearch", "S3", "Python","Backend","Gen AI"],
    description: "Designed and delivered a multimodal RAG system supporting text and image retrieval from internal documents. Handles 1,000 concurrent users under a sub-10s latency target, improving image retrieval accuracy by 70% using LLM-generated contextual descriptions.",
    posterUrl: "/multimodal_rag.png",
    billboardUrl: "/bg.png",
    techStack: "AWS Bedrock, OpenSearch, S3, Python, FastAPI, PostgreSQL, MongoDB",
    role: "Lead Software Developer",
    duration: "Jul 2024 - Present",
    proficiency: [
      { label: "AI Integration", percentage: 95 },
      { label: "Backend APIs", percentage: 90 },
      { label: "Cloud Infra", percentage: 85 }
    ],
    features: [
      {
        id: 1,
        title: "Contextual Image Description Pipeline",
        version: "v1.0",
        description: "Replaced Textract OCR with an LLM-generated contextual description model, improving image search accuracy by 70%.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Hybrid Search & Reranker Pipeline",
        version: "v1.2",
        description: "Implemented a hybrid search pipeline combining BM25 keyword matching with vector search and a reranking stage to fix Titan Text v2 embedding limitations, achieving +20% correctness.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_rag1",
        author: "Sarah Jenkins",
        role: "Director of Product, CloudScale AI",
        text: "The multimodal RAG system transformed our document retrieval process. The integration of Titan Text v2 with BM25 hybrid search was a masterstroke.",
        rating: 5,
        date: "October 2024"
      },
      {
        id: "rev_rag2",
        author: "Devon Miller",
        role: "Principal Architect",
        text: "Very impressive sub-10s latency even under heavy stress testing. The LLM-generated contextual description approach is incredibly elegant.",
        rating: 5,
        date: "November 2024"
      }
    ]
  },
  {
    id: "tenantguard",
    title: "TenantGuard SaaS",
    matchScore: 98,
    year: "2024",
    level: "Expert",
    edition: "Open Source Release",
    genres: ["FastAPI", "PostgreSQL", "Redis", "Security","Backend","Python"],
    description: "Architected a secure, multi-tenant SaaS backend with strict data isolation at the database layer using Row-Level Security (RLS), preventing cross-tenant leaks. Implemented RBAC, rate-limiting, and metered billing.",
    posterUrl: "/tenantguard.png",
    billboardUrl: "/bg.png",
    techStack: "FastAPI, PostgreSQL RLS, Redis, SQLAlchemy Async, Python, JWT",
    role: "Backend Architect",
    duration: "3 Months",
    proficiency: [
      { label: "Database Design", percentage: 95 },
      { label: "Asynchronous APIs", percentage: 90 },
      { label: "Caching & Security", percentage: 88 }
    ],
    features: [
      {
        id: 1,
        title: "Row-Level Security (RLS) Isolation",
        version: "v1.0",
        description: "Enforced tenant isolation natively inside PostgreSQL, making data leaks structurally impossible.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Sliding-Window Rate Limiter & RBAC",
        version: "v1.1",
        description: "Built Redis-backed rate limiters with subscription-aware quotas (Free, Pro, Enterprise) and role-based access control.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 3,
        title: "Billing & Invoicing State Machine",
        version: "v1.2",
        description: "Designed asynchronous order management, usage metering, and invoice status transitions (draft -> issued -> paid).",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_tg1",
        author: "Alex Rivera",
        role: "CTO, LeaseTech",
        text: "Enforcing multi-tenancy boundaries at the database layer via RLS is standard best-practice, and this implementation is flawless. Sub-10ms query times verified.",
        rating: 5,
        date: "September 2024"
      },
      {
        id: "rev_tg2",
        author: "Marcus Chen",
        role: "DevSecOps Lead",
        text: "The Redis sliding-window rate limiter handles bursts with ease. Excellent security posture and clean code patterns.",
        rating: 4.8,
        date: "August 2024"
      }
    ]
  },
  {
    id: "testgen",
    title: "Automated Test Pipeline",
    matchScore: 95,
    year: "2024",
    level: "Advanced",
    edition: "AI Automation Tool",
    genres: ["LangGraph", "ChromaDB", "Python", "Gen AI"],
    description: "Built an intelligent 3-agent LangGraph pipeline that converts user stories and acceptance criteria into executable integration tests, achieving a 70% pass rate across a 20-API backend.",
    posterUrl: "/testgen.png",
    billboardUrl: "/bg.png",
    techStack: "LangGraph, ChromaDB, Python, OpenAPI, Async Execution, ChromaDB,Gen AI",
    role: "AI Developer",
    duration: "4 Months",
    proficiency: [
      { label: "Agentic AI", percentage: 90 },
      { label: "Vector DB Search", percentage: 88 },
      { label: "Async Pipeline", percentage: 85 }
    ],
    features: [
      {
        id: 1,
        title: "3-Agent Orchestration Graph",
        version: "v1.0",
        description: "Orchestrated Scenario Generator, Validator, and Test Generator agents inside LangGraph for reliable code generation.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Semantic API Selection via ChromaDB",
        version: "v1.0",
        description: "Used vector search over OpenAPI specifications to automatically discover and map endpoints for test cases.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_tg_ai1",
        author: "Liam Zhao",
        role: "Head of QA Automation",
        text: "Converting user stories directly to integration tests using LangGraph agents reduced our cycle times by 60%. Highly robust output.",
        rating: 5,
        date: "July 2024"
      }
    ]
  },
  {
    id: "warehouse",
    title: "Stock Warehouse System",
    matchScore: 96,
    year: "2024",
    level: "Advanced",
    edition: "Enterprise Series",
    genres: ["DynamoDB", "AWS", "SQS", "NoSQL","Database"],
    description: "Designed stock management database schemas handling 400K+ SKUs using DynamoDB single-table design with GSIs, achieving single-digit millisecond latency. Built a fault-tolerant async ingestion pipeline.",
    posterUrl: "/warehouse.png",
    billboardUrl: "/bg.png",
    techStack: "AWS DynamoDB, AWS Lambda, SQS, S3, Python, Serverless",
    role: "Backend & Systems Developer",
    duration: "6 months",
    proficiency: [
      { label: "NoSQL Design", percentage: 95 },
      { label: "Serverless Ingest", percentage: 90 },
      { label: "Fault Tolerance", percentage: 88 }
    ],
    features: [
      {
        id: 1,
        title: "Single-Table DynamoDB Design",
        version: "v1.0",
        description: "Designed partition and sorting keys with Global Secondary Indexes (GSIs) to ensure sub-10ms queries for 400K+ SKUs.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Fault-Tolerant Async Ingestion",
        version: "v1.0",
        description: "Implemented SQS ingestion with structured retry policies, exponential backoff, and dead-letter queue (DLQ) recovery.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_wh1",
        author: "Sophia Patel",
        role: "VP of Logistics, CommerceFlow",
        text: "Managing 400K SKUs on DynamoDB is notoriously hard for relational queries, but the single-table GSI modeling here was executed masterfully.",
        rating: 5,
        date: "May 2024"
      }
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "backend_apis",
    title: "Backend & APIs",
    skills: [
      {
        id: "python",
        title: "Python",
        matchScore: 98,
        tag: "Core",
        imageUrl: "/skill_bg.png",
        details: "Building robust, typed, asynchronous services in Python. Proficient in OOP, concurrency, package management, and debugging.",
        level: "Advanced"
      },
      {
        id: "fastapi",
        title: "FastAPI",
        matchScore: 96,
        tag: "Web",
        imageUrl: "/skill_bg.png",
        details: "Designing asynchronous REST APIs, middleware, dependency injection, and automatic OpenAPI schema documentation.",
        level: "Advanced"
      },
      {
        id: "rest_apis",
        title: "REST APIs & Design",
        matchScore: 95,
        tag: "Architecture",
        imageUrl: "/skill_bg.png",
        details: "Structuring production-ready endpoints, query parameters, proper HTTP status codes, standard validation, and rate-limiting rules.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "cloud_infra",
    title: "Cloud & Infrastructure",
    skills: [
      {
        id: "aws",
        title: "Amazon Web Services (AWS)",
        matchScore: 94,
        tag: "Cloud",
        imageUrl: "/skill_bg.png",
        details: "Designing and maintaining serverless & containerized environments including Lambda, Bedrock, DynamoDB, OpenSearch, SQS, and S3.",
        level: "Advanced"
      },
      {
        id: "docker",
        title: "Docker",
        matchScore: 92,
        tag: "Containers",
        imageUrl: "/skill_bg.png",
        details: "Containerizing backend services, configuring multi-stage Dockerfiles, managing Docker Compose, and deploying to cloud registries.",
        level: "Advanced"
      },
      {
        id: "github",
        title: "GitHub & CI/CD",
        matchScore: 90,
        tag: "VCS",
        imageUrl: "/skill_bg.png",
        details: "Utilizing modern version control, code review processes, pull request pipelines, and event-driven automation workflows.",
        level: "Advanced"
      }
    ]
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "notif_1",
    title: "TenantGuard billing ledger simulated successfully (98% Match)",
    timestamp: "10 mins ago",
    read: false
  },
  {
    id: "notif_2",
    title: "LangGraph Multi-Agent test generation pipeline compiled",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: "notif_3",
    title: "OpenSearch hybrid search index optimization completed",
    timestamp: "1 day ago",
    read: true
  },
  {
    id: "notif_4",
    title: "DynamoDB stock warehouse single-table GSIs loaded (v1.0)",
    timestamp: "3 days ago",
    read: true
  }
];
