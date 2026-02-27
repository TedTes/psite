import {
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tedros Tesfu",
  description:
    "Product-focused builder shaping digital products across engineering, design, and strategy.",
};

const background = [
  {
    role: "Product Engineering",
    company: "Independent Work",
    period: "Current Focus",
    description:
      "Partnering with teams to take products from rough idea to production-ready release, with strong focus on product velocity and system reliability.",
  },
  {
    role: "Platform & UX Systems",
    company: "Product Teams",
    period: "Core Strength",
    description:
      "Designing and implementing reusable UI systems, data-heavy interfaces, and maintainable frontend architecture for fast-moving products.",
  },
  {
    role: "Delivery Leadership",
    company: "Cross-Functional Collaboration",
    period: "Operating Style",
    description:
      "Working closely with design, product, and engineering to define scope, ship meaningful milestones, and keep product quality high.",
  },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Prisma",
  "Redis",
  "AWS",
  "Docker",
  "GraphQL",
  "React Native",
  "Figma",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-card-border flex items-center justify-center shrink-0">
              <User size={32} className="text-accent" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                About <span className="text-accent">Me</span>
              </h1>
              <p className="text-muted leading-relaxed max-w-2xl">
                I&apos;m Tedros Tesfu. I work at the intersection of product,
                engineering, and design to build software that is clear, useful,
                and ready for real users. My focus is turning ideas into
                working products with strong foundations for growth.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  San Francisco, CA
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail size={14} />
                  alex@example.com
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Left: Background */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={18} className="text-accent" />
                Background
              </h2>
              <div className="space-y-6">
                {background.map((job, i) => (
                  <div
                    key={i}
                    className="bg-card border border-card-border rounded-xl p-5 animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-semibold">{job.role}</h3>
                        <p className="text-sm text-accent">{job.company}</p>
                      </div>
                      <span className="text-xs text-muted shrink-0">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <h2 className="text-xl font-bold mt-12 mb-6 flex items-center gap-2">
                <GraduationCap size={18} className="text-accent" />
                Education
              </h2>
              <div className="bg-card border border-card-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">B.S. Computer Science</h3>
                    <p className="text-sm text-accent">
                      University of California
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar: Skills + Links */}
            <div>
              <h2 className="text-xl font-bold mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold mb-4">Connect</h2>
              <div className="space-y-3">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
