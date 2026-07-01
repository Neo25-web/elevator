import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SpecTable from "@/components/SpecTable";
import Reveal from "@/components/Reveal";
import { BASE_URL, products } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found | Classic Elevators" };
  }

  return {
    title: `${product.name} | Classic Elevators Pakistan`,
    description: product.short,
    openGraph: {
      title: `${product.name} | Classic Elevators Pakistan`,
      description: product.short,
      url: `${BASE_URL}/products/${slug}`,
      images: [product.hero],
      siteName: "Classic Elevators",
      locale: "en_PK",
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main>
        <PageHeader label="Product" title={product.name} subtitle={product.tagline} />

        <section className="py-16">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gold/20">
                  <Image
                    src={product.hero}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <p className="mb-2 text-lg font-medium text-gold">{product.tagline}</p>
                {product.description.map((para, i) => (
                  <p key={i} className="mb-4 text-slate-400">
                    {para}
                  </p>
                ))}
                <div className="mb-8 flex flex-wrap gap-2">
                  {product.segments.map((seg) => (
                    <span
                      key={seg}
                      className="rounded-full border border-gold/40 px-3 py-1 text-[0.75rem] font-medium text-gold"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
                >
                  Get a Quote
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-navy-light py-16">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <Reveal>
              <h2 className="mb-8 font-serif text-2xl">Specifications</h2>
              <SpecTable specs={product.specs} />
            </Reveal>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <Reveal>
              <h2 className="mb-8 font-serif text-2xl">Key Features</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <Reveal key={feature} delay={i * 80} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-navy-light p-5">
                  <span className="mt-0.5 font-bold text-gold">✓</span>
                  <span className="text-[0.95rem] text-slate-300">{feature}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-light py-16">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <Reveal>
              <h2 className="mb-8 font-serif text-2xl">Gallery</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {product.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 100}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gold/10">
                    <Image
                      src={src}
                      alt={`${product.name} gallery image ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
