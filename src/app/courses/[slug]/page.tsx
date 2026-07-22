import { Metadata } from "next";
import CourseDetailClient from "./CourseDetailClient";

const allCourses = [
  {
    title: "NEET/JEE Repeaters Batch",
    category: "Repeaters",
    slug: "neet-jee-repeaters",
    description: "Intensive 1-year residential program designed for high school graduates. Under the direct guidance of ex-Kota mentors, students engage in deep concepts, weekly mock tests, and systematic problem solving.",
  },
  {
    title: "Long Term Integrated (Class 11-12)",
    category: "Long Term",
    slug: "long-term-11-12",
    description: "A comprehensive 2-year program for Class 10 graduates. Fully integrates school board syllabi with systematic entrance preparation for NEET, JEE Main, and Advanced.",
  },
  {
    title: "Kerala Engineering (KEAM) Entrance",
    category: "State Level",
    slug: "kerala-engineering",
    description: "Targeted coaching specifically focused on KEAM entrance syllabus, with extensive practice on state exam patterns and mock tests.",
  },
  {
    title: "NEET Crash Course",
    category: "Crash Course",
    slug: "neet-crash-course",
    description: "Highly focused 2-month revision program to refine test-taking strategies, clear lingering doubts, and maximize NEET scores.",
  },
  {
    title: "JEE Main Intensive",
    category: "Crash Course",
    slug: "jee-main-intensive",
    description: "A fast-track, result-oriented prep course designed to boost scoring efficiency, solve previous papers, and improve time management.",
  },
  {
    title: "Foundation Batch (Class 8-10)",
    category: "Foundation",
    slug: "foundation-batch",
    description: "Early-intervention program to develop strong mathematical analytical skills, logical thinking, and basic science foundations.",
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = allCourses.find(c => c.slug === params.slug) || allCourses[0];

  return {
    title: `${course.title} | Carbon Gurukulam`,
    description: course.description,
    openGraph: {
      title: `${course.title} | Carbon Gurukulam`,
      description: course.description,
    }
  };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = allCourses.find(c => c.slug === params.slug) || allCourses[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Carbon Gurukulam",
      "sameAs": "https://carbongurukulam.com"
    },
    "educationalAudience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailClient />
    </>
  );
}

