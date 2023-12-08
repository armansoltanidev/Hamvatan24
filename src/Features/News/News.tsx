import { TbBellExclamation } from "react-icons/tb";

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
import { Button } from "@/components/ui/button";

export default function News() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-xl">
          <TbBellExclamation />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle asChild>
            <h1 className="text-right font-ysemibold mt-6">اطلاعیه هـــا</h1>
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
  );
}
