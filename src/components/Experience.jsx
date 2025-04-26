import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CyberAI Labs",
    period: "Feb 2025 – May 2025",
    desc: "Built interactive dashboards and implemented reusable React components styled with Tailwind CSS.",
  },
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest + Devfolio",
    period: "Oct 2024 – Nov 2024",
    desc: "Contributed to UI/UX fixes, landing page animations, and accessibility improvements in React projects.",
  },
  {
    role: "JARVIS Builder",
    company: "Self-Project",
    period: "Ongoing",
    desc: "Developing a voice-based assistant with React, OpenAI, and Web Speech API — like Iron Man's JARVIS 🧠.",
  },
];

export default function Experience() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="experience"
      className={
        "py-20 px-6 transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-green-400"
          : "bg-white text-black")
      }
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Experience
        </h2>
        <div className="border-l-4 border-green-500 pl-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="mb-10 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 top-2"></span>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} • {exp.period}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-500">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
