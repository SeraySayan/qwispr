"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const CASES = [
  {
    id: "sales",
    label: "Sales",
    line: "Handle objections and close with confidence.",
    quote: '"How quickly do customers see ROI on your plan?"',
  },
  {
    id: "discovery",
    label: "Discovery",
    line: "Uncover needs before the moment passes.",
    quote: '"How does your team handle this workflow today?"',
  },
  {
    id: "support",
    label: "Support",
    line: "De-escalate and resolve without losing the customer.",
    quote: '"I\'m going to make this right for you right now."',
  },
  {
    id: "interviews",
    label: "Interviews",
    line: "Ask sharper follow-ups when answers stay vague.",
    quote: '"Can you share a specific before-and-after example?"',
  },
  {
    id: "demos",
    label: "Demos",
    line: "Spot interest signals and guide the next step.",
    quote: '"Want to see this inside your Salesforce setup?"',
  },
];

export default function UseCases() {
  const [active, setActive] = useState("sales");
  const uc = CASES.find((c) => c.id === active)!;

  return (
    <section
      className="py-20 bg-q-bg"
      id="use-cases"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[720px] mx-auto px-6 text-center">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-10"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] rounded bg-q-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
              Use Cases
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(26px,3.5vw,40px)] font-bold tracking-tight"
          >
            Every high-stakes <span className="gradient-text">call</span>
          </motion.h2>
        </motion.div>

        {/* Segmented selector */}
        <motion.div
          className="inline-flex flex-wrap justify-center gap-1 p-1 rounded-full mb-12"
          style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.06)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
        >
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={[
                "px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200",
                active === c.id ? "text-white bg-white/[0.08]" : "text-q-muted hover:text-white/80",
              ].join(" ")}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <p className="text-[17px] text-q-muted mb-8 max-w-[480px] mx-auto">
              {uc.line}
            </p>
            <div className="max-w-[440px] mx-auto pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-q-cyan mb-2">
                Suggestion
              </p>
              <p className="text-[15px] text-white/90 leading-relaxed">{uc.quote}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
