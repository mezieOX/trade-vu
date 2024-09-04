import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownIcon, HomeIcon } from "@/public/assets";
import User_Img from "../../../../public/assets/images/user-img.jpg";
import { NAV_LINK } from "@/app/_data";

// Props interface for NavMobileView component
interface NavMobileViewProps {
  isOpenNav: boolean;
}

// Mobile Navigation View Component
export const NavMobileView: React.FC<NavMobileViewProps> = ({ isOpenNav }) => {
  // Hook to get the current pathname
  const current = usePathname();

  // State hook for managing profile visibility
  const [, setIsProfileOpen] = useState<boolean>(false);

  return (
    <div
      className={`${
        isOpenNav ? "translate-x-0" : `translate-x-96 hidden`
      } overflow-x-hidden transition-transform duration-300`}
    >
      <div className="h-screen w-screen bg-white md:hidden">
        {/* Navigation Links */}
        <nav>
          <ul className="flex flex-col justify-end items-end px-4 py-8 sm:p-8 gap-8">
            {NAV_LINK.map(({ id, title, pathName }) => (
              <li key={id}>
                <Link
                  href={pathName}
                  className={`text-sm capitalize flex items-center gap-2 text-gray-800 ${
                    current === pathName ? "font-bold text-primary" : ""
                  }`}
                >
                  {id === 1 && <HomeIcon className="w-6" />}
                  {title}
                </Link>
              </li>
            ))}

            {/* Profile Button */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2"
              >
                <Image src={User_Img} className="w-8" alt="User profile" />
                <span className="text-sm text-black font-medium">
                  Vance Refrigeration
                </span>
                <ArrowDownIcon />
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
