import { Metadata } from "next";
import CourseDetailClient from "./CourseDetailClient";

const allCourses = [
  {
    title: "AI Fundamentals for Business",
    category: "Artificial Intelligence",
    slug: "ai-fundamentals",
    description: "This course is designed for professionals who want to understand how AI can be leveraged to drive business value. We cover everything from the basics of machine learning to the ethical implications of AI deployment.",
  },
  {
    title: "Advanced Machine Learning",
    category: "Data Science",
    slug: "advanced-ml",
    description: "Take your machine learning skills to the next level with our advanced course covering deep learning, neural networks, and more.",
  },
  {
    title: "Full Stack Web Development",
    category: "Development",
    slug: "fullstack-dev",
    description: "Learn how to build modern, scalable web applications from scratch using the latest technologies.",
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

export default function CoursePage() {
  return <CourseDetailClient />;
}
