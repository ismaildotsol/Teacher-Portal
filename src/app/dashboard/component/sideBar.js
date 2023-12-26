"use client";
import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white h-screen overflow-y-auto ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <FaAlignRight
        className={`text-2xl absolute right-3 top-3 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex">
        <h1
          className={`text-white p-3 origin-left font-medium text-2xt duration-300 ${
            !open && "scale-0"
          }`}
        >
          Teacher Portal
        </h1>
      </div>
    </div>
  );
};

export default SideBar;