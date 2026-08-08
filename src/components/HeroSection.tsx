"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  videoSrc?: string;
  videoFallbackSrc?: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  videoSrc,
  videoFallbackSrc,
  children,
  className,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-primary text-white",
        compact
          ? "py-10 md:py-14"
          : "min-h-[60vh] md:min-h-[70vh] py-14 md:py-20",
        className
      )}
    >
      {/* Background Video */}
      {videoSrc ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            {videoFallbackSrc && <source src={videoFallbackSrc} type="video/mp4" />}
            <source src="/hero4.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        /* Background Image */
        backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )
      )}

      {/* 🔥 Stronger Dark Overlay (Improves Heading Visibility) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5128]/95 via-[#1E3B1B]/90 to-[#122410]/85 backdrop-blur-[2px]" />

      {/* 🔥 Softer Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
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
              "font-extrabold leading-tight tracking-tight mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]",
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

          {/* Buttons / Children */}
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

