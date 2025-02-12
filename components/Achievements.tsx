"use client";
import { motion } from "framer-motion";

const achievements = [
  { year: "2021", title: "National Championship Gold Medal" },
  { year: "2022", title: "World Championship Silver Medal" },
  { year: "2023", title: "Olympic Qualification" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-background-alt shadow-md border border-border"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-secondary">
                {achievement.year}
              </h3>
              <p className="text-text">{achievement.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
