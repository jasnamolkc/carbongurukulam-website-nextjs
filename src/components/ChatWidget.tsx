"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, RotateCcw, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  time: string;
  actionLink?: { text: string; href: string };
  suggestions?: string[];
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Welcome to Carbon Gurukulam! 👋 I am your AI academic advisor. How can I assist you with NEET/JEE coaching, admissions, or hostel facilities today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestions: ["Courses Available", "Admissions & C-SET", "Hostel & Facilities", "Scholarships"]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateAIResponse = (userText: string) => {
    const query = userText.toLowerCase();
    let text = "";
    let actionLink: { text: string; href: string } | undefined;
    let suggestions: string[] = [];

    if (query.includes("course") || query.includes("program") || query.includes("neet") || query.includes("jee") || query.includes("keam")) {
      text = "Carbon Gurukulam offers specialized residential programs:\n\n• NEET/JEE Repeaters Batch (1 Year Intensive)\n• Long Term Integrated (Class 11-12)\n• Kerala Engineering (KEAM)\n• Foundation Batch (Class 8-10)\n• NEET & JEE Crash Courses";
      actionLink = { text: "View All Courses", href: "/courses" };
      suggestions = ["Admissions & C-SET", "Hostel & Facilities", "Scholarships"];
    } else if (query.includes("admission") || query.includes("apply") || query.includes("join") || query.includes("register") || query.includes("c-set") || query.includes("cset")) {
      text = "Admissions for 2026-2027 batches are currently OPEN! You can register online or take the Carbon Scholarship Entrance Test (C-SET) to qualify for merit scholarships.";
      actionLink = { text: "Apply Online Now", href: "/contact" };
      suggestions = ["Scholarship Details", "Hostel Facilities", "Contact Academic Mentor"];
    } else if (query.includes("fee") || query.includes("scholarship") || query.includes("cost") || query.includes("discount")) {
      text = "We offer up to 100% merit-based scholarships on tuition and hostel fees for top rankers in our C-SET entrance exam! Detailed fee structure is shared after academic profiling.";
      actionLink = { text: "Learn About Admissions", href: "/admissions" };
      suggestions = ["Admissions & C-SET", "Contact Mentors"];
    } else if (query.includes("hostel") || query.includes("residential") || query.includes("facility") || query.includes("food") || query.includes("campus")) {
      text = "Our Calicut residential campus features 24/7 mentorship, Kota-method doubt clearing chambers, structured study hours (6:30 AM - 10:00 PM), and nutritious meals in a distraction-free learning ecosystem.";
      actionLink = { text: "Explore Campus Gallery", href: "/gallery" };
      suggestions = ["Our Faculty", "Admissions & C-SET"];
    } else if (query.includes("faculty") || query.includes("teacher") || query.includes("mentor") || query.includes("kota")) {
      text = "Our faculty team includes experienced ex-Kota senior lecturers, IITians, and AIIMS resident researchers specialized in high-volume problem solving and NCERT mastery.";
      actionLink = { text: "Meet Our Faculty", href: "/faculty" };
      suggestions = ["Courses Available", "Admissions & C-SET"];
    } else if (query.includes("contact") || query.includes("phone") || query.includes("location") || query.includes("address") || query.includes("call") || query.includes("email")) {
      text = "You can reach out to our admissions team directly:\n\n📍 Location: Carbon Gurukulam Campus, Kozhikode, Kerala\n📞 Phone: +91 97782 17821\n✉️ Email: info@carbongurukulam.com";
      actionLink = { text: "Contact Us Page", href: "/contact" };
      suggestions = ["Courses Available", "Admissions & C-SET"];
    } else {
      text = "Thank you for asking! Carbon Gurukulam is Kerala's premier NEET & JEE residential coaching institute in Calicut, combining Kota curriculum discipline with 24/7 mentoring. How else can I assist you?";
      actionLink = { text: "Explore All Programs", href: "/courses" };
      suggestions = ["Courses Available", "Admissions & C-SET", "Hostel & Facilities", "Contact Mentors"];
    }

    return { text, actionLink, suggestions };
  };

  const handleSend = (textToSend?: string) => {
    const messageText = textToSend || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseData = generateAIResponse(messageText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseData.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionLink: responseData.actionLink,
        suggestions: responseData.suggestions
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "Chat reset. How can I help you today with Carbon Gurukulam coaching?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestions: ["Courses Available", "Admissions & C-SET", "Hostel & Facilities", "Scholarships"]
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden mb-4 border border-gray-100 flex flex-col h-[520px]"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-primary font-bold shadow-sm">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center">
                    Carbon AI Assistant <Sparkles size={14} className="ml-1 text-accent" />
                  </h4>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-white/70 text-[11px]">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={handleReset}
                  title="Reset Conversation"
                  className="text-white/70 hover:text-white p-1 rounded-lg transition-colors"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-1 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4 text-xs md:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                    }`}
                  >
                    {msg.text}
                    {msg.actionLink && (
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        {msg.actionLink.href.startsWith("http") ? (
                          <a
                            href={msg.actionLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-accent hover:underline"
                          >
                            {msg.actionLink.text} <ExternalLink size={12} className="ml-1" />
                          </a>
                        ) : (
                          <Link
                            href={msg.actionLink.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center text-xs font-bold text-accent hover:underline"
                          >
                            {msg.actionLink.text} <ExternalLink size={12} className="ml-1" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>

                  {/* Suggestion Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                      {msg.suggestions.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(chip)}
                          className="text-[11px] bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full hover:border-accent hover:text-primary transition-all shadow-xs cursor-pointer"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 w-fit">
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Carbon AI..."
                className="flex-grow text-xs md:text-sm bg-gray-100 border-none rounded-full px-4 h-10 focus:ring-2 focus:ring-accent/50 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-primary text-white w-10 h-10 rounded-full hover:bg-primary-light transition-colors flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center relative group cursor-pointer"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}

        <span className="absolute right-16 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-gray-100">
          Chat with Carbon AI
        </span>
      </motion.button>
    </div>
  );
}
