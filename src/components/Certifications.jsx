import { motion } from "framer-motion";

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
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-white text-black dark:bg-[#0f131a] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Certifications
        </h2>
        <ul className="space-y-6">
          {certs.map((cert, i) => (
            <motion.li
              key={i}
              className="p-6 bg-white text-black dark:bg-black dark:text-white rounded-lg shadow border border-green-500 transition-all hover:shadow-green-500/30"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-green-300">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
