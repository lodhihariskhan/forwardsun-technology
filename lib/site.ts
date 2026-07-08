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
  whatsappDisplay: "+92 330 5259922",
  whatsappNumber: "923305259922",
  callDisplay: "+92 330 5259922",
  callHref: "tel:+923305259922",
  location: "DHA Rahbar, Lahore",
  mapHref: "https://www.google.com/maps/search/?api=1&query=DHA%20Rahbar%2C%20Lahore",
  workingHours: "Mon-Sat, 10:00 AM - 5:00 PM",
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
    description: "We review monthly units, usage patterns, and backup needs before sizing options.",
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
      "The right system depends on your electricity bill, monthly units, load requirement, roof space, backup needs, and budget. ForwardSun reviews these details before recommending an on-grid, hybrid, or backup-focused solar solution.",
  },
  {
    question: "Should I choose on-grid, off-grid, or hybrid solar?",
    answer:
      "On-grid solar is usually best for reducing electricity bills and may support net metering where eligible. Hybrid solar is better when you also need battery backup during load-shedding. Off-grid solar is mainly used where grid supply is unavailable or highly unreliable.",
  },
  {
    question: "What is net metering and can ForwardSun guide me?",
    answer:
      "Net metering allows eligible solar users to export extra electricity back to the grid and receive adjustment through the electricity bill, subject to utility and regulatory approval. ForwardSun can guide you on whether your system may be suitable for net metering and help you understand the basic process.",
  },
  {
    question: "Do I need a single-phase or three-phase solar system?",
    answer:
      "This depends on your existing electricity connection and load. Many homes use single-phase supply, while larger homes, commercial buildings, and businesses often use three-phase supply. During assessment, we check your meter, load, appliances, and future usage before recommending the right inverter type.",
  },
  {
    question: "What is a hybrid solar system?",
    answer:
      "A hybrid solar system combines solar panels, a hybrid inverter, and batteries. It helps reduce electricity bills while also providing backup during load-shedding. It usually costs more than a basic on-grid system, but it is useful for homes and businesses that need reliable backup.",
  },
  {
    question: "Do solar panels need maintenance?",
    answer:
      "Yes. Solar panels should be cleaned regularly and the system should be inspected for dust buildup, wiring issues, inverter alerts, reduced generation, and safety concerns. If your solar output suddenly drops, it is better to schedule a professional inspection.",
  },
  {
    question: "What protection equipment is needed in a solar system?",
    answer:
      "A properly planned solar system should include suitable breakers, surge protection, isolators, earthing, wiring, and protection devices. These help protect the panels, inverter, batteries, and appliances from faults, surges, and unsafe conditions.",
  },
  {
    question: "How can I get a solar estimate from ForwardSun?",
    answer:
      "You can request a free assessment by sharing your monthly electricity bill, location, property type, and backup needs. ForwardSun will review the details and guide you with a suitable system recommendation.",
  },
];

export const brandIcon = SunMedium;
