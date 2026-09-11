"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "R2Qky0WgjVI",
    title: "4 Match Sprints, 4 Wins — What I Learned at T-Town",
  },
  {
    id: "h0dEWzpL52c",
    title: "Full Gas at TTown! Saturday Masters & Rookies Racing",
  },
  {
    id: "lUFh-K1srm0",
    title: "2 Wins at TTown — Men’s Novice Race Recap",
  },
  {
    id: "bU9VzyUghCo",
    title: "From Training Alone to Racing at Trexlertown",
  },
  {
    id: "CTTdeTE0T-g",
    title: "Every Lift Counts | Track Cyclist Gym Day",
  },
  {
    id: "OxstLuL_kD4",
    title: "Chasing the Olympic Dream: The Journey Begins",
  },
];

export default function YouTubeVideos() {
  return (
    <section
      id="videos"
      className="py-16 sm:py-20 relative"
      style={{ backgroundColor: "var(--color-background-alt)" }}
      aria-labelledby="videos-heading"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="videos-heading"
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Videos
        </motion.h2>
        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto opacity-80"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Race recaps and training days from the track — watch on{" "}
          <a
            href="https://www.youtube.com/@ChasingGoldWithBen"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-secondary"
          >
            @ChasingGoldWithBen
          </a>
          .
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              className="overflow-hidden rounded-lg shadow-md bg-black"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <h3
                className="p-4 text-sm font-medium leading-snug"
                style={{
                  color: "var(--color-text)",
                  backgroundColor: "var(--color-background)",
                }}
              >
                {video.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
