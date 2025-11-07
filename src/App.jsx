import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name — Web Developer</p>
        <div className="text-sm text-slate-600">Built with React, Tailwind, and Spline</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
