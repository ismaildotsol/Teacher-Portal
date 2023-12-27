import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="bg-grey-300 border p-4 mb-4 flex flex-col md:flex-row justify-between">
      <div className="flex items-center">

        <div className="flex items-center">
          <button className="ml-2 text-blue-500 px-4 py-2">
            <CiSearch className="h-6 w-6" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">

        <div className="notification">
          <button className="ml-2 text-blue-500 px-4 py-2 justify-start">
            <MdOutlineCircleNotifications className="h-6 w-6" />
          </button>
        </div>

        {/* Message Icon */}
        <div className="message">
          <button className="text-blue-500 px-4 py-2 justify-start">
            <TiMessageTyping className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center">
          <img
            src="user-image.jpg"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="sm:flex text-black ml-2">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
