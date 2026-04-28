import PlumberBuildingIcon from "@/components/icons/PlumberBuildingIcon";
import PlumberSpannerIcon from "@/components/icons/PlumberSpannerIcon";
import PlumberWrenchesIcon from "@/components/icons/PlumberWrenchesIcon";

const NavbarLinks: INavbarLinks[] = [
  {
    name: "SERVICES",
    href: "/services",
  },
  {
    name: "PRODUCTS",
    href: "/products",
  },
  { name: "COMMERCIAL", href: "/commercial" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const ServiceArticleLists: IServiceArticleLists[] = [
  {
    Icon: PlumberWrenchesIcon,
    iconColor: "#002046",
    title: "Residential Plumbing",
    subtitle:
      "Specialized leak detection, fixture installation, and water heater maintenance with zero-mess guarantee.",
    features: ["24/7 Emergency Support", "Advanced Pipe Relining"],
  },
  {
    Icon: PlumberBuildingIcon,
    iconColor: "#AF2B3E",
    title: "Commercial Systems",
    subtitle:
      "High-capacity plumbing and structural maintenance for office complexes and industrial facilities.",
    features: ["Compliance Audits", "System Upgrades"],
  },
  {
    Icon: PlumberSpannerIcon,
    iconColor: "#361900",
    title: "Construction & Renovation",
    subtitle:
      "Expert structural changes and full bathroom/kitchen remodeling from design to final inspection.",
    features: ["Full Permit Handling", "Architectural Layouts"],
  },
];

export { NavbarLinks, ServiceArticleLists };
