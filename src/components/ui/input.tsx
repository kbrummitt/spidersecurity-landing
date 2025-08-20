import * as React from "react";

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const base = "w-full rounded-md border border-white/10 bg-black/30 text-white px-3 py-2 placeholder-gray-400";
  return <input className={`${base} ${className}`} {...props} />;
}
