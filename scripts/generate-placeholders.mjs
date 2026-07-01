import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function svg(title, subtitle = "Classic Elevators") {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const safeSubtitle = subtitle.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${safeTitle}">
  <rect width="800" height="600" fill="#0a1628"/>
  <rect x="0" y="0" width="800" height="5" fill="#c9a227"/>
  <rect x="0" y="595" width="800" height="5" fill="#c9a227"/>
  <g transform="translate(400, 210)">
    <rect x="-56" y="-72" width="112" height="144" rx="10" fill="#c9a227"/>
    <rect x="-40" y="-54" width="80" height="18" rx="3" fill="#0a1628"/>
    <rect x="-40" y="-28" width="80" height="18" rx="3" fill="#0a1628"/>
    <rect x="-40" y="-2" width="80" height="18" rx="3" fill="#0a1628"/>
    <rect x="-40" y="24" width="80" height="18" rx="3" fill="#0a1628"/>
    <rect x="-18" y="50" width="36" height="22" rx="2" fill="#0a1628"/>
  </g>
  <text x="400" y="400" text-anchor="middle" fill="#c9a227" font-family="system-ui, sans-serif" font-size="28" font-weight="700">${safeSubtitle}</text>
  <text x="400" y="440" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="500">${safeTitle}</text>
</svg>
`;
}

const files = [
  ["public/placeholder.svg", "Image Placeholder", "Classic Elevators"],
  ["public/products/passenger.svg", "Passenger Elevators"],
  ["public/products/passenger-1.svg", "Passenger Gallery 1"],
  ["public/products/passenger-2.svg", "Passenger Gallery 2"],
  ["public/products/capsule.svg", "Capsule / Panoramic Lifts"],
  ["public/products/capsule-1.svg", "Capsule Gallery 1"],
  ["public/products/capsule-2.svg", "Capsule Gallery 2"],
  ["public/products/freight.svg", "Freight / Loader Lifts"],
  ["public/products/freight-1.svg", "Freight Gallery 1"],
  ["public/products/freight-2.svg", "Freight Gallery 2"],
  ["public/projects/project-1.svg", "City Hospital, Lahore"],
  ["public/projects/project-2.svg", "Grand Mall, Lahore"],
  ["public/projects/project-3.svg", "ABC Textile Factory"],
  ["public/projects/project-4.svg", "Metro Superstore"],
  ["public/projects/project-5.svg", "Sunrise Warehouse"],
  ["public/projects/project-6.svg", "Care Clinic"],
];

for (const [rel, title, subtitle] of files) {
  const filePath = path.join(root, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, svg(title, subtitle ?? "Classic Elevators"));
}

console.log(`Generated ${files.length} placeholder SVGs`);
