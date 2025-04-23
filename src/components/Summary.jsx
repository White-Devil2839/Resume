import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section
      id="summary"
      className="py-20 px-6 bg-white text-black dark:bg-[#0c1012] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Summary
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Passionate frontend developer with a hacker aesthetic, a love for animation,
          and an obsession with clean design. Exploring the boundaries of code and creativity,
          from building JARVIS-style UIs to playing with AI tools. Always building, always improving.
        </motion.p>
      </div>
    </section>
  );
}
