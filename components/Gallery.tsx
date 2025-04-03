"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DynamicLightboxGallery = dynamic(() => import("./LightboxGallery"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-gray-200 animate-pulse rounded-lg"
        />
      ))}
    </div>
  ),
});

const ITEMS_PER_PAGE = 12;

const media = [
  {
    type: "image" as const,
    src: "/media/Portrait.jpg",
    alt: "Professional portrait of Ben Covi",
  },
  {
    type: "image" as const,
    src: "/media/Portrait2.jpg",
    alt: "Another professional portrait",
  },
  {
    type: "image" as const,
    src: "/media/SoloCloseup.jpg",
    alt: "Close-up action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloCloseup2.jpg",
    alt: "Detailed close-up shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloHeadon.jpg",
    alt: "Head-on action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAirle.jpg",
    alt: "Aerial action shot",
  },
  {
    type: "image" as const,
    src: "/media/Sideshot.jpg",
    alt: "Side profile action shot",
  },
  {
    type: "image" as const,
    src: "/media/PoseWBike.jpg",
    alt: "Pose with bike",
  },
  {
    type: "image" as const,
    src: "/media/PoseWBike2.jpg",
    alt: "Another pose with bike",
  },
  {
    type: "image" as const,
    src: "/media/SittingPoseWBike.jpg",
    alt: "Sitting pose with bike",
  },
  {
    type: "image" as const,
    src: "/media/SittingPoseWBike2.jpg",
    alt: "Another sitting pose with bike",
  },
  {
    type: "image" as const,
    src: "/media/SittingPoseWBike3.jpg",
    alt: "Third sitting pose with bike",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction.jpg",
    alt: "Action shot on the track",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction2.jpg",
    alt: "Another action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction3.jpg",
    alt: "Dynamic action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction4.jpg",
    alt: "Competition action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction5.jpg",
    alt: "Training action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction6.jpg",
    alt: "Track action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction7.jpg",
    alt: "Racing action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction8.jpg",
    alt: "Competition moment",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction9.jpg",
    alt: "Training moment",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction10.jpg",
    alt: "Track moment",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction11.jpg",
    alt: "Racing moment",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction12.jpg",
    alt: "Competition highlight",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction13.jpg",
    alt: "Training highlight",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction14.jpg",
    alt: "Track highlight",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction15.jpg",
    alt: "Racing highlight",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction16.jpg",
    alt: "Competition achievement",
  },
  {
    type: "image" as const,
    src: "/media/Race.jpg",
    alt: "Race action shot",
  },
  {
    type: "image" as const,
    src: "/media/Race2.jpg",
    alt: "Another race moment",
  },
  {
    type: "image" as const,
    src: "/media/Race3.jpg",
    alt: "Race highlight",
  },
  {
    type: "image" as const,
    src: "/media/GroupRide.jpg",
    alt: "Group riding session",
  },
  {
    type: "image" as const,
    src: "/media/Jumping.jpg",
    alt: "Jumping action shot",
  },
  {
    type: "image" as const,
    src: "/media/WaterDrink.jpg",
    alt: "Hydration break",
  },
];

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const totalPages = Math.ceil(media.length / ITEMS_PER_PAGE);
  
  const paginatedMedia = media.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Intersection Observer to load gallery only when it's in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const galleryElement = document.getElementById("gallery");
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => observer.disconnect();
  }, []);

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
        {isVisible ? (
          <>
            <DynamicLightboxGallery media={paginatedMedia} />
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
