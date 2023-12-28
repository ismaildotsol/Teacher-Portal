"use client";
import React, { useState, useEffect } from "react";
import { FaAlignRight } from "react-icons/fa6";
import Menu from "./menu";

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

      <div className={`text-white p-4 origin-left font-medium text-2xt duration-300 ${
        !open && "scale-0"
      }`}>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
