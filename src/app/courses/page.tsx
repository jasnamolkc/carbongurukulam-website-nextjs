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
    title: "AI Fundamentals for Business",
    category: "Artificial Intelligence",
    duration: "8 Weeks",
    lessons: 24,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    slug: "ai-fundamentals",
    price: "$299"
  },
  {
    title: "Advanced Machine Learning",
    category: "Data Science",
    duration: "12 Weeks",
    lessons: 36,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    slug: "advanced-ml",
    price: "$499"
  },
  {
    title: "Full Stack Web Development",
    category: "Development",
    duration: "16 Weeks",
    lessons: 48,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    slug: "fullstack-dev",
    price: "$399"
  },
  {
    title: "Cybersecurity Essentials",
    category: "Security",
    duration: "10 Weeks",
    lessons: 30,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    slug: "cybersecurity",
    price: "$349"
  },
  {
    title: "Cloud Architecture with AWS",
    category: "Cloud Computing",
    duration: "14 Weeks",
    lessons: 42,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    slug: "cloud-aws",
    price: "$449"
  },
  {
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    duration: "6 Weeks",
    lessons: 18,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    slug: "digital-marketing",
    price: "$199"
  }
];

const categories = ["All", "Artificial Intelligence", "Data Science", "Development", "Security", "Cloud Computing", "Marketing"];

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
        subtitle="Explore our comprehensive range of courses designed for the modern world. Master the skills that matter."
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
