import React from "react";

interface UserIconProps {
  className?: string;
}

export const UserIcon: React.FC<UserIconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        opacity="0.4"
        d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
        fill="#98A2B3"
      />
      <path
        d="M2.5575 16.5C2.5575 13.6665 5.3787 11.25 9 11.25C12.6213 11.25 15.4425 13.6665 15.4425 16.5H2.5575Z"
        fill="#98A2B3"
        stroke="#98A2B3"
        strokeWidth="0.75"
      />
    </svg>
  );
};
