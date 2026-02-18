import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Have a project in mind? Let&apos;s talk about how I can help bring
          your ideas to life.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-card border border-card-border rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">Email</p>
                <a
                  href="mailto:alex@example.com"
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  alex@example.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card border border-card-border rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="text-sm font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
