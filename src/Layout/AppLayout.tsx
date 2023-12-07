import Sidebar from "@/Features/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { TbBellExclamation } from "react-icons/tb";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-[15rem_1fr]">
      <aside className="bg-white flex flex-col shadow-xl rounded-tl-3xl">
        <div className="py-12 px-6">
          <h1 className="text-primary text-4xl font-ybold">هموطن ۲۴</h1>
          <p className="text-gray-600">
            همــراه شما ، در هر لــحظه و هر مــکان
          </p>
        </div>
        <div>
          <Sidebar />
        </div>
      </aside>
      <div className="grid grid-rows-[auto_1fr]">
        <nav>
          <div className="bg-white px-4 py-5 rounded-md m-2 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-600 font-ysemibold tracking-tight text-lg">
                <span className="text-primary">خوش آمدید،</span> آرمان سلطانی
                عزیز
              </p>
            </div>
            <div className="flex gap-x-2">
              <Button variant="outline" size="icon" className="text-xl">
                <TbBellExclamation />
              </Button>
              <Button>موجودی : ۱۷۸,۴۸۱,۸۱</Button>
              <Button variant="outline">خروج</Button>
            </div>
          </div>
        </nav>
        <div className="bg-white mx-2 mb-2 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
