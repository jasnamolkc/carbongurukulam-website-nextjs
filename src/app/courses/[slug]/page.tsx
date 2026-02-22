import { Metadata } from "next";
import CourseDetailClient from "./CourseDetailClient";

const allCourses = [
  {
    title: "NEET/JEE Repeaters Batch",
    category: "Repeaters",
    slug: "neet-jee-repeaters",
    description: "In our classrooms, students embark on a tech-enhanced learning journey under the guidance of experienced faculty. They will engage in a systematic learning approach, complemented by extra study hours to provide a more thorough educational experience.",
  },
  {
    title: "Long Term (Class 11-12)",
    category: "Long Term",
    slug: "long-term-11-12",
    description: "These programs are designed for students who have either completed or are currently taking the Class X Exam in 2024 and aspire to become exceptional achievers. Our focus will be on preparing for NEET, JEE (Main & Advanced), Kerala Engineering, and various other national and state-level entrance examinations.",
  },
  {
    title: "Kerala Engineering Entrance",
    category: "State Level",
    slug: "kerala-engineering",
    description: "Expert coaching specifically tailored for Kerala Engineering entrance exams, focusing on local state-level syllabus and patterns.",
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
      "sameAs": "https://carbongurukulam.in"
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
