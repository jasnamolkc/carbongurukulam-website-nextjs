import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carbongurukulam.com"),
  title: "Carbon Gurukulam | Premier JEE & NEET Residential Coaching",
  description:
    "Carbon Gurukulam is a premier residential coaching institute for JEE (Main & Advanced), NEET, and Integrated batches. Proven results, personalized mentoring, and Gurukulam learning system in Calicut.",
  keywords: [
    "Carbon Gurukulam Calicut",
    "Best JEE Coaching in Calicut",
    "Best NEET Coaching in Calicut",
    "Residential Coaching for JEE",
    "Residential NEET Coaching",
    "Integrated JEE NEET Batch",
    "Medical Entrance Coaching",
    "Engineering Entrance Coaching",
    "Gurukulam Coaching Institute"
  ],
  openGraph: {
    title: "Carbon Gurukulam | Premier JEE & NEET Residential Coaching",
    description:
      "Residential Gurukulam-based coaching institute delivering excellence in JEE & NEET with proven results and personalized mentoring.",
    url: "https://carbongurukulam.com",
    siteName: "Carbon Gurukulam",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${leagueSpartan.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
