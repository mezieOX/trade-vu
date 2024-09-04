import React from "react";

// Define the type for the ButtonComp props
interface ButtonCompProps {
  title: string; // Text to display on the button
  onClick: () => void; // Function to call when the button is clicked
  className?: string; // Additional classes to apply to the button
  icon?: React.ReactNode; // Optional icon to display before the title
  iconClass?: string;
}

// Functional component for ButtonComp
export const ButtonComp: React.FC<ButtonCompProps> = ({
  title,
  onClick,
  className = "",
  icon,
  iconClass,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary/10 px-6 py-2 duration-300 ease-linear rounded-md flex items-center gap-2 ${className}`}
    >
      {icon && <span className={`mr-2 ${iconClass}`}>{icon}</span>}
      {title}
    </button>
  );
};
