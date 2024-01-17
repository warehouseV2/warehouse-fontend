import React from "react";
import { cn } from "@/lib/utils";

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn("tw-rounded-md tw-py-2 tw-px-5 hover:tw-shadow-lg", className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default CustomButton;
