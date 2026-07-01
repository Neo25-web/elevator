import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { BASE_URL, products } from "@/lib/site";

export const metadata = {
  title: "Our Products | Classic Elevators Pakistan",
  description:
    "Passenger, capsule panoramic and freight elevator solutions for hospitals, commercial buildings and industrial facilities in Lahore.",
  openGraph: {
    title: "Our Products | Classic Elevators Pakistan",
    description:
      "Passenger, capsule panoramic and freight elevator solutions for hospitals, commercial buildings and industrial facilities in Lahore.",
    url: `${BASE_URL}/products`,
    siteName: "Classic Elevators",
    locale: "en_PK",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="What We Offer"
          title="Our Products"
          subtitle="A complete range of passenger, panoramic and freight elevators tailored to hospitals, commercial spaces and industrial sites."
        />
        <section className="py-24">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <ProductCard key={product.slug} product={product} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-gold/10 bg-navy-light py-16">
          <Reveal className="mx-auto w-[92%] max-w-[1140px] text-center">
            <h2 className="mb-4 font-serif text-2xl">Need a Custom Solution?</h2>
            <p className="mx-auto mb-8 max-w-[520px] text-slate-400">
              Tell us about your building and we&apos;ll recommend the right elevator
              system with a free quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
            >
              Get a Free Quote
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
