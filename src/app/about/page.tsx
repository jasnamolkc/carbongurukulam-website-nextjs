import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Carbon Gurukulam",
  description: "Learn about the legacy (formerly Carbon 30 Classes) and vision of Carbon Gurukulam. Discover our residential coaching excellence for NEET & JEE in Calicut.",
};

export default function AboutPage() {
  return <AboutClient />;
}

