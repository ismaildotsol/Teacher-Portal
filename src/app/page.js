"use client";
// Home.js
import React, { useState } from "react";
import Navbar from "./dashboard/component/navBar";
import Sidebar from "./dashboard/component/sideBar";
import Card from "./dashboard/component/card";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex">
      <div>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <Card />
      </div>
    </main>
  );
};

export default Home;