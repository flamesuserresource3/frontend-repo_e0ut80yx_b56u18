import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! I'll get back to you shortly.");
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-slate-600" />
          <h2 className="text-3xl font-bold text-slate-900">Let’s work together</h2>
        </div>
        <p className="mt-2 text-slate-600">Tell me about your project, timeline, and goals.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required type="text" placeholder="Name" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none focus:border-slate-400" />
            <input required type="email" placeholder="Email" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none focus:border-slate-400" />
          </div>
          <input type="text" placeholder="Company (optional)" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none focus:border-slate-400" />
          <textarea required rows={5} placeholder="Project details" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 outline-none focus:border-slate-400" />
          <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800">
            <Send className="h-4 w-4" /> Send message
          </button>
          {status && <p className="text-emerald-600 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}
