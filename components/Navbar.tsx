"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="glass-panel flex items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-emerald-300 font-bold text-lg">
            <Compass size={22} />
            <span>Explore Pakistan</span>
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold transition ${
                      active ? "text-emerald-300" : "text-slate-200/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 max-w-6xl px-4 sm:px-6 md:hidden"
          >
            <div className="glass-panel rounded-[1.5rem] px-4 py-4">
              <ul className="flex flex-col gap-4">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-3 py-2 text-sm font-semibold ${
                          active ? "bg-emerald-500/20 text-emerald-200" : "text-slate-100"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex justify-end">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
