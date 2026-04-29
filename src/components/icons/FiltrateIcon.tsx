import { SVGProps } from "react";

interface FiltrateIconProps extends SVGProps<SVGSVGElement> {
  size?: `${number}` | number;
  color?: string;
}

const FiltrateIcon = ({
  size = 24,
  color = "#111827",
  ...props
}: FiltrateIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 66 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.925 45H47.925V18.975L32.925 7.5L17.925 18.975V45ZM11.925 51V23.55L3.525 30L0 25.275L32.925 0L65.925 25.2L62.325 30L53.925 23.55V51H11.925ZM32.925 39C34.575 39 35.9875 38.4125 37.1625 37.2375C38.3375 36.0625 38.925 34.65 38.925 33C38.925 31.65 38.55 30.2125 37.8 28.6875C37.05 27.1625 35.425 24.6 32.925 21C30.425 24.6 28.8 27.1625 28.05 28.6875C27.3 30.2125 26.925 31.65 26.925 33C26.925 34.65 27.5125 36.0625 28.6875 37.2375C29.8625 38.4125 31.275 39 32.925 39Z"
        fill={color}
      />
    </svg>
  );
};

export default FiltrateIcon;
