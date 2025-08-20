import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition focus:outline-none";
    const sizes = "px-4 py-2 rounded-md";
    const defaultSty = "bg-red-600 hover:bg-red-500 text-white";
    const outlineSty = "bg-white text-black hover:bg-white/90 border border-transparent";
    const style = variant === "outline" ? outlineSty : defaultSty;
    return <button ref={ref} className={`${base} ${sizes} ${style} ${className}`} {...props} />;
  }
);
Button.displayName = "Button";
