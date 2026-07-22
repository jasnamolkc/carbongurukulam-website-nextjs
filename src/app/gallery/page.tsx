"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";
import { Maximize2, X, Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1541339907198-e08759df9a04?auto=format&fit=crop&q=80&w=800", title: "Inauguration Day", category: "Events" },
  { id: 2, src: "https://images.unsplash.com/photo-1523050353066-1034d07e52b4?auto=format&fit=crop&q=80&w=800", title: "Main Study Library", category: "Campus" },
  { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", title: "JEE Physics Masterclass", category: "Academics" },
  { id: 4, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", title: "Group Doubt Chambers", category: "Academics" },
  { id: 5, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", title: "Science Experiment Lab", category: "Workshops" },
  { id: 6, src: "https://images.unsplash.com/photo-1523240715632-d984bb4b9156?auto=format&fit=crop&q=80&w=800", title: "Rank Holders felicitation", category: "Events" },
  { id: 7, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "Main Lecture Hall", category: "Campus" },
  { id: 8, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", title: "Self Study Cabins", category: "Campus" },
];

const galleryVideos = [
  {
    id: 101,
    src: "https://assets.mixkit.co/videos/preview/mixkit-keyboard-of-a-laptop-42171-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1523050353066-1034d07e52b4?auto=format&fit=crop&q=80&w=800",
    title: "Carbon Gurukulam Campus Walkthrough",
    category: "Campus Life"
  },
  {
    id: 102,
    src: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-43400-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    title: "A Day in the Life of a NEET Aspirant",
    category: "Student Life"
  },
  {
    id: 103,
    src: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-pencil-writing-on-a-paper-43204-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    title: "Kota Method Doubt Chambers in Action",
    category: "Academics"
  }
];

const photoCategories = ["All", "Campus", "Events", "Workshops", "Academics"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{ id: number; src: string; title: string; category: string; isVideo?: boolean } | null>(null);

  const filteredImages = galleryImages.filter(img =>
    selectedPhotoCategory === "All" || img.category === selectedPhotoCategory
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection
        title="Visualizing Our Excellence"
        subtitle="A glimpse into the life, facilities, and achievements at Carbon Gurukulam."
        compact
      />

      <SectionWrapper>
        <SectionHeader
          title="Moments & Highlights"
          subtitle="Explore images and video logs capturing study environments, campus, and student success."
          badge="Gallery"
        />

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-neutral-light p-1.5 rounded-xl flex items-center space-x-2 border border-gray-150 shadow-sm">
            <button
              onClick={() => { setActiveTab("photos"); setSelectedItem(null); }}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center transition-all ${
                activeTab === "photos"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <ImageIcon size={16} className="mr-2" /> Photos
            </button>
            <button
              onClick={() => { setActiveTab("videos"); setSelectedItem(null); }}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center transition-all ${
                activeTab === "videos"
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <VideoIcon size={16} className="mr-2" /> Videos
            </button>
          </div>
        </div>

        {/* Photos Tab Content */}
        {activeTab === "photos" && (
          <>
            {/* Category Filter */}
            <div className="flex justify-center items-center space-x-2 overflow-x-auto mb-12 pb-2 scrollbar-hide">
              {photoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPhotoCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedPhotoCategory === cat
                      ? "bg-accent text-primary shadow-md"
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
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md break-inside-avoid border border-gray-100"
                    onClick={() => setSelectedItem({ ...image, isVideo: false })}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                      <Maximize2 size={28} className="text-accent mb-3" />
                      <h4 className="text-white font-bold text-lg">{image.title}</h4>
                      <p className="text-gray-300 text-sm">{image.category}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        {/* Videos Tab Content */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedItem({ ...video, isVideo: true })}
              >
                <div className="relative aspect-video w-full overflow-hidden flex items-center justify-center bg-black">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                  <div className="relative z-10 w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110">
                    <Play size={24} className="ml-1 fill-current" />
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{video.category}</span>
                  <h4 className="font-bold text-primary text-lg leading-snug group-hover:text-accent transition-colors">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-[2px]">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white hover:text-accent p-2 z-[110]"
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              {selectedItem.isVideo ? (
                <video
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-accent text-sm font-semibold">{selectedItem.category}</p>
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
