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
import { Clock, BookOpen, GraduationCap, Download, CheckCircle, Calendar, User } from "lucide-react";

const allCourses = [
  {
    title: "NEET Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "neet-repeaters",
    description: "An intensive 1-year residential program designed for NEET repeaters. Under direct guidance of ex-Kota mentors, students engage in deep NCERT concepts, daily practice assessments, weekly mock tests, and systematic problem solving.",
    syllabus: [
      { title: "Physics: Mechanics & Electrodynamics", content: "In-depth coverage of fundamental physics concepts essential for NEET competitive problems." },
      { title: "Chemistry: Organic, Inorganic & Physical", content: "Comprehensive chemistry modules with focus on reaction mechanisms, structures, and numerical problems." },
      { title: "Biology: Botany & Zoology", content: "Detailed study of plant and animal sciences with NCERT-centric approach and diagrammatic analysis." }
    ],
    learningOutcomes: [
      "Master NCERT concepts for NEET medical entrance",
      "Develop speed and accuracy for entrance exam solving",
      "Regular mock tests and performance analysis",
      "Personalized doubt clearing sessions"
    ]
  },
  {
    title: "JEE Repeaters",
    category: "Repeaters",
    duration: "1 Year",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "jee-repeaters",
    description: "Result-oriented 1-year residential program for JEE aspirants. Features systematic problem-solving strategies for JEE Main & Advanced under experienced Kota IITian faculties.",
    syllabus: [
      { title: "Physics: Mechanics, Electricity & Magnetism", content: "Advanced physics concepts for JEE aspirants with shortcut techniques and numerical mock tests." },
      { title: "Chemistry: Physical, Organic & Inorganic", content: "In-depth reaction mechanisms, thermodynamics, chemical bonding, and coordination compounds." },
      { title: "Mathematics: Calculus, Algebra & Vectors", content: "Rigorous mathematical problem-solving methods tailored for JEE Main and Advanced rank holders." }
    ],
    learningOutcomes: [
      "In-depth shortcut methods for math and physics",
      "Daily practice worksheets (DPP) and previous paper solving",
      "Regular mock assessments under real exam conditions",
      "One-on-one mentorship by expert Kota faculties"
    ]
  },
  {
    title: "Integrated Batch (Class 11 - 12)",
    category: "Integrated",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "integrated-batch-11-12",
    description: "A comprehensive 2-year integrated residential program for Class 10 graduates. Fully synchronizes Higher Secondary school board curriculum with systematic entrance preparation for NEET, JEE Main, and Advanced.",
    syllabus: [
      { title: "Class 11 Foundation", content: "Building strong basics in Physics, Chemistry, Biology, and Mathematics." },
      { title: "Class 12 Advanced", content: "Moving towards advanced entrance exam level concepts and numericals." },
      { title: "Entrance Revision & Mock Series", content: "Dedicated time for full syllabus revision, previous year questions, and NEET/JEE mock series." }
    ],
    learningOutcomes: [
      "Complete coverage of Board and Entrance syllabus",
      "Strong foundation building starting from Class 11",
      "Expert guidance for national level competitive exams",
      "Weekly mock assessments under real exam conditions"
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
              <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-150">
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
                    <GraduationCap size={20} className="text-accent" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Mentorship</span>
                      <span className="font-semibold text-primary">Kota Experts</span>
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
                  <h3 className="text-2xl font-bold text-primary">What You&apos;ll Master</h3>
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
                    <h3 className="text-2xl font-bold text-primary">Course Syllabus</h3>
                    <Link
                      href="/contact"
                      className="flex items-center text-accent font-bold text-sm hover:underline"
                    >
                      <Download size={18} className="mr-2" /> Request Detailed PDF
                    </Link>
                  </div>
                  <Accordion items={course.syllabus} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="btn-primary w-full py-4 text-lg text-center"
                    >
                      Apply Online
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full block py-4 text-center text-primary font-bold border-2 border-gray-100 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Enquire Course
                    </Link>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center"><Calendar size={16} className="mr-2" /> Academic Year</span>
                      <span className="text-primary font-bold">2026 - 2027</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center"><User size={16} className="mr-2" /> HOD Head</span>
                      <span className="text-primary font-bold underline">Dr. Robert Chen</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-8 rounded-2xl shadow-xl text-white space-y-4">
                  <h4 className="text-xl font-bold">Need Help?</h4>
                  <p className="text-gray-300 text-sm">Our admissions guidance team is available to counsel you on the best matching coaching programs.</p>
                  <Link href="/contact" className="btn-accent w-full block text-center text-primary">Contact Counseling</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Courses */}
      <SectionWrapper>
        <SectionHeader
          title="Other Programs"
          subtitle="Explore our range of structured coaching options."
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
