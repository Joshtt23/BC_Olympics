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
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Ben Covi"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
              style={{ boxShadow: "var(--shadow-lg)" }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              "From the time I was born, I've always known I'm meant to become a champion. Adopted at birth in Poughkeepsie, NY, I grew up in Woodstock, NY with an innate obsession for cycling. My earliest memories involve sprinting to my grandparents' garage, donning my helmet, and doing laps up and down the street for hours.",
              "My passion for cycling extended to our home Schwinn Airdyne stationary bike, which I was obsessed with growing up. In high school, I played football and basketball, even joining a cross-town team when my school's program was discontinued. This experience laid the foundation for my athletic career.",
              "After high school, I attended Hudson Valley Community College (HVCC), where I earned an Associate of Science (A.S.) degree in Exercise Science while playing football for two full seasons. This period instilled in me the dedication, discipline, self-confidence, and perseverance necessary to pursue my Olympic dreams.",
              "Since leaving HVCC, I've obtained my personal training certification through the American College of Sports Medicine and an 'assistant coach certificate' for Rock Steady Boxing. I've been helping train individuals one-on-one and working twice a week with Parkinson's patients in the 'Rock Steady Boxing' class.",
              "My commitment to my goal is unwavering. Over the last 5 years, I have worked out for 1,880 consecutive days, totaling 4,871.37 hours. I've maintained the same diet 365 days a year for those 1,880 consecutive days. This level of dedication and consistency is what I believe will propel me to qualify for the 2028 Olympics.",
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
