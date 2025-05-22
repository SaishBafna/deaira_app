import { Home, Grid, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation(); // to show active tab
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="flex justify-around py-3">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center ${
            currentPath === "/" ? "text-purple-500" : "text-zinc-400 hover:text-white"
          } transition-colors`}
        >
          <Home size={24} fill={currentPath === "/" ? "currentColor" : "none"} />
          <span className="text-sm font-semibold mt-1">Home</span>
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex flex-col items-center ${
            currentPath === "/dashboard" ? "text-purple-500" : "text-zinc-400 hover:text-white"
          } transition-colors`}
        >
          <Grid size={24} />
          <span className="text-sm mt-1">Dashboard</span>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            currentPath === "/profile" ? "text-purple-500" : "text-zinc-400 hover:text-white"
          } transition-colors`}
        >
          <User size={24} />
          <span className="text-sm mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
