import React from "react";

// Define the props type for the ArrowDownIcon component
interface ArrowDownIconProps {
  className?: string;
}

// Define the ArrowDownIcon component
export const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667"
        stroke="#292D32"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

