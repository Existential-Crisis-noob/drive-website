"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import AnimatedSection from "./AnimatedSection";

type AuditState = "idle" | "loading" | "result";

export default function HeroSection() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<AuditState>("idle");

  const onAnalyze = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setState("loading");
    window.setTimeout(() => setState("result"), 1400);
  };

  return (
    <AnimatedSection>
      <div className="section-container relative z-10 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        >
          Let&apos;s Grow Your <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Revenue</span> Through Digital Marketing
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75">
          Enter your website and get a quick snapshot of how your business is showing up online.
        </p>

        <form onSubmit={onAnalyze} className="glass-card mt-10 max-w-3xl rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
              className="h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-4 text-white outline-none ring-orange-400 transition focus:ring-2"
            />
            <button className="h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 font-semibold text-white transition hover:shadow-orange">
              Analyze My Website
            </button>
          </div>
          <p className="mt-3 text-sm text-white/60">Get your website audit in seconds.</p>

          {state !== "idle" && (
            <div className="mt-6 rounded-xl border border-orange-300/20 bg-orange-500/10 p-4">
              {state === "loading" ? (
                <div className="flex items-center gap-2 text-orange-200">
                  <Loader2 className="h-4 w-4 animate-spin" /> Running quick audit...
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="font-semibold text-orange-200">Website Score: 72/100</p>
                  <p className="text-white/80">SEO Visibility: Needs Improvement</p>
                  <p className="text-white/80">Page Speed: Good</p>
                  <p className="text-white/80">Conversion Potential: Medium</p>
                  <a href="#booking" className="mt-2 inline-block text-sm font-semibold text-orange-300 underline">
                    Book a free strategy call to review this
                  </a>
                </div>
              )}
            </div>
          )}
        </form>

        <a href="#booking" className="mt-6 inline-block text-sm font-semibold text-orange-300 underline underline-offset-4">
          Or book a free strategy call
        </a>
      </div>
    </AnimatedSection>
  );
}
