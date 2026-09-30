import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: "Page Not Found | Classic Elevators Pakistan",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-navy-deep pt-40 pb-24 text-center">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-gold">
              Error 404
            </span>
            <h1 className="mb-4 font-serif text-[clamp(2rem,5vw,3rem)]">Page Not Found</h1>
            <p className="mx-auto mb-10 max-w-[520px] text-slate-400">
              The page you are looking for doesn&apos;t exist or has moved. Browse
              our products or get in touch and we&apos;ll help you directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
              >
                Back to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Our Products
              </Link>
            </div>
            <p className="mt-10 text-[0.9rem] text-slate-400">
              Or call us at{" "}
              <a href={`tel:${site.phoneHref}`} className="text-gold hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
