"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if navbar should have solid/light background
  const isLightNav = scrolled || !isHomePage;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isLightNav
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100/80"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo variant={isLightNav ? "light" : "dark"} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-accent",
                pathname === link.href
                  ? "text-accent"
                  : isLightNav
                  ? "text-primary hover:text-accent"
                  : "text-white/95 hover:text-white drop-shadow-sm"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="btn-primary py-2 px-5 text-xs font-bold uppercase tracking-wider"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={cn(
            "md:hidden focus:outline-none p-1.5 rounded-lg transition-colors",
            isLightNav ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="container-custom py-5 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-base font-semibold py-1.5 transition-colors",
                    pathname === link.href ? "text-accent" : "text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/admissions"
                className="btn-primary text-center py-2.5 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
