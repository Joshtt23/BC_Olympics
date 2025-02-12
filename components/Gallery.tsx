"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicLightboxGallery = dynamic(() => import("./LightboxGallery"), {
  ssr: false,
});

const media = [
  {
    type: "image" as const,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Training session",
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Competition highlights",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    type: "image" as const,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Medal ceremony",
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Interview",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    type: "image" as const,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team photo",
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Training montage",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 relative"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <DynamicLightboxGallery media={media} />
      </div>
    </section>
  );
}
