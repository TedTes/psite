import { Globe, Palette, Smartphone, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web apps built with React, Next.js, and the latest technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed in Figma with a focus on user experience and conversion.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps using React Native that feel native on both iOS and Android.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable server architectures, RESTful APIs, and database design to power your applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What I <span className="text-accent">Do</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          I offer a range of services to help bring your digital ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-card-border rounded-xl p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
