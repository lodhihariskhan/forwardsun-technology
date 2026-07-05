import {
  BatteryCharging,
  Car,
  Grid2X2,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductItem = {
  name: string;
  logo?: string;
};

export type ProductCategory = {
  title: string;
  description: string;
  items: ProductItem[];
  icon: LucideIcon;
};

export type ProductEcosystemItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductGroup = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

export const productPreviewCategories: ProductCategory[] = [
  {
    title: "Solar Panels",
    description: "High-performance panel options selected around project size and warranty needs.",
    icon: PanelsTopLeft,
    items: [
      { name: "LONGi", logo: "/brands/panels/longi.png" },
      { name: "Jinko Solar", logo: "/brands/panels/jinko.png" },
      { name: "Canadian Solar", logo: "/brands/panels/canadian-solar.png" },
      { name: "Trina Solar", logo: "/brands/panels/trina.png" },
      { name: "JA Solar", logo: "/brands/panels/ja-solar.png" },
    ],
  },
  {
    title: "Inverters",
    description: "On-grid and hybrid inverter options for efficient system performance.",
    icon: Zap,
    items: [
      { name: "Solis", logo: "/brands/inverters/solis.png" },
      { name: "GoodWe", logo: "/brands/inverters/goodwe.png" },
      { name: "Huawei", logo: "/brands/inverters/huawei.png" },
      { name: "Inverex", logo: "/brands/inverters/inverex.png" },
      { name: "Knox", logo: "/brands/inverters/knox.png" },
      { name: "Nitrox", logo: "/brands/inverters/nitrox.png" },
    ],
  },
  {
    title: "Lithium-Ion Batteries",
    description: "Battery options for backup power, hybrid systems, and energy storage.",
    icon: BatteryCharging,
    items: [
      { name: "Dyness", logo: "/brands/batteries/dyness.png" },
      { name: "Pylontech", logo: "/brands/batteries/pylontech.png" },
      { name: "Narada", logo: "/brands/batteries/narada.png" },
      { name: "Inverex", logo: "/brands/batteries/inverex.png" },
      { name: "Knox", logo: "/brands/batteries/knox.png" },
    ],
  },
  {
    title: "EV Chargers",
    description: "EV charging options for homes, offices, and commercial locations.",
    icon: Car,
    items: [
      { name: "Schneider Electric", logo: "/brands/ev-chargers/schneider-electric.png" },
      { name: "Huawei", logo: "/brands/ev-chargers/huawei.png" },
      { name: "ABB", logo: "/brands/ev-chargers/abb.png" },
      { name: "Level 2 EV Chargers" },
      { name: "Level 3 EV Chargers" },
    ],
  },
  {
    title: "BOS & Protection Equipment",
    description:
      "AC/DC wiring, breakers, isolators, SPDs, earthing, DB boxes, MC4 connectors, cable trays, conduits, and protection panels selected according to system safety and installation requirements.",
    icon: ShieldCheck,
    items: [
      { name: "AC/DC wiring" },
      { name: "Breakers" },
      { name: "Isolators" },
      { name: "SPDs" },
      { name: "Earthing" },
      { name: "DB boxes" },
      { name: "MC4 connectors" },
      { name: "Cable trays" },
      { name: "Conduits" },
      { name: "Protection panels" },
    ],
  },
  {
    title: "Mounting Structures",
    description:
      "Elevated structures, GI/iron structures, aluminium structures, roof mounting, and commercial mounting options selected according to roof type, structure strength, airflow, and site conditions.",
    icon: Grid2X2,
    items: [
      { name: "Elevated structures" },
      { name: "GI/iron structures" },
      { name: "Aluminium structures" },
      { name: "Roof mounting" },
      { name: "Commercial mounting" },
    ],
  },
];

export const productEcosystem: ProductEcosystemItem[] = [
  {
    title: "Energy Generation",
    description: "Solar panels and mounting structures form the generation side of the system.",
    icon: PanelsTopLeft,
  },
  {
    title: "Power Conversion",
    description: "On-grid and hybrid inverters convert solar production into usable power.",
    icon: Zap,
  },
  {
    title: "Backup & Storage",
    description: "Lithium-ion batteries and backup planning support essential loads when needed.",
    icon: BatteryCharging,
  },
  {
    title: "Safety & Protection",
    description: "BOS, wiring, breakers, SPDs, earthing, and DB boxes support safer operation.",
    icon: ShieldCheck,
  },
];

export const productGroups: ProductGroup[] = [
  {
    title: "Core Solar Equipment",
    description:
      "Main equipment used to generate, convert, store, and deliver solar energy for residential and commercial systems.",
    icon: PanelsTopLeft,
    items: [
      "Solar Panels",
      "On-Grid Inverters",
      "Hybrid Inverters",
      "Lithium-Ion Batteries",
      "EV Chargers",
    ],
  },
  {
    title: "BOS & Protection Equipment",
    description:
      "AC/DC wiring, breakers, isolators, SPDs, earthing, DB boxes, MC4 connectors, cable trays, conduits, and protection panels selected according to system safety and installation requirements.",
    icon: ShieldCheck,
    items: [
      "AC/DC Wiring",
      "Breakers & Isolators",
      "SPDs & Surge Protection",
      "Earthing & Safety",
      "DB Boxes & Protection Panels",
      "MC4 Connectors",
      "Cable Trays & Conduits",
      "Monitoring Devices",
    ],
  },
  {
    title: "Mounting Structures",
    description:
      "Elevated structures, GI/iron structures, aluminium structures, roof mounting, and commercial mounting options selected according to roof type, structure strength, airflow, and site conditions.",
    icon: Grid2X2,
    items: [
      "Elevated Structures",
      "Iron / GI Structures",
      "Aluminium Structures",
      "Roof Mounting",
      "Commercial Mounting",
    ],
  },
  {
    title: "Support & Replacement",
    description:
      "Support options for customers who need system care, troubleshooting, replacement components, or after-sales guidance.",
    icon: Wrench,
    items: [
      "Maintenance Parts",
      "Replacement Components",
      "Troubleshooting Support",
      "Warranty Support",
      "After-Sales Care",
    ],
  },
];
