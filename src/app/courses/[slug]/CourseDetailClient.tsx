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
    title: "NEET/JEE Repeaters Batch",
    category: "Repeaters",
    duration: "1 Year",
    lessons: 180,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    slug: "neet-jee-repeaters",
    price: "Scholarship Eligible",
    description: "An intensive 1-year residential program designed for high school graduates. Under the direct guidance of ex-Kota mentors, students engage in deep concepts, weekly mock tests, and systematic problem solving to secure admission in premier medical and engineering colleges.",
    syllabus: [
      { title: "Physics: Mechanics & Electrodynamics", content: "In-depth coverage of fundamental physics concepts essential for NEET/JEE competitive problems." },
      { title: "Chemistry: Organic, Inorganic & Physical", content: "Comprehensive chemistry modules with focus on reaction mechanisms, structures, and numerical problems." },
      { title: "Biology: Botany & Zoology", content: "Detailed study of plant and animal sciences with NCERT-centric approach and diagrams analysis." },
      { title: "Mathematics: Calculus & Algebra", content: "Advanced mathematical concepts for JEE aspirants with quick shortcut techniques and numerical mock tests." }
    ],
    learningOutcomes: [
      "Master NCERT concepts for NEET and JEE",
      "Develop speed and accuracy for entrance exams",
      "Regular mock tests and performance analysis",
      "Personalized doubt clearing sessions"
    ]
  },
  {
    title: "Long Term Integrated (Class 11-12)",
    category: "Long Term",
    duration: "2 Years",
    lessons: 360,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    slug: "long-term-11-12",
    price: "Admissions Open",
    description: "These programs are designed for students who have completed Class 10 and aspire to become top achievers. Fully integrates school board syllabi with systematic entrance preparation for NEET, JEE Main, and Advanced.",
    syllabus: [
      { title: "Class 11 Foundation", content: "Building strong basics in Physics, Chemistry, Biology, and Mathematics." },
      { title: "Class 12 Advanced", content: "Moving towards advanced entrance exam level concepts and numericals." },
      { title: "Entrance Revision & Mock Series", content: "Dedicated time for full syllabus revision, previous year questions, and KEAM/JEE/NEET practice series." }
    ],
    learningOutcomes: [
      "Complete coverage of Board and Entrance syllabus",
      "Strong foundation building from Class 11",
      "Expert guidance for national level exams",
      "Weekly mock assessments under real exam conditions"
    ]
  },
  {
    title: "Kerala Engineering (KEAM) Entrance",
    category: "State Level",
    duration: "1 Year",
    lessons: 140,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    slug: "kerala-engineering",
    price: "Expert Mentoring",
    description: "Expert coaching specifically tailored for Kerala Engineering entrance exams (KEAM), focusing on local state-level syllabus and high-speed solving techniques.",
    syllabus: [
      { title: "KEAM Physics Modules", content: "State level physics chapters and previous KEAM paper analysis." },
      { title: "KEAM Chemistry Modules", content: "Applied and organic chemistry equations tailored for high scores." },
      { title: "KEAM Mathematics Modules", content: "Calculus, trigonometry, and coordinate geometry shortcuts." }
    ],
    learningOutcomes: [
      "Familiarity with state entrance exam patterns",
      "Optimized formulas for fast numerical solving",
      "Full coverage of Kerala board core topics",
      "Access to online rank prediction exams"
    ]
  },
  {
    title: "NEET Crash Course",
    category: "Crash Course",
    duration: "2 Months",
    lessons: 80,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    slug: "neet-crash-course",
    price: "Limited Seats",
    description: "Highly focused 2-month revision program to refine test-taking strategies, clear lingering doubts, and maximize NEET scores under constant assessment.",
    syllabus: [
      { title: "High-Weightage Chapters Revision", content: "Brief revision of crucial NEET topics in Botany, Zoology, Physics, and Chemistry." },
      { title: "Daily Practice Papers (DPP)", content: "Topic-wise problem solving and quick solution guides." },
      { title: "Full Syllabus Mock Tests", content: "Continuous mock series simulating the actual NEET environment." }
    ],
    learningOutcomes: [
      "Quick summary of 90 high-weightage chapters",
      "Doubt clearing from expert faculties",
      "Time management hacks for 180 questions",
      "Confidence building with direct exam paper practices"
    ]
  },
  {
    title: "JEE Main Intensive",
    category: "Crash Course",
    duration: "3 Months",
    lessons: 120,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    slug: "jee-main-intensive",
    price: "Admissions Open",
    description: "A fast-track, result-oriented prep course designed to boost scoring efficiency, solve previous papers, and improve time management for engineering aspirants.",
    syllabus: [
      { title: "Maths Core Intensive", content: "Calculus, coordinate geometry, and matrices key topics." },
      { title: "Physics Formulas & Application", content: "Mechanics and electrodynamics problem sets." },
      { title: "Chemistry Shortcuts", content: "Chemical bonding, thermodynamics, and inorganic structures." }
    ],
    learningOutcomes: [
      "In-depth shortcut methods for math and physics",
      "Daily practice worksheets",
      "Previous 10 years JEE Main paper resolutions",
      "Regular mock assessments with relative percentile feedback"
    ]
  },
  {
    title: "Foundation Batch (Class 8-10)",
    category: "Foundation",
    duration: "3 Years",
    lessons: 240,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    slug: "foundation-batch",
    price: "Enroll Now",
    description: "Early-intervention program to develop strong mathematical analytical skills, logical thinking, and basic science foundations for junior high school students.",
    syllabus: [
      { title: "Math & Logic Foundations", content: "Number systems, algebra basics, and quantitative logic." },
      { title: "General Science Concepts", content: "Basic physics, chemical reactions, and cell biology." },
      { title: "Olympiad & NTSE Prep", content: "Introductory competitive coaching concepts." }
    ],
    learningOutcomes: [
      "Strong conceptual clarity in physics and maths",
      "Preparation for national Olympiads and NTSE",
      "Development of problem-solving aptitude",
      "Interactive, curiosity-driven laboratory sessions"
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
                    <BookOpen size={20} className="text-accent" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Modules</span>
                      <span className="font-semibold text-primary">{course.lessons} hours</span>
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
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-primary">{course.price}</span>
                  </div>

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
