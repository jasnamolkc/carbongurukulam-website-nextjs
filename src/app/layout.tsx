import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Gurukulam | Modern AI Educational Hub",
  description: "Experience premium, academic, and AI-powered education at Carbon Gurukulam. Shaping the future of learning with technology and tradition.",
  keywords: ["Education", "AI Learning", "Carbon Gurukulam", "Modern School", "Academic Excellence"],
  openGraph: {
    title: "Carbon Gurukulam | Modern AI Educational Hub",
    description: "Experience premium, academic, and AI-powered education at Carbon Gurukulam.",
    type: "website",
    locale: "en_US",
    url: "https://carbongurukulam.com",
    siteName: "Carbon Gurukulam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
