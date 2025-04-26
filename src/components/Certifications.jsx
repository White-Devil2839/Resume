import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const certs = [
  {
    title: "Fundamentals of AI",
    org: "DeepLearning.AI",
    date: "Jan 2025",
    link: "https://coursera.org/share/60cf492033a306e3b6a62c0bd1aaec49",
  },
  {
    title: "Think on The Brink – Extempore",
    org: "Orators Club NST",
    date: "Feb 2025",
  },
];

export default function Certifications() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="certifications"
      className={
        "py-20 px-6 transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-white text-black")
      }
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Certifications
        </h2>
        <ul className="space-y-6">
          {certs.map((cert, i) => (
            <motion.li
              key={i}
              className={
                "p-6 rounded-lg shadow border border-green-500 transition-all hover:shadow-green-500/30 " +
                (darkMode ? "bg-black text-white" : "bg-white text-black")
              }
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-green-300">
                {cert.title}
              </h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                {cert.org} • {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-green-400 underline inline-block mt-1"
                >
                  View Certificate
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
