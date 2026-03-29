"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";

const experiences = [
  {
    title: "Business Analyst",
    company: "Oregon Medical Board",
    duration: "Oct 2025 – Present",
    location: "Portland, OR",
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Research Analyst",
    company: "iSchool, Syracuse University",
    duration: "Jul 2025 – Oct 2025",
    location: "Syracuse, NY",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Business Analyst (Inland)",
    company: "Hapag-Lloyd",
    duration: "Jun 2024 – Aug 2024",
    location: "Atlanta, GA",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Program Manager",
    company: "iConsult Collaborative",
    duration: "Sep 2023 – May 2024",
    location: "Syracuse, NY",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Business Analyst – AML & Financial Crime",
    company: "Kiya.ai",
    duration: "Jun 2022 – Jul 2023",
    location: "Mumbai, IN",
    color: "from-purple-500 to-pink-500",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">My Journey</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          Work Experience
        </motion.h2>
      </motion.div>

      <div className="w-full max-w-4xl relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Card */}
            <div className="w-[45%] bg-[#0d0d1a] border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-purple-500/10">
              <div
                className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mb-1`}
              >
                {exp.duration}
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {exp.title}
              </h3>
              <p className="text-purple-300 font-medium mt-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
            </div>

            {/* Center dot */}
            <div className="w-[10%] flex justify-center">
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
              />
            </div>

            {/* Empty space on the other side */}
            <div className="w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};