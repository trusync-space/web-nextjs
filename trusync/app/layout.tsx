import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trusync — Trust Infrastructure for Autonomous AI Agents",
  description:
    "Secure transaction and oversight layer for autonomous AI systems.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}