import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service · Qwispr",
  description: "Terms governing your use of the Qwispr platform.",
};

export default function TermsPage() {
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
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Qwispr, you agree to be bound by these Terms of
              Service and our Privacy Policy. If you do not agree to these terms, please do
              not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              Qwispr provides an AI-powered call assistant that delivers real-time, private
              suggestions during live conversations. The service is designed for personal
              and professional productivity and does not record, store, or transmit call
              content to third parties beyond what is described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              3. User Responsibilities
            </h2>
            <p>
              You are responsible for ensuring your use of Qwispr complies with applicable
              laws and regulations, including consent requirements for call monitoring in
              your jurisdiction. You must not use the service to facilitate illegal
              activities, harassment, or deceptive practices.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All technology, branding, and content associated with Qwispr remain the
              exclusive property of Wehense Labs. You are granted a limited, non-exclusive,
              non-transferable licence to use the service for its intended purpose.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              5. Disclaimers and Limitation of Liability
            </h2>
            <p>
              Qwispr is provided on an "as is" basis. We make no warranties regarding
              accuracy, availability, or fitness for a particular purpose. To the maximum
              extent permitted by law, Wehense Labs shall not be liable for any indirect,
              incidental, or consequential damages arising from use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              6. Modifications to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of
              Qwispr following notification of changes constitutes acceptance of the
              updated terms. We will provide reasonable notice of material changes.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              7. Termination
            </h2>
            <p>
              We may suspend or terminate your access to Qwispr at our discretion if you
              violate these terms. You may cancel your account at any time by contacting
              support.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by applicable law. Any disputes shall be resolved
              through binding arbitration where permitted, or in the courts of competent
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-[19px] font-bold text-white mb-3">
              9. Contact
            </h2>
            <p>
              For questions about these terms, contact{" "}
              <a
                href="mailto:legal@qwispr.com"
                className="text-q-cyan hover:underline"
              >
                legal@qwispr.com
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
