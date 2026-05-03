"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function JourneyOverlay() {
  const { scrollYProgress } = useScroll();
  const jeepX = useTransform(scrollYProgress, [0, 1], ["8vw", "82vw"]);
  const jeepY = useTransform(scrollYProgress, [0, 1], ["16vh", "78vh"]);

  return (
    <>
      <svg aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden h-full w-full lg:block" viewBox="0 0 1440 1200" preserveAspectRatio="none">
        <motion.path
          d="M20,160 C240,230 280,310 520,350 C810,400 760,560 1040,620 C1220,660 1240,760 1420,810"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="12 14"
          className="route-line"
          initial={{ pathLength: 0.1, opacity: 0.45 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      </svg>
      <motion.div style={{ x: jeepX, y: jeepY }} className="pointer-events-none fixed z-[2] hidden lg:block">
        <svg width="46" height="26" viewBox="0 0 46 26" fill="none">
          <rect x="6" y="10" width="30" height="9" rx="2" fill="#f97316" />
          <rect x="15" y="5" width="12" height="6" rx="1" fill="#fb923c" />
          <circle cx="14" cy="21" r="4" fill="#1f2937" />
          <circle cx="31" cy="21" r="4" fill="#1f2937" />
          <rect x="36" y="12" width="7" height="3" rx="1.5" fill="#f59e0b" />
        </svg>
      </motion.div>
    </>
  );
}
