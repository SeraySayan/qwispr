"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import Link from "next/link";
import { Shield, MicOff, Lock, FileCheck } from "lucide-react";

const POINTS = [
  { Icon: MicOff, title: "Qwispr never speaks for you" },
  { Icon: Shield, title: "You control recording" },
  { Icon: Lock, title: "End-to-end encryption" },
  { Icon: FileCheck, title: "Clear consent messaging" },
];

export default function Privacy() {
  return (
    <section
      className="py-28 bg-q-bg2"
      id="privacy"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] rounded bg-q-cyan" />
              <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
                Privacy
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(28px,3.8vw,48px)] font-bold tracking-tight leading-[1.1] mb-4"
            >
              You&apos;re always <span className="gradient-text">in control.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[16px] text-q-muted leading-relaxed max-w-[400px] mb-8"
            >
              We don&apos;t speak for you. We don&apos;t record without consent.
              We give you guidance — you decide what to do with it.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/privacy"
                className="text-sm font-semibold text-q-muted hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                Privacy Policy →
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust checklist — no card grid */}
          <motion.ul
            className="divide-y divide-white/[0.06]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {POINTS.map(({ Icon, title }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="flex items-center gap-4 py-5 first:pt-0 last:pb-0"
              >
                <Icon size={18} color="#00CFFF" strokeWidth={1.75} className="flex-shrink-0 opacity-90" />
                <span className="text-[15.5px] font-medium">{title}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
