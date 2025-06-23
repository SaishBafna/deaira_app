import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../Sidebar/sidebar';
import Image from '../assets/Images/logo.png';
import axios from 'axios';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const walletAddress = localStorage.getItem('walletAddress');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle logo click and send API request
  const handleLogoClick = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/generateToken`, {
        email: walletAddress
      });
      localStorage.setItem("jwt_token", response.data.token);
      console.log('Token Response:', response.data.token);
      // You can store it in localStorage or context as needed
    } catch (error) {
      console.error('Token generation failed:', error);
    }
  };

  return (
    <div
  className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-2 text-white shadow-md"
  style={{
    background: 'linear-gradient(to right, #0E0021 0%, #29004D 100%)',
  }}
>

      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={handleLogoClick}>
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









// import React, { useState } from 'react';
// import { FiMenu } from 'react-icons/fi';
// import Sidebar from '../Sidebar/sidebar';
// import Image from '../assets/Images/logo.png';

// const Header = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-2 bg-gray-900 text-white shadow-md">
//       {/* Logo */}
//       <div className="text-xl font-bold">
//         <img src={Image} alt="Logo" className="h-10 w-auto" />
//       </div>

//       {/* Menu Icon */}
//       <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
//         <FiMenu />
//       </div>

//       {/* Sidebar Overlay and Sidebar */}
//       {sidebarOpen && (
//         <>
//           {/* Background Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-40 z-40"
//             onClick={toggleSidebar}
//           />

//           {/* Sidebar */}
//           <div className="fixed inset-0 z-50">
//             <Sidebar onClose={toggleSidebar} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Header;
