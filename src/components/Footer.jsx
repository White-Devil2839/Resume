import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={
        "relative overflow-hidden py-10 px-6 border-t border-green-600 mt-20 transition-colors duration-300 " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-gray-400"
          : "bg-white text-black")
      }
    >
      {/* Subtle glow orbs */}
      <div className="absolute left-10 bottom-5 w-24 h-24 bg-green-400 opacity-10 blur-2xl rounded-full animate-ping"></div>
      <div className="absolute right-10 top-0 w-32 h-32 bg-indigo-500 opacity-10 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <p>
            Made with ❤️ by{" "}
            <span className="text-green-400">Divyansh Choudhary</span>
          </p>
          <p className="text-sm text-green-500">&copy; 2025</p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://www.linkedin.com/in/divyansh-choudhary-0007divy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/White-Devil2839"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            GitHub
          </a>
          <ThemeToggleButton />
        </div>
      </div>
    </footer>
  );
}
