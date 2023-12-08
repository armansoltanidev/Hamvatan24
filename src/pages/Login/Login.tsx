import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-around flex-col">
      <div className="text-center">
        <h1 className="text-primary text-4xl font-ybold">هموطن ۲۴</h1>
        <p className="text-gray-400">همــراه شما ، در هر لــحظه و هر مــکان</p>
      </div>
      <div className="bg-white h-[510px] w-[416px] rounded-lg px-6 py-8 flex flex-col gap-2 shadow-md">
        <h2 className="font-ybold text-2xl mt-8 tracking-tight text-gray-700">
          شروع کار با هموطن ۲۴
        </h2>
        <h2 className="font-yregular text-sm text-gray-400">
          با شماره موبایلتان وارد شوید:
        </h2>
        <div className="mt-8 flex flex-col gap-2">
          <Input placeholder="********۹" />
          <Link to="/">
            <Button className="w-full" size="lg">
              ورود
            </Button>
          </Link>
        </div>
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
        <p className="text-xs text-center font-yregular text-gray-800 mt-3">
          <Link to="#">
            <span className="text-primary underline">قوانین استفاده </span>
          </Link>
          از هموطن ۲۴ را میپذیرم.
        </p>
      </div>
      <div>
        <p className="text-gray-400 text-sm font-ysemibold">
          © کلیه حقوق این وب‌سایت متعلق به هموطن ۲۴ می‌باشد. ۱۴۰۲
        </p>
      </div>
    </div>
  );
}
