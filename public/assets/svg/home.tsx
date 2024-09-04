import React from "react";

// TypeScript interface for the component props
interface HomeIconProps {
  className?: string; // Optional className for styling
}

// HomeIcon component
export const HomeIcon: React.FC<HomeIconProps> = ({ className }) => {
  return (
    <svg
      width={25} // SVG width
      height={26} // SVG height
      className={className} // Optional className for custom styling
      viewBox="0 0 25 26" // SVG view box dimensions
      fill="none" // No fill by default
      xmlns="http://www.w3.org/2000/svg" // SVG namespace
    >
      <path
        d="M21.7696 10.01L15.2196 4.77002C13.9396 3.75002 11.9396 3.74002 10.6696 4.76002L4.11963 10.01C3.17963 10.76 2.60963 12.26 2.80963 13.44L4.06963 20.98C4.35963 22.67 5.92963 24 7.63963 24H18.2396C19.9296 24 21.5296 22.64 21.8196 20.97L23.0796 13.43C23.2596 12.26 22.6896 10.76 21.7696 10.01ZM13.6896 20C13.6896 20.41 13.3496 20.75 12.9396 20.75C12.5296 20.75 12.1896 20.41 12.1896 20V17C12.1896 16.59 12.5296 16.25 12.9396 16.25C13.3496 16.25 13.6896 16.59 13.6896 17V20Z"
        fill="currentColor" // Use currentColor for inheriting text color
      />
    </svg>
  );
};
