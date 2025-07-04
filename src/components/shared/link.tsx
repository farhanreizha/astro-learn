import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { buttonVariants } from "../ui/button";

interface LinkProps extends ComponentProps<"a"> {
  pathname?: string;
}

export default function Link({
  pathname,
  className,
  children,
  ...props
}: LinkProps) {
  const isActive = pathname === props.href;
  return (
    <a
      {...props}
      className={cn(
        buttonVariants({ variant: "link" }),
        {
          "bg-blue-500 hover:no-underline text-blue-200": isActive,
        },
        className,
      )}
    >
      {children}
    </a>
  );
}
