import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  category: string;
  duration: string;
  lessons: number;
  image: string;
  slug: string;
  price?: string;
}

export default function CourseCard({
  title,
  category,
  duration,
  lessons,
  image,
  slug,
  price,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-48 w-full">
        
        <Image
          src={image || "/logo.png"}
          alt={title || "image"}
          fill
          className="object-cover"
        />
                <div className="absolute top-4 left-4">
          <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-accent" />
            {duration}
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1 text-accent" />
            {lessons} Lessons
          </div>
        </div>

        <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          {price && <span className="font-bold text-primary">{price}</span>}
          <Link
            href={`/courses/${slug}`}
            className="text-accent text-sm font-bold flex items-center hover:translate-x-1 transition-transform"
          >
            Learn More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
