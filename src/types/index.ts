import { ComponentType, SVGProps } from "react";
declare global {
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
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    iconColor: string;
    title: string;
    subtitle: string;
    features: string[];
  }

  type TServicesArticleProps = IServiceArticleLists;
  interface IWhyChooseIplumbReasons {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    subtitle: string;
  }

  type TWhyChooseIplumbReasonsProps = IWhyChooseIplumbReasons;

  interface IPremiumComponentsLists {
    Icon: ComponentType<
      SVGProps<SVGSVGElement> & {
        size?: number;
      }
    >;
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
}
export {};
