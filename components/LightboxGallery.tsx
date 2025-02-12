"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Video from "./Video";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
  thumbnail?: string;
}

interface LightboxGalleryProps {
  media: MediaItem[];
}

export default function LightboxGallery({ media }: LightboxGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={item.thumbnail || item.src || "/placeholder.svg"}
              alt={item.alt || ""}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Play className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={prevItem}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              onClick={nextItem}
            >
              <ChevronRight size={24} />
            </button>
            <div className="w-full max-w-4xl max-h-[80vh] relative">
              {media[currentIndex].type === "image" ? (
                <Image
                  src={media[currentIndex].src || "/placeholder.svg"}
                  alt={media[currentIndex].alt || ""}
                  layout="responsive"
                  width={16}
                  height={9}
                  objectFit="contain"
                />
              ) : (
                <Video
                  src={media[currentIndex].src}
                  title={media[currentIndex].title || ""}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
