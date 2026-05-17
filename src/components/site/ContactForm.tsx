import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-zinc-900/50 px-5 py-4 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 hover:border-white/20";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2 block">
            Full Name
          </label>
          <input required type="text" className={inputCls} placeholder="John Doe" />
        </div>
        <div>
          <label className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2 block">
            Email Address
          </label>
          <input required type="email" className={inputCls} placeholder="john@company.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2 block">
            Phone Number
          </label>
          <input type="tel" className={inputCls} placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2 block">
            Project Type
          </label>
          <select className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]`} defaultValue="">
            <option value="" disabled className="bg-zinc-900 text-white/50">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="bg-zinc-900 text-white">{s.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2 block">
          Tell us about your project
        </label>
        <textarea
          required
          rows={5}
          className={inputCls + " resize-none"}
          placeholder="Please share details about your scope, location, timeline, and budget..."
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className="group relative inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gold px-8 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 overflow-hidden transition-all disabled:opacity-90 disabled:cursor-not-allowed mt-2"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        <div className="relative flex items-center gap-2 z-10">
          {sent ? (
            <>
              <CheckCircle2 className="h-5 w-5" /> Message Received
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </div>
      </button>
    </form>
  );
}
