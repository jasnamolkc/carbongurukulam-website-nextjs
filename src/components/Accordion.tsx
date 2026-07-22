"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  isAI?: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, isAI, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-primary">{title}</span>
          {isAI && (
            <span className="bg-accent/10 text-accent text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border border-accent/20">
              AI Answer
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "text-accent transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 text-sm leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: string; isAI?: boolean }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isAI={item.isAI}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
