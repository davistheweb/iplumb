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
}
export {};
