"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const clients = ["MomoNepal", "Khosla", "Lalit", "Nishant", "Gaurav"];

export default function ClientsSection() {
  return (
    <AnimatedSection>
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Clients We&apos;ve Worked With</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, idx) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card flex h-20 items-center justify-center rounded-xl text-sm font-semibold text-white/55 grayscale transition hover:text-white hover:grayscale-0"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
