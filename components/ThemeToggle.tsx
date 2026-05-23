"use client";

import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

type Theme = "dark" | "light";

const themeStyles = `
  body[data-theme="light"] {
    color-scheme: light;
    --panel: rgba(255, 255, 255, 0.92);
    --panel-border: rgba(15, 23, 42, 0.08);
    --page-bg: #f8fafc;
    --page-bg-2: #e2e8f0;
    --page-bg-3: #f1f5f9;
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --text-muted: #475569;
    --shadow-color: rgba(15, 23, 42, 0.12);
    --grid-opacity: 0.06;
    --input-bg: rgba(255, 255, 255, 0.95);
  }

  body[data-theme="light"] {
    background: radial-gradient(circle at top left, rgba(52, 211, 153, 0.18), transparent 22%),
      radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.14), transparent 18%),
      linear-gradient(135deg, var(--page-bg), var(--page-bg-2) 48%, var(--page-bg-3));
    color: var(--text-primary);
  }

  body[data-theme="light"]::before {
    opacity: var(--grid-opacity);
  }

  body[data-theme="light"] .glass-panel {
    background: var(--panel);
    border-color: var(--panel-border);
    box-shadow: 0 24px 80px var(--shadow-color);
  }

  body[data-theme="light"] .text-white,
  body[data-theme="light"] .text-slate-50,
  body[data-theme="light"] .text-slate-100 {
    color: var(--text-primary) !important;
  }

  body[data-theme="light"] .text-slate-200,
  body[data-theme="light"] .text-slate-200\/80 {
    color: var(--text-secondary) !important;
  }

  body[data-theme="light"] .text-slate-300 {
    color: var(--text-muted) !important;
  }

  body[data-theme="light"] .text-emerald-100,
  body[data-theme="light"] .text-emerald-200 {
    color: #065f46 !important;
  }

  body[data-theme="light"] .bg-white\/5 {
    background-color: rgba(15, 23, 42, 0.06) !important;
  }

  body[data-theme="light"] .bg-slate-950\/65,
  body[data-theme="light"] .bg-slate-950\/70 {
    background-color: rgba(255, 255, 255, 0.92) !important;
  }

  body[data-theme="light"] .bg-slate-950\/80 {
    background-color: var(--input-bg) !important;
  }

  body[data-theme="light"] .border-white\/10 {
    border-color: rgba(15, 23, 42, 0.12) !important;
  }

  body[data-theme="light"] .placeholder\:text-slate-500::placeholder {
    color: var(--text-muted) !important;
  }
`;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    const nextTheme = (storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : systemTheme) as Theme;

    setTheme(nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <>
      <style jsx global>{themeStyles}</style>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "light"}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/60 hover:bg-emerald-500/10"
      >
        {theme === "dark" ? <Sun size={16} /> : <MoonStar size={16} />}
        <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
      </button>
    </>
  );
}
