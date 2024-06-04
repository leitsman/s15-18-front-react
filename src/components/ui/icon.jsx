import React from "react";
import { iconNames } from "@/constants/icons";
import { cn } from "@/lib/utils";

export const Icon = ({
  variant = "default",
  iconName,
  size = "sm",
  circularColor = "white",
  className,
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  const outterSize = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const styles = cn(sizes[size], className);

  const circularColors = {
    white: "bg-white",
    black: "bg-black",
    green: "bg-green-500",
    gradient:
      "bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to",
  };

  const IconElement = React.createElement(iconNames[iconName], {
    className: styles,
  });

  const variants = {
    default: IconElement,
    circular: (
      <div
        className={cn(
          outterSize[size],
          "flex justify-center items-center  rounded-full bg-white",
          circularColors[circularColor],
        )}
      >
        {IconElement}
      </div>
    ),
  };

  return variants[variant];
};
