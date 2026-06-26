import { site, navItems } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-navy-deep pb-6 pt-12">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <div className="mb-10 grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5 text-lg font-bold">
              <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] bg-gradient-to-br from-gold to-gold-dark text-xl">
                🏢
              </span>
              <span>
                Classic <span className="text-gold">Elevators</span>
              </span>
            </a>
            <p className="mt-4 max-w-[300px] text-[0.9rem] text-slate-400">
              Pakistan&apos;s trusted name in passenger and cargo elevator
              solutions. Quality, safety, and service you can rely on.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[0.85rem] uppercase tracking-[0.08em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[0.9rem] text-slate-400">
              {[...navItems, { label: "Contact", href: "#contact" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[0.85rem] uppercase tracking-[0.08em] text-gold">
              Contact Info
            </h4>
            <ul className="space-y-2 text-[0.9rem] text-slate-400">
              <li>📍 {site.location}</li>
              <li>📞 {site.phoneDisplay}</li>
              <li>✉️ {site.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center text-[0.85rem] text-slate-400">
          &copy; 2026 Classic Elevators Pakistan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
