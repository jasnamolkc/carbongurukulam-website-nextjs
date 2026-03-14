"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import { Mail, Phone, MapPin, Facebook,  Instagram, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbxhLvbXbgXaw7fFCHIqf0vwOgnvNh19faNJtuxOp9rhH2OwASiTTDNtOXANusQ2MWRE/exec", {
        method: "POST",
        body: JSON.stringify(data)
      });

      alert("Message Sent Successfully");
      form.reset();

    } catch (error) {
      alert("Error sending message");
    }
  };
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
                  <p className="text-gray-500 text-sm">carbon gurukulam ,kunnamangalam, p.o payambra, kozhikode-673571</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Phone Number</h4>
                  <a href="tel:+918592006009" className="text-gray-500 text-sm">
                    +91 8592006009
                  </a> ,
                  <a href="tel:+916235888000" className="text-gray-500 text-sm">
                  +916235888000</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email Address</h4>
                <a href="mailto:carbongurukulam@gmail.com" className="text-gray-500 text-sm">
                  carbongurukulam@gmail.com
                </a>                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Office Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="font-bold text-primary mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
            { Icon: Facebook, url: "https://facebook.com/yourpage" },
            { Icon: Instagram, url: "https://www.instagram.com/carbon_gurukulam?igsh=MWZxNnVjMWppdGZtcA==" },
            { Icon: Phone, url: "https://wa.me/918592006009" }, // WhatsApp link using Phone icon
          ].map(({ Icon, url }, i) => (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-all shadow-md"
            >
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
              {/* <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </form> */}
              <form
  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
  onSubmit={handleSubmit}
>
  <div className="space-y-2">
    <label className="text-sm font-bold text-primary">Full Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none"
      placeholder="Enter your name"
    />
  </div>

  <div className="space-y-2">
    <label className="text-sm font-bold text-primary">Email Address</label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none"
      placeholder="Enter your email"
    />
  </div>

  <div className="space-y-2 sm:col-span-2">
    <label className="text-sm font-bold text-primary">Subject</label>
    <input
      type="text"
      name="subject"
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none"
      placeholder="How can we help?"
    />
  </div>

  <div className="space-y-2 sm:col-span-2">
    <label className="text-sm font-bold text-primary">Message</label>
    <textarea
      rows={5}
      name="message"
      required
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent/50 outline-none"
      placeholder="Your message here..."
    ></textarea>
  </div>

  <div className="sm:col-span-2 pt-2">
    <button
      type="submit"
      className="btn-primary w-full py-4 flex items-center justify-center"
    >
      Send Message <Send size={18} className="ml-2" />
    </button>
  </div>
</form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Placeholder */}
      {/* Map */}
<div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl my-16">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.24660310697!2d75.86337557504979!3d11.31667748886685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65d36dcb8fa0f%3A0xb1623985c02c6284!2sCarbon%20Gurukulam!5e0!3m2!1sen!2sin!4v1773400501921!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      <Footer />
      <ChatWidget />
    </main>
  );
}
