import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../Sidebar/sidebar';

const Header1 = ({ title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 text-white shadow-md"
      style={{
        background: 'linear-gradient(to right, #0E0021 0%, #29004D 100%)',
      }}>
      <div className="text-2xl font-semibold">{title}</div>

      <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
        <FiMenu />
      </div>

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={toggleSidebar}
          />
          <div className="fixed inset-0 z-50">
            <Sidebar onClose={toggleSidebar} />
          </div>
        </>
      )}
    </div>
  );
};

export default Header1;
