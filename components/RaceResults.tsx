"use client";

import { motion } from "framer-motion";
import {
  raceResults,
  raceVenue,
  winsCount,
  podiumCount,
  placeLabel,
} from "../lib/raceResults";

export default function RaceResults() {
  const wins = winsCount();
  const podiums = podiumCount();

  return (
    <section
      id="achievements"
      className="py-16 sm:py-20 bg-background-alt"
      aria-labelledby="results-heading"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          id="results-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Race Results
        </motion.h2>
        <motion.p
          className="text-center text-text opacity-80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {raceVenue.series} at {raceVenue.name} ({raceVenue.shortName}),{" "}
          {raceVenue.location} — racing for {raceVenue.team}, bib #
          {raceVenue.bib}.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Wins", value: wins },
            { label: "Podiums", value: podiums },
            { label: "Starts logged", value: raceResults.length },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`bg-background rounded-lg shadow-md p-5 text-center ${
                i === 2 ? "col-span-2 sm:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-3xl font-bold text-secondary font-heading">
                {stat.value}
              </div>
              <div className="text-sm text-text opacity-80 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md bg-background">
          <table className="w-full text-left text-sm sm:text-base min-w-[540px]">
            <caption className="sr-only">
              Ben Covi race results at Valley Preferred Cycling Center 2026
            </caption>
            <thead>
              <tr className="border-b border-border bg-background-alt">
                <th scope="col" className="px-4 py-3 font-semibold text-primary">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-primary">
                  Event
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-primary">
                  Class
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-semibold text-primary text-right"
                >
                  Place
                </th>
              </tr>
            </thead>
            <tbody>
              {raceResults.map((result, index) => (
                <tr
                  key={`${result.date}-${result.event}`}
                  className={`border-b border-border/60 ${
                    result.place === 1 ? "bg-secondary/5" : ""
                  }`}
                >
                  <td className="px-4 py-3 text-text whitespace-nowrap">
                    {result.dateLabel}
                  </td>
                  <td className="px-4 py-3 text-text">{result.event}</td>
                  <td className="px-4 py-3 text-text opacity-80">
                    {result.className}
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-bold ${
                      result.place === 1
                        ? "text-secondary"
                        : result.place <= 3
                          ? "text-primary"
                          : "text-text"
                    }`}
                  >
                    {placeLabel(result.place)}
                    {result.place === 1 ? " · Win" : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-text opacity-60 mt-4">
          Source: official {raceVenue.name} Saturday Masters + Rookies result
          sheets.
        </p>
      </div>
    </section>
  );
}
