import React from "react";

import { navbarContent } from "./nabar.content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stack } from "@/components/layout/stack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { MenuDrawer } from "../menu_drawer/MenuDrawer";

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
              <AvatarFallback>♻️</AvatarFallback>
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
          <Button variant="ghost" className={"p-0 hover:bg-transparent"}>
            <Icon iconName={"bell"} size="md" />
          </Button>
          <div className={"p-0 hover:bg-transparent"}>
            <MenuDrawer />
          </div>
        </Stack>
      </Stack>
    ),
    home: (
      <header className="h-14 flex flex-row items-center justify-between w-full mb-10">
        <div className="w-20 flex items-center justify-center">
          <Logo width={50} height={50} />
        </div>
        <nav>
          <ul className="flex flex-row gap-1">
            <li>
              <Link className={cn(buttonVariants({ variant: "default" }), "rounded-2xl px-2 bg-[#0180A7]")} href={CLIENT_ROUTES.REGISTER}>Registrarme</Link>
            </li>
            <li>
              <Link className={cn(buttonVariants({ variant: "default" }), "rounded-2xl px-2 bg-[#0180A7]")} href={CLIENT_ROUTES.LOGIN}>Iniciar sesión</Link>
            </li>
          </ul>
        </nav>
      </header>
    ),
  };

  return variants[design];
};
