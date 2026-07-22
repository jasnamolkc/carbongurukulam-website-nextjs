"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ChatWidget from "@/components/ChatWidget";
import { Facebook, Twitter, Linkedin, Share2, Calendar } from "lucide-react";

const allNews = [
  {
    title: "Outstanding Performance in NEET 2025 Results",
    content: `
      <p>The National Testing Agency (NTA) declared the results for NEET UG 2025, and students at Carbon Gurukulam have once again achieved exemplary landmarks. Securing high ranks and top percentiles, our residential students have proven the effectiveness of focused residential mentorship.</p>

      <h3>Key Highlights of the Results</h3>
      <p>Our top performer secured a spectacular score of 710 out of 720, followed by multiple students clearing the 680+ marks threshold. Over 85% of our repeaters batch qualified for government medical seats, marking our highest success rate yet.</p>

      <blockquote>
        "The continuous testing pattern, instant doubt clearance at 10 PM, and the encouragement from our mentors kept us going without burnout." - Rahul Nair (Rank Holder)
      </blockquote>

      <h3>The Role of Residential Coaching</h3>
      <p>Unlike regular coaching models where students commute, the Gurukulam residential system allows students to stay close to learning environments, enabling structured study groups, healthy competition, and immediate accessibility to subject experts.</p>
    `,
    date: "June 20, 2025",
    author: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1523050335392-9bc567547bb3?auto=format&fit=crop&q=80&w=800",
    slug: "neet-2025-results-celebration",
    category: "Results"
  },
  {
    title: "Residential Admissions & Scholarship Test 2026",
    content: `
      <p>Carbon Gurukulam announces the launch of applications for the annual Carbon Scholarship Entrance Test (C-SET) for students completing their Class 10 board examinations. C-SET offers merit-based scholarships up to 100% on tuition and boarding fees.</p>

      <h3>About the C-SET Exam</h3>
      <p>The entrance assessment is designed to test a student's basic analytical understanding, logical reasoning, and fundamentals in Science and Mathematics. It is open to CBSE, ICSE, and State Board students who plan to pursue NEET or JEE coaching courses.</p>

      <h3>How to Apply</h3>
      <p>Prospective students can fill out the enquiry form on our Admissions page and secure their test slot online. Outstanding scorers will be invited to a personal interview with our Academic Director for final scholarship selections.</p>
    `,
    date: "July 12, 2025",
    author: "Admissions Office",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "residential-scholarships-2026",
    category: "Admissions"
  },
  {
    title: "Importance of Everyday Testing in Competitive Coaching",
    content: `
      <p>Securing a top rank in NEET or JEE is not just about studying long hours; it is about building high accuracy under time limits. At Carbon Gurukulam, our everyday testing method is designed to address this challenge.</p>

      <h3>Daily Evaluations Build Muscle Memory</h3>
      <p>Every day, students write a micro-test covering the exact topics discussed in the lectures. This prevents conceptual backlogs and ensures students know exactly where they made errors while the topic is still fresh in their minds.</p>

      <h3>Reducing Final Exam Anxiety</h3>
      <p>By writing over 200 mock tests throughout the academic year, the final competitive exam feels like just another daily test, significantly reducing panic and improve score efficiency.</p>
    `,
    date: "Sep 05, 2025",
    author: "HOD Chemistry",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "importance-of-everyday-testing",
    category: "Guides"
  },
  {
    title: "A Day in the Life of a Residential Gurukulam Aspirant",
    content: `
      <p>Have you wondered what goes on inside a premier residential campus? Our Kozhikode campus is home to students from across Kerala, living, studying, and working together toward their dreams.</p>

      <h3>Structured Schedule</h3>
      <p>A typical day starts with morning revision lectures, followed by systematic problem-solving modules. Afternoons are reserved for supervised self-study and mock tests. In the evening, the campus turns into an active hub of discussion with peer study circles and doubt desks.</p>

      <h3>Healthy Lifestyle</h3>
      <p>A balanced mind is crucial for academic retention. Our campus offers nutritious organic meals, regular physical exercise hours, and direct personal counseling support to help students cope with academic stress.</p>
    `,
    date: "Aug 20, 2025",
    author: "Campus Warden",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "day-in-life-gurukulam",
    category: "Campus Life"
  },
  {
    title: "Academic Directors Share Physics & Chemistry Strategy Guidelines",
    content: `
      <p>Balancing board exams and entrance preparation is one of the most common challenges faced by Class 11 and 12 students. Our Academic Director shares key strategies to balance these aspects effectively.</p>

      <h3>Prioritize NCERT Textbooks</h3>
      <p>Over 90% of NEET biology and chemistry questions are derived directly from NCERT. JEE also relies heavily on NCERT basics. Students must read, highlight, and revise textbook lines repeatedly before moving to reference books.</p>

      <h3>Consistent Numerical Solving</h3>
      <p>Physics and Physical Chemistry require practice, not reading. Spend at least 2 hours daily solving MCQs, analyzing errors, and recording difficult formulas in a custom diary.</p>
    `,
    date: "Jul 15, 2025",
    author: "Dr. Anand K.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    slug: "physics-chemistry-strategy-guidelines",
    category: "Academic"
  }
];

export default function NewsDetailPage() {
  const { slug } = useParams();
  const post = allNews.find(p => p.slug === slug) || allNews[0];

  const breadcrumbItems = [
    { name: "News", href: "/news" },
    { name: post.title, href: `/news/${post.slug}` }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <span className="text-sm font-bold text-primary">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar size={16} className="text-accent" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-150">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-4">
                <h4 className="font-bold text-primary">Share this story:</h4>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>

              <Link href="/news" className="text-accent font-bold hover:underline flex items-center">
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </main>
  );
}

