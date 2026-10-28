"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import ChatWidget from "@/components/ChatWidget";
import Modal from "@/components/Modal";
import { ShieldCheck, Target, Eye, Quote, Play, CheckCircle2, ArrowRight } from "lucide-react";

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

export default function AboutClient() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
                To deliver exceptional, structured residential preparation that empowers students across Kerala to excel in JEE &amp; NEET, bridging accessibility gap to top-tier coaching.
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

      {/* Why Choose Carbon Section with 6-min Campus Video & Apply Now */}
      <SectionWrapper className="bg-neutral-light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Video Preview with Play Modal */}
          <div className="relative order-2 lg:order-1">
            <div
              onClick={() => setIsVideoOpen(true)}
              className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white cursor-pointer group bg-black"
            >
              <Image
                src="/carbon-building.jpg"
                alt="Carbon Gurukulam Campus Building"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent hover:bg-accent-light text-primary rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 active:scale-95 transition-all">
                  <Play size={28} className="ml-1 fill-current text-primary-dark" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold flex items-center space-x-2">
                <Play size={12} className="fill-current text-accent" />
                <span>Watch Campus Video Tour (6 Min)</span>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-0" />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <span className="bg-accent/20 text-primary-dark text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block">
              Excellence &amp; Discipline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Carbon Gurukulam?</h2>
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                Carbon Gurukulam (previously Carbon 30 Classes) stands as Kozhikode’s premier NEET/JEE residential coaching campus.
              </p>
              <p>
                By blending standard Kota-based learning modules with constant mentoring, we provide students with an unmatched residential platform to excel in entrance exams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Kota Curriculum & Proven Test Series",
                "24/7 In-House Doubt Solving Faculty",
                "Distraction-Free Residential Hostels",
                "Personalized Student Performance Tracking"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs md:text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="btn-primary inline-flex items-center"
              >
                Apply Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn-accent text-primary-dark inline-flex items-center"
              >
                <Play size={16} className="mr-2 fill-current" /> Watch Video Tour
              </button>
            </div>
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
        <div className="max-w-4xl mx-auto py-8">
          <Timeline items={timelineItems} />
        </div>
      </SectionWrapper>

      {/* 6 Min Video Tour Modal */}
      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} title="Carbon Gurukulam Campus Video Tour">
        <div className="aspect-video w-full rounded-xl overflow-hidden relative bg-black">
          <iframe
            src="https://www.youtube.com/embed/MYA_hfsoG9w?autoplay=1&rel=0"
            title="Carbon Gurukulam 6 Min Campus Video Tour"
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
