import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Header1 = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-between px-0 py-3  text-white ">
      
      {/* Left: Title */}
      <div className="text-2xl font-semibold">
        {title}
      </div>

      {/* Right: Sidebar/Menu Icon */}
      <div className="text-2xl cursor-pointer">
        <FiMenu />
      </div>
    </div>
  );
};

export default Header1;
