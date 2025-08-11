import React from 'react'
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <div>
        <div className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* Title with fade & slide up */}
            <motion.h2
              className="text-3xl font-bold mb-8 italic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Services
            </motion.h2>

            <div className="w-full h-[26rem] pb-6 block sm:hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ep-XCi_4fGg"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  icon: "fa-house-chimney",
                  title: "Residential",
                  desc: "We’ll Provide Everything Your New Home Needs.",
                  link: "/residential",
                },
                {
                  icon: "fa-building",
                  title: "Commercial",
                  desc: "Moving to a Workplace Has Never Been Easier.",
                  link: "/commercial",
                },
                {
                  icon: "fa-lightbulb",
                  title: "Architectural Consultancy",
                  desc: "Our Experts Will Bring Your Concept to Life.",
                  link: "/portfolio",
                },
              ].map(({ icon, title, desc, link }, i) => {
                const content = (
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow cursor-pointer flex flex-col h-full"
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(59, 130, 246, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="text-4xl mb-4">
                      <i className={`fa-solid ${icon}`}></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 flex-grow">{desc}</p>
                  </motion.div>
                );

                return link ? (
                  <Link to={link} key={i} tabIndex={-1}>
                    {content}
                  </Link>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <div className="w-full h-[26rem] sm:h-[38rem] pt-12 hidden sm:block">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ep-XCi_4fGg"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
