import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-8 md:mb-10 space-y-3",
      centered ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {badge && (
        <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      {centered && <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />}
      {!centered && <div className="w-16 h-1 bg-accent rounded-full mt-4" />}
    </div>
  );
}
