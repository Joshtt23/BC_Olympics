"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Biography() {
  return (
    <section
      id="bio"
      className="py-20"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY STORY
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <motion.div
                className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src="/media/ChildSuperman.jpeg"
                  alt="Early cycling days"
                  fill
                  className="object-cover"
                  style={{ boxShadow: "var(--shadow-lg)" }}
                />
              </motion.div>
              <motion.div
                className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/media/HSSolo.jpg"
                  alt="High school athletic achievements"
                  fill
                  className="object-cover"
                  style={{ boxShadow: "var(--shadow-lg)" }}
                />
              </motion.div>
              <motion.div
                className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Image
                  src="/media/PoseWBike2.jpg"
                  alt="Ben Covi - Professional Cyclist"
                  fill
                  className="object-cover"
                  style={{ boxShadow: "var(--shadow-lg)" }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              "From the time I was born, I've always known I'm meant to become a champion. Adopted at birth in Poughkeepsie, NY, I grew up in Woodstock, NY with an innate obsession for cycling. My earliest memories involve sprinting to my grandparents' garage, donning my helmet, and doing laps up and down the street for hours.",
              "My passion for cycling extended to our home Schwinn Airdyne stationary bike, which I was obsessed with growing up. I established a personal benchmark of completing 60-minute sessions, believing that maintaining this endurance level was a true measure of fitness. In high school, I demonstrated my dedication to athletics by becoming the only senior to play for our cross-town football team, earning the distinction of being the sole varsity football player in my school that year. This experience laid the foundation for my athletic career.",
              "After high school, I attended Hudson Valley Community College (HVCC), where I earned an Associate of Science (A.S.) degree in Exercise Science while playing football for two full seasons. This period instilled in me the dedication, discipline, self-confidence, and perseverance necessary to pursue my Olympic dreams.",
              "Since leaving HVCC, I've obtained my personal training certification through the American College of Sports Medicine and an 'assistant coach certificate' for Rock Steady Boxing. I've been helping train individuals one-on-one and working twice a week with Parkinson's patients in the 'Rock Steady Boxing' class.",
              "My commitment to my goal is unwavering, with an impressive track record of 1,912 consecutive days and 4,943 hours of dedicated training. By the start of the 2028 Olympics, I project to achieve 7,702 hours of training, complete 7,043 workouts, and maintain a streak of 2,803 consecutive days. This dedication has resulted in a total distance of 17,970 miles covered through cycling and running, demonstrating my relentless pursuit of excellence and the depth of my commitment to Olympic success.",
              "In addition to my training, I've participated in numerous charity events, including the Tour de Kingston and Benedictine Bike for Cancer Care, and completed an Olympic-distance triathlon. These events not only showcase my athletic abilities but also demonstrate my commitment to giving back to the community.",
              "My journey hasn't been without challenges. On May 30th, 2023, just three days after my 25th birthday, I suffered a serious bicycle accident resulting in two broken elbows. Demonstrating my unwavering dedication, I returned to indoor training the very next day and was back to outdoor riding within 15 days, never missing a single day of training.",
              "The 2028 Olympics represent a historic opportunity - no male cyclist from the United States has qualified or medaled in Olympic track sprint cycling since the 2000 Sydney Games. My relentless training over the past five years, culminating in nine consecutive years by 2028, positions me to break this 28-year drought and make history for American cycling.",
              "Join me on this incredible journey as I strive to make my mark in the world of Olympic cycling. Together, we can turn this lifelong dream into reality!",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg mb-6 font-sans leading-relaxed"
                style={{ color: "var(--color-text)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
