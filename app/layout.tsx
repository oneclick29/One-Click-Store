import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Click Store",
  description:
    "Your Instant Shopping Hub. Discover quality products across electronics, fashion, home, kitchen, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
