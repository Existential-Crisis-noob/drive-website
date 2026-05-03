"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function AnimatedSection({ children }: PropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="py-16 md:py-24"
    >
      {children}
    </motion.section>
  );
}
