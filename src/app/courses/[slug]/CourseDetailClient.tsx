"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import Accordion from "@/components/Accordion";
import Breadcrumb from "@/components/Breadcrumb";
import ChatWidget from "@/components/ChatWidget";
import { Clock, BookOpen, GraduationCap, Download, CheckCircle, Calendar, User, ArrowRight } from "lucide-react";

const allCourses = [
  {
    title: "AI Fundamentals for Business",
    category: "Artificial Intelligence",
    duration: "8 Weeks",
    lessons: 24,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
    slug: "ai-fundamentals",
    price: "$299",
    description: "This course is designed for professionals who want to understand how AI can be leveraged to drive business value. We cover everything from the basics of machine learning to the ethical implications of AI deployment.",
    syllabus: [
      { title: "Module 1: Introduction to AI", content: "Understanding the history and basic concepts of Artificial Intelligence." },
      { title: "Module 2: Machine Learning for Decision Making", content: "How ML models work and how they can be used to make data-driven decisions." },
      { title: "Module 3: Natural Language Processing in Business", content: "Exploring the applications of NLP in customer service and content creation." },
      { title: "Module 4: Ethical AI and Governance", content: "Developing a framework for responsible AI use in your organization." }
    ],
    learningOutcomes: [
      "Understand core AI concepts and terminology",
      "Identify opportunities for AI in your business",
      "Evaluate AI vendors and solutions",
      "Develop an AI implementation strategy"
    ]
  }
];

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = allCourses.find(c => c.slug === slug) || allCourses[0];

  const breadcrumbItems = [
    { name: "Courses", href: "/courses" },
    { name: course.title, href: `/courses/${course.slug}` }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 bg-neutral-light">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-primary">{course.title}</h1>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 border-y border-gray-100 py-6">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className="text-accent" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Duration</span>
                      <span className="font-semibold text-primary">{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen size={20} className="text-accent" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Lessons</span>
                      <span className="font-semibold text-primary">{course.lessons} Modules</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap size={20} className="text-accent" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Level</span>
                      <span className="font-semibold text-primary">Intermediate</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Course Description</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {course.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-2xl font-bold text-primary">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.learningOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-gray-600">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-primary">Syllabus</h3>
                    <button className="flex items-center text-accent font-bold text-sm hover:underline">
                      <Download size={18} className="mr-2" /> Download PDF
                    </button>
                  </div>
                  <Accordion items={course.syllabus} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-primary">{course.price}</span>
                    <span className="text-gray-400 line-through text-lg">$599</span>
                  </div>

                  <div className="space-y-4">
                    <button className="btn-primary w-full py-4 text-lg">Enroll Now</button>
                    <button className="w-full py-4 text-primary font-bold border-2 border-gray-100 rounded-md hover:bg-gray-50 transition-colors">Add to Wishlist</button>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center"><Calendar size={16} className="mr-2" /> Start Date</span>
                      <span className="text-primary font-bold">Oct 30, 2023</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center"><User size={16} className="mr-2" /> Instructor</span>
                      <span className="text-primary font-bold underline">Dr. Robert Chen</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-8 rounded-2xl shadow-xl text-white space-y-4">
                  <h4 className="text-xl font-bold">Need Help?</h4>
                  <p className="text-gray-300 text-sm">Our AI counselor is available 24/7 to answer your questions about this course.</p>
                  <button className="btn-accent w-full">Chat with Carbon AI</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Courses */}
      <SectionWrapper>
        <SectionHeader
          title="Related Courses"
          subtitle="Expand your knowledge with these similar programs."
          centered={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allCourses.slice(0, 3).map((c) => (
            <CourseCard key={c.slug} {...c} />
          ))}
        </div>
      </SectionWrapper>

      <Footer />
      <ChatWidget />
    </main>
  );
}
