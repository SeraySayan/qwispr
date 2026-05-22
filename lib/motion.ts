import type { Variants } from "framer-motion";

/** Reusable, properly typed Framer Motion variants */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Common viewport setting for whileInView */
export const viewport = { once: true, margin: "-60px" } as const;
