import Image from "next/image";
import Link from "next/link";

const PRODUCT_LINKS = [
  { label: "Features",      href: "#features" },
  { label: "Use Cases",     href: "#use-cases" },
  { label: "How it Works",  href: "#how-it-works" },
  { label: "Pricing",       href: "#pricing" },
  { label: "Join Waitlist", href: "#waitlist" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer
      className="pt-14 pb-10"
      style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Qwispr"
                width={176}
                height={56}
                className="h-14 w-auto"
                style={{ filter: "brightness(1.2) contrast(1.05)" }}
              />
            </Link>
            <p className="text-[13.5px] text-q-muted leading-relaxed max-w-[220px] mb-6">
              Real-time AI call intelligence — know what to say next, every time.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "𝕏",  aria: "Twitter" },
                { label: "in", aria: "LinkedIn" },
                { label: "🔼", aria: "Product Hunt" },
              ].map(({ label, aria }) => (
                <Link
                  key={aria}
                  href="#"
                  aria-label={aria}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[13px] font-bold text-q-muted hover:text-white hover:bg-white/5 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.07)",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11.5px] font-bold uppercase tracking-[.1em] mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-q-muted hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11.5px] font-bold uppercase tracking-[.1em] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13.5px] text-q-muted hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <p className="text-[12.5px] text-q-subtle">© 2026 Qwispr.</p>
          <p className="text-[12.5px] text-q-subtle text-right">
            <Link
              href="https://www.wehense.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="wehense-gradient font-semibold transition-opacity duration-200 hover:opacity-85"
            >
              Wehense
            </Link>{" "}
            Labs product.
          </p>
        </div>
      </div>
    </footer>
  );
}
