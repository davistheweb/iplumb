import { SVGProps } from "react";

interface SealedPipeIconProps extends SVGProps<SVGSVGElement> {
  size?: `${number}` | number;
  color?: string;
}

const SealedPipeIcon = ({
  size = 24,
  color = "#111827",
  ...props
}: SealedPipeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 60V6C0 4.35 0.5875 2.9375 1.7625 1.7625C2.9375 0.5875 4.35 0 6 0H42C43.65 0 45.0625 0.5875 46.2375 1.7625C47.4125 2.9375 48 4.35 48 6V60H0ZM6 54H42V6H6V54ZM34.5 34.5C35.75 34.5 36.8125 34.0625 37.6875 33.1875C38.5625 32.3125 39 31.25 39 30C39 28.75 38.5625 27.6875 37.6875 26.8125C36.8125 25.9375 35.75 25.5 34.5 25.5C33.25 25.5 32.1875 25.9375 31.3125 26.8125C30.4375 27.6875 30 28.75 30 30C30 31.25 30.4375 32.3125 31.3125 33.1875C32.1875 34.0625 33.25 34.5 34.5 34.5ZM6 54V6V54Z"
        fill={color}
      />
    </svg>
  );
};

export default SealedPipeIcon;
