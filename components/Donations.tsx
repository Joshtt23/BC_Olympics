"use client";
import { motion } from "framer-motion";
import { Bike, HeartPulse, Home } from "lucide-react";

const fundingNeeds = [
  {
    title: "Equipment & Maintenance",
    description: "Track bike upkeep, wheels, and race-day gear",
    amount: "$3,420 / yr",
    icon: Bike,
  },
  {
    title: "Recovery Treatments",
    description: "Chiropractic, acupuncture, massage, cryotherapy, sauna",
    amount: "$7,224 / yr",
    icon: HeartPulse,
  },
  {
    title: "NYC Velodrome Access",
    description: "Seasonal housing near Kinesio Velodrome (Flushing, NY)",
    amount: "$6,912 / season",
    icon: Home,
  },
  {
    title: "Trexlertown Racing Block",
    description: "Seasonal housing near Valley Preferred (T-Town, PA)",
    amount: "$7,392 / season",
    icon: Home,
  },
];

export default function Donations() {
  return (
    <section id="donations" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support the Journey
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-10 text-text max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Training for elite track sprint — nationals, UCI Olympic qualifiers,
          and the road to 2032 — costs about{" "}
          <span className="font-semibold text-secondary">$25,000 a year</span> —
          equipment, recovery, and living near the velodromes where I race.
          Every contribution keeps me on the boards.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {fundingNeeds.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex gap-4 p-4 rounded-lg bg-background-alt shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <item.icon className="w-7 h-7 text-secondary shrink-0 mt-0.5" />
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <span className="text-sm font-semibold text-secondary">
                    {item.amount}
                  </span>
                </div>
                <p className="text-sm text-text opacity-80 mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://buymeacoffee.com/bcoviOlympicCycling"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-secondary text-text-light hover:bg-opacity-90 transition-colors"
          >
            Donate Now
          </a>
          <p className="text-sm text-text opacity-70 text-center max-w-md">
            Prefer to sponsor gear, travel, or a training block?{" "}
            <a href="#contact" className="underline hover:text-secondary">
              Get in touch
            </a>
            .
          </p>
          <a
            href="#investment"
            className="text-sm text-primary hover:text-secondary underline"
          >
            See the full annual investment breakdown
          </a>
        </motion.div>
      </div>
    </section>
  );
}
