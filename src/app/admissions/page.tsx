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
import Link from "next/link";

const admissionSteps = [
  {
    title: "Online Enquiry / Registration",
    date: "Step 1",
    description: "Fill out the online application form with your details, academic marks, and coaching stream choice."
  },
  {
    title: "Academic Profiling",
    date: "Step 2",
    description: "Submit your Class 10/12 scorecard transcripts for initial academic filtering and eligibility check."
  },
  {
    title: "Scholarship Entrance Test (C-SET)",
    date: "Step 3",
    description: "Attend the Carbon Scholarship Entrance Test to evaluate fundamental concept knowledge in science and maths."
  },
  {
    title: "Personal Counselling Session",
    date: "Step 4",
    description: "A one-on-one interview with our academic mentors to map out student weak areas and structure a preparation strategy."
  },
  {
    title: "Admission Securing",
    date: "Step 5",
    description: "Receive the selection offer letter and complete admission formalities to book a hostel room and seat."
  }
];

const faqs = [
  {
    title: "What are the eligibility criteria for the NEET / JEE Repeaters Batch?",
    content: "Candidates must have completed their Class 12 board examination in Physics, Chemistry, Biology/Mathematics, with a dedication to rigorous competitive preparation schedules."
  },
  {
    title: "Do you offer boarding facility scholarships?",
    content: "Yes, we offer attractive merit-based scholarships up to 100% on tuition and hostel fees for top rankers in our C-SET entrance assessment."
  },
  {
    title: "Can parents visit the residential campus beforehand?",
    content: "Absolutely. We encourage parents and students to visit our campus in Kozhikode to inspect the hostel facilities, dining hall, classrooms, and study environment."
  },
  {
    title: "What is the everyday schedule in the residential campus?",
    content: "Students follow a highly disciplined schedule starting at 6:30 AM, including morning lectures, everyday practice assessments, guided self-study sessions, and evening doubt solving circles."
  }
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Start Your Journey With Us"
        subtitle="Join our community of focused scholars. Our admissions process is designed to select students who are dedicated to securing top medical and engineering ranks."
        compact
      />

      {/* Admission Process */}
      <SectionWrapper>
        <SectionHeader
          title="Admissions Pathway"
          subtitle="A simple, transparent five-step process to secure your residential seat at Carbon Gurukulam."
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
              Eligibility Criteria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Who Can Apply?</h2>
            <p className="text-gray-300 text-lg">
              We seek motivated, dedicated students who are committed to rigorous study schedules and aim for exceptional ranks in competitive entrance tests.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Class 10 completed students for our 2-Year Long Term Integrated program",
                "Class 12 completed/pass out students seeking 1-Year Repeaters Batch",
                "High school students (Class 8-10) looking for early foundation classes",
                "Dedication to stay inside a disciplined residential learning campus"
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
              Not sure which batch suits your academic targets? Our experienced education coordinators are available for guidance.
            </p>
            <div className="space-y-4">
              <Link href="/contact" className="btn-accent w-full flex items-center justify-center text-primary font-semibold">
                Talk to Academic Mentor <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScoK6Ll5398u9bqV4ajBSWaUWEGKqH40ggpsRNa53toKG0LQg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors font-semibold text-center text-white"
              >
                Apply Online For Admission
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Enquiry Form */}
      <SectionWrapper id="enquiry-form">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="bg-neutral-light p-10 md:w-2/5 space-y-8">
              <h3 className="text-2xl font-bold text-primary">Admission Enquiry</h3>
              <p className="text-gray-600">
                Have questions regarding residential accommodations, hostel rules, or admission schedules? Share your details.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                    <ClipboardList size={20} />
                  </div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-accent">
                    <Send size={20} />
                  </div>
                  <span>Direct counselling calls</span>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-3/5">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Student First name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Last name" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="contact@example.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Coaching Stream of Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none appearance-none bg-white">
                    <option>Select stream</option>
                    <option>NEET/JEE Repeaters Batch</option>
                    <option>Long Term Integrated (Class 11-12)</option>
                    <option>Kerala Engineering (KEAM) Entrance</option>
                    <option>NEET Crash Course</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Message Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="How can we help? ( hostel query, scholarships info, etc. )"></textarea>
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
          subtitle="Find answers to common questions about residential life, guidelines, and admission schedules."
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
