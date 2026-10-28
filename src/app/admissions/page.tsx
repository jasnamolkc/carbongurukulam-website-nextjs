"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import ChatWidget from "@/components/ChatWidget";
import { CheckCircle, ClipboardList, Send, Info, ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import Link from "next/link";

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
    studentName: "",
    school: "",
    studentClass: "",
    courseInterested: "NEET Repeaters",
    phoneNumber: "",
    parentName: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent, directWhatsApp = false) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phoneNumber) return;

    setLoading(true);
    try {
      // 1. Save data via API route to Google Sheet
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.studentName,
          fullName: formData.studentName,
          school: formData.school,
          class: formData.studentClass,
          courseInterested: formData.courseInterested,
          subject: formData.courseInterested,
          stream: formData.courseInterested,
          phone: formData.phoneNumber,
          mobile: formData.phoneNumber,
          parentName: formData.parentName,
          message: `School: ${formData.school || 'N/A'}, Class: ${formData.studentClass || 'N/A'}, Parent: ${formData.parentName || 'N/A'}. ${formData.message || ''}`,
          source: directWhatsApp ? "Admissions Form (WhatsApp)" : "Admissions Online Form"
        })
      });

      // 2. Open WhatsApp if requested or submitted
      if (directWhatsApp) {
        const messageText = 
          `*New Admission Enquiry - Carbon Gurukulam*\n\n` +
          `*Student Name:* ${formData.studentName}\n` +
          `*School:* ${formData.school || 'N/A'}\n` +
          `*Class:* ${formData.studentClass || 'N/A'}\n` +
          `*Course Interested:* ${formData.courseInterested}\n` +
          `*Phone Number:* ${formData.phoneNumber}\n` +
          `*Parent Name:* ${formData.parentName || 'N/A'}\n` +
          (formData.message ? `*Additional Notes:* ${formData.message}` : '');

        window.open(`https://wa.me/918592006009?text=${encodeURIComponent(messageText)}`, "_blank");
      }

      setSubmitted(true);
      setFormData({
        studentName: "",
        school: "",
        studentClass: "",
        courseInterested: "NEET Repeaters",
        phoneNumber: "",
        parentName: "",
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
        title="Apply Online for Admission"
        subtitle="Join our community of focused scholars. Fill out your details below to begin your residential coaching admission process."
        compact
      />

      {/* Admission Enquiry Form (Placed First) */}
      <SectionWrapper id="admission-form">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="bg-neutral-light p-6 md:p-10 md:w-2/5 flex flex-col justify-between space-y-6">
              <div>
                <span className="bg-accent/20 text-primary-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                  Registration
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Admission Form</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Enter student information to register for NEET, JEE, or Integrated residential batches. You can also connect directly with us on WhatsApp.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5 text-xs md:text-sm text-gray-600">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-accent shrink-0">
                    <ClipboardList size={18} />
                  </div>
                  <span>Instant Application Review</span>
                </div>
                <div className="flex items-center space-x-3.5 text-xs md:text-sm text-gray-600">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <span>Direct WhatsApp Assistance</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 md:w-3/5">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
                  <CheckCircle2 size={40} className="text-green-600 animate-bounce" />
                  <h4 className="font-bold text-lg">Application Submitted Successfully!</h4>
                  <p className="text-sm text-green-700 max-w-md">
                    Your details have been saved. Our admissions officer will contact you shortly with the enrollment procedure.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-accent mt-4 text-xs font-bold"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, false)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="form-label">Name of Student *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="form-input"
                      placeholder="Enter student full name"
                    />
                  </div>

                  <div>
                    <label className="form-label">School Name</label>
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                      className="form-input"
                      placeholder="Current or completed school"
                    />
                  </div>

                  <div>
                    <label className="form-label">Class</label>
                    <input
                      type="text"
                      value={formData.studentClass}
                      onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                      className="form-input"
                      placeholder="e.g. 10th / 12th / Completed"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="form-label">Course Interested *</label>
                    <select
                      value={formData.courseInterested}
                      onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
                      className="form-select"
                    >
                      <option value="NEET Repeaters">NEET Repeaters</option>
                      <option value="JEE Repeaters">JEE Repeaters</option>
                      <option value="Integrated Batch (Class 11 - 12)">Integrated Batch (Class 11 - 12)</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="form-label">Parent Name</label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="form-input"
                      placeholder="Parent / Guardian name"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="form-label">Additional Message / Questions</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                      placeholder="Hostel requirements, scholarship queries, etc."
                    ></textarea>
                  </div>

                  <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full cursor-pointer flex items-center justify-center font-semibold"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin mr-2" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      disabled={loading}
                      onClick={(e) => handleSubmit(e, true)}
                      className="h-11 md:h-12 px-4 rounded-xl font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all shadow-sm active:scale-[0.98] cursor-pointer text-sm"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      <span>Submit via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Eligibility Section (Placed Below Enquiry Form) */}
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
                "High school students looking for early foundation classes",
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
              <a href="tel:+918592006009" className="btn-accent w-full flex items-center justify-center text-primary font-semibold">
                Talk to Academic Mentor <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#admission-form"
                className="w-full block py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-colors font-semibold text-center text-white text-sm md:text-base"
              >
                Fill Admission Form Above
              </a>
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
