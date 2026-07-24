"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden mb-4 border border-gray-100"
          >
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  AI
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Carbon AI Assistant</h4>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white/70 text-[10px]">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 max-w-[85%]">
                Hello! I am your Carbon Gurukulam AI assistant. How can I help you today?
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Courses", "Admissions", "Fees", "Scholarships"].map((tag) => (
                  <button key={tag} className="text-[10px] bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-accent hover:text-accent transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow text-xs md:text-sm bg-gray-100 border-none rounded-full px-4 h-10 focus:ring-2 focus:ring-accent/50 outline-none placeholder:text-gray-400"
              />
              <button className="bg-primary text-white w-10 h-10 rounded-full hover:bg-primary-light transition-colors flex items-center justify-center shrink-0">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center relative group"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}

        <span className="absolute right-16 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-gray-100">
          Chat with Carbon AI
        </span>
      </motion.button>
    </div>
  );
}
