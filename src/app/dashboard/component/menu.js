import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoBookmarksOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { MdSocialDistance } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";


const menu = () => {
    return (
        <div className='menu'>
            <h1 className='m-8'>
                <strong>Menu</strong>
            </h1>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                <TbLayoutDashboard />
                <span className="text-[15px] ml-4 text-gray-200">Dashboard</span>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                <IoBookmarksOutline />
                <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
            </div>

            <hr className="my-4 text-gray-600" />
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                <TiMessageTyping />
                <span className="text-[15px] ml-4 text-gray-200">Messages</span>
            </div>

            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                <IoChatboxEllipsesOutline />
                <span className="text-[15px] ml-4 text-gray-200">ChatBox</span>
            </div>

            <div className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto" id="submenu">
                <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 flex items-center">
                    <MdSocialDistance  className="mr-2" />
                    Social
                </div>
                <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 flex items-center">
                    <MdOutlinePersonalInjury className="mr-2" />
                    Personal
                </div>
                <div className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 flex items-center">
                    <FaUserFriends className="mr-2" />
                    Friends
                </div>
            </div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200">Logout</span>
            </div>
        </div>
    );
};

export default menu;
