import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from '../assets/Images/logo.png';

const Header = () => {
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
          <h2 className="text-lg font-semibold mb-4">Sidebar Menu</h2>
          <ul className="space-y-4">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Profile</li>
            <li className="hover:text-yellow-400 cursor-pointer">Settings</li>
            <li className="hover:text-yellow-400 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
