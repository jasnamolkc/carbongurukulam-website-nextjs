import { Metadata } from "next";
import NewsDetailClient from "./NewsDetailClient";

const allNews = [
  {
    title: "Outstanding Performance in NEET 2025 Results",
    slug: "neet-2025-results-celebration",
    excerpt: "Celebrating our top achievers who have secured 680+ marks in the National Eligibility cum Entrance Test under Kota curriculum guidelines.",
  },
  {
    title: "Residential Admissions & Scholarship Test 2026",
    slug: "residential-scholarships-2026",
    excerpt: "Applications are open for the Carbon Scholarship Entrance Test (C-SET) for Class 10 graduates seeking residential coaching seats.",
  },
  {
    title: "Importance of Everyday Testing in Competitive Coaching",
    slug: "importance-of-everyday-testing",
    excerpt: "Why daily evaluation is the secret to building concept confidence and removing final exam fear.",
  },
  {
    title: "A Day in the Life of a Residential Gurukulam Aspirant",
    slug: "day-in-life-gurukulam",
    excerpt: "An inside look at our Calicut campus schedule, doubt chambers, and balanced student lifestyle.",
  },
  {
    title: "Academic Directors Share Physics & Chemistry Strategy Guidelines",
    slug: "physics-chemistry-strategy-guidelines",
    excerpt: "Expert advice on balancing board syllabus, NCERT reading, and numerical problem practice sheets.",
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allNews.find(p => p.slug === params.slug) || allNews[0];

  return {
    title: `${post.title} | Carbon Gurukulam`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Carbon Gurukulam`,
      description: post.excerpt,
    }
  };
}

export default function NewsDetailPage() {
  return <NewsDetailClient />;
}

