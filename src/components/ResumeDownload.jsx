import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ResumeDownload() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      className={
        "py-20 px-6 transition-colors duration-300 text-center " +
        (darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-white text-black")
      }
    >
      <a
        href="/Divyansh_Resume.pdf"
        download
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow transition duration-200"
      >
        ⬇️ Download My Resume (PDF)
      </a>
    </section>
  );
}
