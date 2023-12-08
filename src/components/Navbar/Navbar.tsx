import { Button } from "@/components/ui/button";

import { ModeToggle } from "@/components/mode-toggle";
import News from "@/Features/News/News";
import UserWelcome from "@/Features/User/UserWelcome";
import IncressWalletDialog from "@/Features/Wallet/IncressWalletDialog";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-accent px-4 py-5 rounded-md m-2 shadow-sm flex items-center justify-between">
        <UserWelcome name="آرمان سطلانی" />
        <div className="flex gap-x-2">
          <News />
          <IncressWalletDialog />
          <Button variant="outline">خروج</Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
