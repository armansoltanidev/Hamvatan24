import Sidebar from "@/Features/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { TbBellExclamation } from "react-icons/tb";
import { Outlet } from "react-router-dom";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function AppLayout() {
  const [amout, setAmount] = useState("");

  function handleChane() {}
  return (
    <div className="h-screen grid grid-cols-[15rem_1fr]">
      <aside className="bg-accent flex flex-col shadow-xl rounded-tl-3xl">
        <div className="py-12 px-6">
          <h1 className="text-primary text-4xl font-ybold">هموطن ۲۴</h1>
          <p className="text-foreground">
            همــراه شما ، در هر لــحظه و هر مــکان
          </p>
        </div>
        <div>
          <Sidebar />
        </div>
      </aside>
      <div className="grid grid-rows-[auto_1fr]">
        <nav>
          <div className="bg-accent px-4 py-5 rounded-md m-2 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-foreground font-ysemibold tracking-tight text-lg">
                <span className="text-primary">خوش آمدید،</span> آرمان سلطانی
                عزیز
              </p>
            </div>
            <div className="flex gap-x-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="text-xl">
                    <TbBellExclamation />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle asChild>
                      <h1 className="text-right font-ysemibold mt-6">
                        اطلاعیه هـــا
                      </h1>
                    </SheetTitle>
                    <SheetDescription asChild>
                      <p className="text-right font-ylight">
                        در اینجا میتوانید از اطلاعیه ها با خبر شوید
                      </p>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <h2>هیچ پیغامی وجود ندارد</h2>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">بستـــن</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>موجودی : ۱۷۸,۴۸۱,۸۱</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle asChild className="mb-4">
                      <h2 className="text-2xl">
                        لطفا مقدار شارژ مورد نظر خود را وارد کنید
                      </h2>
                    </DialogTitle>
                    <DialogDescription asChild>
                      <p className="font-ylight ">
                        با شارژ کیف پول میتوانید در همه قسمت های پنل به جز
                        پرداخت قبض ها استفاده کنید
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                  <Input
                    value={amout}
                    onChange={handleChane}
                    type="number"
                    placeholder="برای مثال : ۱۷۸,۴۸۱ تومان"
                  />
                  <div className="flex justify-between gap-1">
                    <Button
                      variant="outline"
                      onClick={() => setAmount("50000")}
                    >
                      ۵۰,۰۰۰ تومان
                    </Button>
                    <Button variant="outline">۱۵۰,۰۰۰ تومان</Button>
                    <Button variant="outline">۳۰۰,۰۰۰ تومان</Button>
                    <Button variant="outline">۵۰۰,۰۰۰ تومان</Button>
                  </div>
                  <Button>شارژ کیف پول</Button>
                </DialogContent>
              </Dialog>
              <Button variant="outline">خروج</Button>
              <ModeToggle />
            </div>
          </div>
        </nav>
        <div className="bg-accent mx-2 mb-2 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
