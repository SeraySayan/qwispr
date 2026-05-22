"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { Zap, Shield, Sparkles, FileText } from "lucide-react";

const FEATURES = [
  { Icon: Zap, title: "Live Suggestions", tag: "Real-time whisper cues", color: "#7B5CFA" },
  { Icon: Shield, title: "Objection Handling", tag: "Reframe on the spot", color: "#4D7CFF" },
  { Icon: Sparkles, title: "Context-Aware", tag: "Learns your calls", color: "#00CFFF" },
  { Icon: FileText, title: "Call Summaries", tag: "Instant debrief", color: "#00E5A0" },
];

export default function Features() {
  return (
    <section
      className="py-16 bg-q-bg"
      id="features"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] rounded bg-q-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
              Features
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(26px,3.5vw,40px)] font-bold tracking-tight"
          >
            Built for the <span className="gradient-text">moment</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {FEATURES.map(({ Icon, title, tag, color }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-4"
                style={{ background: `${color}14` }}
              >
                <Icon size={20} color={color} strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-semibold mb-1">{title}</h3>
              <p className="text-[13px] text-q-muted">{tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
