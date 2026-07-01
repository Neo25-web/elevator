import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Segments from "@/components/Segments";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import TechnologyTeaser from "@/components/TechnologyTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Segments />
        <FeaturedProducts />
        <About />
        <WhyUs />
        <TechnologyTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
