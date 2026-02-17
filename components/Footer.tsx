export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </p>
        <ul className="flex items-center gap-6">
          {["About", "Services", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
