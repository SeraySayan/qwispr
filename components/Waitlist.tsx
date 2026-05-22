"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section
      className="relative py-28 overflow-hidden bg-q-bg"
      id="waitlist"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      {/* Single focused glow — final CTA only */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(77,124,255,.12) 0%,transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[960px] mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Avatar — side accent, not stacked box */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto md:mx-0 flex-shrink-0"
            style={{ width: "140px", height: "140px" }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle,rgba(0,207,255,.2) 0%,transparent 70%)",
                filter: "blur(16px)",
                transform: "scale(1.3)",
              }}
            />
            <Image
              src="/qwispr-avatar.png"
              alt="Qwispr AI"
              width={140}
              height={140}
              className="relative w-full h-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(0,207,255,.4))",
              }}
            />
          </motion.div>

          {/* Copy + form */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(123,92,250,.08)",
                border: "1px solid rgba(123,92,250,.22)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-q-cyan dot-pulse" />
              <span className="text-[11px] font-bold tracking-[.12em] text-q-cyan uppercase">
                Early access open
              </span>
            </div>

            <h2
              className="font-bold tracking-tight leading-[1.08] mb-3"
              style={{ fontSize: "clamp(28px,4vw,44px)" }}
            >
              <span className="whitespace-nowrap block">Know what to say next.</span>
              <span className="gradient-text block">Starting today.</span>
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mb-4 mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full text-sm text-white outline-none transition-all duration-200 placeholder:text-q-subtle bg-white/[0.04] border border-white/[0.09] focus:border-q-cyan/30"
              />
              <button
                type="submit"
                disabled={loading || success}
                className={[
                  "text-white text-sm font-semibold px-7 py-3.5 rounded-full whitespace-nowrap transition-all duration-300",
                  success ? "" : "gradient-bg hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(77,124,255,0.4)]",
                  loading ? "opacity-70 cursor-not-allowed" : "",
                ].join(" ")}
                style={success ? { background: "#00E5A0" } : {}}
              >
                {loading ? "Joining…" : success ? "✓ You're in!" : "Join Waitlist"}
              </button>
            </form>

            <p className="text-[12px] text-q-subtle">
              Free plan · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
