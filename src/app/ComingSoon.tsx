"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
        <iframe
          src="https://www.youtube.com/embed/S2K2V1-94_w?autoplay=1&mute=1&controls=0&loop=1&playlist=S2K2V1-94_w&rel=0&showinfo=0&iv_load_policy=3"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-150 md:scale-110"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl inline-block border border-white/20 shadow-2xl">
                <Image 
                src="/logo.png" 
                alt="Carbon Gurukulam Logo" 
                width={180} 
                height={60} 
                className="brightness-0 invert h-auto w-auto max-w-[200px]"
                priority
                />
            </div>
        </div>

        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary font-bold text-sm uppercase tracking-widest animate-pulse">
            Maintenance Mode
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            Coming <span className="text-accent">Soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Our digital experience is being reimagined to better serve NEET and JEE aspirants. We&apos;ll be back online shortly with a brand new interface.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-12">
          <div className="flex flex-col items-center space-y-3 group">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <Phone size={24} />
            </div>
            <p className="text-white font-bold">+91 8592 006 009</p>
            <p className="text-gray-400 text-sm">Admissions & Inquiries</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3 group">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <MapPin size={24} />
            </div>
            <p className="text-white font-bold">Calicut, Kerala</p>
            <p className="text-gray-400 text-sm">Kunnamangalam, Payambra PO</p>
          </div>

          <div className="flex flex-col items-center space-y-3 group">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <Mail size={24} />
            </div>
            <p className="text-white font-bold">info@carbongurukulam.com</p>
            <p className="text-gray-400 text-sm">Send us an email</p>
          </div>
        </div>

        <div className="mt-16">
            <p className="text-gray-500 text-sm">© 2024 Carbon Gurukulam. All rights reserved.</p>
        </div>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #0a192f;
        }
      `}</style>
    </div>
  );
}
