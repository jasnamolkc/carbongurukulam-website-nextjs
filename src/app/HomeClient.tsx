"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, GraduationCap, Play, Video, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Modal from "@/components/Modal";

const featuredCourses = [
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

const latestNews = [
  {
    title: "Outstanding Performance in NEET 2025 Results",
    excerpt: "Celebrating our top achievers who have secured 680+ marks in the National Eligibility cum Entrance Test under Kota curriculum guidelines.",
    date: "June 20, 2025",
    author: "Academic Coordinator",
    image: "/outstanding-performance-2025.jpg",
    slug: "neet-2025-results-celebration",
    category: "Results"
  },
  {
    title: "Residential Admissions & Scholarship Test 2026",
    excerpt: "Applications are open for the Carbon Scholarship Entrance Test (C-SET) for Class 10 graduates seeking residential coaching seats.",
    date: "July 12, 2025",
    author: "Admissions Office",
    image: "/news-scholarship.png",
    slug: "residential-scholarships-2026",
    category: "Admissions",
    isAI: false
  }
];

export default function HomeClient() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Video Background */}
      <HeroSection
        title="Kerala’s Premier Residential Coaching for NEET & JEE"
        subtitle="Carbon Gurukulam (formerly Carbon 30 Classes) blends the traditional Gurukulam system with result-oriented Kota academic discipline to shape future doctors and engineers."
        videoSrc="/hero4.mp4"
      >
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/courses" className="btn-accent text-primary">
            Explore Courses
          </Link>
          <Link
            href="/contact"
            className="btn-primary border border-white/20"
          >
            Apply Now
          </Link>
        </div>
      </HeroSection>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <Image
                src="/Admission-home-page.jpg"
                alt="About Carbon Gurukulam"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-3xl -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/10 rounded-3xl -z-0 hidden md:block" />
          </div>

          <div className="space-y-6">
            <SectionHeader
              title="The Traditional Gurukulam Reimagined"
              subtitle="Carbon Gurukulam is Kerala's distinguished coaching academy deeply rooted in the residential learning model, delivering rigorous preparation with personalized care."
              badge="About Us"
              centered={false}
            />
            <p className="text-gray-600 leading-relaxed">
              We offer structured schedules, daily mock evaluations, and an immersive academic environment in Calicut, replicating the highly successful residential methods of Kota’s top training programs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Kota Expertise</h4>
                  <p className="text-sm text-gray-500">Structured lessons designed by legendary academic mentors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">24/7 Study Support</h4>
                  <p className="text-sm text-gray-500">In-house doubt resolution chambers operating daily.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/about" className="btn-primary inline-flex items-center">
                Read Our Story <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Courses Overview */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Our Popular Courses"
          subtitle="Comprehensive, rigorous coaching programs tailored for NEET, JEE, and Integrated entrance preparation."
          badge="Top Programs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </SectionWrapper>

      {/* Residential Gurukulam Highlight & Campus Video Tour Section */}
      <SectionWrapper>
        <div className="bg-gradient-to-br from-[#2D5128] via-[#21421C] to-[#182E15] rounded-3xl overflow-hidden shadow-2xl border border-primary-light/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 space-y-8 flex flex-col justify-center">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                Residential Gurukulam Model
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Focused Preparation. Disciplined Environment. Proven Results.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our residential system ensures structured study hours, continuous mentorship, daily practice tests, and personal academic monitoring for NEET and JEE aspirants.
              </p>
              <ul className="space-y-4">
                {[
                  "Daily Practice & Evaluation Assessments",
                  "24/7 Residential Mentorship & Doubt Solvers",
                  "Integrated Board + Entrance Syllabi Classes",
                  "Strict, distraction-free environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white space-x-3">
                    <ShieldCheck size={20} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Apply for Admission
                </Link>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg flex items-center justify-center font-semibold transition-all"
                >
                  <Play size={18} className="mr-2 fill-current" /> Watch Video Tour
                </button>
              </div>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center group cursor-pointer" onClick={() => setIsTourOpen(true)}>
              <Image
                src="/Admission-home-page.jpg"
                alt="Residential Coaching Campus"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/45 transition-colors" />
              <div className="relative z-10 w-20 h-20 bg-accent hover:bg-accent-light text-primary rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95">
                <Play size={32} className="ml-1 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

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

      {/* Achievements Counters */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value={5000} suffix="+" label="Students Guided" />
          <AnimatedCounter value={15} suffix="+" label="Years of Academic Legacy" />
          <AnimatedCounter value={50} suffix="+" label="Expert Kota Faculty" />
          <AnimatedCounter value={96} suffix="%" label="Course Success Rate" />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-neutral-light overflow-hidden">
        <SectionHeader
          title="What Our Successful Alumni Say"
          subtitle="Hear from our former students who transformed their dreams into reality under our guidance."
          badge="Testimonials"
        />
        <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
          {[
            {
              name: "Rahul Nair",
              role: "NEET Top Rank Holder (Government Medical College)",
              img: "/alumni-rahul.png"
            },
            {
              name: "Anjali Menon",
              role: "JEE Advanced Qualified (IIT Madras)",
              img: "/alumni-anjali.png"
            },
            {
              name: "Aditya S. Nair",
              role: "NEET Scholar (MBBS Student, Trivandrum)",
              img: "/alumni-aditya.png"
            }
          ].map((testimonial, i) => (
            <div key={i} className="w-[300px] sm:w-[360px] md:w-[380px] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 shrink-0 flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex text-accent mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-xs md:text-sm italic line-clamp-4 leading-relaxed">
                  &quot;The residential environment, strict schedule, and Kota-based teaching materials at Carbon Gurukulam were critical to boosting my performance and building concepts.&quot;
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-primary text-xs md:text-sm">{testimonial.name}</h5>
                  <p className="text-[11px] md:text-xs text-gray-500 line-clamp-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Latest News */}
      <SectionWrapper>
        <SectionHeader
          title="Latest Announcements & Insights"
          subtitle="Stay informed on entrance dates, mock schedules, and results news from the Gurukulam."
          badge="Announcements"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news) => (
            <BlogCard key={news.slug} {...news} />
          ))}
        </div>
      </SectionWrapper>

      {/* Strong CTA Section */}
      <CTASection
        title="Admissions Open for NEET & JEE 2026 batches"
        subtitle="Seats are strictly limited to ensure personal student mentoring in Calicut campus. Apply for C-SET today."
        buttonText="Register"
        buttonHref="/contact"
        secondaryButtonText="Talk to Academic Director"
        secondaryButtonHref="/contact"
      />

      <Footer />
      <ChatWidget />
    </main>
  );
}

