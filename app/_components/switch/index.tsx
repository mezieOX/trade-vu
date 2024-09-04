"use client";

import React, { useState } from "react";
import { Switch } from "@headlessui/react";

// Component to render a toggle switch
export const SwitchComp: React.FC = () => {
  // State to manage the switch's on/off status
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
        enabled ? "bg-primary" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute block h-5 w-5 bg-white rounded-full shadow transition-transform duration-200 ease-in-out transform ${
          enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </Switch>
  );
};
