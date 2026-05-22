"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const STEPS = [
  { num: "01", title: "Start your call", body: "Works with Zoom, Teams, Meet, or any app." },
  { num: "02", title: "Qwispr listens", body: "Real-time analysis of intent, tone, and context." },
  { num: "03", title: "Get smart cues", body: "Whisper suggestions appear silently on your screen." },
  { num: "04", title: "Leave with clarity", body: "Summary with action items, instantly." },
];

export default function HowItWorks() {
  return (
    <section
      className="py-28 bg-q-bg2"
      id="how-it-works"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-16 lg:gap-20">

          {/* Sticky-style header column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="lg:pt-2"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] rounded bg-q-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
                How It Works
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(28px,3.8vw,44px)] font-bold tracking-tight leading-[1.1] mb-4"
            >
              Four steps to{" "}
              <span className="gradient-text">confident calls</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-q-muted">
              Zero disruption to how you already work.
            </motion.p>
          </motion.div>

          {/* Vertical timeline */}
          <motion.ol
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-3 bottom-3 w-px hidden sm:block"
              style={{
                background:
                  "linear-gradient(180deg,rgba(123,92,250,.5),rgba(0,207,255,.5))",
              }}
            />

            {STEPS.map(({ num, title, body }) => (
              <motion.li
                key={num}
                variants={fadeUp}
                className="relative flex gap-8 sm:gap-10 pb-12 last:pb-0"
              >
                <span
                  className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center text-[12px] font-bold tabular-nums text-q-cyan"
                  style={{
                    background: "#0B0C14",
                    border: "1px solid rgba(0,207,255,.25)",
                    borderRadius: "50%",
                  }}
                >
                  {num}
                </span>
                <div className="pt-1.5 min-w-0">
                  <h3 className="text-[18px] font-semibold mb-1.5">{title}</h3>
                  <p className="text-[14.5px] text-q-muted leading-relaxed">{body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
