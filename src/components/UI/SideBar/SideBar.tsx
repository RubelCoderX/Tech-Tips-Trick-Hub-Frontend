/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineBars } from "react-icons/ai";

import { AdminLinks, userLinks } from "./constant";

import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-full">
      <div className="bg-[#F7F7F7] w-full text-gray-800 flex justify-between md:hidden">
        <div className="block cursor-pointer p-4 font-bold">iamge</div>
        <button
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`fixed min-h-screen inset-y-0 left-0 top-0 z-50 w-64 transform bg-default-100  transition-transform lg:static lg:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } border-r lg:block`}
      >
        <div className="h-full flex flex-col">
          <div className="rounded-xl p-4">
            <div className=" w-full rounded-md overflow-hidden">
              <h2 className="text-2xl font-semibold font-sans font-extralight">
                Gadget Guru Hub
              </h2>
            </div>
          </div>

          {/* Sidebar Links Section */}
          <div className="mt-3 space-y-2 rounded-xl p-2 flex-1">
            {(user?.role === "user" ? userLinks : AdminLinks).map((link) =>
              link.path ? (
                <Link
                  key={link.name}
                  className={`flex items-center p-2 rounded-md font-semibold text-xl ${
                    activeLink === link.name
                      ? "bg-blue-600"
                      : "hover:bg-blue-400"
                  }`}
                  href={link.path}
                  onClick={() => handleLinkClick(link.name)}
                >
                  <link.icon className="mr-2 h-5 w-5" /> {/* Icon */}
                  <span>{link.name}</span>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Overlay for Small Screens */}
      {isSidebarOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
