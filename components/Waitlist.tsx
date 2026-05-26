"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Status = "idle" | "loading" | "success" | "error" | "misconfigured";

export default function Waitlist() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Graceful dev guard if env var is missing
    if (!endpoint) {
      setStatus("misconfigured");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isDisabled = isLoading || isSuccess;

  return (
    <section
      className="relative py-28 overflow-hidden bg-q-bg"
      id="waitlist"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      {/* Single focused glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(77,124,255,.12) 0%,transparent 65%)" }}
      />

      <div className="relative z-10 max-w-[960px] mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Avatar */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto md:mx-0 flex-shrink-0"
            style={{ width: "140px", height: "140px" }}
          >
            <div
              className="absolute inset-0 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle,rgba(0,207,255,.2) 0%,transparent 70%)",
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
              style={{ filter: "drop-shadow(0 0 20px rgba(0,207,255,.4))" }}
            />
          </motion.div>

          {/* Copy + form */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(123,92,250,.08)", border: "1px solid rgba(123,92,250,.22)" }}
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

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-6 flex items-start gap-3 max-w-[480px]"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] mt-0.5"
                    style={{ background: "rgba(0,229,160,.12)" }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-white">
                      You&apos;re on the list.
                    </p>
                    <p className="text-[13.5px] text-q-muted mt-0.5">
                      We&apos;ll reach out to you soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-[480px] mb-3 mt-6"
                    noValidate
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error" || status === "misconfigured") setStatus("idle");
                      }}
                      placeholder="your@email.com"
                      required
                      disabled={isDisabled}
                      className="flex-1 px-5 py-3.5 rounded-full text-sm text-white outline-none transition-all duration-200 placeholder:text-q-subtle bg-white/[0.04] border border-white/[0.09] focus:border-q-cyan/30 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isDisabled}
                      className={[
                        "text-white text-sm font-semibold px-7 py-3.5 rounded-full whitespace-nowrap transition-all duration-300",
                        isLoading
                          ? "opacity-70 cursor-not-allowed gradient-bg"
                          : "gradient-bg hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(77,124,255,0.4)]",
                      ].join(" ")}
                    >
                      {isLoading ? "Joining…" : "Join Waitlist"}
                    </button>
                  </form>

                  {/* Error / misconfigured feedback */}
                  <AnimatePresence>
                    {(status === "error" || status === "misconfigured") && (
                      <motion.p
                        key="err"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-[12.5px] mt-1 max-w-[480px]"
                        style={{ color: "#FF7070" }}
                      >
                        {status === "misconfigured"
                          ? "⚠ NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT is not set — add it to .env.local."
                          : errorMsg}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <p className="text-[12px] text-q-subtle mt-2">
                    Free plan · Cancel anytime
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
