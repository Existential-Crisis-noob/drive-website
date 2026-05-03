"use client";

import { motion } from "framer-motion";
import { Clapperboard, Compass, PenTool, Search, Share2, Sparkles } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BackgroundGlow from "@/components/BackgroundGlow";
import SiteHeader from "@/components/SiteHeader";
import SnapshotSection from "@/components/SnapshotSection";
import StickyStrategyCTA from "@/components/StickyStrategyCTA";
import { heroStats, industries, navLinks, portfolioItems, routeSteps, services } from "@/components/siteData";

const icons = [PenTool, Search, Share2, Clapperboard, Sparkles, Compass];

const portfolioFilters = ["All", "Websites", "Social Media", "Graphics", "Video Editing", "Thumbnails"];

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const filteredPortfolio = useMemo(
    () => (portfolioFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === portfolioFilter)),
    [portfolioFilter]
  );

  const handleBookSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-clip"
      style={{
        background:
          "radial-gradient(ellipse at top, color-mix(in srgb, var(--bg-soft) 78%, transparent) 0%, var(--bg) 46%)"
      }}
    >
      <BackgroundGlow />
      <div className="relative z-10 pb-24">
        <SiteHeader theme={theme} onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))} />

        <AnimatedSection>
          <section className="section-container pb-20 pt-24 md:pb-28 md:pt-32">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
            >
              We Make Your Local Brand <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">Impossible to Ignore.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-muted mx-auto mt-5 max-w-2xl text-center text-lg">
              DRIVE Digital helps local businesses get found, trusted, and chosen through websites, SEO, social media, and content.
            </motion.p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#snapshot" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:shadow-orange sm:px-6 sm:py-3">
                Get Free Growth Snapshot
              </a>
              <a href="#book" className="rounded-full border border-orange-300/50 px-5 py-2.5 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/10 sm:px-6 sm:py-3">
                Book a Strategy Call
              </a>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item} className="glass-card rounded-xl px-3 py-2.5 text-center text-xs font-medium sm:text-sm">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <SnapshotSection />

        <AnimatedSection>
          <section id="services" className="section-container scroll-mt-24">
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">Services Built for Local Businesses</h2>
            <p className="text-muted mx-auto mt-3 max-w-3xl text-center">
              Websites, search visibility, social media, and creative content designed to help people find you, trust you, and contact you.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = icons[index];
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -8, rotate: index % 2 ? 0.6 : -0.6 }}
                    className="group glass-card rounded-2xl p-6 transition hover:border-orange-400/40 hover:shadow-orange"
                  >
                    <Icon className="h-6 w-6 text-orange-300" />
                    <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted mt-2 text-sm">{service.description}</p>
                    <div className="mt-4 md:hidden">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-300">What this includes</p>
                      <ul className="flex flex-wrap gap-2 text-xs text-muted">
                        {service.includes.slice(0, 4).map((item) => (
                          <li key={item} className="rounded-full border border-white/15 px-2 py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 hidden max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 md:block">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-300">What this includes</p>
                      <ul className="flex flex-wrap gap-2 text-xs text-muted">
                        {service.includes.slice(0, 4).map((item) => (
                          <li key={item} className="rounded-full border border-white/15 px-2 py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="industries" className="section-container scroll-mt-24">
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">Industries We Help</h2>
            <div className="relative mt-9 grid gap-5 md:grid-cols-2">
              {industries.map((item) => (
                <motion.article key={item.title} whileHover={{ y: -6 }} className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted mt-3">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="strategy" className="section-container scroll-mt-24">
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">How We Work</h2>
            <div className="relative mx-auto mt-10 max-w-5xl">
              <div className="space-y-5">
                {routeSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`glass-card relative rounded-2xl p-6 md:w-[78%] ${index % 2 === 0 ? "md:ml-8" : "md:ml-auto md:mr-8"}`}
                  >
                    <span className="absolute -left-2 top-7 hidden h-4 w-4 rounded-full border border-orange-200/60 bg-orange-500 md:block" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">Step {index + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted mt-2">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="portfolio" className="section-container scroll-mt-24">
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">Selected Work</h2>
            <p className="text-muted mx-auto mt-3 max-w-3xl text-center">
              We&apos;ve built and supported 100+ digital projects across websites, graphics, and content. Here are a few selected examples.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {portfolioFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    portfolioFilter === filter
                      ? "border-orange-300 bg-orange-500/20 text-orange-200"
                      : "border-white/15 text-muted hover:border-orange-300/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="relative mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPortfolio.map((item) => (
                <motion.article
                  key={item.project}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  className="group glass-card overflow-hidden rounded-2xl"
                >
                  <div className="relative h-40 bg-gradient-to-br from-orange-600/30 via-slate-700/30 to-slate-900/40">
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-white/70">
                      Replace with project image
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-300">{item.category}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.project}</h3>
                    <p className="text-muted mt-2 text-sm">Industry: {item.industry}</p>
                    <p className="text-muted mt-1 text-sm">Services: {item.services}</p>
                    <p className="mt-3 text-sm">
                      <span className="font-medium text-orange-200">Problem → Solution:</span> <span className="text-muted">{item.solved}</span>
                    </p>
                    <button className="mt-4 text-sm font-semibold text-orange-300 transition hover:text-orange-200">View Project</button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="book" className="section-container scroll-mt-24">
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">Ready to Build Your Growth System?</h2>
            <p className="text-muted mx-auto mt-3 max-w-3xl text-center">
              Tell us about your business and we&apos;ll start reviewing your digital presence before the call.
            </p>
            <p className="text-muted mx-auto mt-2 max-w-3xl text-center text-sm">
              Every project is custom quoted after we understand your business, goals, and current digital presence.
            </p>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="glass-card rounded-2xl p-6">
                {!formSubmitted ? (
                  <form onSubmit={handleBookSubmit} className="grid gap-3 sm:grid-cols-2">
                    <input required placeholder="Name" className="h-11 rounded-lg border px-3 sm:col-span-1" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <input required type="email" placeholder="Email" className="h-11 rounded-lg border px-3 sm:col-span-1" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <input required placeholder="Business Name" className="h-11 rounded-lg border px-3 sm:col-span-2" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <input placeholder="Website or social media username" className="h-11 rounded-lg border px-3 sm:col-span-2" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <input required placeholder="What do you need help with?" className="h-11 rounded-lg border px-3 sm:col-span-2" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <input required placeholder="Preferred meeting time" className="h-11 rounded-lg border px-3 sm:col-span-2" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <textarea required placeholder="Message" className="min-h-24 rounded-lg border px-3 py-2 sm:col-span-2" style={{ background: "var(--field-bg)", borderColor: "var(--card-border)" }} />
                    <button className="h-11 rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 font-semibold text-white sm:col-span-2">Request Strategy Call</button>
                  </form>
                ) : (
                  <p className="rounded-xl border border-orange-300/35 bg-orange-500/10 p-4 text-orange-100">
                    Thanks. We&apos;re already looking into your business and will reach out soon with next steps for your strategy call.
                  </p>
                )}
              </div>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-semibold">Choose a Meeting Time</h3>
                <p className="text-muted mt-2 text-sm">Google Calendar booking link coming soon.</p>
                <a href="#" className="mt-4 inline-flex rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 font-semibold text-white">
                  Choose a Meeting Time
                </a>
                <div className="mt-6 space-y-2 text-sm text-muted">
                  <p className="font-semibold text-current">Contact</p>
                  <a href="mailto:elegannep@gmail.com" className="text-orange-300">
                    elegannep@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <footer className="section-container border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-5 pb-12 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xl font-bold">DRIVE Digital</p>
              <p className="text-muted mt-1 text-sm">Helping local businesses in Canada get found, trusted, and chosen.</p>
              <a href="mailto:elegannep@gmail.com" className="mt-2 inline-block text-sm text-orange-300">
                elegannep@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-orange-300">
                  {item.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} DRIVE Digital</p>
          </div>
        </footer>
      </div>
      <StickyStrategyCTA />
    </main>
  );
}
