import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sage-500 text-white hover:bg-sage-600 shadow-sm",
        secondary: "bg-beige-100 text-sage-700 hover:bg-beige-200",
        outline:
          "border border-sage-300 bg-transparent text-sage-600 hover:bg-sage-50",
        ghost: "text-sage-600 hover:bg-sage-50",
        gold: "bg-gold-300 text-white hover:bg-gold-400 shadow-sm",
        amazon: "bg-[#FF9900] text-white hover:bg-[#e68a00] shadow-sm",
        rakuten: "bg-[#BF0000] text-white hover:bg-[#a30000] shadow-sm",
      },
      size: {
        default: "h-11 px-6 py-2 min-h-[44px]",
        sm: "h-9 px-4 min-h-[44px]",
        lg: "h-12 px-8 min-h-[44px] text-base",
        icon: "h-11 w-11 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
