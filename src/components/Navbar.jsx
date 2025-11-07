import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400" />
          <span className="font-semibold text-slate-900">Dev Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#projects" className="hover:text-slate-900">Projects</a>
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-slate-100">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
