"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 text-lg font-bold">
      <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] bg-gradient-to-br from-gold to-gold-dark text-xl">
        🏢
      </span>
      <span>
        Classic <span className="text-gold">Elevators</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
          : "py-4"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-[1140px] items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-gold"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-br from-gold to-gold-dark px-5 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="z-[1001] flex flex-col gap-[5px] p-1 md:hidden"
        >
          <span className={`h-0.5 w-[26px] rounded bg-gold transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-[26px] rounded bg-gold transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-[26px] rounded bg-gold transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-[300px] flex-col items-center justify-center gap-6 bg-navy-light shadow-[-10px_0_40px_rgba(0,0,0,0.4)] transition-[right] duration-300 md:hidden ${
          open ? "flex right-0" : "flex -right-full"
        }`}
      >
        {[...navItems, { label: "Contact Us", href: "#contact" }].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-base font-medium text-slate-300 transition-colors hover:text-gold"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
