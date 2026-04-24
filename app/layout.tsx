import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIVE | Digital Marketing Agency",
  description: "Grow revenue through digital marketing with DRIVE."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
