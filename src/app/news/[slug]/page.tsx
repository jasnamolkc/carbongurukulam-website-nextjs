import { Metadata } from "next";
import NewsDetailClient from "./NewsDetailClient";

const allNews = [
  {
    title: "The Future of AI in Education",
    slug: "future-of-ai-education",
    excerpt: "Exploring how generative AI is transforming the classroom experience for students and teachers alike.",
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
