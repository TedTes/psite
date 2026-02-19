export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  live: string;
  github: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with cart, payments, and admin dashboard.",
    longDescription:
      "A complete e-commerce solution built for a fashion retail client. The platform handles everything from product browsing with advanced filtering to secure checkout via Stripe. The admin dashboard provides real-time sales analytics, inventory management, and order tracking. Built with performance in mind — achieving a 95+ Lighthouse score with server-side rendering and image optimization.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "Server-rendered product pages with ISR for instant load times",
      "Stripe integration with support for subscriptions and one-time payments",
      "Admin dashboard with real-time sales analytics and inventory management",
      "Advanced search and filtering with faceted navigation",
      "Responsive design optimized for mobile-first shopping experience",
      "Email notifications for order confirmations and shipping updates",
    ],
    live: "#",
    github: "#",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization and team management.",
    longDescription:
      "An enterprise-grade analytics dashboard for a B2B SaaS product serving 500+ companies. The dashboard provides real-time data visualization using D3.js, with customizable widgets and automated reporting. Team management features include role-based access control, activity logs, and workspace collaboration tools.",
    tags: ["React", "D3.js", "Node.js", "WebSocket", "Redis"],
    features: [
      "Real-time data streaming via WebSocket for live metric updates",
      "Custom D3.js charts including heatmaps, funnels, and cohort analysis",
      "Drag-and-drop dashboard builder with saveable layouts",
      "Role-based access control with granular permissions",
      "Automated PDF report generation and scheduled email delivery",
      "Dark/light theme with system preference detection",
    ],
    live: "#",
    github: "#",
    year: "2025",
    role: "Frontend Lead",
  },
  {
    slug: "fitness-app",
    title: "Health & Fitness App",
    description:
      "Cross-platform mobile app for tracking workouts and nutrition.",
    longDescription:
      "A cross-platform mobile application that helps users track their fitness journey. The app includes workout logging with exercise libraries, nutrition tracking with barcode scanning, and social features for community motivation. Built with React Native for consistent performance across iOS and Android, with Firebase handling real-time sync and push notifications.",
    tags: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    features: [
      "Exercise library with 500+ movements and video demonstrations",
      "Nutrition tracking with barcode scanner and meal planning",
      "Progress photos with side-by-side comparison timeline",
      "Social feed with workout sharing and community challenges",
      "Apple Health and Google Fit integration for unified health data",
      "Offline-first architecture with background sync",
    ],
    live: "#",
    github: "#",
    year: "2024",
    role: "Mobile Developer",
  },
  {
    slug: "real-estate-listing",
    title: "Real Estate Listing",
    description:
      "Property platform with advanced search, maps, and virtual tours.",
    longDescription:
      "A property listing platform that connects buyers with agents through an intuitive search experience. Features include interactive Mapbox-powered map search, 3D virtual tour integration, mortgage calculator, and an agent CRM. The platform processes thousands of listings with server-side filtering and pagination for fast, responsive browsing.",
    tags: ["Next.js", "Mapbox", "Prisma", "PostgreSQL", "AWS S3"],
    features: [
      "Interactive map search with draw-to-search boundary selection",
      "3D virtual tour integration with Matterport embed support",
      "Mortgage calculator with real-time rate comparison",
      "Agent CRM with lead tracking and automated follow-ups",
      "Saved searches with email alerts for new matching properties",
      "Image gallery with lazy loading and full-screen lightbox",
    ],
    live: "#",
    github: "#",
    year: "2024",
    role: "Full-Stack Developer",
  },
  {
    slug: "ai-content-writer",
    title: "AI Content Writer",
    description:
      "AI-powered writing assistant with templates and tone adjustment.",
    longDescription:
      "An AI-powered writing platform that helps content teams produce high-quality copy faster. The tool provides customizable templates for blog posts, social media, emails, and ad copy. Users can adjust tone, length, and style while maintaining brand voice consistency. Features collaborative editing with real-time cursors and a built-in plagiarism checker.",
    tags: ["TypeScript", "OpenAI", "Tailwind CSS", "Supabase", "Vercel AI SDK"],
    features: [
      "50+ content templates for blogs, emails, ads, and social media",
      "Tone and style controls with brand voice presets",
      "Real-time collaborative editing with presence indicators",
      "SEO optimization suggestions with keyword density analysis",
      "Content calendar with scheduling and publishing automation",
      "Usage analytics with team productivity insights",
    ],
    live: "#",
    github: "#",
    year: "2025",
    role: "Full-Stack Developer",
  },
  {
    slug: "restaurant-booking",
    title: "Restaurant Booking",
    description:
      "Reservation system with table management and automated SMS.",
    longDescription:
      "An online reservation system designed for restaurant chains managing multiple locations. The platform includes a visual table layout editor, real-time availability, waitlist management, and automated SMS/email confirmations. The backend handles complex booking rules including party size limits, time slots, and special event reservations.",
    tags: ["Vue.js", "Express", "MongoDB", "Twilio", "Socket.io"],
    features: [
      "Visual table layout editor with drag-and-drop floor plan",
      "Real-time availability with conflict prevention",
      "Automated SMS confirmations and reminder notifications via Twilio",
      "Waitlist management with estimated wait time calculations",
      "Multi-location support with centralized admin panel",
      "Guest history tracking with dietary preferences and notes",
    ],
    live: "#",
    github: "#",
    year: "2024",
    role: "Backend Developer",
  },
];
