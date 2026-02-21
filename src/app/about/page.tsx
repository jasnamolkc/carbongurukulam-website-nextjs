import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Carbon Gurukulam",
  description: "Learn about the vision, mission, and history of Carbon Gurukulam. Our journey towards excellence in AI-powered education.",
};

export default function AboutPage() {
  return <AboutClient />;
}
