"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import CourseCard from "@/components/CourseCard";
import ChatWidget from "@/components/ChatWidget";
import { Filter } from "lucide-react";

const allCourses = [
  {
    title: "NEET Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "/neet-home-page.jpg",
    slug: "neet-repeaters"
  },
  {
    title: "JEE Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "/jee-home-page.jpg",
    slug: "jee-repeaters"
  },
  {
    title: "Integrated Batch (Class 11 - 12)",
    category: "Integrated",
    duration: "2 Years",
    image: "/integrated-home-page.jpg",
    slug: "integrated-batch-11-12"
  }
];

const categories = ["All", "Repeaters", "Integrated"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = allCourses.filter(course => {
    return selectedCategory === "All" || course.category === selectedCategory;
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
        {/* Course Filter UI */}
        <div className="flex items-center justify-center space-x-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <Filter size={18} className="text-gray-400 mr-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`h-11 px-5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex items-center justify-center cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent text-primary shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
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
              onClick={() => setSelectedCategory("All")}
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
