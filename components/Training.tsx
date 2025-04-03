"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Bike,
  PlayIcon as Run,
  Dumbbell,
  StretchVerticalIcon as Stretch,
  Zap,
} from "lucide-react";

const trainingRoutine = [
  {
    title: "Daily Stretch Routine",
    description:
      "1 hour and 40 minute total body stretch, from neck to legs, 3 times a day",
    icon: Stretch,
    image: "/media/Jumping.jpg",
  },
  {
    title: "Daily Cycling",
    description:
      "20+ miles outside on upstate NY mountain roads or 1 hour indoor UCI workout",
    icon: Bike,
    image: "/media/SoloAction4.jpg",
  },
  {
    title: "Daily Running",
    description:
      "6.2 miles with dynamic stretching and 10x40 yard all-out sprints",
    icon: Run,
    image: "/media/Placeholder.jpg",
  },
  {
    title: "Strength Training",
    description:
      "Heavy lifting (Olympic lifts, isometric exercises, bodyweight exercises) on Monday, Tuesday, Thursday mornings",
    icon: Dumbbell,
    image: "/media/Placeholder.jpg",
  },
  {
    title: "HIIT Workouts",
    description:
      "High-intensity interval training with kettlebells, dumbbells, and cardio on Wednesday and Friday",
    icon: Zap,
    image: "/media/Placeholder.jpg",
  },
];

export default function Training() {
  return (
    <section id="training" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TRAINING REGIMEN
        </motion.h2>
        <p className="text-center text-lg mb-12 text-text">
          Ben's rigorous 7-day-a-week training routine is designed to push the
          limits of human performance and prepare for Olympic-level competition.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {trainingRoutine.map((routine, index) => (
            <motion.div
              key={routine.title}
              className="bg-background rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={routine.image}
                  alt={routine.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <routine.icon className="w-8 h-8 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-primary">
                    {routine.title}
                  </h3>
                </div>
                <p className="text-text">{routine.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 bg-background p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Cycling Workout Details
          </h3>
          <p className="text-text mb-4">
            The indoor cycling workout follows a structured UCI (Union Cycliste
            Internationale) format:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text">
            <li>17-minute warm-up</li>
            <li>2 sets of 6-second sprints with 3'54" recovery</li>
            <li>1 set of 30-second effort with 5'30" recovery</li>
            <li>1 set of 4-minute high-intensity effort</li>
            <li>15-minute cool-down</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
