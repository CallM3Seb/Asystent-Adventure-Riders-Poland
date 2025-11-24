import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asysten Adventure Riders Polans",
  description: "Pomocny, mam nadzieję, asysten który odppwie na Twoje pytania o Adventure Riders Poland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="openai-domain-allowlist" content="wf_68ee459b747c8190b989f5fad481a1e80f5789dfd634a7ef" />
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
