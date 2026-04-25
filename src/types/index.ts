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
}
export {};
