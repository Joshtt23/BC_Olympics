"use client";
import { useState, useEffect, useCallback, useRef } from "react";
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
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const openLightbox = (index: number) => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    previouslyFocused.current?.focus?.();
  }, []);

  const nextItem = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  }, [media.length]);

  const prevItem = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  }, [media.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, nextItem, prevItem]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const nextIndex = (currentIndex + 1) % media.length;
    const prevIndex = (currentIndex - 1 + media.length) % media.length;
    [media[nextIndex], media[prevIndex]].forEach((item) => {
      if (item?.type === "image") {
        const img = new window.Image();
        img.src = item.src;
      }
    });
  }, [currentIndex, lightboxOpen, media]);

  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 list-none p-0 m-0">
        {media.map((item, index) => (
          <li key={`${item.src}-${index}`}>
            <button
              type="button"
              className="aspect-square relative overflow-hidden rounded-lg w-full group focus-visible:outline-offset-2"
              onClick={() => openLightbox(index)}
              aria-label={`View ${item.alt || item.title || `photo ${index + 1}`}`}
            >
              <Image
                src={item.thumbnail || item.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                loading="lazy"
                quality={75}
              />
              {item.type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 text-white" aria-hidden />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={
              media[currentIndex].alt ||
              media[currentIndex].title ||
              "Image lightbox"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} aria-hidden />
            </button>
            <button
              type="button"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} aria-hidden />
            </button>
            <button
              type="button"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={28} aria-hidden />
            </button>
            <div
              className="w-full max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {media[currentIndex].type === "image" ? (
                <Image
                  src={media[currentIndex].src}
                  alt={media[currentIndex].alt || ""}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  priority
                  quality={90}
                />
              ) : (
                <Video
                  src={media[currentIndex].src}
                  title={media[currentIndex].title || ""}
                />
              )}
              <p className="sr-only" aria-live="polite">
                Image {currentIndex + 1} of {media.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
