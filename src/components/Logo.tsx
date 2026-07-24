import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  showTagline?: boolean;
  variant?: "light" | "dark" | "olive" | "wood" | "inherit";
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({
  variant = "inherit",
  className,
}: LogoProps) {
  return (
    <div className={cn("flex items-center select-none", className)}>
      <Image
        src="/logo.png"
        alt="Carbon Gurukulam Logo"
        width={200}
        height={60}
        priority
        className={cn(
          "h-10 md:h-12 w-auto object-contain transition-all duration-300",
          variant === "dark" ? "brightness-0 invert opacity-95" : ""
        )}
      />
    </div>
  );
}
