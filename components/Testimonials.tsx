import { Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    quote:
      "Alex delivered our e-commerce platform ahead of schedule and exceeded all expectations. The attention to detail and clean code made our lives so much easier post-launch.",
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager, DataFlow",
    quote:
      "Working with Alex was a game-changer. They took our vague requirements and turned them into a polished, performant dashboard our clients love.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, FitLife App",
    quote:
      "Incredibly talented and professional. Alex built our mobile app from scratch and the user feedback has been overwhelmingly positive. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Client <span className="text-accent">Reviews</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Don&apos;t just take my word for it — here&apos;s what clients have to
          say.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-card-border rounded-xl p-6 relative"
            >
              <Quote
                size={32}
                className="text-accent/20 absolute top-4 right-4"
              />
              <p className="text-sm text-muted leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <User size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
