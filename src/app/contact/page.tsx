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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <SectionHeader
              title="Campus Information"
              subtitle="Reach out to us through any of these channels."
              centered={false}
              className="mb-8"
            />

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Our Location</h4>
                  <p className="text-gray-500 text-sm">Carbon Gurukulam Campus, Kozhikode, Kerala, India - 673001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Admissions Hotline</h4>
                  <p className="text-gray-500 text-sm">+91 97782 17821</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Address</h4>
                  <p className="text-gray-500 text-sm">info@carbongurukulam.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Sat: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-bold text-primary mb-4">Follow Our Updates</h4>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-md">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Enter contact email" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="NEET Repeaters Batch / JEE Long Term Enquiry" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Message Details</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Briefly describe academic status, high school marks, or queries..."></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button type="button" className="btn-primary w-full py-4 flex items-center justify-center">
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

