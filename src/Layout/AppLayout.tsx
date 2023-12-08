import Sidebar from "@/Features/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/ui/Logo";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[15rem_1fr]">
      <aside className="bg-accent flex flex-col shadow-xl rounded-tl-3xl">
        <div className="py-12 px-6">
          <Logo />
        </div>
        <Sidebar />
      </aside>
      <div className="grid grid-rows-[auto_1fr]">
        <Navbar />
        <div className="bg-accent mx-2 mb-2 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
