import { ArrowDown, Send } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="text-accent font-medium mb-4 animate-fade-in-up">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          Alex Morgan
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Full-stack developer &amp; designer crafting modern, performant web
          experiences that help businesses grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            <Send size={18} />
            Hire Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
