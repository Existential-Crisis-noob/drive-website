"use client";

import { motion } from "framer-motion";
import { Camera, Clapperboard, ImageIcon, Layout, Search, Share2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { services } from "./data";

const icons = [Layout, Search, ImageIcon, Camera, Share2, Clapperboard];

export default function ServicesSection() {
  return (
    <AnimatedSection>
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
          Everything your business needs to look professional, get discovered, and convert attention into revenue.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="glass-card rounded-2xl p-6 transition hover:border-orange-400/40 hover:shadow-orange"
              >
                <Icon className="h-6 w-6 text-orange-300" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
