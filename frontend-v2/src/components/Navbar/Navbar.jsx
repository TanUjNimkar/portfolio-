import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 font-bold text-white">
            TN
          </div>

          <div>
            <h1 className="font-semibold text-white">
              Tanuj Nimkar
            </h1>

            <p className="text-xs text-slate-400">
              DevOps Engineer
            </p>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-violet-400">
            About
          </a>

          <a href="#skills" className="hover:text-violet-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-violet-400">
            Projects
          </a>

          <a href="#experience" className="hover:text-violet-400">
            Experience
          </a>

          <a href="#contact" className="hover:text-violet-400">
            Contact
          </a>
        </nav>

        <div className="flex gap-4 text-xl">

          <a
            href="https://github.com/TanUjNimkar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/tanuj-nimkar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </header>
  );
}