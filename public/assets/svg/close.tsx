import React from "react";

interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

export const CloseIcon = ({ className = "", onClick }: CloseIconProps) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8.45752 23.5425L23.5425 8.45754"
        stroke="#292D32"
        strokeWidth="2.82843"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5425 23.5425L8.45752 8.45752"
        stroke="#292D32"
        strokeWidth="2.82843"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
