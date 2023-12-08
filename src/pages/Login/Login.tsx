import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/components/ui/Logo";

import FormRow from "@/components/ui/FormRow";
import { SetStateAction, useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState<number | string>("");

  function handleSetPhone(e: {
    target: { value: SetStateAction<number | string> };
  }) {
    setPhone(e.target.value);
  }

  return (
    <div className="h-screen flex items-center justify-around flex-col">
      <div className="text-center">
        <Logo />
      </div>
      <div className="bg-background h-[510px] w-[416px] rounded-lg px-6 py-8 flex flex-col gap-2 shadow-md border border-input">
        <h2 className="font-ybold text-2xl mt-8 tracking-tight text-foreground">
          شروع کار با هموطن ۲۴
        </h2>
        <h2 className="font-yregular text-sm text-gray-400">
          با شماره موبایلتان وارد شوید:
        </h2>
        <FormRow className="mt-8 flex-col gap-2">
          <Input
            placeholder="********۹"
            value={phone}
            onChange={handleSetPhone}
          />
          <Link to="/">
            <Button className="w-full" size="lg">
              ورود
            </Button>
          </Link>
        </FormRow>
        <div className="flex items-center gap-2">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <p className="font-yregular text-center my-2 text-gray-400">یا</p>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div className="flex gap-x-2">
          <Button className="w-full" variant="outline">
            ورود با ایمیل
          </Button>
          <Button className="w-full" variant="outline">
            ورود با گوگل
            <FcGoogle />
          </Button>
        </div>
        <p className="text-xs text-center font-yregular text-accent-foreground mt-3">
          <Link to="#">
            <span className="text-primary underline">قوانین استفاده </span>
          </Link>
          از هموطن ۲۴ را میپذیرم.
        </p>
      </div>
      <div>
        <p className="text-accent text-sm font-ysemibold">
          © کلیه حقوق این وب‌سایت متعلق به هموطن ۲۴ می‌باشد. ۱۴۰۲
        </p>
      </div>
    </div>
  );
}
