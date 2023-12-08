import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TbUserScan } from "react-icons/tb";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const invoices = [
  {
    invoice: "ام تی ان",
    paymentStatus: "موفق",
    totalAmount: "۴۰۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "موفق",
    totalAmount: "۳۰۰ افغانی",
  },
  {
    invoice: "اتصالات",
    paymentStatus: "ناموفق",
    totalAmount: "۱۰۰ افغانی",
  },
  {
    invoice: "افغان بیسم",
    paymentStatus: "پرداخت شده",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
  {
    invoice: "روشن",
    paymentStatus: "در انتظار",
    totalAmount: "۵۰ افغانی",
  },
];

export default function Credits() {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-x-2 h-full">
      <div className="flex flex-col justify-around p-16 border-2 border-primary-background rounded-md">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="number" className="font-ybold">
              شماره تلفن
            </Label>
            <div className="flex items-center gap-x-2">
              <Input
                className="text-left placeholder:text-right"
                id="number"
                placeholder="شماره تلفن خود را وارد کنید"
              />
              <Button size="lg" className="text-3xl">
                <TbUserScan />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="number" className="font-ybold">
              مبـلغ شارژ
            </Label>
            <Input
              className="text-left placeholder:text-right"
              id="number"
              placeholder="برای مثال ۱۰۰ افغانی"
            />
          </div>
          <div className="flex justify-between">
            <Button variant="outline">۵۰ افغانی</Button>
            <Button variant="outline">۱۰۰ افغانی</Button>
            <Button variant="outline">۱۵۰ افغانی</Button>
            <Button variant="outline">۲۰۰ افغانی</Button>
            <Button variant="outline">۳۰۰ افغانی</Button>
            <Button variant="outline">۴۰۰ افغانی</Button>
            <Button variant="outline">۵۰۰ افغانی</Button>
          </div>
          <div className="flex flex-col gap-y-3">
            <Label className="font-ybold">انتخاب اپراتور</Label>
            <Tabs defaultValue="account">
              <TabsList defaultValue="mtn">
                <TabsTrigger value="mtn">ام تی ان</TabsTrigger>
                <TabsTrigger value="etesalat">اتصالات</TabsTrigger>
                <TabsTrigger value="roshan">روشــن</TabsTrigger>
                <TabsTrigger value="aghanbisim">افغان بیــسیم</TabsTrigger>
                <TabsTrigger value="salam">سلام</TabsTrigger>
              </TabsList>
            </Tabs>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-4" size="lg">
                  ارسـال شــارژ
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>لطفا صحت مبلــغ و شماره را چک کنید</DialogTitle>
                  <DialogDescription>
                    شارژ طی ده الی پانــزده دقیقه ارسال خواهد شد. با تشکر از صبر
                    و شکیبایی شما
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      شماره
                    </Label>
                    <p className="text-lg text-primary font-ybold">
                      079484151541
                    </p>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      مبلــغ
                    </Label>
                    <p className="text-lg text-primary font-ybold">
                      400 افغانی
                    </p>
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      اپراتور
                    </Label>
                    <p className="text-lg text-primary font-ybold">روشن</p>
                  </div>
                </div>
                <DialogFooter className="flex gap-x-2">
                  <Button className="w-full" type="submit">
                    ارسال شــارژ
                  </Button>
                  <Button className="w-full" variant="destructive">
                    کنسل
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="h-80 overflow-y-scroll mt-8">
          <Table>
            <TableCaption>لیســت آخرین تراکنش های شما</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">نوع و اپراتور</TableHead>
                <TableHead>وضعیــت</TableHead>
                <TableHead className="text-right">مقدار</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="border-2 border-primary-background rounded-md">
        Charts
      </div>
    </div>
  );
}
