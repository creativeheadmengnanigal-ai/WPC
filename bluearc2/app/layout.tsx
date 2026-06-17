import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluearc Contracting LLC | Welding & Industrial Painting — UAE",
  description: "Specialized welding and industrial painting contracting for oil & gas, marine, offshore, construction, and infrastructure sectors across UAE and the Middle East.",
    keywords: [
    "Welding UAE",
    "Industrial Painting UAE",
    "Steel Fabrication UAE",
    "Protective Coating UAE",
    "Bluearc Contracting LLC",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
