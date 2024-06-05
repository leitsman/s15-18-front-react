import React from "react";
import { navbarContent } from "./nabar.content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stack } from "@/components/layout/stack";
import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export const NavBar = ({ design = "default" }) => {
  const variants = {
    default: (
      <Stack
        noMargins
        variant="inline"
        distribution="between"
        alignment="center"
      >
        <Stack noMargins variant="inline" alignment="center" className="gap-5">
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
            <Text
              variant={"subtitle"}
              size="lg"
              className={
                "bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to text-transparent bg-clip-text font-bold"
              }
            >
              {`¡${navbarContent.greeting.greeting} --$nombre--!`}{" "}
            </Text>
          </div>
        </Stack>
        <Stack
          noMargins
          variant="inline"
          alignment="center"
          className="gap-4 w-fit h-fit"
        >
          <Button variant="ghost" className={"p-0"}>
            <Icon iconName={"bell"} size="md" />
          </Button>
          <Button variant="ghost" className={"p-0"}>
            <Icon iconName={"menu"} size="md" />
          </Button>
        </Stack>
      </Stack>
    ),
    home: (
      <header className="bg-fuchsia-500 h-14 flex flex-row items-center justify-between w-full mb-10">
        <div className="bg-green-600 h-9 w-20 flex items-center justify-center">
          logo Recicle
        </div>
        <nav>
          <ul className="flex flex-row gap-1">
            <li>
              <Button className="rounded-2xl px-2">Registrarme</Button>
            </li>
            <li>
              <Button className="rounded-2xl px-2">Iniciar Sesion</Button>
            </li>
          </ul>
        </nav>
      </header>
    ),
  };

  return variants[design];
};
