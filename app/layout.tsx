import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hemantha Rayudu | Cloud & Infrastructure Engineer",
  description:
    "Portfolio of Hemantha Rayudu Kavali showcasing cloud infrastructure, networking, Linux, security, automation, and AI projects.",

  keywords: [
    "Hemantha Rayudu",
    "Cloud Engineer",
    "Infrastructure Engineer",
    "Linux",
    "Networking",
    "AWS",
    "Google Cloud",
    "DevOps",
    "Cybersecurity",
    "TCS",
  ],

  authors: [{ name: "Hemantha Rayudu Kavali" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}