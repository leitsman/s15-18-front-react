import React from "react";
import { cn } from "@/lib/utils";

/**
 *
 * params (string) variant: title, subtitle, body.
 * params (string) size: xs, sm, md, lg.
 * params (string) children: text.
 *
 */
export const Text = ({ variant, size = "md", children, className }) => {
  const sizes = {
    xs: "text-[11px]",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const variants = {
    title: <h1 className={cn(sizes[size], className)}>{children}</h1>,
    subtitle: <h2 className={cn(sizes[size], className)}>{children}</h2>,
    body: <p className={cn(sizes[size], className)}>{children}</p>,
  };

  return variants[variant];
};
