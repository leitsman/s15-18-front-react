import { Logo } from "@/components/ui/logo";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col border-4 border-black justify-between items-center max-sm:h-full">
      <div>{children}</div>
      <Logo />
    </div>
  );
};

export default layout;
