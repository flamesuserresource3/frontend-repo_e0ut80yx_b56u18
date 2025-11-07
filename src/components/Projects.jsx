const projects = [
  {
    title: "Realtime Chat App",
    desc: "Socket-powered chat with auth, groups, and file sharing.",
    tags: ["React", "FastAPI", "WebSocket"],
    link: "#",
  },
  {
    title: "E-commerce UI Kit",
    desc: "Headless components and patterns for modern storefronts.",
    tags: ["React", "Tailwind"],
    link: "#",
  },
  {
    title: "3D Portfolio",
    desc: "Playful interactive hero using Spline and smooth scroll.",
    tags: ["Spline", "Framer"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Projects</h2>
            <p className="mt-2 text-slate-600">A mix of client work, experiments, and open-source.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Start a project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-black/10 bg-white/50 backdrop-blur p-5 hover:shadow-xl transition-shadow">
              <div className="aspect-video rounded-lg bg-gradient-to-tr from-indigo-200 via-blue-200 to-cyan-200" />
              <h3 className="mt-4 font-semibold text-lg text-slate-900 group-hover:underline">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-black/5">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
