"use client";

import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import AnimatedSection from "./AnimatedSection";

type SnapshotState = "idle" | "loading" | "result" | "emailSent";

const labels = [
  "SEO Visibility",
  "Social Media Presence",
  "Local Search Presence",
  "Conversion Readiness",
  "Competitor Gap"
];

export default function SnapshotSection() {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SnapshotState>("idle");

  const scores = useMemo(
    () =>
      labels.map((label, index) => ({
        label,
        score: [58, 52, 61, 47, 63][index]
      })),
    []
  );

  const handleSnapshot = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) return;
    setState("loading");
    window.setTimeout(() => setState("result"), 1500);
  };

  const handleEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setState("emailSent");
  };

  return (
    <AnimatedSection>
      <div id="snapshot" className="section-container scroll-mt-24">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-orange-300">Stop 02 - Free Growth Snapshot</p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">See Where Your Business Could Grow Online.</h2>
        <p className="text-muted mx-auto mt-4 max-w-3xl text-center">
          Enter your website or social media username and get a quick preview of where your business may be losing visibility, trust, or customers.
        </p>

        <form onSubmit={handleSnapshot} className="glass-card mx-auto mt-8 max-w-3xl rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter website URL or Instagram/social handle"
              className="h-12 flex-1 rounded-xl border border-white/15 bg-black/20 px-4 text-sm text-current outline-none ring-orange-400 transition focus:ring-2"
            />
            <button className="h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 text-sm font-semibold text-white transition hover:shadow-orange">
              Get Free Growth Snapshot
            </button>
          </div>
        </form>

        {state === "loading" && (
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-orange-300/30 bg-orange-500/10 p-4 text-center text-orange-200">
            Analyzing your visibility route...
          </div>
        )}

        {(state === "result" || state === "emailSent") && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="glass-card mx-auto mt-6 max-w-3xl rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Your Initial Growth Snapshot</h3>
            <p className="text-muted mt-2 text-sm">This is a quick preview. We&apos;ll manually review your business before the strategy call.</p>
            <div className="mt-5 space-y-3">
              {scores.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="text-orange-300">{item.score}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${item.score}%` }} className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-300" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-orange-300/20 bg-orange-500/10 p-4">
              <p className="font-medium">Want the full review?</p>
              <p className="text-muted mt-1 text-sm">Where should we send the full review?</p>
              {state !== "emailSent" ? (
                <form onSubmit={handleEmail} className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Your email address"
                    className="h-10 flex-1 rounded-lg border border-white/15 bg-black/20 px-3 text-sm outline-none ring-orange-400 transition focus:ring-2"
                  />
                  <button className="h-10 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-4 text-sm font-semibold text-white">Request Manual Review</button>
                </form>
              ) : (
                <p className="mt-3 text-sm text-orange-100">
                  Thanks. We&apos;re already looking into your business and will reach out soon with next steps for your strategy call.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}
