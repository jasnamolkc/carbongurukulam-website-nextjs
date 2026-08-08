"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import Accordion from "@/components/Accordion";
import ChatWidget from "@/components/ChatWidget";
import { CheckCircle, ClipboardList, Send, Info, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stream: "NEET/JEE Repeaters Batch",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;

    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.stream,
          stream: formData.stream,
          message: formData.message,
          source: "Admissions Enquiry Form"
        })
      });
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        stream: "NEET/JEE Repeaters Batch",
        message: ""
      });
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setLoading(false);
    }
  };

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
        <div className="max-w-4xl mx-auto py-6 md:py-8">
          <Timeline items={admissionSteps} />
        </div>
      </SectionWrapper>

      {/* Eligibility Section */}
      <SectionWrapper className="bg-primary text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-stretch">
          <div className="space-y-5 flex flex-col justify-center">
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
              Eligibility Criteria
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">Who Can Apply?</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We seek motivated, dedicated students who are committed to rigorous study schedules and aim for exceptional ranks in competitive entrance tests.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Class 10 completed students for our 2-Year Long Term Integrated program",
                "Class 12 completed/pass out students seeking 1-Year Repeaters Batch",
                "High school students (Class 8-10) looking for early foundation classes",
                "Dedication to stay inside a disciplined residential learning campus"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                <Info className="mr-2.5 text-accent" /> Need Assistance?
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                Not sure which batch suits your academic targets? Our experienced education coordinators are available for guidance.
              </p>
            </div>
            <div className="space-y-3">
              <Link href="/contact" className="btn-accent w-full flex items-center justify-center text-primary font-semibold">
                Talk to Academic Mentor <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                href="/contact"
                className="w-full block py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors font-semibold text-center text-white text-sm md:text-base"
              >
                Apply Online For Admission
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Enquiry Form */}
      <SectionWrapper id="enquiry-form">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="bg-neutral-light p-6 md:p-10 md:w-2/5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Admission Enquiry</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Have questions regarding residential accommodations, hostel rules, or admission schedules? Share your details.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 text-xs md:text-sm text-gray-600">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-accent shrink-0">
                    <ClipboardList size={18} />
                  </div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3.5 text-xs md:text-sm text-gray-600">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-accent shrink-0">
                    <Send size={18} />
                  </div>
                  <span>Direct counselling calls</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 md:w-3/5">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
                  <CheckCircle2 size={40} className="text-green-600 animate-bounce" />
                  <h4 className="font-bold text-lg">Enquiry Submitted Successfully!</h4>
                  <p className="text-sm text-green-700 max-w-md">
                    Your admission enquiry details have been automatically saved to our system. Our admissions officer will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-accent mt-4 text-xs font-bold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="form-input"
                      placeholder="Student First name"
                    />
                  </div>
                  <div>
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="form-input"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="contact@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Coaching Stream of Interest</label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="form-select"
                    >
                      <option value="NEET/JEE Repeaters Batch">NEET/JEE Repeaters Batch</option>
                      <option value="Long Term Integrated (Class 11-12)">Long Term Integrated (Class 11-12)</option>
                      <option value="Kerala Engineering (KEAM) Entrance">Kerala Engineering (KEAM) Entrance</option>
                      <option value="NEET Crash Course">NEET Crash Course</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Message Details</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                      placeholder="How can we help? ( hostel query, scholarships info, etc. )"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full cursor-pointer flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin mr-2" /> Saving...
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </button>
                  </div>
                </form>
              )}
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
