"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const timelineEvents = [
  {
    year: "Birth",
    event: "Adopted in Poughkeepsie, NY",
    details: "Began life's journey with adoptive parents in Woodstock, NY.",
    image: "/media/Dad_Son.jpeg",
    achievements: ["Started a new chapter with a loving family"],
  },
  {
    year: "Childhood",
    event: "Discovered passion for cycling",
    details:
      "Spent hours cycling at grandparents' house and on home stationary bike.",
    image: "/media/ChildPose.jpeg",
    achievements: [
      "Developed early love for cycling",
      "Built endurance through consistent practice",
    ],
  },
  {
    year: "High School",
    event: "Played football and basketball",
    details:
      "Joined cross-town football team when home school's program was discontinued.",
    image: "/media/HSSolo.jpg",
    achievements: [
      "Adapted to new team environment",
      "Developed teamwork and perseverance",
    ],
  },
  {
    year: "College",
    event: "Attended Hudson Valley Community College",
    details:
      "Earned A.S. in Exercise Science while playing football for two seasons.",
    image: "/media/HVGame7.jpg",
    achievements: [
      "A.S. in Exercise Science",
      "Two seasons of college football",
    ],
  },
  {
    year: "Post-College",
    event: "Obtained professional certifications",
    details:
      "Became certified personal trainer and assistant coach for Rock Steady Boxing.",
    image: "/media/placeholder.svg",
    achievements: [
      "ACSM Personal Trainer Certification",
      "Rock Steady Boxing Assistant Coach Certificate",
    ],
  },
  {
    year: "2018-Present",
    event: "Intense Olympic training begins",
    details: "Committed to rigorous daily workouts and strict diet regimen.",
    image: "/media/WaterDrink.jpg",
    achievements: [
      "1,880 consecutive days of workouts",
      "4,871.37 hours of training",
      "Maintained consistent diet for 1,880 days",
    ],
  },
  {
    year: "2028",
    event: "Olympic Goal",
    details: "Aiming to qualify for the 2028 Olympic Games.",
    image: "/media/SittingPoseWBike.jpg",
    achievements: ["Working towards Olympic qualification"],
  },
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY JOURNEY
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-light" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-5/12" />
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <motion.div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="bg-background-alt p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() =>
                    setSelectedEvent(selectedEvent === index ? null : index)
                  }
                >
                  <h3 className="text-2xl font-bold mb-2 font-heading text-secondary">
                    {event.year}
                  </h3>
                  <p className="text-text font-sans">{event.event}</p>
                  <AnimatePresence>
                    {selectedEvent === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="mt-2 text-sm text-text-muted">
                          {event.details}
                        </p>
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.event}
                          width={400}
                          height={300}
                          className="mt-4 rounded-md"
                        />
                        <h4 className="mt-4 font-bold text-primary">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside mt-2">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-text-muted">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    className="mt-2 text-primary hover:text-secondary transition-colors"
                    aria-label={
                      selectedEvent === index ? "Hide details" : "Show details"
                    }
                  >
                    {selectedEvent === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
