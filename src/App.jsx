// import Hero from './components/Hero';
// import Summary from './components/Summary';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Certifications from './components/Certifications';
// import Extras from './components/Extras';
// import ResumeDownload from './components/ResumeDownload';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// export default function App() {
//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//       <Navbar />
//       <section id="hero"><Hero /></section>
//       <section id="summary"><Summary /></section>
//       <section id="education"><Education /></section>
//       <section id="experience"><Experience /></section>
//       <section id="projects"><Projects /></section>
//       <section id="skills"><Skills /></section>
//       <section id="certifications"><Certifications /></section>
//       <section id="extras"><Extras /></section>
//       <ResumeDownload />
//       <Footer />
//     </div>
//   );
// }

// // export default function App() {
// //   return (
// //     <div className="bg-green-600 text-white p-10 text-center text-xl">
// //       ✅ Tailwind is working if this background is green!
// //     </div>
// //   );
// // }

// export default function App() {
//   return (
//     <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>
//       ✅ React is working and rendering this!
//     </div>
//   );
// }

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Extras from './components/Extras';
import Footer from './components/Footer';



export default function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Summary />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Extras />
        </main>
        <Footer />
      </div>
    </div>
  );
}
