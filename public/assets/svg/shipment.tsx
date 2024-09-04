import React from "react";

interface ShipmentIconProps {
  className?: string;
}

export const ShipmentIcon: React.FC<ShipmentIconProps> = ({ className }) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.83248 15.345C2.95498 14.6175 2.35499 13.59 2.08499 12.39L1.77749 10.995C1.62749 10.3125 2.03248 9.54001 2.68498 9.27751L3.74999 8.85L7.8825 7.19251C8.6025 6.90751 9.39748 6.90751 10.1175 7.19251L14.25 8.85L15.315 9.27751C15.9675 9.54001 16.3725 10.3125 16.2225 10.995L15.915 12.39C15.3825 14.79 13.5 16.5 10.785 16.5H7.21499"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5V7.5"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 6V8.84999L10.1175 7.1925C9.39749 6.9075 8.60251 6.9075 7.88251 7.1925L3.75 8.84999V6C3.75 4.7625 4.7625 3.75 6 3.75H12C13.2375 3.75 14.25 4.7625 14.25 6Z"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.875 3.75H7.125V2.25C7.125 1.8375 7.4625 1.5 7.875 1.5H10.125C10.5375 1.5 10.875 1.8375 10.875 2.25V3.75Z"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
