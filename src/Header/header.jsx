// Header.js
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../Sidebar/sidebar';
import Image from '../assets/Images/logo.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={Image} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Icon */}
      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FiMenu />
      </div>

      {/* Fullscreen Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full text-white z-50">
          <Sidebar onClose={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Header;
