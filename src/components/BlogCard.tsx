import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
  isAI?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  image,
  slug,
  category,
  isAI = false,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-56 w-full">
        <Image
            src={image || "/logo.png"}
            alt={title || "image"}
            fill
            className="object-cover"
          />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-fit">
            {category}
          </span>
          {isAI && (
            <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded flex items-center w-fit">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1 animate-pulse" />
              AI Insight
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-accent" />
            {date}
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1 text-accent" />
            {author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 hover:text-accent transition-colors">
          <Link href={`/news/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link
            href={`/news/${slug}`}
            className="text-primary text-sm font-bold flex items-center hover:text-accent transition-colors"
          >
            Read More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
