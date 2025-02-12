"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const powerData = {
  current: {
    "6sec": { max: 1701, wkg: 19.97 },
    "30sec": { max: 1582, wkg: 18.58, avg: 855, avgWkg: 10.04 },
  },
  percentiles: {
    "6sec": "90-95th",
    "30sec": "85-90th",
  },
  projectedImprovement: [
    { year: 1, "6sec": 21, "30sec": 11 },
    { year: 2, "6sec": 22.5, "30sec": 11.5 },
    { year: 3, "6sec": 24, "30sec": 12 },
  ],
};

export default function PowerOutput() {
  const [currentPower, setCurrentPower] = useState(
    powerData.current["6sec"].max
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPower((prev) => {
        const newPower = prev + (Math.random() * 20 - 10); // Random value between -10 and 10
        return Math.max(
          powerData.current["6sec"].max - 100,
          Math.min(powerData.current["6sec"].max + 100, newPower)
        );
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-background p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Current Power Outputs
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">6-second Power:</p>
                <p>
                  Max: {powerData.current["6sec"].max}W (
                  {powerData.current["6sec"].wkg} W/kg)
                </p>
              </div>
              <div>
                <p className="font-semibold">30-second Power:</p>
                <p>
                  Max: {powerData.current["30sec"].max}W (
                  {powerData.current["30sec"].wkg} W/kg)
                </p>
                <p>
                  Avg: {powerData.current["30sec"].avg}W (
                  {powerData.current["30sec"].avgWkg} W/kg)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-background p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              Percentile Rankings
            </h3>
            <p>6-second W/kg: {powerData.percentiles["6sec"]} percentile</p>
            <p>
              30-second Avg W/kg: {powerData.percentiles["30sec"]} percentile
            </p>
            <p className="mt-4 text-sm text-text-muted">
              These numbers are close to elite-level cycling power outputs.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 bg-background p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary">
            Live Power Output
          </h3>
          <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{
                width: `${
                  (currentPower / (powerData.current["6sec"].max + 100)) * 100
                }%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <p className="text-center mt-2 text-lg font-semibold">
            {Math.round(currentPower)}W
          </p>
        </motion.div>

        <motion.div
          className="mt-8 bg-background p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary">
            Projected Improvement Timeline
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2">Year</th>
                  <th className="pb-2">6-sec Target (W/kg)</th>
                  <th className="pb-2">30-sec Target (W/kg)</th>
                </tr>
              </thead>
              <tbody>
                {powerData.projectedImprovement.map((year, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">Year {year.year}</td>
                    <td className="py-2">{year["6sec"]}</td>
                    <td className="py-2">{year["30sec"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
