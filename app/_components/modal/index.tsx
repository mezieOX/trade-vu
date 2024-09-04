import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

// Define the props for the ModalComp component
interface ModalCompProps {
  isOpen: boolean;
  openModal?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  overlay?: boolean;
  dialogPanelClass?: string;
  dialogPanelContainerClass?: string;
}

// ModalComp component definition
export const ModalComp: React.FC<ModalCompProps> = ({
  isOpen,
  openModal,
  onClose,
  children,
  overlay = true,
  dialogPanelClass = "",
  dialogPanelContainerClass = "",
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Conditionally render the backdrop if 'overlay' is true */}
      {overlay && <DialogBackdrop className="fixed inset-0 bg-black/20" />}

      {/* Container to center the dialog panel */}
      <div
        className={`fixed inset-0 flex items-center justify-center p-4 ${dialogPanelContainerClass}`}
      >
        {/* The actual dialog panel */}
        <DialogPanel
          className={`max-w-md w-full space-y-4 bg-white rounded-lg shadow-2xl border border-gray-300 ${dialogPanelClass}`}
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
