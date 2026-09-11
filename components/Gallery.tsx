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

/** Curated set — strongest time-trial + training frames + race clips */
const media = [
  {
    type: "video" as const,
    src: "/media/ClipSprint.mp4",
    thumbnail: "/media/tt/thumbs/TT-33-nll-5.webp",
    title: "Track sprint clip — T-Town",
    alt: "Short track sprint clip from Trexlertown",
  },
  {
    type: "video" as const,
    src: "/media/ClipTrack.mp4",
    thumbnail: "/media/tt/thumbs/TT-34-nll-50.webp",
    title: "Velodrome clip — T-Town",
    alt: "Short velodrome racing clip",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-33-nll-5.webp",
    thumbnail: "/media/tt/thumbs/TT-33-nll-5.webp",
    alt: "Ben Covi in aero tuck on the Valley Preferred velodrome",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-18-nll-27.webp",
    thumbnail: "/media/tt/thumbs/TT-18-nll-27.webp",
    alt: "Ben Covi in Giro aero helmet under the team tent",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-34-nll-50.webp",
    thumbnail: "/media/tt/thumbs/TT-34-nll-50.webp",
    alt: "Held at the start line before a time trial effort",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-graphic-banner.webp",
    thumbnail: "/media/tt/thumbs/TT-graphic-banner.webp",
    alt: "Ben Covi and coach with Dolan track bike between sessions",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-28-nll-45.webp",
    thumbnail: "/media/tt/thumbs/TT-28-nll-45.webp",
    alt: "Time trial day action at Trexlertown",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-23-nll-333.webp",
    thumbnail: "/media/tt/thumbs/TT-23-nll-333.webp",
    alt: "High-speed banking shot at Valley Preferred",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-21-nll-32.webp",
    thumbnail: "/media/tt/thumbs/TT-21-nll-32.webp",
    alt: "Track racing action on time trial day",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-24-nll-3333.webp",
    thumbnail: "/media/tt/thumbs/TT-24-nll-3333.webp",
    alt: "Velodrome banking action, time trial day",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-19-nll-30.webp",
    thumbnail: "/media/tt/thumbs/TT-19-nll-30.webp",
    alt: "Time trial day track action",
  },
  {
    type: "image" as const,
    src: "/media/tt/TT-32-nll-49.webp",
    thumbnail: "/media/tt/thumbs/TT-32-nll-49.webp",
    alt: "Competition moment on the track",
  },
  {
    type: "image" as const,
    src: "/media/Portrait.webp",
    alt: "Professional portrait of Ben Covi",
  },
  {
    type: "image" as const,
    src: "/media/Portrait2.webp",
    alt: "Portrait of Ben Covi",
  },
  {
    type: "image" as const,
    src: "/media/PoseWBike2.webp",
    alt: "Ben Covi posing with track bike",
  },
  {
    type: "image" as const,
    src: "/media/SittingPoseWBike.webp",
    alt: "Ben Covi seated with bike",
  },
  {
    type: "image" as const,
    src: "/media/SoloCloseup.webp",
    alt: "Close-up action shot",
  },
  {
    type: "image" as const,
    src: "/media/SoloAction4.webp",
    alt: "Training action on the bike",
  },
  {
    type: "image" as const,
    src: "/media/Race.webp",
    alt: "Race action shot",
  },
  {
    type: "image" as const,
    src: "/media/GroupRide.webp",
    alt: "Group training ride",
  },
  {
    type: "image" as const,
    src: "/media/GymDay.webp",
    alt: "Strength training gym day",
  },
  {
    type: "image" as const,
    src: "/media/SoloRun.webp",
    alt: "Sprint and run training",
  },
  {
    type: "image" as const,
    src: "/media/WaterDrink.webp",
    alt: "Recovery and hydration between efforts",
  },
  {
    type: "image" as const,
    src: "/media/Jumping.webp",
    alt: "Explosive training effort",
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
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <p
          className="text-center mb-12 max-w-2xl mx-auto opacity-80"
          style={{ color: "var(--color-text)" }}
        >
          Valley Preferred time trial day, training, and race moments.
        </p>
        {isVisible ? (
          <>
            <DynamicLightboxGallery media={paginatedMedia} />
            {totalPages > 1 && (
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
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
