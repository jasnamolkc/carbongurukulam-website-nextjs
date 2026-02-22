"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CourseCard from "@/components/CourseCard";
import ChatWidget from "@/components/ChatWidget";
import { Search, Filter } from "lucide-react";

const allCourses = [
  {
    title: "NEET/JEE Repeaters Batch",
    category: "Repeaters",
    duration: "1 Year",
    lessons: 150,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "neet-jee-repeaters",
    price: "Affordable"
  },
  {
    title: "Long Term (Class 11-12)",
    category: "Long Term",
    duration: "2 Years",
    lessons: 300,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "long-term-11-12",
    price: "Admission Open"
  },
  {
    title: "Kerala Engineering Entrance",
    category: "State Level",
    duration: "1 Year",
    lessons: 120,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    slug: "kerala-engineering",
    price: "Expert Coaching"
  },
  {
    title: "NEET Crash Course",
    category: "Crash Course",
    duration: "2 Months",
    lessons: 60,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    slug: "neet-crash-course",
    price: "Intensive"
  },
  {
    title: "JEE Main Intensive",
    category: "Crash Course",
    duration: "3 Months",
    lessons: 90,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "jee-main-intensive",
    price: "Targeted"
  },
  {
    title: "Foundation Batch (Class 8-10)",
    category: "Foundation",
    duration: "3 Years",
    lessons: 180,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    slug: "foundation-batch",
    price: "Early Start"
  }
];

const categories = ["All", "Repeaters", "Long Term", "State Level", "Crash Course", "Foundation"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Academic Programs"
        subtitle="Comprehensive coaching programs for NEET, JEE, and Kerala Engineering Entrance. Your success starts here."
        compact
      />

      <SectionWrapper>
        {/* Search and Filter UI */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter size={20} className="text-gray-400 mr-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-primary shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <button
              onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
              className="mt-4 text-accent font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
