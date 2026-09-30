import { notFound } from "next/navigation";
import ProjectsView from "./ProjectsView";
import { BASE_URL, showProjects, ogDefaults } from "@/lib/site";

// While hidden, reuse the 404 title — Next applies route metadata on the
// client even when the page calls notFound().
export const metadata = !showProjects ? { title: "Page Not Found | Classic Elevators Pakistan" } : {
  title: "Recent Projects | Classic Elevators Pakistan",
  description:
    "Browse Classic Elevators installations across hospitals, malls and industrial sites across Daska, Sialkot, Lahore, Gujrat, Islamabad and beyond.",
  openGraph: {
    title: "Recent Projects | Classic Elevators Pakistan",
    description:
      "Browse Classic Elevators installations across hospitals, malls and industrial sites across Daska, Sialkot, Lahore, Gujrat, Islamabad and beyond.",
    url: `${BASE_URL}/projects`,
    ...ogDefaults,
  },
};

export default function ProjectsPage() {
  if (!showProjects) notFound();
  return <ProjectsView />;
}
