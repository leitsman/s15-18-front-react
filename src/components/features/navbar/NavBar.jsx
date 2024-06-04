import React from "react";
import { navbarContent } from "./nabar.content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center self-stretch gap-5 ">
      <div id="icon_name_container" className="flex gap-5 items-center">
        <Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/jandres373.png"
              alt="@jam avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Avatar>
        <div className="flex">
          <span>¡</span>
          <p>{navbarContent.greeting.greeting + " " + "nombre"} </p>
          <span>!</span>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Historial</h2>
      </div>
    </div>
  );
};
