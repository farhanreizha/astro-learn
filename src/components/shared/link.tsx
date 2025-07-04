import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { buttonVariants } from "../ui/button";
import { cva, type VariantProps } from "class-variance-authority";

const linkColorIsActive = cva("transition-colors", {
  variants: {
    active: {
      true: "bg-blue-500 hover:no-underline text-blue-200",
      false: "transition-colors",
    },
  },
  defaultVariants: {
    active: false,
  },
});

interface LinkProps extends ComponentProps<"a"> {
  pathname?: string;
}

export default function Link({ pathname, active, className, children, ...props }: LinkProps & VariantProps<typeof linkColorIsActive>) {
  const isActive = pathname === props.href;

  return (
    <a {...props} className={cn(buttonVariants({ variant: "link" }), linkColorIsActive({ active: isActive }), className)}>
      {children}
    </a>
  );
}
