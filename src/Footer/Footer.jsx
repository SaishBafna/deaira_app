import { Home, Grid, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { RiCopperCoinFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";

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
          <HiOutlineHome size={24} fill={currentPath === "/" ? "currentColor" : "none"} />
          <span className="text-sm font-semibold mt-1">Home</span>
        </Link>

        {/* Dashboard */}
        <Link
          to="/TokenPresale"
          className={`flex flex-col items-center ${
            currentPath === "/TokenPresale" ? "text-purple-500" : "text-zinc-400 hover:text-white"
          } transition-colors`}
        >
          <RiCopperCoinFill size={24} />
          <span className="text-sm mt-1">Token Presale</span>
        </Link>

        {/* Profile */}
        <Link
          to="/TeamReport"
          className={`flex flex-col items-center ${
            currentPath === "/TeamReport" ? "text-purple-500" : "text-zinc-400 hover:text-white"
          } transition-colors`}
        >
          <RiTeamFill size={24} />
          <span className="text-sm mt-1">My Team</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
