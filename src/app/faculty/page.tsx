"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import FacultyCard from "@/components/FacultyCard";
import Modal from "@/components/Modal";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";
import { Linkedin, Mail, Twitter } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Robert Chen",
    role: "Head of Physics Department",
    qualification: "PhD in Applied Physics, IIT Bombay",
    experience: "15+ Years in JEE & NEET Coaching",
    bio: "Dr. Robert Chen is a leading expert in classical mechanics and electromagnetism. He has coached over 5,000 students to secure top ranks in IIT-JEE and NEET, and has authored multiple study booklets.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Prof. Sarah Jenkins",
    role: "Head of Organic Chemistry",
    qualification: "M.Sc. in Chemistry, Kota Coaching Veteran",
    experience: "12+ Years in Top Kota Academies",
    bio: "Sarah specializes in complex organic reactions and mechanism visual maps. She spent a decade teaching in leading Kota institutes, crafting curriculum schedules that secure high percentiles.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Michael Ross",
    role: "Head of Biology Department",
    qualification: "MD, ex-AIIMS Resident Researcher",
    experience: "10+ Years in Medical Entrance Mentoring",
    bio: "Dr. Ross brings deep clinical knowledge and NCERT accuracy into the classroom, specializing in human physiology and genetics preparation blueprints.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Emily Watson",
    role: "Senior Mathematics Lecturer",
    qualification: "M.Tech in Math & Computing, IIT Madras",
    experience: "8+ Years in JEE Advanced Preparations",
    bio: "Emily is a master of calculus, vectors, and coordinate geometry. She focuses on teaching shortcuts and analytical time-saving methods for JEE Main & Advanced papers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Miller",
    role: "Senior Physical Chemistry Mentor",
    qualification: "B.Tech, IIT Kharagpur (ex-Allen Senior Tutor)",
    experience: "14+ Years in Competitive Chemistry",
    bio: "David is the author of multiple textbooks on physical chemistry numerical structures. He helps students master thermodynamics, equilibrium, and electrochemistry equations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Lisa Wong",
    role: "Senior Zoology Lecturer",
    qualification: "PhD in Animal Physiology, IISc Bangalore",
    experience: "11+ Years in Biology Olympiads Coaching",
    bio: "Dr. Wong is highly passionate about biodiversity and structural organization in animals, coaching students to score full marks in the biology section of the NEET exam.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=400"
  }
];

export default function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyMembers[0] | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Distinguished Faculty"
        subtitle="Learn from the best minds in the country. Our faculty members bring years of experience and proven results to the classroom."
        compact
      />

      <SectionWrapper>
        <SectionHeader
          title="The Mentors Behind Carbon Gurukulam"
          subtitle="Our educators are committed to your competitive entrance success and are here to guide you every step of the way."
          badge="Our Experts"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard
              key={index}
              {...faculty}
              onClick={() => setSelectedFaculty(faculty)}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Modal for Faculty Details */}
      <Modal
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        title="Faculty Profile"
      >
        {selectedFaculty && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <Image
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary">{selectedFaculty.name}</h3>
                <p className="text-accent font-semibold">{selectedFaculty.role}</p>
                <div className="flex flex-col text-sm text-gray-500 space-y-1">
                  <span><strong>Qualification:</strong> {selectedFaculty.qualification}</span>
                  <span><strong>Experience:</strong> {selectedFaculty.experience}</span>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 pt-2">
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-lg">Biography</h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedFaculty.bio}
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contact" className="btn-primary w-full md:w-auto px-10 text-center" onClick={() => setSelectedFaculty(null)}>Book a Counseling Session</Link>
            </div>
          </div>
        )}
      </Modal>

      <Footer />
      <ChatWidget />
    </main>
  );
}

