"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  getConsecutiveDays,
  getTrainingHours,
  getMilesCovered,
  PROJECTED_VALUES,
} from "../utils/dateCalculations";
import { winsCount, podiumCount } from "../lib/raceResults";

type StoryBlock = {
  title: string;
  text: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

const storyBlocks: StoryBlock[] = [
  {
    title: "A champion’s start",
    text: "From the time I was born, I've always known I'm meant to become a champion. Adopted at birth in Poughkeepsie, NY, I grew up in Woodstock, NY with an innate obsession for cycling. My earliest memories involve sprinting to my grandparents' garage, donning my helmet, and doing laps up and down the street for hours.",
    image: "/media/ChildSuperMan.webp",
    alt: "Young Ben in a Superman costume",
    objectPosition: "center 20%",
  },
  {
    title: "Building the engine",
    text: "My passion for cycling extended to our home Schwinn Airdyne stationary bike, which I was obsessed with growing up. I established a personal benchmark of completing 60-minute sessions, believing that maintaining this endurance level was a true measure of fitness. In high school, I demonstrated my dedication to athletics by becoming the only senior to play for our cross-town football team — the sole varsity football player in my school that year.",
    image: "/media/HSSolo.webp",
    alt: "Ben during high school athletics",
    objectPosition: "center 25%",
  },
  {
    title: "College & competition",
    text: "After high school, I attended Hudson Valley Community College (HVCC), where I earned an Associate of Science (A.S.) degree in Exercise Science while playing football for two full seasons. That period instilled the dedication, discipline, self-confidence, and perseverance I bring to Olympic training today.",
    image: "/media/HVGame7.webp",
    alt: "Ben playing college football at HVCC",
    objectPosition: "center 30%",
  },
  {
    title: "Coach & caregiver",
    text: "Since leaving HVCC, I've earned my ACSM personal training certification and an assistant coach certificate for Rock Steady Boxing. I train people one-on-one and work twice a week with Parkinson's patients in Rock Steady Boxing class — staying grounded in service while chasing the boards.",
    image: "/media/Portrait.webp",
    alt: "Professional portrait of Ben Covi",
    objectPosition: "center 15%",
  },
  {
    title: "Every single day",
    text: `My commitment is unwavering: ${getConsecutiveDays()} consecutive days and ${getTrainingHours()} hours of training so far, covering ${getMilesCovered()} miles of cycling and running. By the start of the 2028 Olympics, I project ${PROJECTED_VALUES.hours} hours of training, ${PROJECTED_VALUES.workouts} workouts, and a streak of ${PROJECTED_VALUES.days} consecutive days.`,
    image: "/media/SoloAction4.webp",
    alt: "Ben training hard on the bike",
    objectPosition: "center 35%",
  },
  {
    title: "Racing for more than results",
    text: "Beyond the velodrome, I've raced charity events including the Tour de Kingston and Benedictine Bike for Cancer Care, and completed an Olympic-distance triathlon — proof that this journey is about giving back as much as going fast.",
    image: "/media/GroupRide.webp",
    alt: "Group charity and training ride",
    objectPosition: "center 40%",
  },
  {
    title: "Broken elbows, unbroken streak",
    text: "On May 30th, 2023 — three days after my 25th birthday — a serious bicycle accident left me with two broken elbows. I was back to indoor training the next day and outdoor riding within 15 days, never missing a single day of training.",
    image: "/media/WaterDrink.webp",
    alt: "Ben recovering and hydrating between efforts",
    objectPosition: "center 30%",
  },
  {
    title: "Why 2028 matters",
    text: "No male cyclist from the United States has qualified or medaled in Olympic track sprint since the 2000 Sydney Games. Nine years of consecutive training by 2028 puts me in position to help end that drought — for myself and for American track sprint.",
    image: "/media/PoseWBike2.webp",
    alt: "Ben with his track bike",
    objectPosition: "center 20%",
  },
  {
    title: "Results on the boards",
    text: `That work is showing up at Valley Preferred (Trexlertown): ${winsCount()} wins and ${podiumCount()} podiums across the 2026 Saturday Masters + Rookies series — including a Men’s Novice points-race win, back-to-back wins on May 30, and consistent top finishes in scratch, elimination, flying mile, and snowball events. Next stop: keep stacking race craft all the way to 2028.`,
    image: "/media/tt/TT-33-nll-5.webp",
    alt: "Ben Covi in aero tuck on the Valley Preferred velodrome",
    objectPosition: "center 35%",
  },
];

export default function Biography() {
  return (
    <section
      id="bio"
      className="py-16 sm:py-20"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-labelledby="bio-heading"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="bio-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-heading tracking-wide"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          MY STORY
        </motion.h2>
        <p className="text-center text-text opacity-80 max-w-2xl mx-auto mb-12 sm:mb-16">
          From Woodstock streets to the Trexlertown boards — the path to 2028.
        </p>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {storyBlocks.map((block, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <motion.article
                key={block.title}
                className={`flex flex-col gap-8 md:gap-12 md:items-center ${
                  imageLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:w-1/2 w-full">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={block.image}
                      alt={block.alt}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition: block.objectPosition || "center",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-secondary mb-4 normal-case tracking-normal">
                    {block.title}
                  </h3>
                  <p className="text-base sm:text-lg font-sans leading-relaxed text-text">
                    {block.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          className="text-center text-lg sm:text-xl font-sans mt-16 sm:mt-20 max-w-3xl mx-auto text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Join me on this journey. Together, we can turn a lifelong dream into
          Olympic reality.
        </motion.p>
      </div>
    </section>
  );
}
