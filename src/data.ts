/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillCategory, Notification, ActiveFocus } from "./types";

export const MY_PROFILE = {
  name: "Karam Arora",
  title: "SDE 1 — Backend Engineer & AI Systems Builder",
  avatarUrl: "/avatar.png",
  portraitUrl: "/avatar.png",
  workspaceBackground: "/bg.png",
  bio: "Backend Engineer with 2 years of production experience building scalable APIs, distributed systems, and cloud-native applications on AWS. My work sits at the intersection of Backend Engineering and Applied AI, where I design systems that combine reliable infrastructure with modern LLM capabilities. I've built multimodal RAG platforms, agentic workflows, hybrid search systems, event-driven architectures, and high-performance backend services used in production environments.",
  genres: ["Python", "FastAPI", "AWS", "NoSQL", "LangGraph", "Docker", "RAG Systems"],
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
    posterUrl: "/active_focus_sde.jpg",
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
    posterUrl: "/active_focus_intern.jpg",
    status: "COMPLETED"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "multimodal_rag",
    title: "Multimodal RAG Platform",
    matchScore: 99,
    year: "2024",
    level: "Expert",
    edition: "Production Enterprise",
    genres: ["AWS", "OpenSearch", "S3", "Lambda", "SQS", "FastAPI", "AI Engineering"],
    description: "Enterprise-grade retrieval system supporting text and image understanding. Replaced legacy Textract OCR extraction with an LLM-powered contextual description generator to improve search accuracy by 70%. Implemented a hybrid search pipeline combining BM25 keyword matching, vector search, and a reranking stage to fix Titan embedding limits.",
    posterUrl: "/multimodal_rag.jpg",
    billboardUrl: "/bg.png",
    techStack: "AWS, OpenSearch, S3, AWS Lambda, SQS, FastAPI, Python",
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
        description: "Replaced OCR-based extraction with LLM-generated contextual descriptions, achieving a 70% boost in overall image search correctness.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Hybrid Search & Reranking",
        version: "v1.2",
        description: "Configured BM25 keyword indexing combined with Dense Vector search and Cohere rerankers to optimize search query correctness.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 3,
        title: "Fault-Tolerant Ingestion Pipeline",
        version: "v1.0",
        description: "Built automated document ingestion using Lambda, SQS, dead-letter queues (DLQs), and exponential retry strategies.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_rag1",
        author: "Sarah Jenkins",
        role: "Director of Product, CloudScale AI",
        text: "The multimodal RAG system transformed our document retrieval process. The integration of AWS Bedrock with BM25 hybrid search was a masterstroke.",
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
    title: "Multi-Tenant SaaS Backend",
    matchScore: 98,
    year: "2024",
    level: "Expert",
    edition: "Open Source Release",
    genres: ["FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Docker", "Security", "Backend"],
    description: "A production-style backend designed with strict tenant isolation at the database layer using PostgreSQL Row-Level Security (RLS) to prevent cross-tenant data leaks. Implemented JWT Authentication, Role-Based Access Control (RBAC), Redis sliding-window token rate limiting, and usage-based subscription quotas.",
    posterUrl: "/tenantguard.jpg",
    billboardUrl: "/bg.png",
    techStack: "FastAPI, PostgreSQL, Redis, Async SQLAlchemy, Docker, JWT",
    role: "Backend Architect",
    duration: "3 Months",
    url: "https://github.com/karamarora20/TenantGuard",
    proficiency: [
      { label: "Database Design", percentage: 95 },
      { label: "Asynchronous APIs", percentage: 90 },
      { label: "Security Isolation", percentage: 92 }
    ],
    features: [
      {
        id: 1,
        title: "PostgreSQL Row-Level Security (RLS)",
        version: "v1.0",
        description: "Enforced multi-tenant isolation natively inside PostgreSQL schemas, ensuring cross-tenant queries are structurally blocked.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Sliding-Window Rate Limiting",
        version: "v1.1",
        description: "Designed a Redis-backed token bucket sliding-window algorithm for smart, subscription-aware API rate enforcement.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 3,
        title: "JWT & Role-Based Access Controls (RBAC)",
        version: "v1.0",
        description: "Wrote fully type-safe dependency decorators in FastAPI to authenticate tokens and authorize user permissions across routes.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_tg1",
        author: "Alex Rivera",
        role: "CTO, LeaseTech",
        text: "Enforcing multi-tenancy boundaries at the database layer via PostgreSQL RLS is standard best-practice, and this implementation is flawless.",
        rating: 5,
        date: "September 2024"
      }
    ]
  },
  {
    id: "testgen",
    title: "Automated Test Generation & Execution",
    matchScore: 96,
    year: "2024",
    level: "Advanced",
    edition: "AI Automation Tool",
    genres: ["LangGraph", "ChromaDB", "Python", "FastAPI", "AsyncIO", "Gen AI"],
    description: "An AI-powered testing system that converts user stories and acceptance criteria into executable integration tests. Utilizes a multi-agent orchestration graph inside LangGraph featuring distinct Scenario Generation, Validation, and Test Generation agents. Integrates RAG-powered API discovery from OpenAPI specifications.",
    posterUrl: "/testgen.jpg",
    billboardUrl: "/bg.png",
    techStack: "Python, FastAPI, LangGraph, ChromaDB, AsyncIO,Gen AI",
    role: "AI Developer",
    duration: "4 Months",
    url: "https://github.com/karamarora20/Test_generation_pipeline",
    proficiency: [
      { label: "Agentic AI", percentage: 90 },
      { label: "Vector DB Search", percentage: 88 },
      { label: "Async Pipeline", percentage: 85 }
    ],
    features: [
      {
        id: 1,
        title: "Multi-Agent LangGraph Architecture",
        version: "v1.0",
        description: "Orchestrated Scenario Generation, Static Code Validation, and Pytest Code Generation agents inside an automated LangGraph graph.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "OpenAPI Spec API Discovery",
        version: "v1.1",
        description: "Used semantic search over vector-embedded OpenAPI specifications to discover valid request parameters and target endpoints.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 3,
        title: "Persistence & Failure Recovery",
        version: "v1.0",
        description: "Implemented asynchronous checkpoint savers inside the graph to resume test execution state seamlessly on agent failures.",
        thumbnailUrl: "/skill_bg.png"
      }
    ],
    reviews: [
      {
        id: "rev_tg_ai1",
        author: "Liam Zhao",
        role: "Head of QA Automation",
        text: "Converting user stories directly to integration tests using LangGraph agents reduced our test cycles by 60%. Highly robust output.",
        rating: 5,
        date: "July 2024"
      }
    ]
  },
  {
    id: "warehouse",
    title: "NoSQL Stock Warehouse System",
    matchScore: 95,
    year: "2024",
    level: "Expert",
    edition: "Enterprise DB Series",
    genres: ["DynamoDB", "AWS", "SQS", "NoSQL", "Database"],
    description: "Designed a stock management database schema handling 400K+ SKUs using DynamoDB single-table design with GSIs, achieving single-digit millisecond query latencies. Built a fault-tolerant async document ingestion pipeline with Lambda and SQS.",
    posterUrl: "/warehouse.jpg",
    billboardUrl: "/bg.png",
    techStack: "AWS DynamoDB, AWS Lambda, SQS, S3, Python, Serverless",
    role: "Backend & Systems Developer",
    duration: "6 Months",
    proficiency: [
      { label: "NoSQL Design", percentage: 95 },
      { label: "Serverless Ingest", percentage: 90 },
      { label: "Fault Tolerance", percentage: 88 }
    ],
    features: [
      {
        id: 1,
        title: "DynamoDB Single-Table Modeling",
        version: "v1.0",
        description: "Molded composite partition-sort keys and GSIs to achieve sub-10ms queries for item attributes across 400K+ SKUs.",
        thumbnailUrl: "/skill_bg.png"
      },
      {
        id: 2,
        title: "Fault-Tolerant Async Ingestion",
        version: "v1.0",
        description: "Designed ingestion with SQS message buffering, exponential retry configurations, dead-letter queue (DLQ) dumping, and alert routes.",
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
    id: "languages",
    title: "Languages",
    skills: [
      {
        id: "python",
        title: "Python",
        matchScore: 99,
        tag: "Core",
        imageUrl: "/skill_bg.png",
        details: "Building robust, typed, and asynchronous systems in Python. Expert in object-oriented paradigms, concurrent processing, and package architectures.",
        level: "Advanced",
        specs: [
          "Concurrent execution with AsyncIO",
          "Package development & Pytest testing",
          "Type hinting & static analysis",
          "Custom object-oriented architectures"
        ]
      },
      {
        id: "java",
        title: "Java",
        matchScore: 90,
        tag: "Core",
        imageUrl: "/skill_bg.png",
        details: "Strong OOP foundations, building structured multi-threaded applications, memory optimization, and garbage collection configurations.",
        level: "Intermediate",
        specs: [
          "OOP & design pattern application",
          "JVM memory tuning & optimization",
          "Multithreaded task management",
          "Structured Enterprise builds"
        ]
      },
      {
        id: "sql",
        title: "SQL & Relational",
        matchScore: 95,
        tag: "Core",
        imageUrl: "/skill_bg.png",
        details: "Wrote complex joins, transaction schemas, procedural scopes, query optimization indexing, and advanced partitioning paradigms.",
        level: "Intermediate",
        specs: [
          "Complex join & CTE query optimization",
          "Transactional integrity isolation",
          "Database schema migrations",
          "Procedural logic & custom triggers"
        ]
      },
      {
        id: "javascript",
        title: "JavaScript / TypeScript",
        matchScore: 88,
        tag: "Scripting",
        imageUrl: "/skill_bg.png",
        details: "Asynchronous execution mechanisms, type interfaces, React component flows, Node runtime executions, and scripting automations.",
        level: "Intermediate",
        specs: [
          "Type interface safety mappings",
          "Async/Await API integrations",
          "React components & hook structures",
          "Node server executions & bundlers"
        ]
      }
    ]
  },
  {
    id: "backend_apis",
    title: "Backend & APIs",
    skills: [
      {
        id: "fastapi",
        title: "FastAPI",
        matchScore: 98,
        tag: "Web",
        imageUrl: "/skill_bg.png",
        details: "Designing high-throughput asynchronous REST APIs, configuring custom Pydantic models, custom route middlewares, and Dependency Injection scopes.",
        level: "Advanced",
        specs: [
          "Asynchronous endpoint modeling",
          "Pydantic custom payload parsing",
          "Dependency injection scope chains",
          "Middleware authentication pipelines"
        ]
      },
      {
        id: "rest_apis",
        title: "REST APIs & Design",
        matchScore: 96,
        tag: "Architecture",
        imageUrl: "/skill_bg.png",
        details: "Structuring endpoint hierarchies, status routing, payload validations, OpenAPI contract enforcement, and robust error management.",
        level: "Advanced",
        specs: [
          "OpenAPI schema contract alignment",
          "HTTP code status validation",
          "RESTful endpoint serialization",
          "Structured error payload delivery"
        ]
      },
      {
        id: "async_programming",
        title: "Async Programming",
        matchScore: 95,
        tag: "Performance",
        imageUrl: "/skill_bg.png",
        details: "Optimizing database, network, and file I/O operations inside event-driven frameworks using Python AsyncIO tasks and coroutines.",
        level: "Expert",
        specs: [
          "AsyncIO task concurrency patterns",
          "Non-blocking DB query executions",
          "Aiohttp/httpx remote calls proxying",
          "Optimized event loop tuning"
        ]
      }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      {
        id: "postgresql",
        title: "PostgreSQL & RLS",
        matchScore: 97,
        tag: "Relational",
        imageUrl: "/skill_bg.png",
        details: "Designed complex database isolation schemas using Row-Level Security (RLS) policies. Highly fluent with SQLAlchemy, indexes, and performance metrics.",
        level: "Intermediate",
        specs: [
          "Multi-Tenant Row-Level security policies",
          "Asynchronous SQLAlchemy database models",
          "Query performance execution plans",
          "Database index planning & scaling"
        ]
      },
      {
        id: "dynamodb",
        title: "DynamoDB NoSQL",
        matchScore: 96,
        tag: "NoSQL",
        imageUrl: "/skill_bg.png",
        details: "Crafting sub-10ms query single-table schemas using partition/sort key composition, GSI indexing patterns, and AWS SDK operations.",
        level: "Intermediate",
        specs: [
          "Single-Table schema composite mapping",
          "Global Secondary Indexes (GSIs)",
          "Sub-10ms transactional querying",
          "AWS SDK resource interactions"
        ]
      },
      {
        id: "redis",
        title: "Redis Cache",
        matchScore: 95,
        tag: "In-Memory",
        imageUrl: "/skill_bg.png",
        details: "Configuring cache clusters, sliding-window rate limiters, token bucket structures, pub-sub microchannels, and transient session caches.",
        level: "Intermediate",
        specs: [
          "Sliding-window API rate limiters",
          "High-performance distributed caching",
          "Token bucket throttling configurations",
          "Temporary session token storage"
        ]
      },
      {
        id: "opensearch",
        title: "OpenSearch",
        matchScore: 94,
        tag: "Search Engine",
        imageUrl: "/skill_bg.png",
        details: "Building hybrid search indexes, BM25 text query analyzers, dense vector mappings, and semantic search interfaces.",
        level: "Intermediate",
        specs: [
          "Dense vector embeddings matching",
          "BM25 keyword search tuning",
          "Hybrid search reranking algorithms",
          "Custom tokenizer mappings"
        ]
      }
    ]
  },
  {
    id: "cloud_infra",
    title: "Cloud & DevOps",
    skills: [
      {
        id: "aws",
        title: "Amazon Web Services (AWS)",
        matchScore: 96,
        tag: "Cloud",
        imageUrl: "/skill_bg.png",
        details: "Architecting cloud-native pipelines using AWS Bedrock, Lambda, DynamoDB, OpenSearch, SQS, S3, and standard security groups.",
        level: "Intermediate",
        specs: [
          "AWS Bedrock foundations orchestration",
          "Serverless SQS and Lambda queues",
          "S3 and DynamoDB data hosting",
          "AWS IAM policies & resource isolation"
        ]
      },
      {
        id: "docker",
        title: "Docker & Containers",
        matchScore: 94,
        tag: "Containers",
        imageUrl: "/skill_bg.png",
        details: "Containerizing microservices, writing production-grade multi-stage Dockerfiles, optimizing image sizes, and Docker Compose configurations.",
        level: "Advanced",
        specs: [
          "Multi-Stage Dockerfile compilation",
          "Container resource constraints tuning",
          "Docker Compose staging mock-ups",
          "Optimized lightweight Linux images"
        ]
      },
      {
        id: "github_actions",
        title: "GitHub Actions & CI/CD",
        matchScore: 90,
        tag: "Automation",
        imageUrl: "/skill_bg.png",
        details: "Writing YAML-driven automated test workflows, container compilation pipelines, security checks, and cloud deployment routines.",
        level: "Advanced",
        specs: [
          "Automated pytest regression suites",
          "Docker image registry compilation",
          "Static code linters integration",
          "Continuous integration triggers"
        ]
      }
    ]
  },
  {
    id: "ai_engineering",
    title: "AI Engineering",
    skills: [
      {
        id: "rag_pipelines",
        title: "RAG & Retrieval Systems",
        matchScore: 98,
        tag: "Applied AI",
        imageUrl: "/skill_bg.png",
        details: "Pioneering multimodal RAG retrieval (text + images), dense vector search, BM25 indexing, reranking models, and contextual chunk transformations.",
        level: "Advanced",
        specs: [
          "Dense vector semantic mapping",
          "BM25 hybrid query ranking",
          "Contextual chunking transformations",
          "Reranking index search outcomes"
        ]
      },
      {
        id: "langgraph",
        title: "LangGraph & Multi-Agent",
        matchScore: 96,
        tag: "Applied AI",
        imageUrl: "/skill_bg.png",
        details: "Designing loop-based stateful multi-agent systems, integrating code generation agents, validator systems, and OpenAPI tool integrations.",
        level: "Expert",
        specs: [
          "Stateful cyclic agent workflows",
          "AI-backed auto-validation loops",
          "Context memory window caching",
          "LLM function calling schemas"
        ]
      },
      {
        id: "llm_applications",
        title: "LLM Orchestration",
        matchScore: 97,
        tag: "Applied AI",
        imageUrl: "/skill_bg.png",
        details: "Integrating AWS Bedrock foundation models, crafting advanced semantic prompt engineering, structuring output schemas, and managing model rates.",
        level: "Advanced",
        specs: [
          "Foundation model inference calls",
          "System prompt structure modeling",
          "Pydantic guaranteed JSON outputs",
          "Token usage & rate restriction tools"
        ]
      }
    ]
  },
  {
    id: "system_design",
    title: "System Design",
    skills: [
      {
        id: "distributed_systems",
        title: "Distributed Systems",
        matchScore: 92,
        tag: "Architecture",
        imageUrl: "/skill_bg.png",
        details: "Designing async event-driven systems, configuring reliable message queues, distributed consensus, and microservice communications.",
        level: "Advanced",
        specs: [
          "Event-driven architecture pipelines",
          "Message queuing & buffer pathways",
          "Stateless service configurations",
          "Idempotence verification steps"
        ]
      },
      {
        id: "fault_tolerance",
        title: "Fault-Tolerant Architectures",
        matchScore: 94,
        tag: "Resilience",
        imageUrl: "/skill_bg.png",
        details: "Configuring dead-letter queue (DLQ) mechanisms, circuit breakers, exponential backoffs, fallback engines, and retry safety thresholds.",
        level: "Advanced",
        specs: [
          "Dead-letter queues (DLQs) setup",
          "Exponential backoffs with jitter",
          "API circuit breaker parameters",
          "Robust exception fallback rules"
        ]
      },
      {
        id: "scalable_backend",
        title: "Scalable Backend Design",
        matchScore: 95,
        tag: "Scaling",
        imageUrl: "/skill_bg.png",
        details: "Optimizing API performance, reducing latency, load testing bottleneck discoverability, caching strategies, and load balancing configurations.",
        level: "Intermediate",
        specs: [
          "Latency optimization techniques",
          "High-throughput request handling",
          "Distributed database sharding",
          "Horizontal scale & cluster strategies"
        ]
      }
    ]
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "notif_1",
    title: "Enterprise Multimodal RAG platform deployed to AWS Bedrock (99% Match)",
    timestamp: "10 mins ago",
    read: false
  },
  {
    id: "notif_2",
    title: "Automated test generator converted 20 integration tests via LangGraph",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: "notif_3",
    title: "PostgreSQL Row-Level Security isolation verified across multi-tenant keys",
    timestamp: "1 day ago",
    read: true
  },
  {
    id: "notif_4",
    title: "DynamoDB Single-Table partition keys loaded for 400K+ SKUs",
    timestamp: "3 days ago",
    read: true
  }
];
