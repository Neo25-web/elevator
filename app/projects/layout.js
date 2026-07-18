import { BASE_URL } from "@/lib/site";

export const metadata = {
  title: "Recent Projects | Classic Elevators Pakistan",
  description:
    "Browse Classic Elevators installations across hospitals, malls and industrial sites across Daska, Sialkot, Lahore, Gujrat, Islamabad and beyond.",
  openGraph: {
    title: "Recent Projects | Classic Elevators Pakistan",
    description:
      "Browse Classic Elevators installations across hospitals, malls and industrial sites across Daska, Sialkot, Lahore, Gujrat, Islamabad and beyond.",
    url: `${BASE_URL}/projects`,
    siteName: "Classic Elevators",
    locale: "en_PK",
    type: "website",
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
