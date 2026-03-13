"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Star, ShieldCheck, GraduationCap } from "lucide-react";

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

const featuredCourses = [
  {
    title: "NEET/JEE Repeaters Batch",
    category: "Entrance Coaching",
    duration: "1 Year",
    lessons: 150,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "neet-jee-repeaters",
    price: "Affordable"
  },
  {
    title: "Long Term (Class 11-12)",
    category: "Two Year Program",
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
  }
];

const latestNews = [
  {
    title: "Carbon Gurukulam NEET 2024 Results",
    excerpt: "Celebrating our top achievers who have secured ranks in the national medical entrance exam.",
    date: "June 15, 2024",
    author: "Academic Director",
    image: "https://images.unsplash.com/photo-1523050335392-9bc567547bb3?auto=format&fit=crop&q=80&w=800",
    slug: "neet-2024-results",
    category: "Results"
  },
  {
    title: "New Batch Admissions for Repeaters",
    excerpt: "Enrollment now open for the 2024-25 NEET/JEE Repeaters batch with special scholarships.",
    date: "July 01, 2024",
    author: "Admissions Team",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "repeaters-batch-2024",
    category: "Admissions",
    isAI: true
  }
];

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Kerala’s Premier Residential Coaching for NEET & JEE"
        subtitle="Carbon Gurukulam (formerly Carbon 30 Classes) blends the traditional Gurukulam system with result-oriented academic discipline to shape future doctors and engineers."
        backgroundVideo="/videos/bg.mp4"
      >
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/courses" className="btn-accent">
            Explore Courses
          </Link>
          <Link href="/admissions" className="btn-primary border border-white/20">
            Apply Now
          </Link>
        </div>
      </HeroSection>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="About Carbon Gurukulam"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/10 rounded-2xl -z-0 hidden md:block" />
          </div>

          <div className="space-y-6">
            <SectionHeader
              title="The Traditional Gurukulam Reimagined"
              subtitle="Carbon Gurukulam, previously recognized as Carbon 30 Classes, stands as a distinguished NEET/JEE coaching institution deeply rooted in the residential learning model."
              badge="About Us"
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Kota Expertise</h4>
                  <p className="text-sm text-gray-500">Curriculum designed by Kota&apos;s founding fathers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Future Ready</h4>
                  <p className="text-sm text-gray-500">Curriculum designed for the jobs of tomorrow.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/about" className="btn-primary inline-flex items-center">
                Read More About Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Courses Overview */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Our Popular Courses"
          subtitle="Comprehensive coaching programs tailored for NEET, JEE, and Integrated entrance preparation."
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

      <SectionWrapper>
  <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-8 md:p-16 space-y-8">
        <span className="text-accent font-bold tracking-widest uppercase text-sm">
          Residential Gurukulam Model
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Focused Preparation. Disciplined Environment. Proven Results.
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Our residential system ensures structured study hours, continuous mentorship,
          daily practice tests, and personal academic monitoring for NEET and JEE aspirants.
        </p>

        <ul className="space-y-4">
          {[
            "Daily Practice & Evaluation",
            "Personal Mentorship",
            "Integrated + Repeaters Batches",
            "Structured Study Schedule"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-white space-x-3">
              <ShieldCheck size={20} className="text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Link href="/admissions" className="btn-accent">
            Apply for Admission
          </Link>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800"
          alt="Residential Coaching"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>
    </div>
  </div>
</SectionWrapper>

      {/* Achievements Counters */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value={5000} suffix="+" label="Students Enrolled" />
          <AnimatedCounter value={15} suffix="+" label="Years of Excellence" />
          <AnimatedCounter value={120} suffix="+" label="Expert Faculty" />
          <AnimatedCounter value={95} suffix="%" label="Success Rate" />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-neutral-light overflow-hidden">
        <SectionHeader
          title="What Our Students Say"
          subtitle="Hear from our successful alumni who have transformed their careers with Carbon Gurukulam."
          badge="Testimonials"
        />
        <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
         {[
  { name: "Rahul Nair", role: "NEET Rank Holder", img: "/logo.png" },
  { name: "Anjali Menon", role: "JEE Advanced Qualified", img: "/logo.png" },
  { name: "Aditya S.", role: "MBBS Student", img: "/logo.png" }
].map((testimonial, i) => (
  <div
    key={i}
    className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 shrink-0"
  >
    <div className="flex text-accent mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={16} fill="currentColor" />
      ))}
    </div>

    <p className="text-gray-600 italic mb-6">
      &quot;Carbon Gurukulam&apos;s disciplined environment and daily practice tests helped me secure my NEET rank.&quot;
    </p>

    <div className="flex items-center space-x-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <Image src={testimonial.img} alt={testimonial.name} fill className="object-cover" />
      </div>

      <div>
        <h5 className="font-bold text-primary text-sm">{testimonial.name}</h5>
        <p className="text-xs text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
))}
        </div>
      </SectionWrapper>
{/* Results Highlight */}
      <SectionWrapper className="bg-primary text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 inline-block">
              2024 Achievements
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Recent Success Stories</h2>
            <p className="text-gray-300 text-lg mb-8">
              Every year, Carbon Gurukulam students secure top ranks in NEET and JEE exams. Our 2024 results have been exceptional with multiple students in the top 500 AIR.
            </p>
            <Link href="/results" className="btn-accent inline-flex items-center">
              View Detailed Results <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Adithya S.", rank: "AIR 142", exam: "NEET", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" },
              { name: "Siddharth V.", rank: "99.98 %ile", exam: "JEE", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
            ].map((student, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-4 ring-2 ring-accent">
                  <Image src={student.img} alt={student.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-white text-sm">{student.name}</h4>
                <p className="text-accent font-bold text-xs">{student.rank}</p>
                <p className="text-white/50 text-[10px] uppercase font-bold mt-1">{student.exam}</p>
              </div>
            ))}
          </div>
        </div>
              </SectionWrapper>

      {/* Latest News */}
      <SectionWrapper>
        <SectionHeader
          title="Latest News & Events"
          subtitle="Stay updated with the latest happenings and insights from Carbon Gurukulam."
          badge="News"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news) => (
            <BlogCard key={news.slug} {...news} />
          ))}
        </div>
      </SectionWrapper>

      {/* Strong CTA Section */}
      <CTASection
        title="Admissions Open for NEET & JEE 2026"
        subtitle="Limited seats available for Integrated and Repeaters batches. Secure your admission today."
        buttonText="Apply Now"
        buttonHref="/admissions"
        secondaryButtonText="Contact Admissions"
        secondaryButtonHref="/contact"
      />

      <Footer />
      <ChatWidget />
    </main>
  );
}
