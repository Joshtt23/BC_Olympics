"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ben's dedication and work ethic are unparalleled. He's not just chasing his dreams; he's inspiring a whole generation of cyclists.",
    author: "Sarah Johnson",
    title: "Olympic Cycling Coach",
  },
  {
    quote:
      "I've seen many athletes, but Ben's combination of raw talent and unwavering determination sets him apart. He's got what it takes to go all the way.",
    author: "Michael Chen",
    title: "Sports Physiologist",
  },
  {
    quote:
      "Training alongside Ben has pushed me to new limits. His passion for the sport is contagious, and his support for his teammates is unwavering.",
    author: "Emma Rodriguez",
    title: "Fellow Cyclist and Olympian",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary">
          WHAT OTHERS SAY
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-12 md:px-20"
            >
              <p className="text-xl md:text-2xl mb-6 font-sans italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="text-lg font-semibold font-heading">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-md text-text-muted mb-12">
                {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
