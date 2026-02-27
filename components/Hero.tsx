import { ArrowRight, Github, Layers, Zap, Target } from "lucide-react";
import Link from "next/link";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Prisma", "Redis", "AWS", "Docker",
  "GraphQL", "React Native", "Figma", "Stripe", "Supabase",
];

const disciplines = [
  { icon: Target, label: "Product Strategy" },
  { icon: Layers, label: "Interface Systems" },
  { icon: Zap, label: "Launch Execution" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden">
      {/* Archimedean tiling SVG background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="arch-bg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <polygon points="29,0 71,0 100,29 100,71 71,100 29,100 0,71 0,29" fill="none" stroke="#6366f1" strokeWidth="0.8" />
            <polygon points="129,100 171,100 200,129 200,171 171,200 129,200 100,171 100,129" fill="none" stroke="#6366f1" strokeWidth="0.8" />
            <polygon points="100,100 71,100 100,71 129,100 100,129" fill="none" stroke="#6366f1" strokeWidth="0.8" />
            <polygon points="100,0 71,0 100,-29 129,0 100,29" fill="none" stroke="#6366f1" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-bg)" />
      </svg>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Left: content ── */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card border border-card-border text-xs text-muted mb-8 animate-fade-in-up">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available — building with ambitious teams
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight leading-[1.06] mb-6 animate-fade-in-up animation-delay-200">
              Product direction,{" "}
              <span className="text-gradient">design taste,</span>{" "}
              and technical execution.
            </h1>

            {/* Description */}
            <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
              I help shape ideas into products people actually use — combining
              product thinking, interface clarity, and pragmatic engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up animation-delay-500">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-xl font-semibold text-sm transition-colors"
              >
                View Projects <ArrowRight size={15} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-card-border hover:border-accent/40 text-foreground rounded-xl font-semibold text-sm transition-colors"
              >
                Read the Blog
              </Link>
              <a
                href="#"
                className="p-3 rounded-xl text-muted hover:text-foreground hover:bg-card-border/40 transition-colors"
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          {/* ── Right: floating stats + disciplines ── */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 animate-fade-in-up animation-delay-400">
            {/* Stats card */}
            <div className="bg-card border border-card-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="grid grid-cols-3 divide-x divide-card-border">
                {[
                  { value: "6+", label: "Projects Shipped" },
                  { value: "5+", label: "Years Building" },
                  { value: "10+", label: "Happy Clients" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center px-4 first:pl-0 last:pr-0">
                    <div className="text-3xl font-black text-gradient leading-none mb-1">
                      {value}
                    </div>
                    <div className="text-[11px] text-muted leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines */}
            <div className="space-y-2">
              {disciplines.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-card border border-card-border rounded-xl px-4 py-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-accent" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                  <span className="ml-auto text-[10px] text-muted font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech ticker ── */}
        <div className="mt-16 -mx-6 overflow-hidden animate-fade-in-up animation-delay-600">
          <div className="flex gap-3 tech-ticker">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="shrink-0 text-xs text-muted/50 bg-card border border-card-border/50 px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
