import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <SectionWrapper className="bg-gradient-to-br from-[#2D5128] via-[#21421C] to-[#182E15] text-white text-center shadow-xl">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="text-gray-300 text-lg">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href={buttonHref} className="btn-accent w-full sm:w-auto text-center">
            {buttonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="border-2 border-white/20 hover:border-white text-white px-6 py-3 rounded-md font-semibold transition-all w-full sm:w-auto text-center"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
