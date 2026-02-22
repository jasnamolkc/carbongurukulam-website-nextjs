"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Target, Zap, Star, ShieldCheck, GraduationCap } from "lucide-react";
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
    title: "AI Fundamentals for Business",
    category: "Artificial Intelligence",
    duration: "8 Weeks",
    lessons: 24,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "fullstack-dev",
    price: "$399"
  }
];

const latestNews = [
  {
    title: "The Future of AI in Education",
    excerpt: "Exploring how generative AI is transforming the classroom experience for students and teachers alike.",
    date: "Oct 24, 2023",
    author: "Dr. Sarah Smith",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-ai-education",
    category: "Trends",
    isAI: true
  },
  {
    title: "Carbon Gurukulam Annual Tech Fest",
    excerpt: "Join us for a week-long celebration of innovation, featuring workshops, hackathons, and guest speakers.",
    date: "Nov 12, 2023",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    slug: "annual-tech-fest",
    category: "Events"
  }
];

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Empowering Minds with AI & Innovation"
        subtitle="Carbon Gurukulam is a premier educational hub dedicated to shaping the leaders of tomorrow through cutting-edge technology and academic excellence."
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
                src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800"
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
              title="Shaping the Future of Learning"
              subtitle="We combine traditional academic values with the power of Artificial Intelligence to provide an unparalleled educational experience."
              badge="About Us"
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">AI Integration</h4>
                  <p className="text-sm text-gray-500">Smart learning paths tailored for every student.</p>
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
          subtitle="Discover our wide range of industry-standard courses designed to help you excel in your career."
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

      {/* AI Learning Highlight */}
      <SectionWrapper>
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 space-y-8">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">AI Learning Hub</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Experience the Power of Intelligent Learning</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Carbon Gurukulam, we leverage AI to personalize your learning journey. Our AI assistant tracks your progress and suggests resources that help you master concepts faster.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized Study Plans",
                  "AI-Generated Assessments",
                  "24/7 AI Tutor Support",
                  "Skill Gap Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-white space-x-3">
                    <Zap size={20} className="text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="btn-accent">Try AI Assessment</button>
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800"
                alt="AI Learning"
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
            { name: "Alex Johnson", role: "Software Engineer, Google", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" },
            { name: "Sarah Williams", role: "Data Analyst, Meta", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
            { name: "Michael Chen", role: "Product Manager, Amazon", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100" }
          ].map((testimonial, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 shrink-0">
              <div className="flex text-accent mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-6">
                "Carbon Gurukulam provided me with the skills and confidence to land my dream job. The AI-driven curriculum was a game-changer!"
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
        title="Ready to Start Your Future Journey?"
        subtitle="Join thousands of students and start learning today with Carbon Gurukulam's world-class programs."
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
