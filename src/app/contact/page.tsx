"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Get In Touch"
        subtitle="Have questions about our programs, admissions, or anything else? We're here to help."
        compact
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <SectionHeader
              title="Contact Information"
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
                  <p className="text-gray-500 text-sm">123 Academic Way, Education City, Carbon State 45678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone Number</h4>
                  <p className="text-gray-500 text-sm">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Address</h4>
                  <p className="text-gray-500 text-sm">info@carbongurukulam.edu</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-bold text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
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
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Enter your email" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="How can we help?" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-bold text-primary">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none" placeholder="Your message here..."></textarea>
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

      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-gray-200 relative overflow-hidden grayscale">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold italic bg-gray-100">
          Google Maps Embed Placeholder
        </div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      <Footer />
      <ChatWidget />
    </main>
  );
}
