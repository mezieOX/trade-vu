"use client";

import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { ArrowDownIcon } from "@/public/assets";

// Define types for the menu items
interface MenuItemData {
  id: number;
  title: string;
  image?: StaticImageData; // Use StaticImageData here
}

interface DropDownMenuProps {
  data: MenuItemData[];
  className?: string;
  containerItemClass?: string;
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  data = [],
  className = "",
  containerItemClass = "",
}) => {
  // State hooks
  const [selectedValue, setSelectedValue] = useState<string>(
    data[0]?.title ?? ""
  );
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    data[0]?.image ?? null
  );

  // Handler for menu item click
  const handleMenuItemClick = (title: string, image?: StaticImageData) => {
    setSelectedValue(title);
    setSelectedImage(image ?? null);
  };

  return (
    <div className="relative w-max">
      <Menu>
        <MenuButton
          className={`bg-gray-200/80 uppercase gap-1 font-bold flex items-center justify-between px-2 text-gray-700 text-sm w-20 py-1.5 mx-2 rounded-sm ${className}`}
        >
          <div className={`flex items-center ${containerItemClass}`}>
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Selected flag"
                className="rounded-full w-6 h-6"
                style={{ objectFit: "cover" }}
              />
            ) : null}
            {selectedValue}
          </div>
          <ArrowDownIcon />
        </MenuButton>
        <MenuItems className="bg-white rounded-lg p-1 shadow absolute right-0 mt-1">
          {data.map(({ id, title, image }) => (
            <MenuItem key={id}>
              <button
                onClick={() => handleMenuItemClick(title, image)}
                className="hover:bg-primary duration-300 min-w-full text-sm ease-linear hover:text-white rounded-md p-1 pr-4 pl-3 cursor-pointer"
              >
                {title}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
