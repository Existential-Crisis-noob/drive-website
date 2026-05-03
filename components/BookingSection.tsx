"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection>
      <div id="booking" className="section-container scroll-mt-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Ready to Grow?</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
          Book a free strategy call and let&apos;s talk about how DRIVE can help your business reach the right audience.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div whileHover={{ y: -2 }} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Calendly (Placeholder)</h3>
            <p className="mt-2 text-white/70">Embed your Calendly widget here when ready.</p>
            <div className="mt-4 flex h-72 items-center justify-center rounded-xl border border-dashed border-orange-300/30 bg-black/20 text-white/50">
              Calendly Embed Placeholder
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Request a Meeting</h3>
            {submitted ? (
              <p className="mt-4 rounded-xl border border-orange-300/40 bg-orange-500/10 p-4 text-orange-100">
                Thanks! We&apos;ll reach out soon with a meeting link.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <input required placeholder="Name" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input required type="email" placeholder="Email" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input required placeholder="Business name" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input placeholder="Website URL (optional)" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input required placeholder="Preferred date/time" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <textarea required placeholder="Message" className="min-h-24 w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2" />
                <button className="h-11 w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 font-semibold text-white transition hover:shadow-orange">
                  Request a Meeting
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
