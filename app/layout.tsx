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
    "Cloud, Linux, Networking, Security and Automation portfolio of Hemantha Rayudu.",
  keywords: [
    "Cloud Engineer",
    "Linux",
    "Networking",
    "AWS",
    "Google Cloud",
    "DevOps",
    "Cybersecurity",
  ],
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