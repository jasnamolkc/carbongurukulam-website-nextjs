import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:text-accent transition-colors">
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-gray-300" />
          <Link
            href={item.href}
            className={`transition-colors hover:text-accent ${
              index === items.length - 1 ? "text-primary font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
