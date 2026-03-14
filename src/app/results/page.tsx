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
      { name: "Nandana", rank: "98.44 %ile", score: "Session 1", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200" },
    ],
    stats: { qualified: 45, top1000: 2, top5000: 8 }
  },
  {
    year: "2024",
    exam: "NEET",
    highlights: [
      { name: "Adithya S.", rank: "AIR 142", score: "710/720", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" },
      { name: "Meera Nair", rank: "AIR 385", score: "705/720", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
      { name: "Rahul Krishna", rank: "AIR 512", score: "700/720", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
    ],
    stats: { qualified: 185, top1000: 12, top5000: 45 }
  },
  {
    year: "2024",
    exam: "JEE Main",
    highlights: [
      { name: "Siddharth V.", rank: "99.98 %ile", score: "285/300", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { name: "Anjali Menon", rank: "99.85 %ile", score: "278/300", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
    ],
    stats: { qualified: 92, top1000: 5, top5000: 18 }
  },
  {
    year: "2023",
    exam: "NEET",
    highlights: [
      { name: "Karthik R.", rank: "AIR 215", score: "708/720", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { name: "Sneha P.", rank: "AIR 450", score: "702/720", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
    ],
    stats: { qualified: 172, top1000: 10, top5000: 40 }
  }
];

const years = ["2026", "2024", "2023", "2022"];
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
                  <div className="hidden md:flex space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{result.stats.qualified}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Qualified</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{result.stats.top1000}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">In Top 1000</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {result.highlights.map((student, sIdx) => (
                    <motion.div
                      key={student.name}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[100px] flex items-start justify-end p-4">
                        <Star className="text-accent" size={24} fill="currentColor" />
                      </div>

                      <div className="flex items-center space-x-4 mb-6">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-neutral-light shrink-0">
                          <Image src={student.image} alt={student.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg">{student.name}</h4>
                          <p className="text-accent font-bold">{student.rank}</p>
                        </div>
                      </div>

                      <div className="bg-neutral-light rounded-xl p-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500 font-medium">Score:</span>
                        <span className="text-primary font-bold">{student.score}</span>
                      </div>

                      <div className="mt-6 flex items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <Medal size={14} className="mr-2 text-accent" />
                        Carbon Gurukulam Alumnus
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
