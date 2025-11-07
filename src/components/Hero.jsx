import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/10 text-xs text-slate-700">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for freelance projects
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Hi, I’m a Web Developer crafting modern, interactive experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700 text-lg">
          I blend clean code with delightful interactions. Explore selected work below and let’s build something amazing.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-md bg-white/80 backdrop-blur border border-black/10 hover:bg-white">Contact Me</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
