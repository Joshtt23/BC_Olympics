"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Sponsor {
  name: string;
  logo?: string;
}

const sponsors: Sponsor[] = [];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR SPONSORS
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.length > 0 ? (
            sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={`${sponsor.name} logo`}
                  width={200}
                  height={100}
                  className="max-w-full h-auto"
                />
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-500 text-2xl font-bold tracking-wide font-heading text-primary col-span-4 flex items-center justify-center h-full w-full">
              Be The First To Sponsor My Journey.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
