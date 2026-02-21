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
      "mb-12 space-y-4",
      centered ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {badge && (
        <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-accent/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      {centered && <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-6" />}
      {!centered && <div className="w-20 h-1.5 bg-accent rounded-full mt-6" />}
    </div>
  );
}
