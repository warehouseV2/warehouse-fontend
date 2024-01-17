import React from "react";
import { cn } from "@/lib/utils";

export interface CustomLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const CustomLabel = React.forwardRef<HTMLLabelElement, CustomLabelProps>(
  ({ className, ...props }, ref) => {
    return <label className={cn("tw-text-textColor", className)} {...props} ref={ref}></label>;
  }
);

export default CustomLabel;
