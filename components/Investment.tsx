"use client";
import { motion } from "framer-motion";
import { DollarSign, Bike, HeartPulse, Home } from "lucide-react";

const investmentData = [
  {
    title: "Equipment & Maintenance",
    description: "Annual bike maintenance and equipment costs",
    amount: "$3,420",
    icon: Bike,
  },
  {
    title: "Recovery Treatments",
    description: "Annual costs for chiropractic, acupuncture, massage, cryotherapy, and infrared sauna treatments",
    amount: "$7,224",
    icon: HeartPulse,
  },
  {
    title: "Training Facilities",
    description: "4-month seasonal rental near Kingston Velodrome (Flushing, NY)",
    amount: "$6,912",
    icon: Home,
  },
  {
    title: "Competition Venue",
    description: "4-month seasonal rental near Trexlertown Velodrome (PA)",
    amount: "$7,392",
    icon: Home,
  },
];

export default function Investment() {
  return (
    <section id="investment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading tracking-wide text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          INVESTMENT IN EXCELLENCE
        </motion.h2>
        <motion.p
          className="text-center text-lg mb-12 text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Achieving Olympic-level performance requires significant investment in equipment, recovery, and training facilities. These expenses reflect the commitment to excellence and the pursuit of Olympic qualification.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {investmentData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-background-alt p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <item.icon className="w-8 h-8 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                </div>
                <div className="text-2xl font-bold text-secondary">
                  {item.amount}
                </div>
              </div>
              <p className="text-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 bg-background-alt p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Total Annual Investment
          </h3>
          <p className="text-text mb-4">
            The total annual investment in training and recovery exceeds $24,948, demonstrating the level of commitment required to compete at the highest level of track cycling. This investment covers essential equipment maintenance, comprehensive recovery treatments, and strategic location-based training to access world-class velodromes.
          </p>
          <div className="flex justify-center">
            <div className="text-4xl font-bold text-secondary">
              $24,948
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 