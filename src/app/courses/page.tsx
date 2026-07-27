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
    title: "NEET Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "neet-repeaters"
  },
  {
    title: "JEE Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "jee-repeaters"
  },
  {
    title: "Integrated Batch (Class 11 - 12)",
    category: "Integrated",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "integrated-batch-11-12"
  }
];

const categories = ["All", "Repeaters", "Integrated"];

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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              className="form-input pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter size={18} className="text-gray-400 mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`h-11 px-4 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex items-center justify-center cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-accent text-primary shadow-sm"
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
