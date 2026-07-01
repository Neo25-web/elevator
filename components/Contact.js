"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const details = [
  { icon: "📍", label: "Location", value: site.location },
  { icon: "📞", label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneHref}` },
  { icon: "✉️", label: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function Contact({ showIntro = true }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry - Classic Elevators*%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-[0.95rem] text-white outline-none transition-colors focus:border-gold";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            {showIntro && (
              <>
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-gold">
                  Get In Touch
                </span>
                <h2 className="mb-4 font-serif text-3xl">Contact Us Today</h2>
                <p className="mb-8 text-slate-400">
                  Ready to elevate your building? Reach out for a free consultation
                  and quote.
                </p>
              </>
            )}

            {details.map((d) => (
              <div key={d.label} className="mb-5 flex items-start gap-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[10px] bg-gold/10 text-lg">
                  {d.icon}
                </div>
                <div>
                  <strong className="block text-[0.85rem] font-normal text-slate-400">
                    {d.label}
                  </strong>
                  {d.href ? (
                    <a href={d.href} className="hover:text-gold">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 rounded-lg bg-[#25d366] px-6 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-[0_8px_25px_rgba(37,211,102,0.35)]"
            >
              💬 Chat on WhatsApp
            </a>
          </Reveal>

          <Reveal as="div">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-gold/10 bg-navy-light p-10"
            >
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.5 block text-[0.85rem] font-medium text-slate-300">
                  Full Name
                </label>
                <input id="name" name="name" value={form.name} onChange={update} placeholder="Your name" required className={inputClass} />
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className="mb-1.5 block text-[0.85rem] font-medium text-slate-300">
                  Phone Number
                </label>
                <input id="phone" name="phone" value={form.phone} onChange={update} placeholder="03XX-XXXXXXX" required className={inputClass} />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-1.5 block text-[0.85rem] font-medium text-slate-300">
                  Email Address
                </label>
                <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@email.com" required className={inputClass} />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-1.5 block text-[0.85rem] font-medium text-slate-300">
                  Message
                </label>
                <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell us about your project..." required className={`${inputClass} min-h-[120px] resize-y`} />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
