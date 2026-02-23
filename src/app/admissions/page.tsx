"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import Accordion from "@/components/Accordion";
import ChatWidget from "@/components/ChatWidget";
import { CheckCircle, ClipboardList, Send, Info, ArrowRight } from "lucide-react";

const admissionSteps = [
  {
    title: "Online Enquiry",
    date: "Step 1",
    description: "Fill out the online enquiry form with your basic details and course of interest."
  },
  {
    title: "Document Submission",
    date: "Step 2",
    description: "Upload necessary academic transcripts and identification documents for review."
  },
  {
    title: "Entrance Assessment",
    date: "Step 3",
    description: "Complete our AI-proctored entrance assessment to evaluate your aptitude and skills."
  },
  {
    title: "Personal Interview",
    date: "Step 4",
    description: "A brief interview with our faculty members to discuss your goals and aspirations."
  },
  {
    title: "Final Admission",
    date: "Step 5",
    description: "Receive your offer letter and complete the fee payment to secure your seat."
  }
];

const faqs = [
  {
    title: "What are the eligibility criteria for AI courses?",
    content: "Applicants should have a basic understanding of mathematics and logic. For advanced courses, a background in programming (Python preferred) is recommended.",
    isAI: true
  },
  {
    title: "Do you offer scholarships?",
    content: "Yes, we offer merit-based scholarships for top-performing students in our entrance assessment, as well as need-based financial aid."
  },
  {
    title: "Can I visit the campus before applying?",
    content: "Yes, we encourage prospective students and parents to visit our residential campus to experience the Gurukulam environment firsthand."
  },
  {
    title: "What is the track record of Carbon Gurukulam?",
    content: "We have a proven track record of steering students towards exceptional achievements in competitive examinations like NEET and JEE over the past 15 years."
  }
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Start Your Journey With Us"
        subtitle="Join a community of innovators and learners. Our admission process is designed to find the best fit for our programs."
        compact
      />

      {/* Admission Process */}
      <SectionWrapper>
        <SectionHeader
          title="Admission Process"
          subtitle="A simple, five-step process to get you started at Carbon Gurukulam."
          badge="How to Apply"
        />
        <div className="max-w-4xl mx-auto py-12">
          <Timeline items={admissionSteps} />
        </div>
      </SectionWrapper>

      {/* Eligibility Section */}
      <SectionWrapper className="bg-primary text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Eligibility
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Who Can Apply?</h2>
            <p className="text-gray-300 text-lg">
              We seek motivated students who are dedicated to achieving excellence in medical and engineering entrance examinations.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "10th-grade graduates aiming for medical or engineering careers",
                "Aspiring medical scholars seeking intensive NEET preparation",
                "Students looking for a disciplined residential learning environment",
                "Commitment to rigorous academic and personal growth"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Info className="mr-3 text-accent" /> Need Assistance?
            </h3>
            <p className="text-gray-300 mb-8">
              Not sure which program is right for you? Our AI Counselor can help you decide based on your background and interests.
            </p>
            <div className="space-y-4">
              <button className="btn-accent w-full flex items-center justify-center">
                Talk to AI Counselor <ArrowRight className="ml-2" size={18} />
              </button>
              <button className="w-full py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Enquiry Form */}
      <SectionWrapper id="enquiry-form">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="bg-neutral-light p-10 md:w-2/5 space-y-8">
              <h3 className="text-2xl font-bold text-primary">Online Enquiry</h3>
              <p className="text-gray-600">
                Have questions? Fill out the form and our admissions team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                    <ClipboardList size={20} />
                  </div>
                  <span>Quick response time</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                    <Send size={20} />
                  </div>
                  <span>Secure data handling</span>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-3/5">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Doe" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Course of Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none appearance-none bg-white">
                    <option>Select a course</option>
                    <option>NEET/JEE Repeaters Batch</option>
                    <option>Long Term (Class 11-12)</option>
                    <option>Kerala Engineering Entrance</option>
                    <option>NEET Crash Course</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button type="button" className="btn-primary w-full py-4">Submit Enquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-neutral-light">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our admission process and programs."
          badge="FAQ"
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
