import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#244520] via-primary to-primary-dark text-white pt-12 pb-6 border-t border-primary-light/30">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center">
            <Logo variant="dark" />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Kerala&apos;s premier residential coaching institute for JEE &amp; NEET. Blending the academic rigor of Kota curriculum with personalized residential mentoring.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61586399489579"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all shadow-sm"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/carbon_gurukulam?igsh=MWZxNnVjMWppdGZtcA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all shadow-sm"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@Carbon_gurukulam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all shadow-sm"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/carbongurukulam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all shadow-sm"
            >
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
            <li><Link href="/news" className="hover:text-white transition-colors">Latest News</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-accent">Support</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-accent">Contact Info</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Carbon Gurukulam Campus, Kozhikode, Kerala, India - 673001</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+91 97782 17821</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>info@carbongurukulam.com</span>
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

