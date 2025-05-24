import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../Sidebar/sidebar';

const Header1 = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative w-full flex items-center justify-between px-0 py-3 text-white">
      <div className="text-2xl font-semibold">
        {title}
      </div>

      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FiMenu />
      </div>

      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full  text-white p-6 z-50">
          <Sidebar onClose={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Header1;
