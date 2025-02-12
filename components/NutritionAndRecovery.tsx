"use client";
import { motion } from "framer-motion";
import { Utensils, Battery, Moon, Apple, X } from "lucide-react";

const nutritionData = [
  {
    title: "Intermittent Fasting",
    description: "Practiced 365 days a year since December 17th, 2019",
    icon: Battery,
  },
  {
    title: "Dietary Restrictions",
    description:
      "No processed sugar, seed oils, ultra-processed foods, alcohol, caffeine, red meat, dairy, or gluten",
    icon: X,
  },
  {
    title: "Break Fast Meal",
    description:
      "2,000 calorie bowl of granola with coconut milk, banana, apple, assorted fruit, carrots, and lettuce",
    icon: Apple,
  },
  {
    title: "Dinner",
    description:
      "Bowl of brown rice with olive oil and tabasco sauce, accompanied by steamed broccoli",
    icon: Utensils,
  },
  {
    title: "Sleep Optimization",
    description:
      "Prioritizing 8-9 hours of quality sleep per night to support muscle recovery and mental sharpness",
    icon: Moon,
  },
];

export default function NutritionAndRecovery() {
  return (
    <section id="nutrition-recovery" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NUTRITION & RECOVERY
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12 text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ben's nutrition plan is as rigorous and disciplined as his training
          regimen, designed to fuel his Olympic aspirations and maintain peak
          performance.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {nutritionData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-secondary mr-4" />
                <h3 className="text-2xl font-bold text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 bg-background p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Dietary Philosophy
          </h3>
          <p className="text-text mb-4">
            Ben's diet is carefully crafted to maximize his athletic performance
            and overall health. By eliminating processed foods, sugars, and
            potential allergens, he ensures his body receives only clean,
            nutrient-dense fuel.
          </p>
          <h4 className="text-xl font-bold text-secondary mb-2">
            Key Principles:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-text">
            <li>Consistent intermittent fasting regimen</li>
            <li>Focus on whole, unprocessed foods</li>
            <li>Elimination of common inflammatory foods</li>
            <li>High-carb, nutrient-dense breakfast to break fast</li>
            <li>Simple, balanced dinner for easy digestion</li>
            <li>Hydration throughout the day (water intake not specified)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
