import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { BASE_URL, categories, products } from "@/lib/site";

export const metadata = {
  title: "Our Products | Classic Elevators Pakistan",
  description:
    "Passenger, panoramic and freight elevators plus manual and microprocessor control panels for hospitals, malls and industrial facilities across Daska, Sialkot, Lahore and Punjab.",
  openGraph: {
    title: "Our Products | Classic Elevators Pakistan",
    description:
      "Passenger, panoramic and freight elevators plus manual and microprocessor control panels for hospitals, malls and industrial facilities across Daska, Sialkot, Lahore and Punjab.",
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
          subtitle="Elevators and control panels for hospitals, commercial spaces, industrial sites, and every lift installation."
        />
        <section className="py-24">
          <div className="mx-auto w-[92%] max-w-[1140px] space-y-16">
            {categories.map((category) => {
              const categoryProducts = products.filter((p) => p.category === category.slug);
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.slug}>
                  <Reveal>
                    <h2 className="mb-8 font-serif text-2xl text-gold">{category.label}</h2>
                  </Reveal>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product, i) => (
                      <ProductCard key={product.slug} product={product} delay={i * 100} />
                    ))}
                  </div>
                </div>
              );
            })}
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
