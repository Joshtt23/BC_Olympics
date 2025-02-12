"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), { ssr: false });

interface Competition {
  name: string;
  location: [number, number]; // Tuple type for lat/lng
  date: string;
}

const competitions: Competition[] = [
  {
    name: "World Championships",
    location: [51.5074, -0.1278],
    date: "2023-08-15",
  },
  {
    name: "European Grand Prix",
    location: [48.8566, 2.3522],
    date: "2023-09-22",
  },
  {
    name: "Asian Invitational",
    location: [35.6762, 139.6503],
    date: "2023-10-10",
  },
  { name: "American Cup", location: [40.7128, -74.006], date: "2023-11-05" },
];

export default function CompetitionMap() {
  const [activeCompetition, setActiveCompetition] = useState<Competition | null>(null);

  return (
    <section id="competitions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          COMPETITION MAP
        </motion.h2>
        <motion.div
          className="h-[400px] md:h-[600px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DynamicMap
            competitions={competitions}
            setActiveCompetition={setActiveCompetition}
          />
        </motion.div>
      </div>
    </section>
  );
}
