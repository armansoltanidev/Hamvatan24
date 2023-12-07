import { NavLink } from "react-router-dom";

type SidebarItemProps = {
  children: React.ReactNode;
  to: string;
};

export default function SidebarItem({ children, to }: SidebarItemProps) {
  return (
    <NavLink
      className="flex items-center gap-x-2 text-gray-700 rounded-md w-full px-4 py-3 bg-gray-50 border border-input text-lg"
      to={to}
    >
      {children}
    </NavLink>
  );
}
