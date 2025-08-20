import * as React from "react";

export function Card({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`border border-white/10 bg-black/80 rounded-2xl ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`text-white text-lg font-semibold flex items-center gap-2 ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-6 pb-6 text-gray-300 ${className}`}>{children}</div>;
}
