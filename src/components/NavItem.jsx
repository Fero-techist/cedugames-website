import { Link } from "react-router-dom";

export default function NavItem({
  label,
  active,
  to,
  textColor = "text-white",
  activeColor = "text-white",
}) {
  return (
    <Link
      to={to}
      className={`text-sm ${
        active ? `${activeColor} font-semibold` : `${textColor}/70`
      } hover:${activeColor} transition`}
    >
      {label}
    </Link>
  );
}
