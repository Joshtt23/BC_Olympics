"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  getConsecutiveDays,
  getTrainingHours,
} from "../utils/dateCalculations";

const timelineEvents = [
  {
    year: "Birth",
    event: "Adopted in Poughkeepsie, NY",
    details: "Began life's journey with adoptive parents in Woodstock, NY.",
    image: "/media/Dad_Son.webp",
    achievements: ["Started a new chapter with a loving family"],
  },
  {
    year: "Childhood",
    event: "Athletic Foundation & Family Influence",
    details:
      "Inspired by father's remarkable athletic achievements, including a 28-1 high school football record and recruitment to Princeton University. These early lessons in dedication and excellence laid the foundation for my own athletic journey.",
    image: "/media/ChildPose.webp",
    achievements: [
      "Developed early love for cycling",
      "Built endurance through consistent practice",
      "Learned valuable lessons in dedication and discipline from father's athletic success",
      "Inherited a strong work ethic and commitment to excellence",
    ],
  },
  {
    year: "High School",
    event: "Played football and basketball",
    details:
      "Joined cross-town football team when home school's program was discontinued.",
    image: "/media/HSSolo.webp",
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
    image: "/media/HVGame7.webp",
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
    image: "/media/Portrait.webp",
    achievements: [
      "ACSM Personal Trainer Certification",
      "Rock Steady Boxing Assistant Coach Certificate",
    ],
  },
  {
    year: "2018–Present",
    event: "Daily training streak begins",
    details:
      "Committed to rigorous daily workouts and a strict diet regimen — training every day without missing a session.",
    image: "/media/WaterDrink.webp",
    achievements: [
      `${getConsecutiveDays()} consecutive days of workouts`,
      `${getTrainingHours()} hours of training`,
      "Consistent nutrition protocol year-round",
    ],
  },
  {
    year: "2025",
    event: "First races at Trexlertown",
    details:
      "Moved from solo training into competition at Valley Preferred Cycling Center (T-Town), learning race craft on the boards.",
    image: "/media/tt/TT-34-nll-50.webp",
    achievements: [
      "First track race starts at Trexlertown",
      "Documented the jump from training alone to racing",
    ],
  },
  {
    year: "2026",
    event: "T-Town breakthrough season",
    details:
      "Racing Saturday Masters + Rookies at Valley Preferred for Edge Cycling (bib 416) — wins in points race, scratch, and miss-and-out, plus multiple podiums across the spring and summer.",
    image: "/media/tt/TT-33-nll-5.webp",
    achievements: [
      "3 wins — Men’s Novice at Valley Preferred",
      "9 podium finishes across May–August 2026",
      "Flying Mile silver · consistent top-4 in points & elimination",
    ],
  },
  {
    year: "Near term",
    event: "Nationals & UCI Olympic qualifiers",
    details:
      "The next milestones are U.S. nationals and UCI Olympic-qualifying races — proving race craft against the field that feeds the next Games cycle.",
    image: "/media/tt/TT-34-nll-50.webp",
    achievements: [
      "Chase national championship starts",
      "Target UCI Olympic-qualifying race invitations",
      "Keep stacking T-Town and domestic results",
    ],
  },
  {
    year: "2032",
    event: "Olympic goal — Brisbane",
    details:
      "Building toward the 2032 Olympic Games. The U.S. men’s track sprint drought since Sydney 2000 is still the long-game motivation — this cycle is about earning the starts that put Brisbane in reach.",
    image: "/media/SittingPoseWBike.webp",
    achievements: [
      "Nationals → UCI qualifiers → Olympic selection path",
      "Help end the U.S. drought in men’s Olympic track sprint",
    ],
  },
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section id="journey" className="py-16 sm:py-20 bg-background" aria-labelledby="journey-heading">
      <div className="container mx-auto px-4">
        <motion.h2
          id="journey-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY JOURNEY
        </motion.h2>

        {/* Mobile: single-column timeline */}
        <ol className="md:hidden relative border-l-2 border-primary-light ml-3 space-y-6 list-none">
          {timelineEvents.map((event, index) => {
            const open = selectedEvent === index;
            return (
              <li key={`m-${event.year}-${event.event}`} className="pl-6 relative">
                <span
                  className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary"
                  aria-hidden
                />
                <button
                  type="button"
                  className="w-full text-left bg-background-alt p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedEvent(open ? null : index)}
                  aria-expanded={open}
                >
                  <h3 className="text-xl font-bold font-heading text-secondary">
                    {event.year}
                  </h3>
                  <p className="text-text font-sans text-sm sm:text-base">
                    {event.event}
                  </p>
                  <span className="inline-flex mt-2 text-primary" aria-hidden>
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 bg-background-alt p-4 rounded-lg">
                        <p className="text-sm text-text-muted">{event.details}</p>
                        <div className="relative mt-4 w-full aspect-[4/3] overflow-hidden rounded-md">
                          <Image
                            src={event.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, 40vw"
                          />
                        </div>
                        <h4 className="mt-4 font-bold text-primary text-sm">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-text-muted">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        {/* Desktop: alternating timeline */}
        <div className="hidden md:block relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary-light"
            aria-hidden
          />
          <ol className="list-none p-0 m-0">
            {timelineEvents.map((event, index) => {
              const open = selectedEvent === index;
              const reverse = index % 2 === 0;
              return (
                <motion.li
                  key={`d-${event.year}-${event.event}`}
                  className={`mb-8 flex justify-between items-center w-full ${
                    reverse ? "flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="w-5/12" aria-hidden />
                  <div className="w-2/12 flex justify-center" aria-hidden>
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                  <div className={`w-5/12 ${reverse ? "text-right" : "text-left"}`}>
                    <button
                      type="button"
                      className="w-full bg-background-alt p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-inherit"
                      style={{ textAlign: reverse ? "right" : "left" }}
                      onClick={() => setSelectedEvent(open ? null : index)}
                      aria-expanded={open}
                    >
                      <h3 className="text-2xl font-bold mb-2 font-heading text-secondary">
                        {event.year}
                      </h3>
                      <p className="text-text font-sans">{event.event}</p>
                      <span
                        className={`inline-flex mt-2 text-primary ${reverse ? "float-right" : ""}`}
                        aria-hidden
                      >
                        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            className={`mt-2 bg-background-alt p-4 rounded-lg shadow-md ${
                              reverse ? "text-right" : "text-left"
                            }`}
                          >
                            <p className="text-sm text-text-muted">{event.details}</p>
                            <div className="relative mt-4 w-full aspect-[4/3] overflow-hidden rounded-md">
                              <Image
                                src={event.image}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="40vw"
                              />
                            </div>
                            <h4 className="mt-4 font-bold text-primary">
                              Key Achievements
                            </h4>
                            <ul
                              className={`mt-2 space-y-1 ${
                                reverse
                                  ? "list-none"
                                  : "list-disc list-inside"
                              }`}
                            >
                              {event.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-text-muted">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
