"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import AnimatedSection from "./AnimatedSection";

type AuditState = "idle" | "loading" | "phase1" | "phase2";

type HeroSectionProps = {
  onBookClick: () => void;
};

export default function HeroSection({ onBookClick }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<AuditState>("idle");
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const onAnalyze = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setState("loading");
    window.setTimeout(() => setState("phase1"), 1300);
    window.setTimeout(() => setState("phase2"), 3000);
    window.setTimeout(() => setShowLeadModal(true), 4400);
  };

  const onLeadCapture = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  return (
    <AnimatedSection>
      <div className="section-container relative z-10 pt-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        >
          Let&apos;s Grow Your <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Revenue</span> Through Digital Marketing
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          Enter your website and get a quick snapshot of how your business is showing up online.
        </p>

        <form onSubmit={onAnalyze} className="glass-card mx-auto mt-10 max-w-3xl rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
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
                <div className="flex items-center justify-center gap-2 text-orange-200">
                  <Loader2 className="h-4 w-4 animate-spin" /> Running quick audit...
                </div>
              ) : state === "phase1" ? (
                <div className="space-y-2">
                  <p className="font-semibold text-orange-200">&quot;Chat GPT visibility....0.5&quot;</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="font-semibold text-orange-200">Your gemini visibility is 0.25.</p>
                  <p className="text-white/80">Your competitors are getting more visibility.</p>
                </div>
              )}
            </div>
          )}
        </form>

        <button type="button" onClick={onBookClick} className="mt-6 inline-block text-sm font-semibold text-orange-300 underline underline-offset-4">
          Or book a free strategy call
        </button>
      </div>
      <AnimatePresence>
        {showLeadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setShowLeadModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.97 }}
              className="glass-card w-full max-w-md rounded-2xl p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-xl font-bold">Get full visibility review</h3>
              {!leadSubmitted ? (
                <form onSubmit={onLeadCapture} className="mt-4 space-y-3">
                  <input required type="email" placeholder="Enter your email" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                  <button className="h-11 w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 font-semibold text-white transition hover:shadow-orange">
                    Send Full Review
                  </button>
                </form>
              ) : (
                <p className="mt-4 rounded-lg border border-orange-300/30 bg-orange-500/10 p-3 text-sm text-orange-100">
                  Perfect. We will send your complete review shortly.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
