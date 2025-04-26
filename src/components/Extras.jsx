import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const extras = [
  {
    title: "Tech Head – Orators Club",
    desc: "Manage tech for presentations, events, and communications at Newton School of Technology.",
  },
  {
    title: "Coding Clubs & Hackathons",
    desc: "Active participation in inter-college hackathons and problem-solving communities.",
  },
  {
    title: "Public Speaking & Debate",
    desc: "Host and speak at extempore competitions and panel discussions.",
  },
];

export default function Extras() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="extras"
      className={
        "py-20 px-6 relative overflow-hidden transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-white text-black")
      }
    >
      {/* Neon orbs */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-500 opacity-10 rounded-full blur-2xl animate-bounce"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Extras & Leadership
        </h2>
        <ul className="space-y-6">
          {extras.map((item, i) => (
            <motion.li
              key={i}
              className={
                "p-5 rounded-lg border border-green-600 hover:shadow-green-500/30 shadow transition-all " +
                (darkMode
                  ? "bg-black text-white"
                  : "bg-white text-black")
              }
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg text-green-300 font-semibold mb-1">
                {item.title}
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                {item.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
