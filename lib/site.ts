import {
  Building2,
  Car,
  ClipboardCheck,
  Handshake,
  Home,
  LifeBuoy,
  PlugZap,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react";

export const site = {
  name: "ForwardSun Technology",
  domain: "forwardsuntechnology.com",
  url: "https://forwardsuntechnology.com",
  whatsappDisplay: "+92 300 7761971",
  whatsappNumber: "923007761971",
  callDisplay: "+92 330 5259922",
  callHref: "tel:+923305259922",
  location: "DHA Rahbar, Lahore",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const services = [
  {
    title: "Residential Solar Solutions",
    description:
      "Solar systems planned around household usage, available roof space, backup needs, and long-term savings.",
    icon: Home,
  },
  {
    title: "Commercial Solar Solutions",
    description:
      "Reliable solar planning for offices, shops, warehouses, and business sites with practical energy goals.",
    icon: Building2,
  },
  {
    title: "Hybrid Solar & Battery Backup",
    description:
      "Hybrid solutions that combine solar production with battery backup for more dependable power.",
    icon: Zap,
  },
  {
    title: "EV Charger Installation",
    description:
      "EV charger planning and installation support for homes and businesses preparing for electric mobility.",
    icon: Car,
  },
  {
    title: "Maintenance & After-Sales Support",
    description:
      "Professional inspection, maintenance, warranty guidance, and after-sales care for installed systems.",
    icon: Wrench,
  },
];

export const technologyCategories = [
  "Solar Panels",
  "Inverters",
  "Batteries",
  "EV Chargers",
];

export const whyChoose = [
  { title: "Proper solar assessment", icon: ClipboardCheck },
  { title: "Reliable product selection", icon: ShieldCheck },
  { title: "Clean installation work", icon: PlugZap },
  { title: "Transparent quotation", icon: Handshake },
  { title: "Warranty and after-sales support", icon: LifeBuoy },
];

export const processSteps = [
  {
    title: "Request assessment",
    description: "Start with your contact details, location, and basic power requirement.",
  },
  {
    title: "Usage and bill review",
    description: "We review bill range, unit usage, and backup needs before sizing options.",
  },
  {
    title: "Site assessment",
    description: "Roof or site conditions are checked for layout, space, and installation scope.",
  },
  {
    title: "Custom quotation",
    description: "You receive a practical quotation based on usage, products, and warranty needs.",
  },
  {
    title: "Installation",
    description: "The system is installed with clean routing, proper equipment placement, and checks.",
  },
  {
    title: "After-sales support",
    description: "Support continues through maintenance guidance, warranty help, and system care.",
  },
];

export const painPoints = [
  "High electricity bills",
  "Load-shedding and backup issues",
  "Rising energy costs",
  "Poor system planning",
];

export const trustItems = [
  "A-Grade Products",
  "Professional Installation",
  "Warranty Support",
  "After-Sales Care",
];

export const footerServices = [
  "Residential Solar",
  "Commercial Solar",
  "Hybrid Solar & Battery Backup",
  "EV Charger Installation",
  "Maintenance & Support",
];

export const footerProducts = [
  "Solar Panels",
  "Inverters",
  "Lithium-Ion Batteries",
  "EV Chargers",
  "BOS & Protection",
  "Mounting Structures",
];

export const faqs = [
  {
    question: "How do I know which solar system is right for my home or business?",
    answer:
      "ForwardSun Technology reviews your electricity usage, site conditions, backup requirement, and budget before recommending a suitable solar system.",
  },
  {
    question: "Do you provide both residential and commercial solar systems?",
    answer:
      "Yes. We provide solar solutions for homes, shops, offices, schools, warehouses, and commercial locations.",
  },
  {
    question: "Can I add battery backup with my solar system?",
    answer:
      "Yes. We provide hybrid solar systems with lithium or tubular battery options based on your backup requirement.",
  },
  {
    question: "Do you provide installation and after-sales support?",
    answer:
      "Yes. We provide professional installation, warranty support, maintenance guidance, and after-sales care.",
  },
  {
    question: "Do you offer EV charger solutions?",
    answer:
      "Yes. We provide EV charger options for homes, offices, and commercial locations based on requirement and availability.",
  },
  {
    question: "What information is needed for a solar estimate?",
    answer:
      "Basic location details, electricity usage, monthly bill range, available space, and backup requirement help us prepare a better estimate. For a more accurate estimate, our team may request your latest electricity bill or monthly unit usage.",
  },
];

export const brandIcon = SunMedium;
