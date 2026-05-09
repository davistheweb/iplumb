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
    Img: StaticImport;
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

  interface IFooterSocialLinks {
    Icon : IconType
    href: string
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

  interface IProductList {
    productImg: StaticImport;
    productName: string;
    price: number;
    about?: string;
    productCategory: ProductCategory;
    productLink: string;
  }

  type TProductCardProps = Omit<IProductList, "productCategory">;

  interface ICategoryList extends Pick<IProductList, "productCategory"> {
    categoryName: string;
  }
}

enum ProductCategory {
  ALL = "all",
  PIPES = "pipes",
  FITTING = "fitting",
  ACCESSORIES = "accessories",
  TOOLS = "tools",
}
export { ProductCategory };
