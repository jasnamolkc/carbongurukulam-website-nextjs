import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import ChatWidget from "@/components/ChatWidget";
import { Trophy, Award, Star, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Results & Top Achievers | Carbon Gurukulam",
  description: "Explore the outstanding achievements of Carbon Gurukulam students in NEET, JEE, and KEAM examinations.",
};

const topAchievers = [
  {
    name: "Rahul Nair",
    exam: "NEET 2025",
    score: "685 / 720",
    college: "Govt. Medical College, Calicut",
    image: "/alumni-rahul.png",
    badge: "AIR Top 1%"
  },
  {
    name: "Anjali Menon",
    exam: "JEE Advanced 2025",
    score: "99.6 Percentile",
    college: "IIT Madras - Computer Science",
    image: "/alumni-anjali.png",
    badge: "Top State Rank"
  },
  {
    name: "Devika Krishna",
    exam: "NEET 2025",
    score: "678 / 720",
    college: "Govt. Medical College, Trivandrum",
    image: "/alumni-devika.png",
    badge: "C-SET Scholar"
  },
  {
    name: "Aditya S. Nair",
    exam: "NEET 2025",
    score: "664 / 720",
    college: "Govt. Medical College, Kottayam",
    image: "/alumni-aditya.png",
    badge: "Repeaters Batch"
  },
  {
    name: "Farhan Mohammed",
    exam: "JEE Main 2025",
    score: "99.4 Percentile",
    college: "NIT Calicut - Mechanical",
    image: "/alumni-farhan.png",
    badge: "Integrated Batch"
  }
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Stars & Results"
        subtitle="Celebrating the exceptional milestones and top ranks achieved by Carbon Gurukulam students in national level entrance exams."
        compact
      />

      {/* Main Results Showcase */}
      <SectionWrapper>
        <SectionHeader
          title="Top Rank Achievers"
          subtitle="Our students who converted hard work into phenomenal scores through residential Gurukulam mentoring."
          badge="Hall of Fame"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topAchievers.map((student, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-accent shadow-md mb-4 group-hover:scale-105 transition-transform">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="bg-accent/15 text-primary-dark font-bold text-xs uppercase px-3 py-1 rounded-full mb-2">
                  {student.badge}
                </span>
                <h3 className="text-xl font-bold text-primary">{student.name}</h3>
                <div className="flex items-center text-accent text-sm font-bold mt-1">
                  <Trophy size={16} className="mr-1.5" />
                  <span>{student.exam}: {student.score}</span>
                </div>
                <p className="text-gray-500 text-xs mt-2 font-medium">
                  {student.college}
                </p>
              </div>

              <div className="bg-neutral-light px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-primary font-semibold">
                <span className="flex items-center">
                  <CheckCircle2 size={14} className="text-green-600 mr-1.5" /> Verified Result
                </span>
                <span className="text-accent font-bold">Carbon Gurukulam</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Banner Result */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary-light flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="bg-accent text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
              Proven Track Record
            </span>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Start Your Preparation with Proven Champions
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every year, Carbon Gurukulam mentors hundreds of medical and engineering aspirants to reach their dream colleges. Join the next achievers batch today.
            </p>
          </div>
          <Link
            href="/admissions"
            className="btn-accent whitespace-nowrap text-primary font-bold px-8 py-4 text-base"
          >
            Apply for Admission <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
