export const BASE_URL = "https://classicelevators.com.pk";

export const site = {
  name: "Classic Elevators",
  location: "Daska, Sialkot, Pakistan",
  address: "Pasrur Road, Islampura, Daska",
  phoneDisplay: "0300-6108294",
  phoneHref: "+923006108294",
  email: "info@classicelevators.com.pk",
  whatsapp: "923006108294",
  serviceAreas: [
    "Daska",
    "Sialkot",
    "Lahore",
    "Gujrat",
    "Wazirabad",
    "Jhelum",
    "Islamabad",
    "Shakargarh",
    "Pasrur",
  ],
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const categories = [
  { slug: "elevators", label: "Elevators" },
  { slug: "control-panels", label: "Control Panels" },
];

export const products = [
  {
    slug: "passenger",
    category: "elevators",
    icon: "🛗",
    name: "Passenger Elevators",
    tagline: "Smooth, safe rides for people",
    hero: "/products/passenger.svg", // real: /products/passenger.jpg
    short: "Reliable passenger lifts for hospitals, malls, offices and apartments.",
    segments: ["Hospitals", "Shopping Malls", "Offices & Apartments"],
    description: [
      "Our passenger elevators combine comfort, safety and modern design. Hospital-grade cabins support stretchers and beds, while commercial cabins focus on capacity and premium finishes.",
      "Available in a range of capacities and cabin finishes to match your building.",
    ],
    specs: [
      { label: "Capacity", value: "4 – 20 persons (300 – 1600 kg)" },
      { label: "Speed", value: "0.5 – 1.75 m/s" },
      { label: "Max Travel", value: "Up to 20 floors" },
      { label: "Drive", value: "Gearless / Geared (VVVF)" },
      { label: "Doors", value: "Automatic center / side opening" },
    ],
    features: [
      "Stretcher-size cabin option for hospitals",
      "Premium cabin finishes",
      "VVVF smooth control",
      "Emergency rescue device (ARD)",
    ],
    gallery: ["/products/passenger-1.svg", "/products/passenger-2.svg"], // real: passenger-1.jpg, passenger-2.jpg
  },
  {
    slug: "capsule",
    category: "elevators",
    icon: "💎",
    name: "Capsule / Panoramic Lifts",
    tagline: "A statement of style",
    hero: "/products/capsule.svg", // real: /products/capsule.jpg
    short: "Glass panoramic lifts that turn vertical travel into an experience.",
    segments: ["Malls", "Hotels", "Showrooms"],
    description: [
      "Capsule lifts feature curved glass cabins that create a striking visual centerpiece for malls, hotels and showrooms while giving riders a panoramic view.",
      "Custom shapes and lighting available to match your interior.",
    ],
    specs: [
      { label: "Capacity", value: "6 – 13 persons (450 – 1000 kg)" },
      { label: "Speed", value: "0.5 – 1.5 m/s" },
      { label: "Cabin", value: "Curved / semi-circular glass" },
      { label: "Drive", value: "Gearless (VVVF)" },
      { label: "Lighting", value: "LED accent lighting" },
    ],
    features: [
      "Panoramic glass cabin",
      "Custom shapes & lighting",
      "Premium visual appeal",
      "Smooth gearless drive",
    ],
    gallery: ["/products/capsule-1.svg", "/products/capsule-2.svg"], // real: capsule-1.jpg, capsule-2.jpg
  },
  {
    slug: "freight",
    category: "elevators",
    icon: "📦",
    name: "Freight / Loader Lifts",
    tagline: "Heavy-duty vertical movement",
    hero: "/products/freight.svg", // real: /products/freight.jpg
    short: "Rugged goods and loader lifts for factories, warehouses and markets.",
    segments: ["Factories", "Warehouses", "Local Markets"],
    description: [
      "Our freight and loader lifts are built to move heavy goods reliably day after day. Available in small capacities for local markets and shops, and large heavy-duty units for factories and warehouses.",
      "Robust construction with high weight capacity and durable finishes.",
    ],
    specs: [
      { label: "Capacity", value: "500 kg – 5000 kg" },
      { label: "Speed", value: "0.25 – 1.0 m/s" },
      { label: "Cabin", value: "Steel chequered plate / MS" },
      { label: "Drive", value: "Geared (VVVF)" },
      { label: "Doors", value: "Manual / collapsible / auto" },
    ],
    features: [
      "500 kg to 5-ton capacity",
      "Heavy-duty steel cabin",
      "Small & large configurations",
      "Rugged industrial build",
    ],
    gallery: ["/products/freight-1.svg", "/products/freight-2.svg"], // real: freight-1.jpg, freight-2.jpg
  },
  {
    slug: "manual-control-panel",
    category: "control-panels",
    icon: "🎛️",
    name: "Manual Control Panels",
    tagline: "Simple, reliable relay-based control",
    hero: "/products/manual-control-panel.svg", // real: /products/manual-control-panel.jpg
    short: "Cost-effective relay and contactor logic panels for freight lifts and basic installations.",
    segments: ["Freight Lifts", "Basic Installations", "Manual Doors"],
    description: [
      "Our manual control panels use proven relay and contactor logic for straightforward lift operation. Ideal for freight elevators, low-rise installations, and sites where simplicity and durability matter most.",
      "A dependable, cost-effective choice for manual-door lifts and basic vertical transport needs.",
    ],
    specs: [
      { label: "Type", value: "Relay / Contactor logic" },
      { label: "Suitable for", value: "Manual doors / low-rise lifts" },
      { label: "Applications", value: "Freight, goods, basic passenger" },
      { label: "Floors", value: "Up to 5–8 stops" },
      { label: "Enclosure", value: "Metal cabinet, wall-mounted" },
    ],
    features: [
      "Simple relay-based operation",
      "Cost-effective for basic lifts",
      "Easy maintenance and troubleshooting",
      "Proven contactor logic",
    ],
    gallery: ["/products/manual-control-panel-1.svg", "/products/manual-control-panel-2.svg"], // real: manual-control-panel-1.jpg, manual-control-panel-2.jpg
  },
  {
    slug: "microprocessor-control-panel",
    category: "control-panels",
    icon: "🧠",
    name: "Microprocessor (Chip-based) Control Panels",
    tagline: "Smart VVVF control for modern lifts",
    hero: "/products/microprocessor-control-panel.svg", // real: /products/microprocessor-control-panel.jpg
    short: "Advanced microprocessor VVVF panels with serial/CAN communication for smooth, energy-efficient rides.",
    segments: ["Passenger Lifts", "High-rise", "Capsule Lifts"],
    description: [
      "Our microprocessor control panels deliver VVVF drive control with serial and CAN bus communication for precise, smooth elevator operation. Built for passenger, high-rise, and premium capsule installations.",
      "Integrated fault diagnostics and energy-saving modes help reduce downtime and operating costs over the life of the lift.",
    ],
    specs: [
      { label: "Control", value: "Microprocessor VVVF" },
      { label: "Communication", value: "Serial / CAN bus" },
      { label: "Features", value: "Fault diagnostics, energy saving" },
      { label: "Suitable for", value: "Passenger, high-rise, capsule" },
      { label: "Drive", value: "Gearless / geared VVVF" },
    ],
    features: [
      "VVVF smooth speed control",
      "Serial / CAN communication",
      "Built-in fault diagnostics",
      "Energy-efficient operation",
    ],
    gallery: ["/products/microprocessor-control-panel-1.svg", "/products/microprocessor-control-panel-2.svg"], // real: microprocessor-control-panel-1.jpg, microprocessor-control-panel-2.jpg
  },
];

export const technology = {
  intro:
    "We use proven, reliable components sourced from trusted manufacturers to ensure long service life and safety.",
  items: [
    {
      icon: "⚙️",
      title: "Geared & Gearless Machines",
      desc: "Placeholder: describe the traction machines you commonly use (brand / type).",
    },
    {
      icon: "🧠",
      title: "VVVF Control System",
      desc: "Placeholder: microprocessor VVVF controller for smooth, energy-efficient rides.",
    },
    {
      icon: "🛡️",
      title: "Safety Gear & Governor",
      desc: "Placeholder: overspeed governor and progressive safety gear details.",
    },
    {
      icon: "🔩",
      title: "Guide Rails & Ropes",
      desc: "Placeholder: guide rail and steel wire rope specifications.",
    },
    {
      icon: "🚪",
      title: "Automatic Door Operators",
      desc: "Placeholder: door operator brand / type.",
    },
    {
      icon: "🔋",
      title: "ARD (Auto Rescue Device)",
      desc: "Placeholder: brings the lift to the nearest floor during power failure.",
    },
  ],
};

export const projects = [
  {
    title: "City Hospital, Lahore",
    type: "Hospital",
    product: "3 Passenger Elevators",
    image: "/projects/project-1.svg", // real: /projects/project-1.jpg
  },
  {
    title: "Grand Mall, Lahore",
    type: "Commercial",
    product: "2 Capsule Lifts",
    image: "/projects/project-2.svg", // real: /projects/project-2.jpg
  },
  {
    title: "ABC Textile Factory",
    type: "Industrial",
    product: "3-Ton Freight Lift",
    image: "/projects/project-3.svg", // real: /projects/project-3.jpg
  },
  {
    title: "Metro Superstore",
    type: "Commercial",
    product: "Passenger + Freight",
    image: "/projects/project-4.svg", // real: /projects/project-4.jpg
  },
  {
    title: "Sunrise Warehouse",
    type: "Industrial",
    product: "5-Ton Loader Lift",
    image: "/projects/project-5.svg", // real: /projects/project-5.jpg
  },
  {
    title: "Care Clinic",
    type: "Hospital",
    product: "1 Passenger Elevator",
    image: "/projects/project-6.svg", // real: /projects/project-6.jpg
  },
];

export const services = [
  {
    icon: "🛗",
    title: "Passenger Elevator",
    desc: "Smooth, safe, and stylish lifts designed for people — ideal for apartments, offices, hospitals, and commercial buildings. Available in various capacities and finishes.",
  },
  {
    icon: "📦",
    title: "Loader / Cargo Elevator",
    desc: "Heavy-duty lifts built for goods, equipment, and industrial loads. Robust construction with high weight capacity for warehouses, factories, and commercial complexes.",
  },
];

export const stats = [
  { target: 20, label: "Years Experience" },
  { target: 250, label: "Projects Done" },
  { target: 180, label: "Happy Clients" },
];

export const features = [
  { icon: "🛡️", title: "Safety First", desc: "All installations comply with international safety standards and local regulations." },
  { icon: "⚙️", title: "Expert Team", desc: "Certified engineers and technicians with years of hands-on experience." },
  { icon: "🔧", title: "24/7 Support", desc: "Round-the-clock maintenance and emergency repair services available." },
  { icon: "💎", title: "Premium Quality", desc: "Top-grade components and materials for long-lasting performance." },
];
