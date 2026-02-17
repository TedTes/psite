import { ExternalLink, Github, Image } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, payments, and admin dashboard. Built for a fashion retail client.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for a B2B SaaS product with real-time data visualization and team management.",
    tags: ["React", "D3.js", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Health & Fitness App",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
    tags: ["React Native", "Firebase", "Redux"],
    live: "#",
    github: "#",
  },
  {
    title: "Real Estate Listing",
    description:
      "Property listing platform with advanced search, map integration, and virtual tour scheduling.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Content Writer",
    description:
      "AI-powered writing assistant with templates, tone adjustment, and collaborative editing features.",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Restaurant Booking System",
    description:
      "Online reservation system with table management, waitlist, and automated SMS confirmations.",
    tags: ["Vue.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Here are some of my recent projects. Each one was crafted with
          attention to detail and performance.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-card-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-card-border/30 flex items-center justify-center">
                <Image size={40} className="text-muted/50" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
