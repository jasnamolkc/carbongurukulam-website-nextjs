import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
              <span className="text-primary font-bold text-2xl">C</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Carbon Gurukulam
            </span>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering the next generation with AI-driven education and traditional academic excellence. Shaping leaders for a sustainable and intelligent future.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
            <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            <li><Link href="/faculty" className="hover:text-white transition-colors">Our Faculty</Link></li>
            <li><Link href="/news" className="hover:text-white transition-colors">Latest News</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-accent">Support</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-accent">Contact Info</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>123 Academic Way, Education City, Carbon State 45678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@carbongurukulam.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom border-t border-primary-light pt-8 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Carbon Gurukulam. All rights reserved.</p>
      </div>
    </footer>
  );
}
