"use client";

import { ButtonComp } from "@/app/_components/button";
import { ModalComp } from "@/app/_components/modal";
import React, { useState } from "react";
import { Layout } from "../_layout";
import Image from "next/image";
import Eye_Slash from "../../public/assets/images/eye-slash.png";
import { DropDownMenu } from "../_components";
import Copy from "../../public/assets/images/copy.png";
import Paginate from "../../public/assets/images/toggle.png";
import { AddIcon, ArrowDownIcon, SendIcon } from "@/public/assets";
import LOCK_IMG from "../../public/assets/images/lock.png";
import {
  cardData,
  CREATE_NEW,
  currencyType,
  filterOptions,
  PENDING_TRANSACTION,
  printOptions,
  RECENT_TRANSACTION,
} from "../_data";

const Dashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <Layout childrenClass="p-0">
      <div className="bg-blue-50 p-4 md:p-9 md:hidden flex items-center gap-2">
        <div className="w-8">
          <Image src={LOCK_IMG} className="w-8" alt="Lock icon" />
        </div>
        <p className="text-gray-600">
          Your account isn’t fully activated.{" "}
          <span className="font-medium cursor-pointer text-primary">
            Complete registration
          </span>{" "}
          to access all benefits.
        </p>
      </div>
      <div className="min-h-screen px-4 pt-9 lg:pt-0 md:px-9">
        <div className="md:flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 pb-1">
              <h1 className="text-gray-600 font-bold text-lg">Hello Bob,</h1>
              <Image src={Eye_Slash} alt="Eye Slash icon" className="w-6" />
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 text-sm font-medium">
                Overview of your activity in
              </span>
              <DropDownMenu className="w-[6rem]" data={currencyType} />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ButtonComp
              onClick={() => {}}
              title="Send money"
              icon={<SendIcon className="fill-current" />}
              className="text-sm font-medium text-primary bg-primary/20 hover:bg-primary hover:text-white"
            />
            <ButtonComp
              onClick={() => setIsProfileOpen(true)}
              title="Create new"
              iconClass="mr-0"
              className="text-sm font-medium !bg-primary hover:!bg-primary/20 hover:text-primary text-white"
              icon={<AddIcon className="fill-current" />}
            />
          </div>
        </div>
        <div className="my-5 flex lg:grid grid-cols-4 gap-6 overflow-hidden overflow-x-scroll hide-scrollbar">
          {cardData.map(
            ({ id, title, total, amount, bank, status, acctNumber }) => (
              <div
                key={id}
                className="bg-white px-4 min-w-[15rem] lg:w-auto border-gray-100 border py-3.5 flex-col gap-4 rounded-md"
              >
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
                  {title === "Unpaid invoices" && (
                    <div className="text-xs text-gray-700 font-bold flex items-center cursor-pointer">
                      All time
                      <ArrowDownIcon />
                    </div>
                  )}
                </div>
                <h1 className="py-2.5 text-3xl">{total}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <p className="text-sm">{acctNumber ?? amount}</p>
                    {title === "Your balance" && (
                      <Image
                        src={Copy}
                        alt="Copy icon"
                        className="w-4 cursor-pointer"
                      />
                    )}
                  </div>
                  <li
                    className={`${
                      !bank ? "list-none -ml-3" : ""
                    } text-xs text-gray-500 font-medium`}
                  >
                    {bank ?? status}
                  </li>
                  {title === "Active orders" && (
                    <Image
                      src={Paginate}
                      alt="Paginate icon"
                      className="w-10 cursor-pointer ml-auto"
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
        <div className="md:hidden flex items-center gap-4 pb-10">
          <ButtonComp
            onClick={() => {}}
            title="Send money"
            icon={<SendIcon className="fill-current" />}
            className="text-sm font-medium text-primary w-full text-center justify-center bg-primary/20 hover:bg-primary hover:text-white px-0"
          />
          <ButtonComp
            onClick={() => setIsProfileOpen(true)}
            title="Create new"
            iconClass="mr-0"
            className="text-sm font-medium !bg-primary w-full justify-center hover:!bg-primary/20 hover:text-primary text-white px-0"
            icon={<AddIcon className="fill-current" />}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="w-full bg-white rounded-lg p-6 shadow">
            <div className="flex justify-between items-center">
              <h1 className="text-sm font-medium text-gray-600">
                Recent transactions
              </h1>
              <DropDownMenu
                className="w-44 px-4 capitalize"
                data={printOptions}
                containerItemClass="px-2 font-medium text-black"
              />
            </div>

            {RECENT_TRANSACTION.map(
              ({ id, createdAt, amount, balance, name, status, time }) => (
                <React.Fragment key={id}>
                  <div className="flex items-center gap-2 text-sm font-medium pt-6 text-gray-600">
                    <p className="min-w-fit">{createdAt}</p>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                  <div className="flex justify-between items-center pt-2 pb-px">
                    <h4 className="font-bold text-sm">{name}</h4>
                    <h4
                      className={`${
                        amount.includes("-") ? "text-red-500" : "text-green-500"
                      } font-bold text-sm text-gray-700`}
                    >
                      {amount}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center">
                    <h4 className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      {time}
                      <li
                        className={`${
                          status === "Pending"
                            ? "text-yellow-500"
                            : status === "Failed"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {status}
                      </li>
                    </h4>
                    <h4 className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      {balance}
                    </h4>
                  </div>
                </React.Fragment>
              )
            )}
            <div className="text-primary text-center text-sm pt-10">
              View full transaction history
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-6 shadow h-max pb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-medium text-gray-600">
                  Pending actions
                </h1>
                <p className="bg-gray-100 text-black rounded-full min-h-7 flex items-center justify-center min-w-7">
                  4
                </p>
              </div>
              <div className="flex items-center">
                <h1 className="text-sm font-medium text-gray-600">Filter</h1>
                <DropDownMenu
                  className="w-max px-4 capitalize"
                  data={filterOptions}
                  containerItemClass="px-2 font-medium text-black"
                />
              </div>
            </div>

            {PENDING_TRANSACTION.map(
              ({ id, createdAt, action, attached, description, title }) => (
                <React.Fragment key={id}>
                  <div className="flex items-center gap-2 text-sm font-medium pt-6 text-gray-600">
                    <p className="min-w-fit">{createdAt}</p>
                    <div className="h-px w-full bg-gray-200" />
                  </div>
                  <div className="flex justify-between items-center pt-2 pb-px">
                    <h4 className="font-bold text-sm">{title}</h4>
                  </div>
                  <div className="sm:flex justify-between items-center">
                    <h4 className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      {description}
                      <li className="">{attached}</li>
                    </h4>
                    <h4 className="font-medium text-xs text-primary cursor-pointer sm:-mt-4 my-4">
                      {action}
                    </h4>
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
      <ModalComp
        dialogPanelClass="right-12 absolute p-1 top-44 max-w-44"
        dialogPanelContainerClass="justify-start"
        isOpen={isProfileOpen}
        openModal={() => setIsProfileOpen(true)}
        onClose={() => setIsProfileOpen(false)}
      >
        <div>
          {CREATE_NEW.map(({ id, title, icon: Icon }) => (
            <div
              key={id}
              className="border-b flex py-3 last:border-0 items-center gap-2 cursor-pointer hover:bg-gray-100 duration-300 ease-linear px-1"
            >
              <Icon />
              <p className="text-sm">{title}</p>
            </div>
          ))}
        </div>
      </ModalComp>
    </Layout>
  );
};

export default Dashboard;
