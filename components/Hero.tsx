"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

const BARS = [
  20, 35, 52, 68, 80, 90, 95, 88, 92, 85, 90, 78, 85, 92,
  88, 80, 92, 85, 76, 82, 72, 60, 48, 36, 26, 18, 12, 8,
];

export default function Hero() {
  const [secs, setSecs] = useState(4 * 60 + 23);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const timer = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(
    secs % 60
  ).padStart(2, "0")}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-q-bg pt-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px)," +
              "linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 100% 80% at 50% 0%,black 0%,transparent 80%)",
          }}
        />
        {/* Purple orb */}
        <div
          className="absolute -top-48 -left-32 w-[700px] h-[700px]"
          style={{ background: "radial-gradient(circle,rgba(123,92,250,.11) 0%,transparent 65%)" }}
        />
        {/* Cyan orb */}
        <div
          className="absolute -bottom-32 right-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(circle,rgba(0,207,255,.07) 0%,transparent 65%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.18fr] gap-16 items-center">

          {/* LEFT — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(123,92,250,.08)",
                border: "1px solid rgba(123,92,250,.22)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-q-cyan dot-pulse" />
              <span className="text-[11px] font-bold tracking-[.14em] text-q-cyan uppercase">
                AI Call Intelligence · Beta
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.0] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(52px,6.5vw,88px)" }}
            >
              <span className="whitespace-nowrap block text-white">The AI that</span>
              <span className="gradient-text block">whispers back.</span>
            </h1>

            {/* Sub */}
            <p className="text-[17px] text-q-muted leading-[1.7] max-w-[420px] mb-10">
              Qwispr listens to your live calls and gives real-time AI guidance
              so you know what to say next.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="#waitlist"
                className="gradient-bg text-white text-sm font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(77,124,255,0.45)]"
              >
                <Play size={12} fill="currentColor" />
                Get Early Access
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-px"
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.09)",
                }}
              >
                See How It Works
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Trust items */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { label: "100% Private",       color: "#7B5CFA" },
                { label: "Real-time AI",        color: "#00CFFF" },
                { label: "Silent Suggestions",  color: "#4D7CFF" },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="text-[12.5px] text-q-subtle flex items-center gap-1.5"
                >
                  <span
                    className="w-1 h-1 rounded-full inline-block"
                    style={{ background: color, opacity: 0.7 }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Call Mockup (vertically centered) */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center w-full min-h-[min(480px,72vh)]"
          >
            <div className="relative w-full" style={{ height: "400px" }}>
            {/* Main call card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0"
              style={{
                right: "22%",
                background: "linear-gradient(155deg,#0F1122 0%,#090B17 100%)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: "20px",
                boxShadow:
                  "0 32px 72px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.03),inset 0 1px 0 rgba(255,255,255,.06)",
                zIndex: 1,
              }}
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px]"
                style={{
                  background:
                    "linear-gradient(90deg,transparent 5%,rgba(123,92,250,.7) 35%,rgba(0,207,255,.5) 65%,transparent 95%)",
                }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-[12px] font-bold text-white">
                      SC
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-[10px] h-[10px] rounded-full bg-q-green live-ring"
                      style={{ border: "2px solid #0F1122" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-semibold leading-none mb-1">
                      Sarah Chen
                    </div>
                    <div className="text-[11.5px] text-q-muted">
                      VP of Sales · Acme Corp
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase tracking-[.12em] text-q-subtle mb-0.5">
                      Live
                    </div>
                    <div className="text-[15px] font-semibold tabular-nums text-white">
                      {timer}
                    </div>
                  </div>
                </div>

                <div className="h-[1px] mb-5" style={{ background: "rgba(255,255,255,.05)" }} />

                {/* Waveform */}
                <div className="relative mb-5" style={{ height: "52px" }}>
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-full h-[1px]" style={{ background: "rgba(255,255,255,.03)" }} />
                    ))}
                  </div>
                  <div className="flex items-end gap-[2.5px] h-full">
                    {BARS.map((h, i) => (
                      <motion.div
                        key={i}
                        className="rounded-[1.5px] flex-1"
                        style={{
                          maxWidth: "5px",
                          background: `linear-gradient(to top,#7B5CFA,#4D7CFF ${50 - h * 0.25}%,#00CFFF)`,
                          flexShrink: 0,
                          transformOrigin: "bottom",
                        }}
                        animate={{ scaleY: [0.18, 1, 0.18] }}
                        transition={{
                          duration: 0.85 + (i % 6) * 0.18,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.048,
                        }}
                        initial={{ scaleY: h / 100 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="h-[1px] mb-4" style={{ background: "rgba(255,255,255,.05)" }} />

                {/* Transcript */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[11px] font-bold text-q-subtle flex-shrink-0 w-10">Sarah</span>
                    <span className="text-[13px] text-q-muted leading-snug">
                      &quot;The pricing seems high for our Q2 budget…&quot;
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-q-cyan flex-shrink-0 w-10">You</span>
                    <div className="flex items-center gap-[3px]">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="rounded-full bg-q-subtle"
                          style={{ width: "4px", height: "4px", flexShrink: 0 }}
                          animate={{ y: [0, -3, 0], opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.14, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI status */}
                <div
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
                  style={{ background: "rgba(0,207,255,.04)", border: "1px solid rgba(0,207,255,.1)" }}
                >
                  <motion.span
                    className="w-[6px] h-[6px] rounded-full bg-q-cyan flex-shrink-0"
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-[9.5px] font-bold uppercase tracking-[.12em] text-q-cyan">
                    AI Analyzing
                  </span>
                  <div className="flex-1 h-[1px] shimmer-ai-line opacity-35 ml-1" />
                </div>
              </div>
            </motion.div>

            {/* Suggestion chips — centred on the card's right border (78%) */}

            {/* Chip 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute z-10"
              style={{
                top: "80px",
                left: "calc(78% - 96px)",
                width: "192px",
                background: "rgba(10,11,22,.97)",
                border: "1px solid rgba(255,255,255,.08)",
                borderLeftColor: "#7B5CFA",
                borderLeftWidth: "2px",
                borderRadius: "10px",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(0,0,0,.6),0 0 0 1px rgba(123,92,250,.09)",
              }}
            >
              <div className="px-3 py-2.5">
                <div className="text-[9px] font-bold uppercase tracking-[.12em] text-q-purple mb-1">
                  Suggestion
                </div>
                <div className="text-[11.5px] text-white leading-snug">
                  ROI framing for price objection
                </div>
              </div>
            </motion.div>

            {/* Chip 2 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute z-10"
              style={{
                top: "216px",
                left: "calc(78% - 96px)",
                width: "192px",
                background: "rgba(10,11,22,.97)",
                border: "1px solid rgba(255,255,255,.08)",
                borderLeftColor: "#00CFFF",
                borderLeftWidth: "2px",
                borderRadius: "10px",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(0,0,0,.6),0 0 0 1px rgba(0,207,255,.08)",
              }}
            >
              <div className="px-3 py-2.5">
                <div className="text-[9px] font-bold uppercase tracking-[.12em] text-q-cyan mb-1">
                  Smart Question
                </div>
                <div className="text-[11.5px] text-white leading-snug">
                  &quot;What&apos;s your current annual spend?&quot;
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
