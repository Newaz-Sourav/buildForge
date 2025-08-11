import React from 'react'
import { motion } from "motion/react";

const Table = () => {
  const rows = [
    {
      title: "Price",
      buildForge: [
        "Transparent cost structure and material specification.",
        "Flexible budget suggestions"
      ],
      typical: [
        "30-50% hike between first quote and final cos-"
      ]
    },
    {
      title: "Convenience",
      buildForge: [
        "One-stop service point for all interior and exterior needs."
      ],
      typical: [
        "You'll need 30-40 vendors to gather everything."
      ]
    },
    {
      title: "Design",
      buildForge: [
        "Personalized design with 3D visuals."
      ],
      typical: [
        "Ordinary design and visuals.",
        "Compromised functions and utilities."
      ]
    },
    {
      title: "Timelines",
      buildForge: [
        "50-day move-in(Depends on site condition)"
      ],
      typical: [
        "Lengthy project period.",
        "Surprise delays."
      ]
    },
    {
      title: "Communication",
      buildForge: [
        "We provide a Gantt chart.",
        "Regular updates with project tracking."
      ],
      typical: [
        "Irregular updates & follow-up.",
        "No proper documentation."
      ]
    },
    {
      title: "Quality",
      buildForge: [
        "We use branded materials.",
        "50 quality checks."
      ],
      typical: [
        "Inferior materials to cut costs.",
        "Less than 20 quality checks."
      ]
    },
    {
      title: "After-sales support",
      buildForge: [
        "Dedicated team for prompt response."
      ],
      typical: [
        "Insufficient capability for quick support."
      ]
    },
    {
      title: "Warranty",
      buildForge: [
        "1 year hardware guarantee.",
        "2 years of after-sales service."
      ],
      typical: [
        "Lack of commitment.",
        "No valid warranty policy."
      ]
    },
  ];

  // Helper to render check or cross icon
  const renderIcon = (isCheck) => (
    <p className={isCheck ? "text-green-600 pr-2" : "text-red-600 pr-2"}>
      <i className={`fa-solid ${isCheck ? "fa-check" : "fa-xmark"}`}></i>
    </p>
  );

  return (
    <div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Animated headings */}
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How we are Standing Out
          </motion.h2>
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From the Competition
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We focus on adding value to everything we do; see it for yourself.
          </motion.p>

          {/* Table container */}
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            {/* Header row */}
            <motion.div
              className="grid grid-cols-3 bg-gray-100 border-b border-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-4 font-semibold text-gray-700"></div>
              <div className="p-4 font-semibold text-white bg-gray-800 text-center">BuildForge Experience</div>
              <div className="p-4 font-semibold text-gray-700 bg-gray-200 text-center">Typical Experience</div>
            </motion.div>

            {/* Data rows */}
            {rows.map(({ title, buildForge, typical }, i) => (
              <motion.div
                key={i}
                className={`grid grid-cols-3 border-b border-gray-200 ${i === rows.length - 1 ? "" : ""}`}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-4 font-semibold text-gray-700 border-r border-gray-200 flex items-center">{title}</div>

                <div className="p-4">
                  <ul className="space-y-2">
                    {buildForge.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        {renderIcon(true)}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    {typical.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        {renderIcon(false)}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Table
