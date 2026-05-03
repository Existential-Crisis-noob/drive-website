"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

type SiteHeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl" style={{ background: "var(--header-bg)" }}>
      <div className="section-container flex h-[74px] items-center justify-between gap-5">
        <a href="#top" className="shrink-0 rounded-full px-3 py-1" style={theme === "light" ? { background: "rgba(15,23,42,0.08)" } : undefined}>
          <Image
            src="/drive-logo.png"
            alt="DRIVE Digital logo"
            width={168}
            height={56}
            className="h-auto w-32 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] sm:w-40"
            priority
          />
        </a>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/20 p-2 text-muted transition hover:border-orange-300/60 hover:text-orange-300"
            style={{ background: "var(--field-bg)" }}
            aria-label="Toggle color mode"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <motion.a
            whileHover={{ y: -1 }}
            href="#book"
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-orange"
          >
            Book a Strategy Call
          </motion.a>
        </div>
      </div>
    </header>
  );
}
