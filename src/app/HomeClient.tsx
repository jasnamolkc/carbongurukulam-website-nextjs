"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, ShieldCheck, GraduationCap, Play, Video, X, Instagram, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Modal from "@/components/Modal";

const featuredCourses = [
  {
    title: "Integrated Batch (Class 11 - 12)",
    category: "Integrated",
    duration: "2 Years",
    image: "/integrated-home-page.jpg",
    slug: "integrated-batch-11-12",
    description: "Synchronized school board syllabus with high-impact entrance preparation for NEET, JEE Main, and Advanced starting from Class 11."
  },
  {
    title: "JEE Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "/jee-home-page.jpg",
    slug: "jee-repeaters",
    description: "Intensive 1-year residential program designed to master advanced JEE problem-solving under experienced Kota IITian faculties."
  },
  {
    title: "NEET Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "/neet-home-page.jpg",
    slug: "neet-repeaters",
    description: "Result-driven residential coaching with deep NCERT mastery, daily practice papers, and weekly mock exams under ex-Kota mentors."
  }
];

const starAchievers = [
  {
    name: "Rahul Nair",
    exam: "NEET 2025",
    score: "685/720",
    college: "Govt. Medical College, Calicut",
    img: "/alumni-rahul.png"
  },
  {
    name: "Anjali Menon",
    exam: "JEE Adv. 2025",
    score: "99.6 %ile",
    college: "IIT Madras (CS)",
    img: "/alumni-anjali.png"
  },
  {
    name: "Devika Krishna",
    exam: "NEET 2025",
    score: "678/720",
    college: "Govt. Medical College, Trivandrum",
    img: "/alumni-devika.png"
  },
  {
    name: "Aditya S. Nair",
    exam: "NEET 2025",
    score: "664/720",
    college: "Govt. Medical College, Kottayam",
    img: "/alumni-aditya.png"
  },
  {
    name: "Farhan Mohammed",
    exam: "JEE Main 2025",
    score: "99.4 %ile",
    college: "NIT Calicut",
    img: "/alumni-farhan.png"
  }
];

export default function HomeClient() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Video Background - Buttons Removed as per request */}
      <HeroSection
        title="Kerala’s Premier Residential Coaching for NEET & JEE"
        subtitle="Carbon Gurukulam (formerly Carbon 30 Classes) blends the traditional Gurukulam system with result-oriented Kota academic discipline to shape future doctors and engineers."
        videoSrc="/hero4.mp4"
      />

      {/* 2nd Section: Courses Overview (Integrated, JEE Repeater, NEET Repeater) */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Our Academic Programs"
          subtitle="Comprehensive, rigorous coaching programs tailored for NEET, JEE, and Integrated entrance preparation."
          badge="Courses"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
        {/* "View All Courses" button removed as per instructions */}
      </SectionWrapper>

      {/* Our Ambassadors: Flowing Result Marquee (Inspired by DOPA's 'Meet our stars') */}
      <section className="py-12 md:py-16 bg-white overflow-hidden border-y border-gray-100">
        <div className="container-custom mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="bg-accent/20 text-primary-dark text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block mb-2">
              Our Ambassadors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Stars</h2>
            <p className="text-gray-500 text-sm md:text-base mt-1">
              Celebrating our top rankers and achievers in NEET &amp; JEE entrance exams.
            </p>
          </div>
          <Link
            href="/results"
            className="btn-primary text-xs md:text-sm h-10 px-5 inline-flex items-center self-start md:self-auto shrink-0"
          >
            View All Results <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {/* Marquee Ticker */}
        <div className="relative overflow-hidden w-full py-4 bg-gradient-to-r from-neutral-light via-white to-neutral-light border-y border-gray-100">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex space-x-6 animate-marquee hover:[animation-play-state:paused]">
            {[...starAchievers, ...starAchievers, ...starAchievers].map((star, idx) => (
              <div
                key={idx}
                className="w-[260px] sm:w-[280px] bg-white rounded-2xl p-4 shadow-md border border-gray-100 shrink-0 flex items-center space-x-4 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-accent shadow-sm">
                  <Image src={star.img} alt={star.name} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-primary text-sm truncate">{star.name}</h4>
                  <div className="flex items-center text-xs font-bold text-accent mt-0.5">
                    <Trophy size={13} className="mr-1 shrink-0" />
                    <span className="truncate">{star.exam}: {star.score}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 truncate mt-1">{star.college}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section: Carbon Curious & Talent Search Examination */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Featured Events"
          subtitle="Explore our flagship academic initiatives, talent competitions, and scholarship exams."
          badge="Events"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Event 1: Carbon Curious */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 text-primary-dark rounded-2xl flex items-center justify-center font-bold">
                <Sparkles size={24} className="text-accent" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Science &amp; Innovation</span>
              <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                Carbon Curious
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                An experiential problem-solving and science engagement conclave designed to spark curiosity, concept clarity, and analytical thinking among young entrance aspirants.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Interactive Science Workshops &amp; Live Experiments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Mentorship Sessions with Kota Academic Mentors</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <Link
                href="/admissions"
                className="btn-primary w-full text-center text-sm font-semibold flex items-center justify-center"
              >
                Register for Carbon Curious <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Event 2: Talent Search Examination */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 text-primary-dark rounded-2xl flex items-center justify-center font-bold">
                <Calendar size={24} className="text-accent" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Scholarship Assessment</span>
              <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                Talent Search Examination
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our prestigious annual entrance scholarship assessment offering up to 100% scholarships on tuition and hostel fees for outstanding medical and engineering aspirants.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>Up to 100% Merit Scholarships on Residential Seats</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>In-depth Performance &amp; Conceptual Analysis Report</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <Link
                href="/admissions"
                className="btn-accent w-full text-center text-sm font-bold flex items-center justify-center text-primary"
              >
                Apply for Talent Search Exam <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Us: Why Choose Carbon & Residential Gurukulam Model (Moved to Lower Section) */}
      <SectionWrapper>
        <div className="bg-gradient-to-br from-[#2D5128] via-[#21421C] to-[#182E15] rounded-3xl overflow-hidden shadow-2xl border border-primary-light/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10 space-y-6 flex flex-col justify-center">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                About Us • Why Choose Carbon
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Residential Gurukulam Model for NEET &amp; JEE
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Carbon Gurukulam re-imagines competitive coaching by pairing continuous residential mentorship with Kota academic discipline. We eliminate everyday distractions to let students focus entirely on scoring top ranks.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily Practice Problem (DPP) sessions & evaluations",
                  "24/7 Residential doubt-clearing mentorship",
                  "Kota curriculum designed by veteran faculties",
                  "Disciplined, distraction-free campus in Calicut"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white space-x-3 text-sm">
                    <ShieldCheck size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="btn-accent"
                >
                  Apply for Admission
                </Link>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="px-5 py-3 border border-white/20 hover:bg-white/10 text-white rounded-xl flex items-center justify-center font-semibold text-sm transition-all"
                >
                  <Play size={16} className="mr-2 fill-current" /> Watch Campus Video
                </button>
              </div>
            </div>

            {/* Minimal-Sized Visually Appealing Video Preview */}
            <div className="relative min-h-[300px] md:min-h-[400px] flex items-center justify-center p-6 md:p-8">
              <div
                onClick={() => setIsTourOpen(true)}
                className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group cursor-pointer bg-black"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                >
                  <source src="/video-2.mp4" type="video/mp4" />
                  <source src="/hero4.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent hover:bg-accent-light text-primary rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 active:scale-95 transition-all">
                    <Play size={24} className="ml-1 fill-current text-primary-dark" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  Campus Video Tour
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Instagram Official Channel Banner */}
      <section className="py-8 bg-neutral-light border-y border-gray-100">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
              <Instagram size={22} />
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">Follow @carbon_gurukulam</h4>
              <p className="text-gray-500 text-xs">Stay updated with everyday campus life, student toppers &amp; study tips.</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/carbon_gurukulam?igsh=MWZxNnVjMWppdGZtcA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold text-xs md:text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all shrink-0"
          >
            <Instagram size={18} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </section>

      {/* Strong CTA Section */}
      <CTASection
        title="Admissions Open for NEET & JEE 2026 batches"
        subtitle="Seats are strictly limited to ensure personal student mentoring in Calicut campus. Apply for C-SET today."
        buttonText="Register Now"
        buttonHref="/admissions"
        secondaryButtonText="Contact Admissions"
        secondaryButtonHref="/contact"
      />

      {/* Campus Tour Video Modal */}
      <Modal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} title="Carbon Gurukulam Campus Video Tour">
        <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-black">
          <iframe
            src="https://www.youtube.com/embed/MYA_hfsoG9w?autoplay=1&rel=0"
            title="Carbon Gurukulam Campus Video Tour"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>

      <Footer />
      <ChatWidget />
    </main>
  );
}
