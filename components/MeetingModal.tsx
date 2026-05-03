"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";

type MeetingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function MeetingModal({ open, onClose }: MeetingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="glass-card w-full max-w-lg rounded-2xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-center">Book a Meeting</h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input required placeholder="Name" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input required placeholder="Business name" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <input required type="email" placeholder="Email address" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input required type="date" className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3" />
                  <select required className="h-11 w-full rounded-lg border border-white/15 bg-black/30 px-3">
                    <option value="">Choose time</option>
                    <option>10:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                    <option>6:00 PM</option>
                  </select>
                </div>
                <button className="h-11 w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-400 font-semibold text-white transition hover:shadow-orange">
                  Confirm Meeting Request
                </button>
              </form>
            ) : (
              <div className="mt-5 rounded-xl border border-orange-300/35 bg-orange-500/10 p-4 text-center text-orange-100">
                Thanks! Your meeting request is in. We will send your meeting link soon.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
