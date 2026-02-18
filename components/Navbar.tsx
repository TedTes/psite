export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <a href="#" className="text-xl font-bold tracking-tight">
          Alex<span className="text-accent">.</span>
        </a>
      </div>
    </nav>
  );
}
