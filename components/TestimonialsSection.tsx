"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { testimonialVideos } from "./data";

export default function TestimonialsSection() {
  return (
    <AnimatedSection>
      <div className="section-container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">What Clients Say</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-white/70">
          Real stories from people and businesses we&apos;ve helped through design, content, and digital marketing.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonialVideos.map((video) => (
            <motion.a
              key={video.title}
              href={video.youtube}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -7, scale: 1.01 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <div className="relative h-44">
                <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40" />
                <PlayCircle className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white" />
              </div>
              <div className="p-4">
                <p className="font-semibold">{video.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
