import { cn } from "@/lib/utils";

type FormRowProps = {
  children: React.ReactNode;
  className: string;
};

export default function FormRow({ className, children }: FormRowProps) {
  return <div className={cn(className, "flex")}>{children}</div>;
}
