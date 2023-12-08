import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>لطفا یک بازه زمانی انتخاب کنید</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Reports() {
  return (
    <div className="p-16 h-full flex flex-col justify-around">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="number" className="font-ysemibold">
            لطفا شماره مورد نظر را وارد کنید
          </Label>
          <Input
            id="number"
            placeholder="برای مثال 0798445841"
            className="text-left placeholder:text-right"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="font-ysemibold">
            لطفا بازه زمانی مورد نظر خود را وارد کنید
          </Label>
          <DatePickerWithRange />
        </div>
        <div className="flex gap-x-2">
          <Button>جستـــجو</Button>
          <Button variant="destructive">پاک کردن</Button>
        </div>
      </div>
      <div className="h-80 overflow-scroll">
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
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
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
  );
}
