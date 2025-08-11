import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react";

const Chose = () => {
  const items = [
    { emoji: "🔁", text: "Flexible Budget &\nPersonalized Taste" },
    { emoji: "👤⚙️", text: "2-Year Free Service\nWarranty" },
    { emoji: "😊", text: "50-Day Move-In\nGuarantee" },
    { emoji: "✔️", text: "Design & Build Quality\nChecks" },
  ];

  return (
    <div>
      <div className="bg-slate-800 py-12 px-4 text-center text-white">
        {/* Header with fade & slide up */}
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Choose us
        </motion.h2>

        {/* Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {items.map(({ emoji, text }, i) => (
            <motion.div
              key={i}
              className="bg-[#F9F9F6] p-6 rounded shadow text-center text-gray-800 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 223, 71, 0.6)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <p className="font-medium whitespace-pre-line">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link to={"/booking"}>
            <motion.button
              className="bg-yellow-300 text-gray-800 font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(253, 224, 71, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.03, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Book A Consultation →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Chose
