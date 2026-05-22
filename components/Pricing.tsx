"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import Link from "next/link";
import { Check, Minus } from "lucide-react";

type Plan = {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  desc: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free / Beta",
    monthlyPrice: 0,
    annualPrice: 0,
    desc: "Perfect for trying Qwispr during beta.",
    features: [
      { text: "5 calls / month", included: true },
      { text: "Real-time suggestions", included: true },
      { text: "Basic call summaries", included: true },
      { text: "Objection detection", included: false },
      { text: "Smart question engine", included: false },
      { text: "CRM integration", included: false },
    ],
    cta: "Join Waitlist",
    ctaHref: "#waitlist",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 20,
    desc: "For individuals who rely on calls every week.",
    features: [
      { text: "Unlimited calls", included: true },
      { text: "Full real-time AI suite", included: true },
      { text: "Objection detection", included: true },
      { text: "Smart question engine", included: true },
      { text: "Advanced call summaries", included: true },
      { text: "Team features", included: false },
    ],
    cta: "Start Free Trial",
    ctaHref: "#waitlist",
    popular: true,
  },
  {
    name: "Team",
    monthlyPrice: 79,
    annualPrice: 55,
    desc: "For revenue teams at scale.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 10 seats", included: true },
      { text: "Team analytics", included: true },
      { text: "CRM integration", included: true },
      { text: "Custom AI personas", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Contact Sales",
    ctaHref: "#waitlist",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      className="py-28 bg-q-bg"
      id="pricing"
      style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[640px] mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="w-4 h-[2px] rounded bg-q-cyan" />
            <span className="text-[11px] font-bold uppercase tracking-[.12em] text-q-cyan">
              Pricing
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(30px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-4"
          >
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[17px] text-q-muted">
            Start free. Scale when you&apos;re ready.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-q-muted">Monthly</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className="relative rounded-full transition-all duration-300"
            style={{
              width: "48px",
              height: "26px",
              background: annual
                ? "linear-gradient(135deg,#7B5CFA,#4D7CFF,#00CFFF)"
                : "rgba(255,255,255,.12)",
            }}
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-white shadow-sm"
              animate={{ x: annual ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          </button>
          <span className="text-sm text-q-muted">Annual</span>
          <span
            className="text-[11.5px] font-bold px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(0,229,160,.1)",
              border: "1px solid rgba(0,229,160,.25)",
              color: "#00E5A0",
            }}
          >
            Save 30%
          </span>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {PLANS.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="relative flex flex-col rounded-2xl p-9"
                style={{
                  background: plan.popular
                    ? "linear-gradient(160deg,rgba(123,92,250,.09),rgba(0,207,255,.04))"
                    : "#10111C",
                  border: plan.popular
                    ? "1px solid rgba(123,92,250,.3)"
                    : "1px solid rgba(255,255,255,.07)",
                  boxShadow: plan.popular ? "0 0 60px rgba(123,92,250,.12)" : "none",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[11.5px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap gradient-bg">
                    Most Popular
                  </div>
                )}

                <div className="text-[12px] font-bold uppercase tracking-widest text-q-muted mb-4">
                  {plan.name}
                </div>

                <div className="flex items-baseline mb-2">
                  {price === 0 ? (
                    <span className="text-[50px] font-extrabold leading-none tracking-tight">
                      $0
                    </span>
                  ) : (
                    <>
                      <span className="text-[26px] font-semibold leading-none mr-0.5">
                        $
                      </span>
                      <span className="text-[50px] font-extrabold leading-none tracking-tight">
                        {price}
                      </span>
                    </>
                  )}
                  <span className="text-[15px] font-normal text-q-muted ml-1.5 pb-1">
                    / mo
                  </span>
                </div>

                <p className="text-[13.5px] text-q-muted mb-7 leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map(({ text, included }) => (
                    <li
                      key={text}
                      className={[
                        "flex items-center gap-2.5 text-[13.5px]",
                        included ? "text-white" : "text-q-subtle",
                      ].join(" ")}
                    >
                      <span
                        className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: included
                            ? "rgba(0,229,160,.1)"
                            : "rgba(255,255,255,.04)",
                        }}
                      >
                        {included ? (
                          <Check size={10} color="#00E5A0" strokeWidth={2.5} />
                        ) : (
                          <Minus size={10} color="#40495C" strokeWidth={2} />
                        )}
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={[
                    "text-center text-sm font-semibold py-3.5 rounded-xl transition-all duration-300",
                    plan.popular
                      ? "gradient-bg text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(77,124,255,0.4)]"
                      : "bg-white/[0.06] border border-white/[0.1] text-white hover:bg-white/[0.1]",
                  ].join(" ")}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
