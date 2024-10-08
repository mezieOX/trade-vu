import React from "react";

// Define the props type for the ArrowFillDownIcon component
interface ArrowFillDownIconProps {
  className?: string;
  onClick?: () => void;
}

// Define the ArrowFillDownIcon component
export const ArrowFillDownIcon: React.FC<ArrowFillDownIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={className}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9467 5.45337H7.79333H4.05333C3.41333 5.45337 3.09333 6.2267 3.54667 6.68004L7 10.1334C7.55333 10.6867 8.45333 10.6867 9.00667 10.1334L10.32 8.82004L12.46 6.68004C12.9067 6.2267 12.5867 5.45337 11.9467 5.45337Z"
        fill="#292D32"
      />
    </svg>
  );
};
