// Importing necessary modules and components
import React from "react";
import { Layout } from "../_layout";

// Flex Component
const Flex = () => {
  return (
    // Wrap the page content with the Layout component for consistent styling
    <Layout>
      {/* Main container for the Flex page */}
      <div className="min-h-screen flex text-2xl text-primary font-medium justify-center items-start py-40">
        {/* Display text for the Flex page */}
        Flex Screen
      </div>
    </Layout>
  );
};

// Exporting the Flex component for use in other parts of the application
export default Flex;
