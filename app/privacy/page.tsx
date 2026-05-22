import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy · Qwispr",
  description: "How Qwispr collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-q-bg">
      {/* Simple top nav */}
      <header className="border-b border-white/5 py-5 px-6">
        <div className="max-w-[760px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Qwispr"
              width={176}
              height={56}
              className="h-14 w-auto"
              style={{ filter: "brightness(1.2) contrast(1.05)" }}
            />
          </Link>
          <Link
            href="/"
            className="text-[13.5px] text-q-muted hover:text-white transition-colors duration-200"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-[11.5px] font-bold uppercase tracking-[.12em] text-q-cyan mb-3">
            Legal
          </p>
          <h1 className="text-[38px] font-extrabold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-[13.5px] text-q-subtle">
            Last updated: May 2026
          </p>
        </div>

        <div
          className="space-y-8 text-[15px] text-q-muted leading-relaxed"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "2.5rem" }}
        >
          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              Qwispr collects minimal information necessary to provide the service. This
              includes account details you provide (name, email), and anonymised usage
              metadata to improve product quality. We do not store raw call audio beyond
              the active session.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use collected data solely to deliver AI-powered suggestions during your
              calls, improve model accuracy with aggregated and anonymised signals, and
              communicate product updates with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              3. Data Retention
            </h2>
            <p>
              Transcript data generated during a call session is retained temporarily for
              the duration of that session and deleted upon session end, unless you
              explicitly export or save it. Account data is retained as long as your
              account remains active.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              4. Third-Party Services
            </h2>
            <p>
              Qwispr may use third-party infrastructure providers (e.g. cloud hosting, AI
              model providers) under strict data-processing agreements. No personal data is
              sold or shared with advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              5. Security
            </h2>
            <p>
              All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access is
              restricted to authorised personnel under the principle of least privilege. We
              conduct regular security audits and follow responsible disclosure practices.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, export, or delete your personal data at any
              time. To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@qwispr.com"
                className="text-q-cyan hover:underline"
              >
                privacy@qwispr.com
              </a>
              . We respond to all requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this policy as the product evolves. Significant changes will be
              communicated via email or an in-app notice. Continued use of Qwispr after
              changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              8. Contact
            </h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:privacy@qwispr.com"
                className="text-q-cyan hover:underline"
              >
                privacy@qwispr.com
              </a>{" "}
              or via{" "}
              <Link
                href="https://www.wehense.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-q-cyan hover:underline"
              >
                Wehense Labs
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <footer
        className="py-8 px-6 mt-10"
        style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
      >
        <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-q-subtle">
            © 2026 Qwispr. A{" "}
            <Link
              href="https://www.wehense.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-q-muted hover:text-white underline underline-offset-2 transition-colors"
            >
              Wehense
            </Link>{" "}
            Labs product.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[12.5px] text-q-subtle hover:text-q-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[12.5px] text-q-subtle hover:text-q-muted transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
