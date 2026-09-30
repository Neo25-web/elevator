import { products } from "@/lib/site";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-navy-light py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <SectionHeader
          label="What We Offer"
          title="Featured Products"
          subtitle="Passenger, home, panoramic and freight lifts for every building type."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products
            .filter((product) => product.category === "elevators")
            .map((product, i) => (
              <ProductCard key={product.slug} product={product} delay={i * 100} />
            ))}
        </div>
      </div>
    </section>
  );
}
