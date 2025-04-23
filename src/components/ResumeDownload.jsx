export default function ResumeDownload() {
  return (
    <div className="text-center my-16">
      <a
        href="/resume.pdf"
        download
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow transition duration-200"
      >
        ⬇️ Download My Resume (PDF)
      </a>
    </div>
  );
}
