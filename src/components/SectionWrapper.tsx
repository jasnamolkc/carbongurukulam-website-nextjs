import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export default function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className={cn("container-custom", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
