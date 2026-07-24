"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";
import Link from "next/link";

const allNews = [
  {
    title: "Outstanding Performance in NEET 2025 Results",
    excerpt: "Celebrating our top achievers who have secured 680+ marks in the National Eligibility cum Entrance Test under Kota curriculum guidelines.",
    date: "June 20, 2025",
    author: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1523050335392-9bc567547bb3?auto=format&fit=crop&q=80&w=800",
    slug: "neet-2025-results-celebration",
    category: "Results"
  },
  {
    title: "Residential Admissions & Scholarship Test 2026",
    excerpt: "Applications are open for the Carbon Scholarship Entrance Test (C-SET) for Class 10 graduates seeking residential coaching seats.",
    date: "July 12, 2025",
    author: "Admissions Office",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "residential-scholarships-2026",
    category: "Admissions",
    isAI: false
  },
  {
    title: "Importance of Everyday Testing in Competitive Coaching",
    excerpt: "Why daily evaluation is the secret to building concept confidence and removing final exam fear under a structured environment.",
    date: "Sep 05, 2025",
    author: "HOD Chemistry",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "importance-of-everyday-testing",
    category: "Guides"
  },
  {
    title: "A Day in the Life of a Residential Gurukulam Aspirant",
    excerpt: "An inside look at our Calicut campus schedule, 24/7 mentoring chambers, doubt resolution desks, and balanced student lifestyle.",
    date: "Aug 20, 2025",
    author: "Campus Warden",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "day-in-life-gurukulam",
    category: "Campus Life"
  },
  {
    title: "Academic Directors Share Physics & Chemistry Strategy Guidelines",
    excerpt: "Expert advice on balancing board syllabus, NCERT core chapter readings, and high-volume numerical problem practice worksheets.",
    date: "Jul 15, 2025",
    author: "Dr. Anand K.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    slug: "physics-chemistry-strategy-guidelines",
    category: "Academic"
  }
];

const categories = ["All", "Results", "Admissions", "Guides", "Campus Life", "Academic"];

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
        title="News & Announcements"
        subtitle="Stay updated with the latest stories, admissions notifications, and academic tips from Carbon Gurukulam."
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
              Featured Announcement
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
        <div className="flex items-center space-x-2 overflow-x-auto mb-8 pb-3 scrollbar-hide border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`h-10 px-5 rounded-xl text-xs md:text-sm font-semibold transition-all flex items-center justify-center cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent text-primary shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.filter(n => n.slug !== featuredPost.slug || selectedCategory !== "All").map((news) => (
            <BlogCard key={news.slug} {...news} />
          ))}
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}

