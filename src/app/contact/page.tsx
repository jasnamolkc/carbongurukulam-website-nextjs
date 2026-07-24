"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Get In Touch"
        subtitle="Have questions about our NEET/JEE courses, admissions, residential hostels, or fees? We're here to help."
        compact
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-start">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <SectionHeader
              title="Campus Information"
              subtitle="Reach out to us through any of these channels."
              centered={false}
              className="mb-6"
            />

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">Our Location</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Carbon Gurukulam Campus, Kozhikode, Kerala, India - 673001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">Admissions Hotline</h4>
                  <p className="text-gray-500 text-xs md:text-sm">+91 97782 17821</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">Email Address</h4>
                  <p className="text-gray-500 text-xs md:text-sm">info@carbongurukulam.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base">Office Hours</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Mon - Sat: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-bold text-primary text-sm md:text-base mb-3">Follow Our Updates</h4>
              <div className="flex space-x-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="Enter student name" />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="Enter contact email" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-input" placeholder="NEET Repeaters Batch / JEE Long Term Enquiry" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Message Details</label>
                  <textarea rows={4} className="form-textarea" placeholder="Briefly describe academic status, high school marks, or queries..."></textarea>
                </div>
                <div className="sm:col-span-2 pt-1">
                  <button type="button" className="btn-primary w-full flex items-center justify-center">
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Embedded Google Map */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.42398436538!2d75.73144883391782!3d11.25875306859312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563f4747%3A0x2ff9ed5f72cf93db!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale opacity-90"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply" />
      </div>

      <Footer />
      <ChatWidget />
    </main>
  );
}

