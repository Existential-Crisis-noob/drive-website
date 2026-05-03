import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIVE Digital | Growth Studio for Local Businesses",
  description: "DRIVE Digital helps local businesses in Canada get found, trusted, and chosen."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
