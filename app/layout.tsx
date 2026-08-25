import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tedros Tesfu",
  description:
    "Product-focused engineer building applied AI products, full-stack systems, developer tools, and repo-backed writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;var t=localStorage.getItem('theme');var n=(t==="light"||t==="dark")?t:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");d.classList.toggle("dark",n==="dark");d.style.colorScheme=n;}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Sidebar />
        <div className="lg:pl-[104px] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
