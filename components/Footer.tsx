import Link from "next/link";
import { Compass, Globe2, MountainSnow, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2 text-emerald-300 font-bold text-lg mb-3">
              <Compass size={20} />
              <span>Explore Pakistan</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              A modern travel showcase for Pakistan&apos;s mountains, cities, cultures, and scenic routes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
                <Sparkles size={14} className="text-emerald-300" /> Motion-rich UI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1">
                <Globe2 size={14} className="text-sky-300" /> Responsive design
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1">
                <MountainSnow size={14} className="text-amber-200" /> Destination-first
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {[
                { href: "/", label: "Home" },
                { href: "/destinations", label: "Destinations" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-emerald-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Project Info</h3>
            <p className="text-sm leading-6 text-slate-300">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for a polished, modern travel experience.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-slate-400">
          © 2026 Explore Pakistan. Crafted for immersive travel inspiration.
        </div>
      </div>
    </footer>
  );
}
