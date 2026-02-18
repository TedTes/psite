import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, payments, and admin dashboard.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization and team management.",
    tags: ["React", "D3.js", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Health & Fitness App",
    description:
      "Cross-platform mobile app for tracking workouts and nutrition.",
    tags: ["React Native", "Firebase", "Redux"],
    live: "#",
    github: "#",
  },
  {
    title: "Real Estate Listing",
    description:
      "Property platform with advanced search, maps, and virtual tours.",
    tags: ["Next.js", "Mapbox", "Prisma"],
    live: "#",
    github: "#",
  },
  {
    title: "AI Content Writer",
    description:
      "AI-powered writing assistant with templates and tone adjustment.",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Restaurant Booking",
    description:
      "Reservation system with table management and automated SMS.",
    tags: ["Vue.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
              <Layers size={16} />
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected <span className="text-accent">Work</span>
            </h2>
          </div>
        </div>

        {/* Top row — 2 featured projects, larger */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.title}
              className="bg-card border border-card-border rounded-2xl p-8 hover:border-accent/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.description}
              </p>

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
          ))}
        </div>

        {/* Bottom row — 4 compact projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.slice(2).map((project) => (
            <div
              key={project.title}
              className="bg-card border border-card-border rounded-xl p-5 hover:border-accent/50 transition-colors group"
            >
              <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-card-border text-muted px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.live}
                  className="text-muted hover:text-accent transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  className="text-muted hover:text-accent transition-colors"
                  aria-label="Source Code"
                >
                  <Github size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
