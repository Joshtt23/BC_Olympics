"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <Image
        src="/media/Photo Feb 04 2025, 8 29 38 PM.jpg"
        alt="Ben Covi cycling training"
        fill
        sizes="100vw"
        quality={100}
        className="opacity-30 object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Video Container */}
        <motion.div
          className="w-full max-w-[340px] md:w-1/2 aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl mb-8 md:mb-0 md:mr-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/media/Video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left text-white md:w-1/2">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-heading tracking-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            BEN COVI
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 font-sans font-light tracking-wide"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Pedaling Towards 2028 Olympic Glory
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#bio"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold bg-secondary text-white hover:bg-opacity-90 transition-colors font-heading uppercase tracking-wider"
            >
              My Journey
            </a>
            <a
              href="#donations"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-heading uppercase tracking-wider"
            >
              Support Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a href="#bio" className="text-white">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
