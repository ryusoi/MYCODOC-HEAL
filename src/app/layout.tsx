import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LymphFlow OS",
  description: "Multilingual healing education platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
