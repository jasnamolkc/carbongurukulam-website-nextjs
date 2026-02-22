"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import FacultyCard from "@/components/FacultyCard";
import ChatWidget from "@/components/ChatWidget";
import { ShieldCheck, Target, Eye, Quote } from "lucide-react";

const timelineItems = [
  {
    title: "Foundation of Carbon Gurukulam",
    date: "2008",
    description: "Started with a vision to revolutionize traditional education with modern tools."
  },
  {
    title: "First Major Expansion",
    date: "2012",
    description: "Opened our second campus and introduced advanced computer science labs."
  },
  {
    title: "AI Integration Initiative",
    date: "2018",
    description: "Became one of the first institutions to integrate AI in the core curriculum."
  },
  {
    title: "Global Recognition",
    date: "2023",
    description: "Awarded 'Most Innovative Educational Hub' by the International Tech Council."
  }
];

const facultyMembers = [
  {
    name: "Dr. Robert Chen",
    role: "Head of AI Department",
    qualification: "PhD in Machine Learning, Stanford",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Prof. Sarah Jenkins",
    role: "Senior Data Scientist",
    qualification: "MS in Data Science, MIT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Michael Ross",
    role: "Professor of Ethics & Tech",
    qualification: "PhD in Philosophy, Oxford",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

export default function AboutClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Story & Vision"
        subtitle="Discover how Carbon Gurukulam is redefining education through the synergy of human intelligence and artificial technology."
        compact
      />

      {/* Vision & Mission */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-neutral-light p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Eye size={120} />
            </div>
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in AI-enhanced education, empowering individuals to reach their full potential and solve complex world problems through innovation and integrity.
            </p>
          </div>

          <div className="bg-primary p-10 rounded-3xl border border-primary-light shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform text-white">
              <Target size={120} />
            </div>
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide accessible, high-quality, and personalized learning experiences that bridge the gap between traditional academia and the rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder Message */}
      <SectionWrapper className="bg-neutral-light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20">
              <h4 className="font-bold text-primary">Dr. Anand K.</h4>
              <p className="text-sm text-accent">Founder & Chancellor</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block p-2 bg-accent/10 rounded-lg text-accent">
              <Quote size={32} fill="currentColor" className="opacity-50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">A Message from Our Founder</h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                &quot;At Carbon Gurukulam, we believe that education is not just about transferring knowledge, but about igniting a passion for lifelong learning.&quot;
              </p>
              <p>
                Our journey started with a simple observation: the world was changing faster than our educational systems. We set out to create a place where students could learn not just the theories, but the practical applications of those theories in a world powered by AI.
              </p>
              <p>
                Today, we are proud to have a community of thinkers, dreamers, and doers who are making a real impact in the world. We invite you to be a part of this journey.
              </p>
            </div>
            <div className="pt-4 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">25+</span>
                <span className="text-sm text-gray-500">Global Awards</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">10k+</span>
                <span className="text-sm text-gray-500">Alumni Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements Timeline */}
      <SectionWrapper>
        <SectionHeader
          title="Our Journey Through the Years"
          subtitle="From a small classroom to a global educational hub, here&apos;s how we&apos;ve grown."
          badge="History"
        />
        <div className="max-w-4xl mx-auto py-12">
          <Timeline items={timelineItems} />
        </div>
      </SectionWrapper>

      {/* Faculty Preview */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Meet Our Expert Faculty"
          subtitle="Our instructors are industry leaders, researchers, and dedicated educators."
          badge="Faculty"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/faculty" className="btn-primary">View Full Faculty</a>
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
