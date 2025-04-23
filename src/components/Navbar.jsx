import { motion } from 'framer-motion';
import ThemeToggleButton from './ThemeToggleButton';

const links = [
  { label: 'Hero', href: '#hero' },
  { label: 'Summary', href: '#summary' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Extras', href: '#extras' },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/80 text-black dark:bg-black/80 dark:text-white backdrop-blur-md border-b border-green-500 transition-colors duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-indigo-600 dark:text-green-400 text-xl tracking-widest uppercase">
          Divyansh
        </div>

        {/* Nav Links */}
        <div className="flex items-center">
          <ul className="hidden md:flex gap-6 font-medium text-sm">
            {links.map((link) => (
              <motion.li
                key={link.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={link.href}
                  className="hover:text-green-500 dark:hover:text-green-400 transition duration-200"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <ThemeToggleButton />
        </div>
      </div>
    </motion.nav>
  );
}
