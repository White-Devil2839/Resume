import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.Tech in Computer Science & AI",
    school: "Newton School Of Technology",
    year: "2024 - 2028",
    grade: "8.09 / 10.0",
  },
  {
    degree: "Intermediate (XII)",
    school: "Diamond Academy, Jodhpur",
    year: "2023 - 2024",
    grade: "65.6%",
  },
  {
    degree: "Matriculation (X)",
    school: "KV No.1 Air Force STN, Jodhpur",
    year: "2021 - 2022",
    grade: "87.6%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-white text-black dark:bg-[#0d1117] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Education
        </h2>
        <div className="border-l-4 border-green-500 pl-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="mb-10 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-2"></span>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {edu.school} • {edu.year}
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                📈 Grade: {edu.grade}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
