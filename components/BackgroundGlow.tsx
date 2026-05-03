"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 180 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 180 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(620px circle at ${smoothX}px ${smoothY}px, rgba(255,122,0,0.16), rgba(255,122,0,0.035) 34%, transparent 64%)`;

  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ background }} />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, rgba(255,122,0,0.06) 18%, transparent 45%), linear-gradient(30deg, transparent 0%, rgba(255,122,0,0.04) 20%, transparent 42%)"
        }}
      />
    </>
  );
}
