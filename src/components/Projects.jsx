import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    title: "Brick Breakthrough",
    desc: "Classic brick breaker game using JavaScript and canvas.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/White-Devil2839/brickgame",
    demo: "https://brickgame-beta.vercel.app/",
  },
  {
    title: "Celebrity Fan Page",
    desc: "Diljit Dosanjh fan site with React + Tailwind.",
    skills: ["React", "Tailwind"],
    github: "https://github.com/mrsandy1965/chilliflakes",
    demo: "https://diljitdosanjh.vercel.app/",
  },
  {
    title: "Vintage Car Collection",
    desc: "Static vintage car gallery built with HTML/CSS.",
    skills: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/mrsandy1965/nirman",
    demo: "https://tiny-chaja-8b8979.netlify.app/",
  },
  {
    title: "The Beast (Scratch Game)",
    desc: "Robot-dragon adventure game built with Scratch.",
    skills: ["Scratch", "Game Design"],
    github: "https://scratch.mit.edu/projects/1152524601",
    demo: "https://scratch.mit.edu/projects/1152524601",
  },
];

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={
        "py-20 px-6 transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-white text-black")
      }
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className={
                "border border-green-600 p-6 rounded-lg shadow-lg transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-green-500/30 " +
                (darkMode ? "bg-black text-white" : "bg-white text-black")
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-green-300 mb-1">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-400">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.skills.map((s, j) => (
                  <span
                    key={j}
                    className="text-xs bg-green-800 text-white px-2 py-1 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-x-4 text-sm">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
