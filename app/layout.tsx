import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qwispr — Know What to Say Next",
  description:
    "Qwispr listens to your live calls and gives you real-time AI guidance, so you always know what to ask, say, or clarify next.",
  icons: {
    icon: [{ url: "/qwispr-favicon.png", type: "image/png" }],
    shortcut: "/qwispr-favicon.png",
    apple: "/qwispr-favicon.png",
  },
  openGraph: {
    title: "Qwispr — Know What to Say Next",
    description:
      "Real-time AI call intelligence. Listens live. Suggests silently. You stay in control.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-q-bg text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
