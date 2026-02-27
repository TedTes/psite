export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Tedros Tesfu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
