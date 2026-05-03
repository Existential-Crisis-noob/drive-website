"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function JourneyOverlay() {
  const { scrollYProgress } = useScroll();
  const jeepX = useTransform(scrollYProgress, [0, 1], ["9vw", "79vw"]);
  const jeepY = useTransform(scrollYProgress, [0, 1], ["34vh", "82vh"]);

  return (
    <>
      <svg aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden h-full w-full lg:block" viewBox="0 0 1440 1200" preserveAspectRatio="none">
        <motion.path
          d="M36,340 C240,350 260,520 470,540 C720,564 690,720 980,760 C1200,790 1230,910 1400,960"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="14 13"
          className="route-line"
          initial={{ pathLength: 0.05, opacity: 0.4 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <circle cx="460" cy="540" r="10" fill="rgba(251,146,60,0.20)" stroke="rgba(251,146,60,0.75)" />
        <circle cx="985" cy="760" r="10" fill="rgba(251,146,60,0.20)" stroke="rgba(251,146,60,0.75)" />
        <circle cx="1385" cy="960" r="12" fill="rgba(251,146,60,0.25)" stroke="rgba(251,146,60,0.9)" />
      </svg>
      <motion.div style={{ x: jeepX, y: jeepY }} className="pointer-events-none fixed z-[2] hidden lg:block">
        <svg width="86" height="50" viewBox="0 0 86 50" fill="none">
          <ellipse cx="40" cy="43" rx="30" ry="5" fill="rgba(15,23,42,0.35)" />
          <rect x="11" y="19" width="47" height="15" rx="4" fill="#f97316" />
          <path d="M24 13C24 11.3 25.3 10 27 10H41C42.4 10 43.7 10.8 44.3 12L47.7 19H24V13Z" fill="#fb923c" />
          <rect x="28" y="13" width="7" height="5" rx="1" fill="#1f2937" />
          <rect x="37" y="13" width="7" height="5" rx="1" fill="#1f2937" />
          <rect x="58" y="22" width="12" height="6" rx="2" fill="#f59e0b" />
          <circle cx="24" cy="36" r="7.5" fill="#0f172a" />
          <circle cx="24" cy="36" r="3.2" fill="#64748b" />
          <circle cx="52" cy="36" r="7.5" fill="#0f172a" />
          <circle cx="52" cy="36" r="3.2" fill="#64748b" />
        </svg>
      </motion.div>
    </>
  );
}
