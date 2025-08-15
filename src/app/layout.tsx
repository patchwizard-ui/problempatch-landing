// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ProblemPatch",
  description: "Turning enterprise problems into Micro-SaaS opportunities.",
};

const SOLUTIONS_URL =
  process.env.NEXT_PUBLIC_SOLUTIONS_URL || "/solutions";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        {/* Header / Nav */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              ProblemPatch
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="#how">How it Works</Link>
              {/* Solutions Directory (beta) */}
              <Link
                href={SOLUTIONS_URL}
                target={SOLUTIONS_URL.startsWith("http") ? "_blank" : undefined}
                rel={SOLUTIONS_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2"
              >
                Solutions Directory
                <span className="rounded-full bg-lime-200 text-lime-800 px-2 py-0.5 text-[10px] uppercase tracking-wide">
                  Beta
                </span>
              </Link>
              <Link href="#cta-enterprise" className="rounded-md bg-blue-600 text-white px-3 py-2">
                Post a Problem
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 flex justify-between">
            <span>© {new Date().getFullYear()} ProblemPatch</span>
            <div className="flex gap-4">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
