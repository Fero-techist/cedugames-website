import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import Badge from "./Badge";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "Leaderboard", to: "/leaderboard" },
    { label: "Shop", to: "/shop" },
    { label: "Profile", to: "/profile" },
  ];

  const isWhiteBackground =
    location.pathname === "/leaderboard" || location.pathname === "/shop";
  const textColor = isWhiteBackground ? "text-[#000000]" : "text-white";
  const bgClass = isWhiteBackground
    ? "bg-white"
    : "bg-gradient-to-r from-purple-300/70 to-purple-400/60 backdrop-blur-md";

  return (
    <div
      className={`w-full ${bgClass} px-8 py-3 flex items-center justify-between rounded-xl`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white">
          👤
        </div>

        <div>
          <p
            className={`${textColor} text-sm font-medium flex items-center gap-1`}
          >
            Player 123
            <span className="text-xs">✔</span>
          </p>
          <p
            className={`text-xs ${isWhiteBackground ? "text-gray-600" : "text-white/70"}`}
          >
            Level 1
          </p>
        </div>
      </div>

      <div className={`flex items-center gap-10 ${textColor} font-medium`}>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            to={item.to}
            active={location.pathname === item.to}
            textColor={textColor}
            activeColor={textColor}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Badge>❤️ ❤️ ❤️</Badge>

        <Badge>🪙 100</Badge>

        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${isWhiteBackground ? "bg-gray-200" : "bg-white/20"} ${textColor} cursor-pointer`}
        >
          🔔
        </div>

        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90">
          Settings
        </button>
      </div>
    </div>
  );
}
