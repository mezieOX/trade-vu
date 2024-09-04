import React from "react";
import { NavBar } from "../_components";

// Define the props for the Layout component
interface LayoutProps {
  children: React.ReactNode; // Type for children prop
  childrenClass?: string;
}

// Layout component definition
export const Layout: React.FC<LayoutProps> = ({ children, childrenClass }) => {
  return (
    <>
      {/* Sticky navigation bar */}
      <div className="sticky top-0 z-10 bg-white">
        <NavBar />
      </div>

      {/* Main content area */}
      <div
        className={`p-4 md:p-9 bg-gray_background min-h-screen ${childrenClass}`}
      >
        {children}
      </div>
    </>
  );
};
