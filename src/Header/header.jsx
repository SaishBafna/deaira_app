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
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={Image} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Icon */}
      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FiMenu />
      </div>

      {/* Sidebar Overlay and Sidebar */}
      {sidebarOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={toggleSidebar}
          />

          {/* Sidebar */}
          <div className="fixed inset-0 z-50">
            <Sidebar onClose={toggleSidebar} />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
