import { User } from "lucide-react";

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
              I build digital products across product strategy, engineering,
              and design with a focus on clarity, speed, and strong execution.
            </p>
            <p className="text-muted leading-relaxed">
              My approach is simple: find the highest-leverage problem, ship
              the right thing quickly, and keep quality high as the product
              grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
