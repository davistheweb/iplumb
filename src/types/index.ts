import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType, SVGProps } from "react";

declare global {
  type IconType = ComponentType<
    SVGProps<SVGSVGElement> & {
      size?: number;
    }
  >;
  interface INavbarLinks {
    name: string;
    href: string;
  }
  interface INavLinksProps {
    children: React.ReactNode;
    href: string;
    handleNavClick?: () => void;
  }

  interface IServiceArticleLists {
    Icon: IconType;
    iconColor: string;
    title: string;
    subtitle: string;
    features: string[];
  }

  type TServicesArticleProps = IServiceArticleLists;
  interface IWhyChooseIplumbReasons {
    Icon: IconType;
    title: string;
    subtitle: string;
  }

  type TWhyChooseIplumbReasonsProps = IWhyChooseIplumbReasons;

  interface IPremiumComponentsLists {
    Icon: IconType;
    name: string;
    description: string;
    link: string;
  }

  type TPremiumComponentsListsProps = IPremiumComponentsLists;
  interface IReviewList {
    comment: string;
    by: string;
    position: string;
  }

  type TReviewListProps = IReviewList;

  interface IFooterLinks {
    name: string;
    href: string;
  }

  interface IPlumbingServices {
    Icon: IconType;
    img: StaticImport;
    service: string;
    description: string;
    link: string;
  }

  type TPlumbingServicesProps = IPlumbingServices;

  interface IStandardsList {
    Icon: IconType;
    standard: string;
    description: string;
  }

  type TStandardsCardProps = IStandardsList;
  interface IAboutMasters {
    masterImg: StaticImport;
    name: string;
    position: string;
    about: string;
  }

  type TAboutMastersCardProps = IAboutMasters;

  enum Category {
    ALL = "all",
    PIPES = "pipes",
    FITTING = "fitting",
    TOOLS = "tools",
  }
  interface IProductList {
    productImg: StaticImport;
    productName: string;
    price: number;
    about: string;
    category: Category;
    productLink: string;
  }
}
export {};
