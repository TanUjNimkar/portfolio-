import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 font-bold text-white">
            TN
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Tanuj Nimkar
            </h2>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>

              <p className="text-sm text-slate-400">
                Available for Work
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 transition hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Icons */}

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/TanUjNimkar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-white"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/tanuj-nimkar"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Button */}

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}