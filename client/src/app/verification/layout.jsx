import { Logo } from "@/components/ui/logo";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div>{children}</div>
      <Logo />
    </div>
  );
};

export default layout;
