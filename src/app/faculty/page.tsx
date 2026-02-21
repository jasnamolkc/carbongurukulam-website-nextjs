"use client";

import { useState } from "react";
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
    role: "Head of AI Department",
    qualification: "PhD in Machine Learning, Stanford",
    experience: "15+ Years in AI Research and Education",
    bio: "Dr. Robert Chen is a leading expert in Machine Learning and Computer Vision. He has published over 50 research papers and previously led AI teams at major tech companies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Prof. Sarah Jenkins",
    role: "Senior Data Scientist",
    qualification: "MS in Data Science, MIT",
    experience: "10+ Years in Big Data Analytics",
    bio: "Sarah specializes in large-scale data analysis and predictive modeling. She is passionate about using data to solve social challenges.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Michael Ross",
    role: "Professor of Ethics & Tech",
    qualification: "PhD in Philosophy, Oxford",
    experience: "12+ Years in Technology Ethics",
    bio: "Dr. Ross explores the intersection of morality and artificial intelligence, helping students navigate the ethical complexities of the digital age.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Emily Watson",
    role: "Full Stack Developer",
    qualification: "B.Tech in Computer Science, IIT",
    experience: "8+ Years in Software Engineering",
    bio: "Emily is a master of modern web technologies. She brings real-world industry experience into the classroom, teaching students how to build scalable applications.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Miller",
    role: "Cybersecurity Expert",
    qualification: "CISSP Certified, MS in Security",
    experience: "14+ Years in Network Security",
    bio: "David has worked with national security agencies to protect critical infrastructure. He teaches the latest techniques in ethical hacking and defense.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Lisa Wong",
    role: "Cloud Architect",
    qualification: "PhD in Cloud Computing, Berkeley",
    experience: "11+ Years in Cloud Solutions",
    bio: "Dr. Wong is an expert in distributed systems and cloud architecture. She helps students master AWS, Azure, and Google Cloud platforms.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyMembers[0] | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Our Distinguished Faculty"
        subtitle="Learn from the best minds in the industry. Our faculty members bring years of experience and academic excellence to the classroom."
        compact
      />

      <SectionWrapper>
        <SectionHeader
          title="The Brains Behind Carbon Gurukulam"
          subtitle="Our educators are committed to your success and are here to guide you every step of the way."
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
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
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
              <button className="btn-primary w-full md:w-auto px-10">Connect</button>
            </div>
          </div>
        )}
      </Modal>

      <Footer />
      <ChatWidget />
    </main>
  );
}
