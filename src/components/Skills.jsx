import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const techSkills = [
  "HTML", "CSS", "JavaScript", "React", "Python", "Tailwind CSS", "Pandas"
];

const softSkills = [
  "Leadership", "Teamwork", "Public Speaking", "Problem Solving", "Creativity"
];

export default function Skills() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={
        "py-20 px-6 relative overflow-hidden transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-white text-black")
      }
    >
      {/* Background orbs */}
      <div className="absolute top-10 right-10 w-36 h-36 bg-green-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-3xl animate-ping"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
          Skills
        </h2>

        {/* Tech Stack */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 text-green-300">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.map((skill, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 bg-black text-green-200 text-sm rounded-lg border border-green-500 hover:bg-green-900 transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-center mb-4 text-green-300">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm rounded-full bg-green-800 text-white border border-green-500 shadow"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
