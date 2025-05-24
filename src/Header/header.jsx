// Header.js
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from '../assets/Images/logo.png';
import Sidebar from '../Sidebar/sidebar';

const header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full flex justify-between items-center px-4 py-2 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={Image} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Icon */}
      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        {sidebarOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="absolute top-14 right-0 w-64 h-screen bg-gray-800 text-white p-6 shadow-lg z-50">
          <Sidebar /> {/* <-- yahan use karo */}
        </div>
      )}
    </div>
  );
};

export default header;
