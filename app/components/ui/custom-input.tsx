import React from "react";
import { cn } from "@/lib/utils";

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "tw-text-sm tw-font-light tw-h-10 tw-border-gray-500 tw-border tw-border-opacity-20 tw-bg-bgInput tw-px-3 tw-py-2 tw-rounded-md focus:tw-border-blue-600 focus:tw-ring-blue-600 focus:tw-outline-none focus:tw-ring-1",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export default CustomInput;
