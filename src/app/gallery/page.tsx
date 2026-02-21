"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1541339907198-e08759df9a04?auto=format&fit=crop&q=80&w=800", title: "Graduation Day", category: "Events" },
  { id: 2, src: "https://images.unsplash.com/photo-1523050353066-1034d07e52b4?auto=format&fit=crop&q=80&w=800", title: "Main Library", category: "Campus" },
  { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", title: "AI Workshop", category: "Workshops" },
  { id: 4, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", title: "Student Collaboration", category: "Academics" },
  { id: 5, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", title: "Robotics Lab", category: "Workshops" },
  { id: 6, src: "https://images.unsplash.com/photo-1523240715632-d984bb4b9156?auto=format&fit=crop&q=80&w=800", title: "Tech Symposium", category: "Events" },
  { id: 7, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "Lecture Hall", category: "Campus" },
  { id: 8, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", title: "Research Facility", category: "Academics" },
];

const categories = ["All", "Campus", "Events", "Workshops", "Academics"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = galleryImages.filter(img =>
    selectedCategory === "All" || img.category === selectedCategory
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Visualizing Our Excellence"
        subtitle="A glimpse into the life and achievements at Carbon Gurukulam."
        compact
      />

      <SectionWrapper>
        <SectionHeader
          title="Moments at Carbon Gurukulam"
          subtitle="Capturing the essence of innovation, learning, and community."
          badge="Gallery"
        />

        {/* Category Filter */}
        <div className="flex justify-center items-center space-x-2 overflow-x-auto mb-12 pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md break-inside-avoid"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                  <Maximize2 size={32} className="text-accent mb-3" />
                  <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-accent p-2 z-[110]"
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <ChatWidget />
    </main>
  );
}
