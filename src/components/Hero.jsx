import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 
      bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black 
      text-black dark:text-green-400 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 opacity-20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-ping" />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 tracking-widest"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Divyansh Choudhary
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-medium mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typewriter
          words={["Frontend Developer", "AI Enthusiast", "JARVIS Builder 🤖"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.h2>

      <motion.p
        className="text-sm md:text-base mb-6 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        📧 divyansh.choudhary@adypu.edu.in | 📱 +91 9509893772
      </motion.p>

      <motion.div
        className="flex gap-4 mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <a
          href="#projects"
          className="bg-green-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-green-400 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
