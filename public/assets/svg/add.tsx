import React from "react";

// Define the props interface for the AddIcon component
interface AddIconProps {
  className?: string;
}

// Functional component for rendering an "Add" icon
export const AddIcon: React.FC<AddIconProps> = ({
  className = "text-primary fill-current",
}) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
        fill="currentColor" // Use currentColor to allow for easier styling with CSS
      />
      <path
        d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
        fill="currentColor" // Use currentColor to allow for easier styling with CSS
      />
    </svg>
  );
};
