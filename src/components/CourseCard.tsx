import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  category: string;
  duration: string;
  image: string;
  slug: string;
}

export default function CourseCard({
  title,
  category,
  duration,
  image,
  slug,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col h-full transition-all duration-300 group"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="flex items-center space-x-4 mb-2.5 text-xs text-gray-500 font-medium">
            <div className="flex items-center">
              <Clock size={14} className="mr-1.5 text-accent shrink-0" />
              {duration} Program
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-primary line-clamp-2 min-h-[3rem] md:min-h-[3.5rem] flex items-center group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <Link
            href={`/courses/${slug}`}
            className="text-accent text-xs md:text-sm font-bold flex items-center hover:translate-x-1 transition-transform ml-auto"
          >
            Learn More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
