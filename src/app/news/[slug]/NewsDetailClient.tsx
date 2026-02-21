"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Breadcrumb from "@/components/Breadcrumb";
import ChatWidget from "@/components/ChatWidget";
import { Facebook, Twitter, Linkedin, Share2, Calendar, User } from "lucide-react";

const allNews = [
  {
    title: "The Future of AI in Education",
    content: `
      <p>The integration of Artificial Intelligence (AI) into educational systems is no longer a futuristic concept but a present-day reality. From personalized learning algorithms to AI-powered administrative tools, technology is fundamentally reshaping how knowledge is delivered and acquired.</p>

      <h3>Personalized Learning Paths</h3>
      <p>One of the most significant advantages of AI in education is its ability to tailor learning experiences to individual student needs. By analyzing student performance data in real-time, AI systems can identify areas where a student is struggling and provide targeted resources to help them improve.</p>

      <p>At Carbon Gurukulam, we have implemented our own proprietary AI model that suggests supplementary reading and exercises based on a student's performance in weekly assessments.</p>

      <h3>The Changing Role of Educators</h3>
      <p>Rather than replacing teachers, AI is augmenting their capabilities. By automating routine tasks such as grading and attendance, AI allows educators to spend more time on mentorship and high-level conceptual teaching.</p>

      <blockquote>
        "AI is a tool that, when used correctly, can unlock human potential. It allows us to focus on the things that make us uniquely human: creativity, empathy, and critical thinking." - Dr. Sarah Smith
      </blockquote>

      <h3>Challenges and Considerations</h3>
      <p>While the benefits are many, the adoption of AI in education also brings challenges, particularly regarding data privacy and the digital divide. Ensuring that all students have equal access to these technologies is a top priority for our institution.</p>
    `,
    date: "Oct 24, 2023",
    author: "Dr. Sarah Smith",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-ai-education",
    category: "Trends"
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
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Share2 size={16} className="text-accent" />
                  <span>Share</span>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
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
