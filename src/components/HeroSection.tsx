import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  className,
  compact = false,
}: HeroSectionProps) {
  return (
    <div className={cn(
      "relative bg-primary overflow-hidden flex items-center",
      compact ? "py-20 md:py-32" : "min-h-[70vh] md:min-h-[80vh] py-32",
      className
    )}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#D4AF37_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#D4AF37_0%,transparent_50%)]" />
      </div>

      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="container-custom relative z-10 text-center lg:text-left">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "font-bold text-white leading-tight mb-6",
              compact ? "text-4xl md:text-5xl" : "text-4xl md:text-6xl lg:text-7xl"
            )}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
