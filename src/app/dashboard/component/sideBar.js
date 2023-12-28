"use client";
import React, { useState, useEffect } from "react";
import { FaAlignRight } from "react-icons/fa6";
import Menu from "./menu";
import { TbLayoutDashboard } from 'react-icons/tb';
import { IoBookmarksOutline } from 'react-icons/io5';
import { TiMessageTyping } from 'react-icons/ti';

// Update the SideBar component
const SideBar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`bg-gray-800 text-white h-screen overflow-y-auto ${open ? "w-72" : "md:w-20 hidden md:block"} duration-300 relative`}>
      
      <FaAlignRight
        className={`text-2xl absolute top-8 transform -translate-y-1/2 ${
          open ? "right-3" : "left-1/2 -translate-x-1/2"
        } cursor-pointer ${!open && "rotate-180"} hidden md:block`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex">
        <h1
          className={`text-white p-4 left font-medium text-2xt duration-300 ${
            !open && "scale-0"
          }`}
        >
          Teacher Portal
        </h1>
      </div>

      {/* Conditionally render either the full menu or just the icons */}
      {open ? (
        <div className={`text-white p-4 origin-left font-medium text-2xt duration-300`}>
          <Menu />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          {/* Render only icons when sidebar is closed */}
          <TbLayoutDashboard className="text-3xl text-gray-200 cursor-pointer my-4" />
          <IoBookmarksOutline className="text-3xl text-gray-200 cursor-pointer my-4" />
          <TiMessageTyping className="text-3xl text-gray-200 cursor-pointer my-4" />
          {/* Add other icons as needed */}
        </div>
      )}
    </div>
  );
};


export default SideBar;
