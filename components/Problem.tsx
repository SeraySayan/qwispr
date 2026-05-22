"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const PAINS = [
  "Miss the real intent",
  "Moment passes in seconds",
  '"Should have said that"',
];

export default function Problem() {
  return (
    <section
      className="py-20 bg-q-bg2"
      id="problem"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] rounded bg-q-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
              The Gap
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight leading-[1.08] mb-12"
          >
            Critical moments happen{" "}
            <span className="gradient-text">live</span>
          </motion.h2>

          {/* After vs during — clear contrast */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 max-w-[400px] mx-auto mb-12"
          >
            <div className="text-left sm:text-center">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-q-subtle mb-2">
                Most tools
              </p>
              <p className="text-[20px] font-semibold text-white/20 line-through decoration-white/15">
                After
              </p>
            </div>
            <div className="text-left sm:text-center sm:border-l sm:border-white/[0.06] sm:pl-6">
              <p className="text-[10px] font-bold uppercase tracking-[.14em] text-q-cyan mb-2">
                Qwispr
              </p>
              <p className="text-[20px] font-bold gradient-text">During</p>
            </div>
          </motion.div>

          {/* Pain points — inline, no cards */}
          <motion.p
            variants={fadeUp}
            className="text-[14px] text-q-muted leading-relaxed"
          >
            {PAINS.join(" · ")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
