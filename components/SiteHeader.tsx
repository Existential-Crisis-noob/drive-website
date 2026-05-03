"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { navLinks } from "./siteData";

type SiteHeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="shrink-0">
          <Image src="/drive-logo.png" alt="DRIVE Digital logo" width={150} height={50} className="h-auto w-28 sm:w-36" priority />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition hover:text-orange-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/15 bg-white/5 p-2 text-muted transition hover:border-orange-300/60 hover:text-orange-300"
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
