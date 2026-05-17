import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tedros Tesfu",
  description:
    "Senior full-stack software engineer building production systems, AI applications, and cloud-native platforms.",
};

const focusAreas = [
  {
    label: "8+ years",
    title: "Senior full-stack engineer",
    description:
      "I build production-grade web applications, backend services, and internal platforms across fintech, consumer products, education, and logistics.",
  },
  {
    label: "Systems",
    title: "Microservices, cloud workflows, and real-time infrastructure",
    description:
      "My recent work centers on event-driven systems, AWS serverless architecture, Kafka pipelines, Redis-backed realtime features, and operationally reliable APIs.",
  },
  {
    label: "AI",
    title: "LLM application development",
    description:
      "I work with Claude, OpenAI, prompt engineering, RAG patterns, vector embeddings, and automation workflows that turn AI capabilities into usable product surfaces.",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "John Deere Financial Co.",
    period: "2021 - 2024",
    description:
      "Built event-driven financial microservices, AWS serverless workflows, account-processing pipelines, validation APIs, S3 archival flows, and CI/CD pipelines for high-volume operational systems.",
  },
  {
    role: "Senior Software Developer",
    company: "Telostouch Inc.",
    period: "2021",
    description:
      "Led an Angular-to-React migration, improved frontend performance, delivered customer-facing dashboards and profile flows, and integrated Keycloak authentication with RBAC and SSO.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Passionfruit Inc.",
    period: "2020 - 2021",
    description:
      "Refactored real-time chat from Agora to a Socket.io and Node.js stack, then scaled messaging with Redis pub/sub for thousands of concurrent connections.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Ministry of Education",
    period: "2017 - 2018",
    description:
      "Developed REST APIs, database integrations, and feedback tooling for an educational gaming platform serving students and teachers.",
  },
  {
    role: "Java Developer",
    company: "Eritrean Trading Corporation",
    period: "2015 - 2016",
    description:
      "Designed a logistics management system for warehouse operations and wrote technical documentation for maintenance and onboarding.",
  },
];

const stack = [
  {
    label: "Application",
    skills: [
      "Node.js",
      "TypeScript",
      "React",
      "Angular",
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "FastAPI",
    ],
  },
  {
    label: "AI",
    skills: [
      "Claude API",
      "OpenAI",
      "Prompt Engineering",
      "RAG Systems",
      "Vector Embeddings",
      "LLM Apps",
    ],
  },
  {
    label: "Platform",
    skills: [
      "AWS Lambda",
      "S3",
      "Step Functions",
      "EventBridge",
      "Kafka",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    label: "Data & Delivery",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Supabase",
      "GraphQL",
      "gRPC",
      "Jenkins",
      "GitHub Actions",
    ],
  },
];

const details = [
  {
    label: "Education",
    value: "B.Sc. Computer Engineering, Eritrean Institute of Technology",
    meta: "2015",
  },
  { label: "Location", value: "Toronto, ON" },
  { label: "Email", value: "tedtfu@gmail.com", href: "mailto:tedtfu@gmail.com" },
  { label: "GitHub", value: "TedTes", href: "https://github.com/TedTes" },
  {
    label: "LinkedIn",
    value: "tedrostesfu",
    href: "https://linkedin.com/in/tedrostesfu",
  },
];

export default function AboutPage() {
  return (
    <main className="site-content">
      <div className="site-content__inner">
        <header className="content-header">
          <h1 className="content-page-title">About</h1>
          <p className="content-lede">
            Senior full-stack software engineer focused on production systems,
            event-driven architecture, cloud infrastructure, and AI-powered
            applications.
          </p>
        </header>

        <section>
          <div className="content-list">
            {focusAreas.map((item) => (
              <article key={item.title} className="content-row">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="content-meta">{item.label}</span>
                </div>
                <h2 className="content-feature-title">{item.title}</h2>
                <p className="content-row-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="content-section-heading">Experience</h2>
            <span className="content-meta">2015 - 2024</span>
          </div>
          <div className="content-list">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="content-row"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="content-row-title">{item.role}</h3>
                    <p className="content-meta mt-1">{item.company}</p>
                  </div>
                  <span className="content-meta">{item.period}</span>
                </div>
                <p className="content-row-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-section-heading mb-4">Stack</h2>
          <div className="content-list">
            {stack.map((group) => (
              <article key={group.label} className="content-row">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <h3 className="content-row-title shrink-0 sm:w-32">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="content-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-section-heading mb-4">Details</h2>
          <div className="content-list">
            {details.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    item.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group content-row"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="content-row-title transition-colors group-hover:text-accent">
                      {item.label}
                    </span>
                    <span className="text-sm text-muted">{item.value}</span>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="content-row">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <span className="content-row-title">{item.label}</span>
                      <p className="content-row-copy">{item.value}</p>
                    </div>
                    {item.meta && (
                      <span className="content-meta">{item.meta}</span>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <div className="content-section">
          <a
            href="/resume.pdf"
            className="text-sm font-medium text-accent hover:underline"
          >
            Resume →
          </a>
        </div>
      </div>
    </main>
  );
}
