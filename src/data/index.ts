import EstimatesIcon from "@/components/icons/EstimatesIcon";
import FiltrateIcon from "@/components/icons/FiltrateIcon";
import MixerIcon from "@/components/icons/MixerIcon";
import PlumberBuildingIcon from "@/components/icons/PlumberBuildingIcon";
import PlumberSpannerIcon from "@/components/icons/PlumberSpannerIcon";
import PlumberWrenchesIcon from "@/components/icons/PlumberWrenchesIcon";
import SealedPipeIcon from "@/components/icons/SealedPipeIcon";
import TrustCheckIcon from "@/components/icons/TrustCheckIcon";
import WarrantyIcon from "@/components/icons/WarrantyIcon";
import { HeaterIcon } from "lucide-react";

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

const WhyChooseIplumbReasons: IWhyChooseIplumbReasons[] = [
  {
    Icon: TrustCheckIcon,
    title: "Certified Precision",
    subtitle:
      "Every technician is fully licensed and undergoes rigorous safety training. We don't just fix; we engineer for longevity.",
  },
  {
    Icon: EstimatesIcon,
    title: "Transparent Estimates",
    subtitle:
      'No hidden fees or "surprise" surcharges. You receive a detailed line-item quote before any work begins on your property.',
  },
  {
    Icon: WarrantyIcon,
    title: "Heritage Warranty",
    subtitle:
      "We stand by our craftsmanship with a multi-year warranty on all structural and plumbing labor.",
  },
];

const PremiumComponentsLists: IPremiumComponentsLists[] = [
  {
    Icon: MixerIcon,
    name: "Premium Line",
    description: "Elite Series Mixer",
    link: "#",
  },
  {
    Icon: HeaterIcon,
    name: "EFFICIENCY PLUS",
    description: "Smart Water Heater",
    link: "#",
  },
  {
    Icon: FiltrateIcon,
    name: "MAINTENANCE",
    description: "Flitration Core V3",
    link: "#",
  },
  {
    Icon: SealedPipeIcon,
    name: "STRUCTURAL",
    description: "Sealed Pipe KitII",
    link: "#",
  },
];

const ReviewList: IReviewList[] = [
  {
    comment:
      "\"The most professional plumbing firm I've worked with. They managed our commercial building's system overhaul with absolute precision and kept us updated at every step.\"",
    by: "Sarah Jenkins",
    position: "Facility Manager, Nexus Corp",
  },
  {
    comment:
      '"Prompt, courteous, and efficient. Iplumb handled our bathroom renovation flawlessly. The quality of the construction work is simply unmatched in the local area."',
    by: "Michael Thorne",
    position: "Homeowner, River Oaks",
  },
];

export {
  NavbarLinks,
  ServiceArticleLists,
  WhyChooseIplumbReasons,
  PremiumComponentsLists,
  ReviewList
};
