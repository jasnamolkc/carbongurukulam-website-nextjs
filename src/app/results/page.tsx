"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import { Trophy, Medal, Star, GraduationCap, Filter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const examResults = [
  {
  year: "2026",
  exam: "JEE Main",
  highlights: [
    { image: "/result/1-2026.jpeg" },
    { image: "/result/2-2026.jpeg" },
    { image: "/result/3-2026.jpeg" },
    { image: "/result/4-2026.jpeg" }
  ]
},
{
  year: "2026",
  exam: "NEET",
  highlights: [
    { image: "/result/1-2026.jpeg" },
    { image: "/result/2-2026.jpeg" },
    { image: "/result/3-2026.jpeg" },
    { image: "/result/4-2026.jpeg" }
  ]
},
  {
  year: "2025",
  exam: "JEE Main",
  highlights: [
    { image: "/result/1-2026.jpeg" },
    { image: "/result/2-2026.jpeg" },
    { image: "/result/3-2026.jpeg" },
    { image: "/result/4-2026.jpeg" }
  ]

}

];

const years = ["2026", "2025", "2024", "2023"];
const exams = ["All", "NEET", "JEE Main"];

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedExam, setSelectedExam] = useState("All");

  const filteredResults = examResults.filter(result =>
    result.year === selectedYear && (selectedExam === "All" || result.exam === selectedExam)
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Wall of Fame"
        subtitle="Celebrating the exceptional achievements of our students who have scaled the heights of NEET and JEE excellence."
        compact
      />

      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <div className="flex items-center space-x-4 bg-neutral-light p-1.5 rounded-2xl border border-gray-100">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedYear === year
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-500 hover:text-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-400 mr-2" />
            {exams.map(exam => (
              <button
                key={exam}
                onClick={() => setSelectedExam(exam)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  selectedExam === exam
                    ? "bg-accent border-accent text-primary"
                    : "bg-white border-gray-200 text-gray-500 hover:border-accent"
                }`}
              >
                {exam}
              </button>
            ))}
          </div>
        </div>

        {filteredResults.length > 0 ? (
          <div className="space-y-20">
            {filteredResults.map((result, idx) => (
              <div key={`${result.year}-${result.exam}`} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                  <h2 className="text-3xl font-bold text-primary flex items-center">
                    <Trophy className="text-accent mr-3" size={32} />
                    {result.exam} {result.year} Results
                  </h2>
                  {/* <div className="hidden md:flex space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{result.stats.qualified}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Qualified</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{result.stats.top1000}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">In Top 1000</p>
                    </div>
                  </div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {result.highlights.map((student, sIdx) => (
  <motion.div
    key={sIdx}
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="relative w-full h-[350px]">
      <Image
        src={student.image}
        alt={`Result ${sIdx + 1}`}
        fill
        className="object-cover"
      />
    </div>
  </motion.div>
))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-neutral-light rounded-full text-gray-300 mb-6">
              <Trophy size={40} />
            </div>
            <h3 className="text-xl font-bold text-primary">No results found for this selection</h3>
            <p className="text-gray-500 mt-2">Try selecting a different year or exam category.</p>
          </div>
        )}
      </SectionWrapper>

      {/* Global Stats */}
      <SectionWrapper className="bg-primary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1500+</div>
            <div className="text-white/70 text-sm font-bold uppercase tracking-widest">Doctors Made</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2000+</div>
            <div className="text-white/70 text-sm font-bold uppercase tracking-widest">IITians/NITians</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
            <div className="text-white/70 text-sm font-bold uppercase tracking-widest">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-white/70 text-sm font-bold uppercase tracking-widest">Years of Legacy</div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-neutral-light rounded-[40px] p-8 md:p-16 text-center max-w-5xl mx-auto border border-gray-100 shadow-sm">
          <GraduationCap className="mx-auto text-accent mb-6" size={64} />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Want to See Your Name Here?</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Join the ranks of top achievers. Our specialized Gurukulam coaching is designed to help you reach your full potential and crack the toughest entrance exams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/admissions" className="btn-primary">Start Your Journey</a>
            <a href="/courses" className="btn-accent">Explore Programs</a>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}