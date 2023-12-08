import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/redux";

import {
  addCommas,
  digitsEnToFa,
  numberToWords,
} from "@persian-tools/persian-tools";
import { SetStateAction, useState } from "react";

export default function IncressWalletDialog() {
  const { balance } = useAppSelector((state) => state.wallet);
  const [amount, setAmount] = useState(50000);

  function handleSetAmount(e: { target: { value: SetStateAction<string> } }) {
    setAmount(e.target.value);
  }

  function handleIncressInput(number: number) {
    setAmount((prev) => Number(prev) + Number(number));
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>موجودی : {digitsEnToFa(addCommas(balance))}</Button>
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
              با شارژ کیف پول میتوانید در همه قسمت های پنل به جز پرداخت قبض ها
              استفاده کنید
            </p>
          </DialogDescription>
        </DialogHeader>
        <Input
          type="number"
          placeholder="برای مثال : ۱۷۸,۴۸۱ تومان"
          value={digitsEnToFa(amount)}
          onChange={handleSetAmount}
        />
        <div className="flex justify-around">
          <p>مبلغ وارد شده: {digitsEnToFa(addCommas(amount))}</p>
          <p>معادل:{numberToWords(Number(amount))} تومان </p>
        </div>
        <div className="flex justify-between gap-1">
          <Button onClick={() => handleIncressInput(50000)} variant="outline">
            ۵۰,۰۰۰ تومان
          </Button>
          <Button onClick={() => handleIncressInput(150000)} variant="outline">
            ۱۵۰,۰۰۰ تومان
          </Button>
          <Button onClick={() => handleIncressInput(300000)} variant="outline">
            ۳۰۰,۰۰۰ تومان
          </Button>
          <Button onClick={() => handleIncressInput(500000)} variant="outline">
            ۵۰۰,۰۰۰ تومان
          </Button>
        </div>
        <Button>شارژ کیف پول</Button>
      </DialogContent>
    </Dialog>
  );
}
