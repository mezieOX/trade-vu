// Importing necessary modules and components
import React from "react";
import { Layout } from "../_layout";
// Layout component for consistent page structure

// Pay Component
const Pay = () => {
  return (
    // Wrap the page content with the Layout component for consistent styling
    <Layout>
      {/* Main container for the Pay page */}
      <div className="min-h-screen flex text-2xl text-primary font-medium justify-center items-start py-40">
        {/* Display text for the Pay page */}
        Pay Screen
      </div>
    </Layout>
  );
};

// Exporting the Pay component for use in other parts of the application
export default Pay;
