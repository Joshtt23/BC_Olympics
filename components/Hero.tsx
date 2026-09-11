"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      const v = videoRef.current;
      if (!v) return;
      if (mq.matches) {
        v.pause();
      } else {
        void v.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-gray-950"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/media/tt/TT-33-nll-5.webp"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-[center_35%]"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" aria-hidden />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-28 pb-20 sm:py-24 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <motion.div
          className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[340px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/25 shrink-0"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            autoPlay={!reduceMotion}
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            aria-label="Ben Covi training highlight clip"
          >
            <source src="/media/Video.mp4" type="video/mp4" />
            <source src="/media/Video.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className="text-center md:text-left text-white md:flex-1 max-w-xl">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] sm:tracking-[0.35em] text-white/80 mb-3 sm:mb-4 font-sans">
            Track sprint · Trexlertown
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-5 font-heading tracking-tight drop-shadow-lg text-white"
          >
            BEN COVI
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 font-sans font-light tracking-wide text-white/90">
            Pedaling toward 2028 Olympic glory — one match sprint at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
            <a
              href="#videos"
              className="w-full sm:w-auto text-center px-7 py-3 rounded-full text-base sm:text-lg font-semibold bg-secondary text-white hover:bg-opacity-90 transition-colors font-heading uppercase tracking-wider focus-visible:outline-offset-4"
            >
              Watch Races
            </a>
            <a
              href="#donations"
              className="w-full sm:w-auto text-center px-7 py-3 rounded-full text-base sm:text-lg font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-primary transition-colors font-heading uppercase tracking-wider focus-visible:outline-offset-4"
            >
              Support the Journey
            </a>
          </div>
        </div>
      </div>

      <a
        href="#bio"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white p-2"
        aria-label="Scroll to story"
      >
        <svg
          className="w-7 h-7 motion-safe:animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
