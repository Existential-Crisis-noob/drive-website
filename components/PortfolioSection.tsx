"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { useMemo, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { portfolioItems } from "./data";

const filters = ["All", "Web Design", "SEO", "Graphics", "Thumbnails", "Social Media", "Video Editing"];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active)),
    [active]
  );

  return (
    <AnimatedSection>
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Portfolio</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
          Selected work across websites, SEO, graphics, thumbnails, social media, and video editing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === filter
                  ? "border-orange-300 bg-orange-500/20 text-orange-200"
                  : "border-white/15 text-white/70 hover:border-orange-300/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -7, scale: 1.01 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10 opacity-90" />
                  {item.youtube && <PlayCircle className="absolute right-3 top-3 h-7 w-7 text-white/85" />}
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-300">{item.category}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                  <a
                    href={item.youtube ?? "#"}
                    target={item.youtube ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-orange-300 transition hover:text-orange-200"
                  >
                    View Project
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
