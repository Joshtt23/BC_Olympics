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

interface StrengthExercise {
  name: string;
  sets: string;
  reps: string;
  weight?: string;
}

interface HIITExercise {
  name: string;
  duration?: string;
  incline?: string;
  reps?: string;
  weight?: string;
}

interface ExampleWorkout {
  title: string;
  rounds?: string;
  exercises: (StrengthExercise | HIITExercise)[];
}

interface TrainingRoutine {
  title: string;
  description: string;
  icon: any;
  image: string;
  exampleWorkout?: ExampleWorkout;
}

const trainingRoutine: TrainingRoutine[] = [
  {
    title: "Daily Stretch Routine",
    description:
      "2-hour comprehensive stretching routine performed 3 times daily, focusing on neck, shoulders, pelvic stabilization, hips, and glutes while maintaining full-body flexibility",
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
    title: "Strength Training",
    description:
      "Heavy lifting (Olympic lifts, isometric exercises, bodyweight exercises) on Monday, Tuesday, Thursday mornings",
    icon: Dumbbell,
    image: "/media/Placeholder.jpg",
    exampleWorkout: {
      title: "Example Strength Workout",
      exercises: [
        { name: "Front Raises", sets: "4", reps: "15,12,10,8", weight: "20,25,30,35" },
        { name: "Lateral Raises", sets: "1", reps: "20", weight: "20" },
        { name: "Leg Extensions", sets: "4", reps: "15,12,10,8", weight: "100,110,120,130" },
        { name: "Leg Curls", sets: "1", reps: "20", weight: "100" },
        { name: "Squats", sets: "5", reps: "20,15,12,10,8", weight: "135,185,205,225" },
        { name: "Dumbbell Shoulder Press", sets: "5", reps: "30", weight: "50,40,30,20,10" },
        { name: "Single Arm Pec Del", sets: "5", reps: "30", weight: "50,40,30,20,10" },
        { name: "Dumbbell Lunges", sets: "5", reps: "30", weight: "50,40,30,20,10" },
        { name: "Hanging Abs", sets: "3", reps: "To failure" }
      ]
    }
  },
  {
    title: "HIIT Workouts",
    description:
      "High-intensity interval training with kettlebells, dumbbells, and cardio on Wednesday and Friday",
    icon: Zap,
    image: "/media/Placeholder.jpg",
    exampleWorkout: {
      title: "Example HIIT Workout",
      rounds: "5",
      exercises: [
        { name: "Incline Treadmill", duration: "1 minute", incline: "30% (decreasing by 5% each round)" },
        { name: "Kettlebell Swings", reps: "50 (decreasing by 10 each round)", weight: "50lbs" },
        { name: "Kettlebell Squats", reps: "50 (decreasing by 10 each round)", weight: "50lbs" },
        { name: "Burpees", reps: "50 (decreasing by 10 each round)" },
        { name: "Push-ups", reps: "50 (decreasing by 10 each round)" }
      ]
    }
  },
  {
    title: "Daily Running",
    description:
      "6.2 miles with dynamic stretching and 10x40 yard all-out sprints",
    icon: Run,
    image: "/media/SoloRun.jpg",
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
                  className={`object-cover ${routine.title === "Daily Stretch Routine" ? "object-[center_5%]" : routine.title === "Daily Running" ? "object-[center_25%]" : routine.title === "Daily Cycling" ? "object-[center_30%]" : ""}`}
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
                <p className="text-text mb-4">{routine.description}</p>

                {routine.exampleWorkout && (
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-secondary mb-2">
                      {routine.exampleWorkout.title}
                    </h4>
                    {routine.exampleWorkout.rounds && (
                      <p className="text-text mb-2">
                        Rounds: {routine.exampleWorkout.rounds}
                      </p>
                    )}
                    <ul className="list-disc list-inside space-y-2 text-text">
                      {routine.exampleWorkout.exercises.map((exercise, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{exercise.name}:</span>{" "}
                          {'sets' in exercise && `Sets: ${exercise.sets}, `}
                          {'reps' in exercise && `Reps: ${exercise.reps}, `}
                          {'weight' in exercise && exercise.weight && `Weight: ${exercise.weight}kg, `}
                          {'duration' in exercise && exercise.duration && `Duration: ${exercise.duration}, `}
                          {'incline' in exercise && exercise.incline && `Incline: ${exercise.incline}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
