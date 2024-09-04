import React from "react";

interface OrderIconProps {
  className?: string;
}

export const OrderIcon: React.FC<OrderIconProps> = ({ className }) => {
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
        d="M2.3775 5.58002L8.99999 9.41251L15.5775 5.60249"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.2075V9.40497"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.79251 6.87749C1.79251 5.84249 2.535 4.58251 3.4425 4.08001L7.44749 1.85248C8.30249 1.37998 9.70499 1.37998 10.56 1.85248L14.565 4.08001C15.4725 4.58251 16.215 5.84249 16.215 6.87749V11.115C16.215 12.15 15.4725 13.41 14.565 13.9125L10.56 16.14C9.70499 16.6125 8.30249 16.6125 7.44749 16.14L3.4425 13.9125C2.535 13.41 1.79251 12.15 1.79251 11.115V10.5"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 9.92996V7.18498L8.19749 4.55247L7.41 4.10245L5.63251 3.07495"
        stroke="#667085"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
