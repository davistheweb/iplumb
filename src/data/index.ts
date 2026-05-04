import {
  AcryLicBathtub,
  BrimixShowerMixer,
  BrimixShowerSet,
  EmergencyRepairImage,
  JacuzziBathtub,
  MstDavid,
  MstMarcus,
  MstSarah,
  PreventiveCareImg,
  SoapDishHolder,
  SysInstallImg,
} from "@/assets";
import BookCheckIcon from "@/components/icons/BookCheckIcon";
import CertifiedIcon from "@/components/icons/CertifiedIcon";
import EstimatesIcon from "@/components/icons/EstimatesIcon";
import FiltrateIcon from "@/components/icons/FiltrateIcon";
import GuaranteedIcon from "@/components/icons/GuaranteedIcon";
import MixerIcon from "@/components/icons/MixerIcon";
import PlumberBuildingIcon from "@/components/icons/PlumberBuildingIcon";
import PlumberSpannerIcon from "@/components/icons/PlumberSpannerIcon";
import PlumberWrenchesIcon from "@/components/icons/PlumberWrenchesIcon";
import PunctualIcon from "@/components/icons/PunctualIcon";
import SealedPipeIcon from "@/components/icons/SealedPipeIcon";
import SpannerIcon from "@/components/icons/SpannerIcon";
import TransparentIcon from "@/components/icons/TransparentIcon";
import TrustCheckIcon from "@/components/icons/TrustCheckIcon";
import WarrantyIcon from "@/components/icons/WarrantyIcon";
import { ProductCategory } from "@/types";
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
  // { name: "COMMERCIAL", href: "/commercial" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const MobileNavbarLink: INavbarLinks[] = [
  ...NavbarLinks,
  { name: "Request Quote", href: "/book-service" },
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

const FooterLinks: IFooterLinks[] = [
  {
    name: "Privacy Policy",
    href: "#",
  },
  { name: "Terms of Service", href: "#" },
  { name: "Safety Standards", href: "#" },
  { name: "Warranty Info", href: "#" },
];

const PlumbingServicesLists: IPlumbingServices[] = [
  {
    Icon: SpannerIcon,
    img: EmergencyRepairImage,
    service: "Emergency Repairs",
    description:
      "Rapid response for leak detection, pipe bursts, and fixture failures. 24/7 priority service for critical issues.",
    link: "/book-service",
  },
  {
    Icon: PlumberSpannerIcon,
    img: SysInstallImg,
    service: "System Installation",
    description:
      "Expert installation of water heaters, filtration systems, and premium bathroom/kitchen fixtures.",
    link: "/book-service",
  },
  {
    Icon: BookCheckIcon,
    img: PreventiveCareImg,
    service: "Preventive Care",
    description:
      "Scheduled inspections and maintenance to prevent costly future failures and optimize system efficiency.",
    link: "/book-service",
  },
];

const StandardsList: IStandardsList[] = [
  {
    Icon: CertifiedIcon,
    standard: "Certified",
    description: "Fully licensed and bonded professionals.",
  },
  {
    Icon: PunctualIcon,
    standard: "Punctual",
    description: "On-time arrival and strict project deadlines.",
  },
  {
    Icon: TransparentIcon,
    standard: "Transparent",
    description: "Clear, upfront pricing with no hidden fees.",
  },
  {
    Icon: GuaranteedIcon,
    standard: "Guaranteed",
    description: "Industry-leading warranties on all parts and labor.",
  },
];

const AboutMasters: IAboutMasters[] = [
  {
    masterImg: MstMarcus,
    name: "Marcus Thorne",
    position: "Operations Director",
    about:
      "Strategic lead for all major commercial infrastructures and logistics management.",
  },
  {
    masterImg: MstSarah,
    name: "Sarah Chen",
    position: "Lead Systems Engineer",
    about:
      "Expert in hydraulic modeling and sustainable water management systems.",
  },
  {
    masterImg: MstDavid,
    name: "David Russo",
    position: "Master Field Specialist",
    about:
      "30 years of on-site experience, specializing in heritage property restoration.",
  },
];

const ProductsList: IProductList[] = [
  {
    productImg: AcryLicBathtub,
    productName: "Black freestanding acrylic bathtub",
    price: 380000,

    productCategory: ProductCategory.FITTING,
    productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  },
  {
    productImg: JacuzziBathtub,
    productName: "White rectangular Couple Massage Jacuzzi bathtub",
    price: 750000,

    productCategory: ProductCategory.FITTING,
    productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  },
  {
    productImg: BrimixShowerMixer,
    productName: "Black Brimix Shower Mixer Set",
    price: 37000,

    productCategory: ProductCategory.TOOLS,
    productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  },
  {
    productImg: BrimixShowerSet,
    productName: "Brimiz Anti-rust Showerset",
    price: 32000,

    productCategory: ProductCategory.FITTING,
    productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  },
  {
    productImg: SoapDishHolder,
    productName: "Soap Dish Holder",
    price: 4500,

    productCategory: ProductCategory.FITTING,
    productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  },
  // {
  //   productImg: FaucetImg,
  //   productName: "Titan Kitchen Mixer",
  //   price: 345.0,
  //   about: "Modern kitchen faucet with smooth control and premium finish.",
  //   productCategory: ProductCategory.FITTING,
  //   productLink: "https://store.aliconnects.com/vendor.php?slug=iplumb-store",
  // },
];

const CategoryList: ICategoryList[] = [
  {
    categoryName: "All Products",
    productCategory: ProductCategory.ALL,
  },
  {
    categoryName: "Pipes",
    productCategory: ProductCategory.PIPES,
  },
  { categoryName: "Fittings", productCategory: ProductCategory.FITTING },
  {
    categoryName: "Tools",
    productCategory: ProductCategory.TOOLS,
  },
];

export {
  AboutMasters,
  CategoryList,
  FooterLinks,
  MobileNavbarLink,
  NavbarLinks,
  PlumbingServicesLists,
  PremiumComponentsLists,
  ProductsList,
  ReviewList,
  ServiceArticleLists,
  StandardsList,
  WhyChooseIplumbReasons,
};
