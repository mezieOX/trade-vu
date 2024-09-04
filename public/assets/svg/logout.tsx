import React from "react";

interface LogoutIconProps {
  className?: string;
}

export const LogoutIcon: React.FC<LogoutIconProps> = ({ className = "" }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        opacity="0.4"
        d="M6.75 5.4V12.5925C6.75 15 8.25 16.5 10.65 16.5H12.5925C14.9925 16.5 16.4925 15 16.4925 12.6V5.4C16.5 3 15 1.5 12.6 1.5H10.65C8.25 1.5 6.75 3 6.75 5.4Z"
        fill="currentColor"
      />
      <path
        d="M4.1775 6.09001L1.665 8.60251C1.4475 8.82001 1.4475 9.18001 1.665 9.39751L4.1775 11.91C4.395 12.1275 4.755 12.1275 4.9725 11.91C5.19 11.6925 5.19 11.3325 4.9725 11.115L3.42 9.56251H11.4375C11.745 9.56251 12 9.30751 12 9.00001C12 8.69251 11.745 8.43751 11.4375 8.43751H3.42L4.9725 6.88502C5.085 6.77251 5.1375 6.63001 5.1375 6.48751C5.1375 6.34501 5.085 6.19501 4.9725 6.09001C4.755 5.86501 4.4025 5.86501 4.1775 6.09001Z"
        fill="currentColor"
      />
    </svg>
  );
};
