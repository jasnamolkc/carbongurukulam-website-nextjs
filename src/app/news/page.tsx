"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import ChatWidget from "@/components/ChatWidget";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allNews = [
  {
    title: "The Future of AI in Education",
    excerpt: "Exploring how generative AI is transforming the classroom experience for students and teachers alike.",
    date: "Oct 24, 2023",
    author: "Dr. Sarah Smith",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-ai-education",
    category: "Trends",
    isAI: true
  },
  {
    title: "Carbon Gurukulam Annual Tech Fest",
    excerpt: "Join us for a week-long celebration of innovation, featuring workshops, hackathons, and guest speakers.",
    date: "Nov 12, 2023",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=800",
    slug: "annual-tech-fest",
    category: "Events"
  },
  {
    title: "New Cybersecurity Lab Opened",
    excerpt: "We are proud to announce the opening of our state-of-the-art cybersecurity lab, equipped with the latest tools.",
    date: "Sep 05, 2023",
    author: "Jane Watson",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "new-cybersecurity-lab",
    category: "Campus"
  },
  {
    title: "How to Build a Career in Data Science",
    excerpt: "A comprehensive guide on the skills and mindset needed to excel in the field of data science in 2024.",
    date: "Aug 20, 2023",
    author: "Prof. Michael Ross",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    slug: "data-science-career-guide",
    category: "Career"
  },
  {
    title: "Global Partnership with Tech Giants",
    excerpt: "Carbon Gurukulam signs MoUs with leading technology companies to provide internship opportunities for students.",
    date: "Jul 15, 2023",
    author: "Dr. Anand K.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    slug: "global-partnerships",
    category: "Announcement"
  }
];

const categories = ["All", "Trends", "Events", "Campus", "Career", "Announcement"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = allNews.filter(news =>
    selectedCategory === "All" || news.category === selectedCategory
  );

  const featuredPost = allNews[0];

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="News & Insights"
        subtitle="Stay updated with the latest stories, research, and events from Carbon Gurukulam."
        compact
      />

      {/* Featured Post */}
      <SectionWrapper className="pb-0">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[300px] lg:h-full">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
              Featured Post
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              <Link href={`/news/${featuredPost.slug}`} className="hover:text-accent transition-colors">
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <p className="font-bold text-primary text-sm">{featuredPost.author}</p>
                <p className="text-xs text-gray-500">{featuredPost.date} • 5 min read</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        {/* Category Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto mb-12 pb-4 scrollbar-hide border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "text-accent border-b-2 border-accent rounded-none"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((news) => (
            <BlogCard key={news.slug} {...news} />
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center space-x-2">
          {[1, 2, 3].map((p) => (
            <button key={p} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${p === 1 ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {p}
            </button>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
