import { FaCog, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

export const userLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Profile", path: "/profile", icon: FaUser },
  { name: "My Post", path: "/dashboard/my-post", icon: MdPostAdd },
  { name: "Settings", path: "/dashboard/settings", icon: FaCog },
  { name: "Logout", path: "/logout", icon: FaSignOutAlt },
];

export const AdminLinks = [
  { name: "Dashboard", path: "/admin/dashboard", icon: FaHome },
  { name: "Manage Users", path: "/admin/users", icon: FaUser },
  { name: "Site Settings", path: "/admin/settings", icon: FaCog },
  // Ensure all paths are defined correctly
];
