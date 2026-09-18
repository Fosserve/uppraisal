"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import { Sparkles, ZoomIn, X, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery Items with categories and descriptions
const galleryItems = [
  {
    id: 1,
    src: "/team/about-team.jpg",
    title: "Leadership & Strategy Forum",
    category: "Events",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    src: "/team/img1.jpg",
    title: "Director Consultation",
    category: "Leadership",
    aspect: "aspect-square",
  },
  {
    id: 3,
    src: "/team/image2.jpg",
    title: "HR Head Session",
    category: "Leadership",
    aspect: "aspect-square",
  },
  {
    id: 4,
    src: "/team/img2.jpg",
    title: "Team Collaborative Workshop",
    category: "Workplace",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    src: "/team/img3.jpg",
    title: "Candidate Debrief Session",
    category: "Workplace",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    src: "/team/img4.jpg",
    title: "Corporate Milestone Celebration",
    category: "Events",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    src: "/team/img5.jpg",
    title: "Annual Team Meet",
    category: "Events",
    aspect: "aspect-square",
  },
  {
    id: 8,
    src: "/team/img6.jpg",
    title: "Office Discussion & Review",
    category: "Workplace",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    src: "/team/img7.jpg",
    title: "Talent Acquisition Desk",
    category: "Workplace",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    src: "/team/img8.jpg",
    title: "Festive Office Gathering",
    category: "Events",
    aspect: "aspect-square",
  },
  {
    id: 11,
    src: "/team/img9.jpg",
    title: "Corporate Training Presentation",
    category: "Workplace",
    aspect: "aspect-[4/3]",
  },
  {
    id: 12,
    src: "/team/img10.jpg",
    title: "Staff Recognition & Honors",
    category: "Events",
    aspect: "aspect-[4/3]",
  },
];

const categories = ["All", "Workplace", "Events", "Leadership"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="bg-[#fbfaf6] min-h-screen">
      <Header />

      <main className="isolate">
        {/* Gallery Hero Banner */}
        <section className="relative overflow-hidden py-16 sm:py-24 text-center">
          <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-5">
                <Camera className="h-3.5 w-3.5 text-blue-600" />
                <span>Life at Uppraisal</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Our Culture &amp;{" "}
                <span className="gradient-text">Moments in Focus.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
                A visual journey through our collaborative workplace, team celebrations, training sessions, and executive milestones across India.
              </p>

              {/* Category Filter Pills */}
              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openLightbox(index)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className={`relative w-full ${item.aspect} min-h-[240px]`}>
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-5 text-white">
                        <div className="flex justify-end">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                            <ZoomIn className="h-4 w-4" />
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                            {item.category}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close modal"
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left/Right Navigation */}
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-white border border-white/20 hover:bg-blue-600 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-white border border-white/20 hover:bg-blue-600 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={filteredItems[activeImageIndex].src}
                    alt={filteredItems[activeImageIndex].title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 text-center text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {filteredItems[activeImageIndex].category}
                  </span>
                  <h4 className="text-lg font-bold mt-1">
                    {filteredItems[activeImageIndex].title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Image {activeImageIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
