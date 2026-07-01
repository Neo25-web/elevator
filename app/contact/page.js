import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { BASE_URL } from "@/lib/site";

export const metadata = {
  title: "Contact Us | Classic Elevators Pakistan",
  description:
    "Get in touch with Classic Elevators for a free consultation and quote on passenger, panoramic and freight elevator solutions in Lahore.",
  openGraph: {
    title: "Contact Us | Classic Elevators Pakistan",
    description:
      "Get in touch with Classic Elevators for a free consultation and quote on passenger, panoramic and freight elevator solutions in Lahore.",
    url: `${BASE_URL}/contact`,
    siteName: "Classic Elevators",
    locale: "en_PK",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader label="Get In Touch" title="Contact Us" />
        <Contact showIntro={false} />
      </main>
      <Footer />
    </>
  );
}
