"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PowerOutput() {
  const [currentPower, setCurrentPower] = useState(380);
  const minPower = 370;
  const maxPower = 390;
  const olympicTarget = 450;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower((prev) => {
        const newPower = prev + (Math.random() * 6 - 3); // Random value between -3 and 3
        return Math.max(minPower, Math.min(maxPower, newPower));
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="power" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Power Output
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="mb-4 flex justify-between text-text">
            <span>
              Power Range: {minPower}W - {maxPower}W
            </span>
            <span>Current Output: {Math.round(currentPower)}W</span>
            <span>Olympic Target: {olympicTarget}W</span>
          </div>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${(currentPower / olympicTarget) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <motion.p
            className="text-center mt-4 text-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {((currentPower / olympicTarget) * 100).toFixed(1)}% of Olympic
            target achieved
          </motion.p>
        </div>
      </div>
    </section>
  );
}
