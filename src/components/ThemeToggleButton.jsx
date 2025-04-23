import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggleButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {setDarkMode(!darkMode)
          console.log('Dark mode:', !darkMode)
          console.log('Light mode:', darkMode)
      }}
      className={`relative w-16 h-8 rounded-full border-2
        flex items-center transition-colors duration-300
        ${darkMode ? 'bg-green-400 border-green-400' : 'bg-indigo-500 border-indigo-500'}
      `}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30
        }}
        initial={false}
        animate={{ x: darkMode ? 32 : 2 }}
      />
    </button>
  );
}
