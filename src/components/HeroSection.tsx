"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  children,
  className,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-primary text-white",
        compact
          ? "py-24 md:py-36"
          : "min-h-[85vh] md:min-h-[95vh] py-32",
        className
      )}
    >

      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Background Image (fallback) */}
      {!backgroundVideo && backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "font-extrabold leading-tight tracking-tight mb-6 text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)]",
              compact
                ? "text-4xl md:text-5xl"
                : "text-4xl md:text-6xl lg:text-7xl"
            )}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100 leading-relaxed mb-10 max-w-2xl drop-shadow-md"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Buttons */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {children}
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}