"use client"; // This directive ensures the component is rendered on the client side

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/public/assets/svg/logo";
import { ModalComp } from "../modal";
import { SwitchComp } from "../switch";
import {
  AddIcon,
  ArrowDownIcon,
  ArrowFillDownIcon,
  CloseIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
} from "@/public/assets";
import { ButtonComp } from "../button";
import User_Img from "../../../public/assets/images/user-img.jpg";
import { NavMobileView } from "./mobileView";
import { NAV_LINK, NOTIFICATIONS, SWITCH_ACCT, USERS_ACCTS } from "@/app/_data";

export const NavBar: React.FC = () => {
  // State hooks for managing modal visibility
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShowAll, setIsShow] = useState(false);
  const [addBusinessModal, setAddBusinessModal] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  // Get the current path
  const current = usePathname();

  return (
    <>
      {/* Navigation Bar */}
      <div className="py-5 px-2 sm:px-9 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-1">
            <LogoIcon className="w-5" />
            <span className="font-bold text-xl">Tradevu</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
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
            </ul>
          </nav>

          {/* Notification and User Profile */}
          <div className="flex items-center gap-6">
            <NotificationIcon
              className="w-8 cursor-pointer"
              onClick={() => setIsNotificationOpen(true)}
            />
            <button
              onClick={() => setIsProfileOpen(true)}
              className="hidden sm:flex items-center gap-2"
            >
              <Image src={User_Img} className="w-8" alt="User profile" />
              <span className="text-sm text-black font-medium">
                Vance Refrigeration
              </span>
              <ArrowDownIcon />
            </button>
            <MenuIcon
              onClick={() => setIsOpenNav(true)}
              className={`cursor-pointer transition-all duration-300 ease-linear md:hidden ${
                isOpenNav ? "hidden" : ""
              }`}
            />
            <CloseIcon
              onClick={() => setIsOpenNav(false)}
              className={`cursor-pointer transition-all duration-300 ease-linear md:hidden ${
                isOpenNav ? "" : "hidden"
              }`}
            />
          </div>
        </div>

        {/* Notifications Modal */}
        <ModalComp
          dialogPanelClass="right-10 absolute justify-end top-20 max-w-[24.5rem] h-[74vh]"
          dialogPanelContainerClass="justify-start"
          isOpen={isNotificationOpen}
          openModal={() => setIsNotificationOpen(true)}
          onClose={() => setIsNotificationOpen(false)}
        >
          <div>
            <div className="border-b px-4 py-3 flex justify-between items-center">
              <h1 className="text-lg">Notifications</h1>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-500">Unread only</span>
                <SwitchComp />
              </div>
            </div>
            <div className="overflow-y-scroll h-96 hide-scrollbar">
              {NOTIFICATIONS.map(({ id, text, createdAt, isActive }) => (
                <div
                  key={id}
                  className={`p-6 pb-1.5 hover:bg-gray-100/50 cursor-pointer transition-all duration-300 border-b last:border-none ${
                    isActive
                      ? "list-disc list-disc-custom"
                      : "list-none text-gray-500"
                  }`}
                >
                  <li className="text-sm">{text}</li>
                  <p className="py-2 text-gray-500 text-sm">{createdAt}</p>
                </div>
              ))}
            </div>
          </div>
        </ModalComp>

        {/* User Profile Modal */}
        <ModalComp
          dialogPanelClass="right-20 absolute justify-end top-14 max-w-64"
          dialogPanelContainerClass="justify-start"
          isOpen={isProfileOpen}
          openModal={() => setIsProfileOpen(true)}
          onClose={() => {
            setIsProfileOpen(false);
            setAddBusinessModal(false);
          }}
        >
          <div className="py-2 px-3">
            <div className="bg-gray-100 cursor-pointer rounded-lg px-3 py-1 text-sm">
              <button
                onClick={() => {
                  setAddBusinessModal((prev) => !prev);
                  setIsProfileOpen(true);
                }}
                className="flex justify-between items-center text-start w-full"
              >
                <div>
                  Switch account
                  <div></div>
                  <span className="text-xs text-gray-500">
                    Access your other businesses
                  </span>
                </div>
                <ArrowFillDownIcon
                  className={`${
                    addBusinessModal
                      ? "rotate-180 cursor-pointer transition-all duration-300 ease-linear"
                      : "cursor-pointer"
                  }`}
                />
              </button>
            </div>
            <div className="mt-2">
              {SWITCH_ACCT.map(({ id, title, icon: Icon }) => (
                <div
                  key={id}
                  className="flex cursor-pointer py-3 hover:bg-gray-100/40 rounded-lg text-sm transition-all duration-300 items-center gap-3"
                >
                  <Icon /> {title}
                </div>
              ))}
            </div>
          </div>
        </ModalComp>

        {/* Add Business Modal */}
        <ModalComp
          dialogPanelClass="right-24 absolute justify-end top-28 max-w-56 border-0 shadow-none"
          dialogPanelContainerClass="justify-start"
          isOpen={addBusinessModal}
          openModal={() => setAddBusinessModal(true)}
          onClose={() => setAddBusinessModal(false)}
        >
          <div className="px-1 pb-1">
            <div className="mt-2">
              {USERS_ACCTS.map(({ id, name, isActive }) => (
                <div
                  key={id}
                  className={`${
                    isShowAll ? "flex" : "first:flex hidden"
                  } flex-col cursor-pointer py-2 ${
                    id !== 3 && isShowAll ? "border-b" : ""
                  } border-gray-100 hover:bg-gray-100/40 text-sm hover:text-black text-gray-500 transition-all duration-300 gap-3`}
                >
                  <div className="flex items-center gap-2 px-2">
                    <Image
                      src={User_Img}
                      className="w-8 rounded-full"
                      alt="User profile"
                    />
                    <div>
                      <p>{name}</p>
                      {isActive && (
                        <span className="text-xs text-secondary font-medium">
                          Logged in
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center w-full px-2 pb-1">
                <ButtonComp
                  title="Add business"
                  icon={<AddIcon />}
                  iconClass="!mr-0"
                  onClick={() => setIsShow((prev) => !prev)}
                  className="bg-transparent w-full border text-sm text-center justify-center text-primary hover:bg-primary/20 hover:border-2 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </ModalComp>
      </div>

      {/* Mobile Navigation View */}

      <NavMobileView isOpenNav={isOpenNav} />
    </>
  );
};
