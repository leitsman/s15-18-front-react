import React from "react";
import ProfileForm from "../../components/features/profile/profileform";
import Image from "next/image";

import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/features/navbar/NavBar";

import { NavBarUbicacion } from "@/components/features/navbar/NavBarUbicacion";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/layout/stack";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const composeDataCardOptions = {
  mainContent: "Pepita Flores",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      pepitaflores@gmail.com
    </Text>
  ),
  secondaryLinkTo: CLIENT_ROUTES.HOME,
  extraSectionElements: (
    <Stack noMargins variant="inline" distribution="between">
      <div className="w-fit flex flex-col items-center">
        <Text variant={"body"} size="sm">
          Puntaje total
        </Text>
      </div>
      <div className="w-fit flex flex-col items-center pl-5">
        <Text variant={"body"} size="sm">
          50 pts.
        </Text>
      </div>
    </Stack>
  ),
};

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 gap-5">
      <NavBarUbicacion variant="perfil" className=""></NavBarUbicacion>
      <DataCard variant={"avatar"} dataCardOptions={composeDataCardOptions} />
      <div className="text-xs flex flex-col  justicefy-center items-center">
        <div>
          <div>
            <h1 className="text-[14px]">Datos Personales</h1>
            <ProfileForm></ProfileForm>
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
