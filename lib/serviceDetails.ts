import {
  BatteryCharging,
  Building2,
  Car,
  Home,
  LifeBuoy,
} from "lucide-react";

export const serviceDetails = [
  {
    title: "Residential Solar Solutions",
    overview:
      "Home solar planning for lower bills, practical backup options, and cleaner long-term energy use.",
    description:
      "Solar systems for homes, villas, and residential properties designed to reduce electricity costs and improve energy independence.",
    bestFor: ["Homes", "Villas", "Apartments", "Backup Needs"],
    handles: [
      "Electricity usage review",
      "System size recommendation",
      "Solar panel and inverter planning",
      "Battery backup option if required",
      "Installation and after-sales support",
    ],
    outcome:
      "A properly planned home solar system based on usage, budget, and backup requirement.",
    icon: Home,
  },
  {
    title: "Commercial Solar Solutions",
    overview:
      "Solar planning for business sites that need better cost control and reliable energy support.",
    description:
      "Solar planning and installation for shops, offices, schools, warehouses, and commercial locations looking to control electricity costs.",
    bestFor: ["Shops", "Offices", "Schools", "Warehouses", "Commercial Buildings"],
    handles: [
      "Load and usage review",
      "Commercial system sizing",
      "Roof/site feasibility",
      "Product recommendation",
      "Installation planning and support",
    ],
    outcome: "A scalable solar solution for business energy savings and long-term reliability.",
    icon: Building2,
  },
  {
    title: "Hybrid Solar & Battery Backup",
    overview:
      "Hybrid solar and battery planning for customers who need savings plus backup power.",
    description:
      "Hybrid solar systems for customers who need backup power during load-shedding and better control over energy usage.",
    bestFor: ["Load-shedding", "Backup Power", "Hybrid Systems", "Lithium Batteries"],
    handles: [
      "Backup requirement review",
      "Hybrid inverter planning",
      "Lithium-ion or suitable battery option",
      "Essential load planning",
      "System monitoring and support",
    ],
    outcome: "A solar system designed for both savings and reliable backup power.",
    icon: BatteryCharging,
  },
  {
    title: "EV Charger Installation",
    overview:
      "EV charging setup guidance for homes, offices, and commercial charging needs.",
    description:
      "EV charging solutions for homes, offices, and commercial locations based on available power, site conditions, and charging requirement.",
    bestFor: [
      "Home EV Charging",
      "Office Charging",
      "Commercial Charging",
      "Level 2 / Level 3 Options",
    ],
    handles: [
      "Site and power review",
      "Charger type recommendation",
      "Installation planning",
      "Protection and wiring guidance",
      "Support after installation",
    ],
    outcome: "A safer and more convenient EV charging setup based on actual requirement.",
    icon: Car,
  },
  {
    title: "Maintenance & After-Sales Support",
    overview:
      "Inspection, troubleshooting, and support to keep installed solar systems performing well.",
    description:
      "Solar system inspection, troubleshooting, maintenance guidance, warranty support, and replacement support for long-term performance.",
    bestFor: [
      "Existing Solar Systems",
      "Performance Issues",
      "Warranty Support",
      "System Care",
    ],
    handles: [
      "System inspection",
      "Performance review",
      "Wiring and protection checks",
      "Inverter/battery issue guidance",
      "Maintenance and replacement support",
    ],
    outcome: "Better system reliability, cleaner operation, and long-term customer support.",
    icon: LifeBuoy,
  },
];
