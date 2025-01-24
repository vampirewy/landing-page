"use client";

import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";

interface LoadingSpinnerProps {
  loading: boolean;
}

export function LoadingSpinner({ loading }: LoadingSpinnerProps) {
  if (!loading) return null;

  return (
    <div className={cn("fixed inset-0", "bg-muted/5 backdrop-blur-sm", "flex items-center justify-center", "z-[9999]")}>
      <ClipLoader color="hsl(var(--primary))" loading={loading} size={40} aria-label="Loading" />
    </div>
  );
}
