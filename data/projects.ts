export type ProjectCategory =
  | "Flagship Product Systems"
  | "Applied AI / Automation"
  | "Developer Tools"
  | "Education / Language";

export type ProjectStatus = "Live" | "MVP" | "In progress" | "Prototype";

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  architecture: string[];
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  live: string;
  github: string;
  year: string;
  role: string;
  status: ProjectStatus;
  category: ProjectCategory;
  image?: string;
  featuredOrder?: number;
  summaryBullets?: string[];
  caseStudy?: ProjectCaseStudy;
}

export const projectCategoryOrder: ProjectCategory[] = [
  "Flagship Product Systems",
  "Applied AI / Automation",
  "Developer Tools",
  "Education / Language",
];

export const projects: Project[] = [
  {
    slug: "syncresume",
    title: "SyncResume",
    description:
      "Resume optimization workspace that tailors a resume to a job description using LLM analysis and exports ATS-safe files.",
    longDescription:
      "SyncResume is a full-stack resume optimizer built on Cloudflare Workers and Vite. Users maintain a resume library, paste a target job description, and trigger an LLM-powered optimization that returns structured section-by-section improvements. The review UI supports inline editing and targeted section revisions, with a live keyword-match score against the job posting. Finalized resumes export as DOCX, PDF, or plain text. Auth is handled by Clerk; resumes are stored in Cloudflare R2; the relational layer uses Cloudflare D1.",
    tags: ["TypeScript", "Cloudflare Workers", "D1", "R2", "OpenAI", "Clerk", "Vite"],
    features: [
      "Resume library for managing multiple resume versions",
      "LLM optimization with structured section-by-section review",
      "Inline editing and targeted section revision after the AI pass",
      "Keyword scoring against the target job description",
      "ATS-safe export in DOCX, PDF, and plain-text formats",
      "Clerk authentication with Cloudflare-side JWT verification",
    ],
    live: "https://syncresume.io",
    github: "https://github.com/TedTes/syncresume",
    year: "2026",
    role: "Full-Stack Developer",
    status: "Live",
    category: "Flagship Product Systems",
    image: "/images/projects/syncresume.png",
    featuredOrder: 1,
    summaryBullets: [
      "Cloudflare-native product architecture",
      "Structured LLM workflow with deterministic review states",
      "Production auth, storage, export, and billing surfaces",
    ],
    caseStudy: {
      problem:
        "Job seekers need to tailor resumes for specific roles without losing structure, clarity, or ATS compatibility.",
      approach:
        "The product separates document storage, job analysis, LLM optimization, human review, and export into explicit stages so users can inspect and revise the output before finalizing it.",
      architecture: [
        "Vite React app for the authenticated workspace and Astro for public marketing pages",
        "Cloudflare Worker API with D1 for relational state and R2 for uploaded resume files",
        "Clerk authentication verified at the Worker boundary",
        "OpenAI-powered optimization returning structured JSON for safe review and editing",
      ],
      result:
        "A live resume workspace that turns a job description and stored resume into editable, exportable, ATS-safe outputs.",
    },
  },
  {
    slug: "snapquote",
    title: "SnapQuote",
    description:
      "Same-day quoting app for home-service trades, from job capture to priced quote, delivery, and acceptance tracking.",
    longDescription:
      "SnapQuote helps contractors capture a job, generate a priced draft from their own price book, send the quote, and track whether the customer viewed or accepted it. The current architecture centers on an Expo mobile app, shared TypeScript domain logic, Supabase Postgres, Supabase Edge Functions, Stripe billing, and a public quote host.",
    tags: ["TypeScript", "Expo", "Supabase", "Postgres", "Stripe", "OpenAI"],
    features: [
      "Mobile-first quote creation flow for contractors in the field",
      "Shared pricing rules, matching logic, and schema validation",
      "Supabase Edge Function API for auth, quote CRUD, AI extraction, and public quote responses",
      "Stripe billing and Connect-ready payment configuration",
      "Public quote host for customer viewing and response tracking",
    ],
    live: "https://quotevan.com/",
    github: "https://github.com/TedTes/snapquote",
    year: "2026",
    role: "Full-Stack Developer",
    status: "In progress",
    category: "Flagship Product Systems",
    featuredOrder: 2,
    summaryBullets: [
      "Mobile product workflow for a specific trade use case",
      "Typed shared domain layer across app and backend",
      "Supabase and Stripe production path",
    ],
    caseStudy: {
      problem:
        "Small home-service contractors often lose time turning site details into a polished, sendable quote while a customer is still warm.",
      approach:
        "The app keeps the job capture flow lightweight, reuses the contractor's price book, and routes quote generation through a typed backend API so pricing and delivery can be tracked consistently.",
      architecture: [
        "Expo Router mobile app with auth, workspace state, and quote flows",
        "Shared TypeScript package for schemas, pricing rules, matching, and tests",
        "Supabase Postgres schema plus Edge Function API",
        "Stripe billing configuration and public quote response flow",
      ],
      result:
        "An active product build that turns contractor inputs into priced quote drafts and gives customers a simple quote viewing path.",
    },
  },
  {
    slug: "scoutlead",
    title: "ScoutLead",
    description:
      "Reusable AI customer-discovery backend for product validation, lead qualification, outreach drafting, and campaign evaluation.",
    longDescription:
      "ScoutLead is a configurable AI-powered customer discovery and outreach backend for validating software products. A product is supplied as configuration, then the runtime executes a bounded workflow across discovery, research, qualification, outreach drafting, human approval, response tracking, memory, and campaign evaluation. Application code owns orchestration and allowed state transitions; LLM calls are isolated behind structured-output interfaces.",
    tags: ["Python", "FastAPI", "Postgres", "LLMs", "Agents", "Vite"],
    features: [
      "Product-configured customer discovery and validation workflow",
      "Structured LLM interfaces for extraction, qualification, personalization, and response classification",
      "Explicit provider interfaces for search, website inspection, email, and database access",
      "Human approval gate before outbound message sending",
      "Campaign metrics and response tracking",
    ],
    live: "#",
    github: "https://github.com/TedTes/scoutlead",
    year: "2026",
    role: "Full-Stack Developer",
    status: "MVP",
    category: "Flagship Product Systems",
    featuredOrder: 3,
    summaryBullets: [
      "Bounded agent workflow with explicit state transitions",
      "Human approval before external side effects",
      "Reusable backend for validating multiple products",
    ],
    caseStudy: {
      problem:
        "Early product validation needs repeatable customer discovery, but manual research and outreach are slow, inconsistent, and hard to measure.",
      approach:
        "The backend treats each product as configuration and runs a bounded campaign workflow where deterministic orchestration owns state and LLMs perform scoped judgment tasks.",
      architecture: [
        "Python/FastAPI backend with Postgres persistence",
        "Worker path for queued campaign and message operations",
        "Structured-output LLM boundaries for qualification, drafting, and classification",
        "Provider interfaces for search, inspection, email, and database access",
      ],
      result:
        "A reusable validation engine that can research leads, draft outreach, require human approval, and track campaign outcomes.",
    },
  },
  {
    slug: "lidscout",
    title: "LidScout",
    description:
      "AI research agent that monitors Reddit, Hacker News, and review sites to surface ranked market gaps for founders and PMs.",
    longDescription:
      "LidScout is an AI-powered market research agent built for product managers and solo founders. Define a niche once and the agent continuously scans Reddit, Hacker News, G2, GitHub, and review sites, filtering noisy signals using LLM relevance scoring, then clustering evidence into ranked market gaps with quotes and suggested product wedges.",
    tags: ["Python", "FastAPI", "Playwright", "Next.js", "Supabase", "Claude API"],
    features: [
      "Continuous monitoring of Reddit, Hacker News, G2, GitHub, and review sites",
      "LLM-powered noise filtering for irrelevant signals",
      "Automatic clustering of pain signals into ranked market gaps",
      "Evidence quotes and suggested wedges for each identified gap",
      "Dashboard, weekly digest, and threshold-based alert concepts",
    ],
    live: "https://lidscout.vercel.app/",
    github: "https://github.com/TedTes/lidscout",
    year: "2026",
    role: "Full-Stack Developer",
    status: "Prototype",
    category: "Applied AI / Automation",
    image: "/images/projects/lidscout.png",
    summaryBullets: [
      "Market research automation",
      "Signal ranking and clustering",
      "Applied AI workflow exploration",
    ],
    caseStudy: {
      problem:
        "Founders and PMs need to find repeated market pain signals without reading through a large amount of low-signal public discussion.",
      approach:
        "The system combines source monitoring, LLM relevance scoring, clustering, and evidence preservation so each market gap can be inspected rather than merely summarized.",
      architecture: [
        "FastAPI backend for ingestion and workflow orchestration",
        "Playwright and API-based source collection",
        "LLM relevance scoring and clustering pipeline",
        "Next.js dashboard backed by Supabase",
      ],
      result:
        "A research prototype for turning public complaints and reviews into ranked product opportunity signals.",
    },
  },
  {
    slug: "autofil",
    title: "AutoFil",
    description:
      "AI-powered insurance document processor that extracts and fills forms in under 60 seconds.",
    longDescription:
      "AutoFil automates insurance document processing using AI-powered OCR and NLP to extract structured data from uploaded forms and generate filled outputs ready for submission. It supports PDFs, Excel, CSVs, and ACORD forms with confidence indicators for field verification.",
    tags: ["Next.js", "TypeScript", "Python", "Supabase"],
    features: [
      "OCR and NLP extraction across document types",
      "Batch processing for multiple documents",
      "Confidence indicators to flag fields requiring manual verification",
      "Multi-format support: PDFs, Excel, CSVs, and ACORD forms",
    ],
    live: "https://autofil.vercel.app/landing",
    github: "https://github.com/TedTes/autofil",
    year: "2025",
    role: "Full-Stack Developer",
    status: "Prototype",
    category: "Applied AI / Automation",
    image: "/images/projects/autofil.png",
    caseStudy: {
      problem:
        "Insurance document workflows are repetitive, format-heavy, and easy to slow down with manual data entry.",
      approach:
        "AutoFil focuses on extracting structured fields from common document formats and surfacing confidence so a user can review uncertain values before output.",
      architecture: [
        "Next.js frontend for upload and review",
        "Python processing path for extraction logic",
        "Supabase-backed persistence for workflow state",
        "Confidence-aware field verification UI",
      ],
      result:
        "A focused automation prototype for turning insurance documents into structured, reviewable form data.",
    },
  },
  {
    slug: "secretio",
    title: "Secretio",
    description:
      "Developer-first vault that centralizes and secures API credentials across projects.",
    longDescription:
      "Secretio is a developer-first secrets management platform built as a monorepo with a web dashboard, REST API, CLI, and shared client library. Teams can centralize API keys and credentials, manage access with permissions, and integrate via CLI or SDK.",
    tags: ["Next.js", "TypeScript", "Docker", "Stripe"],
    features: [
      "Centralized vault for storing and managing API keys and secrets",
      "CLI tool for accessing secrets directly from the terminal",
      "Vault client SDK for programmatic integration",
      "Role-based access control with per-secret permissions",
      "Stripe-powered billing for team and enterprise plans",
    ],
    live: "https://secretio-o6ch.vercel.app/",
    github: "https://github.com/TedTes/secretio",
    year: "2025",
    role: "Full-Stack Developer",
    status: "Prototype",
    category: "Developer Tools",
    image: "/images/projects/secretio.png",
    caseStudy: {
      problem:
        "Developers often scatter secrets across local env files, dashboards, and deployment settings without a clear access model.",
      approach:
        "Secretio explores a vault-centered workflow with dashboard management, CLI access, SDK integration, and team-oriented permissions.",
      architecture: [
        "Next.js dashboard for vault and team management",
        "REST API and shared client library",
        "CLI integration for local developer workflows",
        "Dockerized services and Stripe billing surface",
      ],
      result:
        "A developer tooling prototype for centralizing credentials and making secret access more explicit.",
    },
  },
  {
    slug: "nebab",
    title: "Nebab",
    description:
      "English reading comprehension product for Tigrinya speakers, with trusted Tigrinya support.",
    longDescription:
      "Nebab helps Tigrinya speakers build practical English reading comprehension with trusted Tigrinya support. The public repo contains the marketing site while the private application source stays separate.",
    tags: ["HTML", "CSS", "Language Learning", "Education"],
    features: [
      "Public landing page for an English reading comprehension product",
      "Positioning around practical learning for Tigrinya speakers",
      "Generated hero image and static marketing assets",
      "Private product code separated from the public marketing repo",
    ],
    live: "#",
    github: "https://github.com/TedTes/nebabsite",
    year: "2026",
    role: "Product Engineer",
    status: "In progress",
    category: "Education / Language",
    caseStudy: {
      problem:
        "Tigrinya speakers learning English need reading support that respects their source language while still building practical English comprehension.",
      approach:
        "The public site frames the product promise while the application work stays private, keeping the project story visible without exposing private source.",
      architecture: [
        "Static public marketing site",
        "Generated product hero image and custom styling",
        "Private application repo for the product experience",
      ],
      result:
        "A visible product story for a language-learning project whose core app remains private.",
    },
  },
];

export function hasProjectLink(project: Project): boolean {
  return project.live !== "#" || project.github !== "#";
}

export function getProjectHref(project: Project): string {
  return project.live !== "#" ? project.live : project.github;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getVisibleProjects(): Project[] {
  return projects.filter(hasProjectLink);
}

export function getFeaturedProjects(): Project[] {
  return getVisibleProjects()
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
}

export function getProjectsByCategory(): Map<ProjectCategory, Project[]> {
  const grouped = new Map<ProjectCategory, Project[]>();

  for (const category of projectCategoryOrder) {
    grouped.set(category, []);
  }

  for (const project of getVisibleProjects()) {
    const categoryProjects = grouped.get(project.category) ?? [];
    categoryProjects.push(project);
    grouped.set(project.category, categoryProjects);
  }

  for (const [category, categoryProjects] of grouped.entries()) {
    grouped.set(
      category,
      categoryProjects.sort((a, b) => {
        return (
          (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999) ||
          Number(b.year) - Number(a.year) ||
          a.title.localeCompare(b.title)
        );
      })
    );
  }

  return grouped;
}
