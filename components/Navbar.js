"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-lg font-bold">
      <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] bg-gradient-to-br from-gold to-gold-dark text-xl">
        🏢
      </span>
      <span>
        Classic <span className="text-gold">Elevators</span>
      </span>
    </Link>
  );
}

const mainNavItems = navItems.filter((item) => item.href !== "/contact");

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
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-300 ${
          open ? "z-[1201]" : "z-[1000]"
        } ${
          scrolled || open
            ? "bg-navy/95 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
            : "py-4"
        }`}
      >
        <div className="mx-auto flex w-[92%] max-w-[1140px] items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-gold"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="rounded-lg bg-gradient-to-br from-gold to-gold-dark px-5 py-2 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-[1201] flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative block h-[18px] w-[26px]">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded bg-gold transition-all duration-300 ${
                  open ? "top-[8px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[8px] block h-0.5 w-full rounded bg-gold transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded bg-gold transition-all duration-300 ${
                  open ? "top-[8px] -rotate-45" : "top-[16px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu — below the header toggle so the X button always works */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[1200] flex flex-col bg-navy-deep pt-20 transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 pb-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="text-xl font-medium text-slate-200 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
