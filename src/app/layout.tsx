import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Gurukulam | JEE, NEET & Integrated Coaching Institute",
  description:
    "Carbon Gurukulam is a premier coaching institute offering JEE, NEET, and Integrated batches with a residential Gurukulam learning model. Excellence in medical and engineering entrance preparation.",
  keywords: [
    "JEE Coaching",
    "NEET Coaching",
    "Integrated Batches",
    "Carbon Gurukulam",
    "Entrance Coaching Institute",
    "Medical Entrance",
    "Engineering Entrance"
  ],
  openGraph: {
    title: "Carbon Gurukulam | JEE, NEET & Integrated Coaching Institute",
    description:
      "Premier JEE, NEET & Integrated coaching institute with a residential Gurukulam learning system.",
    type: "website",
    locale: "en_US",
    url: "https://carbongurukulam.com",
    siteName: "Carbon Gurukulam",
  },

  icons: {
    icon: "/favicon.ico",
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
