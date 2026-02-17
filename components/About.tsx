import { User } from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Figma",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
  "GraphQL",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card border border-card-border flex items-center justify-center">
              <User size={80} className="text-muted" />
            </div>
          </div>

          <div>
            <p className="text-muted leading-relaxed mb-6">
              I&apos;m a passionate full-stack developer with 5+ years of
              experience building web applications. I specialize in creating
              clean, performant, and user-friendly digital experiences for
              startups and businesses worldwide.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge through blog posts and mentoring.
            </p>

            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-card border border-card-border text-muted px-3 py-1.5 rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
