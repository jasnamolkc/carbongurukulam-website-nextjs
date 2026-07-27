import { Metadata } from "next";
import CourseDetailClient from "./CourseDetailClient";

const allCourses = [
  {
    title: "NEET Repeaters",
    category: "Repeaters",
    slug: "neet-repeaters",
    description: "Intensive 1-year residential program designed for NEET repeaters. Under direct guidance of ex-Kota mentors, students engage in deep NCERT mastery, daily practice papers, and weekly mock tests.",
  },
  {
    title: "JEE Repeaters",
    category: "Repeaters",
    slug: "jee-repeaters",
    description: "Result-oriented 1-year residential program for JEE aspirants. Features systematic problem-solving strategies for JEE Main & Advanced under experienced Kota IITian faculties.",
  },
  {
    title: "Integrated Batch (Class 11-12)",
    category: "Integrated",
    slug: "integrated-batch-11-12",
    description: "A comprehensive 2-year integrated residential program for Class 10 graduates. Fully synchronizes Higher Secondary board curriculum with entrance preparation for NEET, JEE Main, and Advanced.",
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

