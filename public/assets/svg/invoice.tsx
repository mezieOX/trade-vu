import React from "react";

interface InvoiceIconProps {
  className?: string;
}

export const InvoiceIcon: React.FC<InvoiceIconProps> = ({ className }) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.33334 8.65337V10C1.33334 13.3334 2.66668 14.6667 6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3334 14.6667 10V6.00004C14.6667 2.66671 13.3333 1.33337 10 1.33337H6.00001C2.66668 1.33337 1.33334 2.66671 1.33334 6.00004"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 6H5.5"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10H5.5"
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
