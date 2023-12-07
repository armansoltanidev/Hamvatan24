import SidebarItem from "./SidebarItem";

import {
  TbDeviceSim,
  TbCalendarExclamation,
  TbHeadset,
  TbMailDollar,
  TbDeviceIpadSearch,
  TbSettings,
  TbBellExclamation,
  TbLayout2,
} from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <SidebarItem to="/dashboard">
        <TbDeviceSim />
        <span>شارژ و بسته</span>
      </SidebarItem>
      <SidebarItem to="/reports">
        <TbCalendarExclamation />
        <span>گـزارشــات</span>
      </SidebarItem>
      <SidebarItem to="/bills">
        <TbMailDollar />
        <span>قبوض</span>
      </SidebarItem>
      <SidebarItem to="/inquiry">
        <TbDeviceIpadSearch />
        <span>استـــعلام</span>
      </SidebarItem>
      <SidebarItem to="/settings">
        <TbSettings />
        <span>تنظیــمات</span>
      </SidebarItem>
      <SidebarItem to="/support">
        <TbHeadset />
        <span>پشتــیبانــی</span>
      </SidebarItem>
      <SidebarItem to="/news">
        <TbBellExclamation />
        <span>اطلاعیـــه هــا</span>
      </SidebarItem>
      <SidebarItem to="/services">
        <TbLayout2 />
        <span>پیشخوان خدمت</span>
      </SidebarItem>
    </div>
  );
}
