import Image from "next/image";
import { motion } from "framer-motion";

interface FacultyCardProps {
  name: string;
  role: string;
  qualification: string;
  image: string;
  onClick?: () => void;
}

export default function FacultyCard({
  name,
  role,
  qualification,
  image,
  onClick,
}: FacultyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 text-center p-6 flex flex-col justify-between items-center h-full group cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-accent transition-colors shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-base md:text-lg font-bold text-primary mb-1">{name}</h3>
        <p className="text-accent text-xs md:text-sm font-semibold mb-2 line-clamp-1">{role}</p>
      </div>
      <p className="text-gray-500 text-xs mt-auto pt-2 line-clamp-2">{qualification}</p>
    </motion.div>
  );
}
