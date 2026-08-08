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
    title: "Foundation of Carbon 30 Classes",
    date: "2010",
    description: "Launched with a batch of 30 dedicated entrance aspirants, setting benchmarks in personal mentorship."
  },
  {
    title: "Kota Academic Collaboration",
    date: "2015",
    description: "Partnered with leading educators from Kota to design a structured, rigorous NEET & JEE course study material."
  },
  {
    title: "Establishment of Residential Campus in Calicut",
    date: "2020",
    description: "Transitioned to a fully residential ecosystem, enabling students to learn in a distraction-free campus."
  },
  {
    title: "Rebranding to Carbon Gurukulam",
    date: "2024",
    description: "Embraced the timeless Gurukulam ethos, combining continuous mentoring with modern testing facilities."
  }
];

const facultyMembers = [
  {
    name: "Dr. Robert Chen",
    role: "Head of Physics Department",
    qualification: "PhD in Applied Physics, IIT Bombay",
    image: "/faculty-robert.png"
  },
  {
    name: "Prof. Sarah Jenkins",
    role: "Senior Chemistry Mentor",
    qualification: "M.Sc. in Chemistry, Kota Coaching Veteran (12+ Years)",
    image: "/faculty-sarah.png"
  },
  {
    name: "Dr. Michael Ross",
    role: "Senior Biology Lecturer",
    qualification: "MD, ex-AIIMS Resident Researcher",
    image: "/faculty-michael.png"
  }
];

export default function AboutClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Story & Vision"
        subtitle="From Carbon 30 Classes to Carbon Gurukulam: A legacy of excellence in NEET & JEE residential coaching."
        compact
      />

      {/* Vision & Mission */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <div className="bg-neutral-light p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Eye size={120} />
            </div>
            <div>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To deliver exceptional, structured residential preparation that empowers students across Kerala to excel in JEE & NEET, bridging accessibility gap to top-tier coaching.
              </p>
            </div>
          </div>

          <div className="bg-primary p-8 md:p-10 rounded-2xl border border-primary-light shadow-lg relative overflow-hidden group flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform text-white">
              <Target size={120} />
            </div>
            <div>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                To nurture aspiring doctors and engineers through an immersive residential model that instills discipline, systematic exam solving practices, and sound academic basics.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder Message & Campus */}
      <SectionWrapper className="bg-neutral-light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/carbon-building.jpg"
                alt="Carbon Gurukulam Campus Building"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20">
              <h4 className="font-bold text-primary">Carbon Gurukulam Campus</h4>
              <p className="text-sm text-accent">Kunnamangalam, Kozhikode</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block p-2 bg-accent/10 rounded-lg text-accent">
              <Quote size={32} fill="currentColor" className="opacity-50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">The Carbon Legacy</h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Carbon Gurukulam (previously Carbon 30 Classes) stands as Kozhikode’s premier NEET/JEE residential coaching campus.
              </p>
              <p>
                By blending standard Kota-based learning modules with constant mentoring, we provide students with an unmatched residential platform to excel in entrance exams.
              </p>
              <p>
                Our students receive custom materials, attend everyday testing sessions, and reside in a state-of-the-art campus designed specifically to eliminate distraction and build confidence.
              </p>
            </div>
            {/* <div className="pt-4 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-gray-500">Years of Experience</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">3000+</span>
                <span className="text-sm text-gray-500">Doctors & Engineers Mentored</span>
              </div>
            </div> */}
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements Timeline */}
      <SectionWrapper>
        <SectionHeader
          title="Our Journey Through the Years"
          subtitle="From a humble class of 30 entrance aspirants to a high-tech residential Gurukulam campus."
          badge="History"
        />
        <div className="max-w-4xl mx-auto py-12">
          <Timeline items={timelineItems} />
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
