"use client";
import { motion } from "framer-motion";

export default function Donations() {
  return (
    <section id="donations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support My Olympic Journey
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-8 text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your contribution can help me reach my Olympic dreams. Every donation
          makes a difference!
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="https://buymeacoffee.com/" // Replace with actual donation link
            className="px-8 py-3 rounded-full text-lg font-semibold bg-secondary text-text-light hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
