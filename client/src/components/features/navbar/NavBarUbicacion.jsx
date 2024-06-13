import React from "react";
import { navbarContent } from "./nabar.content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stack } from "@/components/layout/stack";
import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { MenuDrawer } from "../menu_drawer/MenuDrawer";

export const NavBarUbicacion = ({ variant = "perfil" }) => {
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
              {`Perfil`}{" "}
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
          <MenuDrawer />
        </Stack>
      </Stack>
    ),
    home: <div>tienen que crearme</div>,
    perfil: (
      <Stack
        noMargins
        variant="inline"
        distribution="between"
        alignment="center"
      >
        <Stack noMargins variant="inline" distribution="between" alignment="center" className="gap-5">
          <Icon variant="circular" circularColor="gradient" iconName="cog" className="text-white" />
          <Text
            variant={"subtitle"}
            size="lg"
            className={
              "bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to text-transparent bg-clip-text font-bold"
            }
          >
            {`Configuración`}
          </Text>
          <MenuDrawer />
        </Stack>
      </Stack>
    ),
  };

  return variants[variant];
};
