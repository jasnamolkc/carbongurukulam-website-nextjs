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
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 text-center p-6 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-50 group-hover:border-accent transition-colors">
        <Image
        src={image || "/logo.png"}
        alt={name || "image"}
        fill
        className="object-cover"
      />
      </div>
      <h3 className="text-lg font-bold text-primary mb-1">{name}</h3>
      <p className="text-accent text-sm font-semibold mb-2">{role}</p>
      <p className="text-gray-500 text-xs">{qualification}</p>
    </motion.div>
  );
}
