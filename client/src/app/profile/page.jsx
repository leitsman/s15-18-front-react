import React from "react";
import ProfileForm from "../../components/features/profile/profileform";
import { NavBarUbicacion } from "@/components/features/navbar/NavBarUbicacion";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/layout/stack";
import { CLIENT_ROUTES } from "@/constants/routes.client";

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
          Total de Puntos
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
    <main className="w-full h-screen">
      <NavBarUbicacion className="perfil"></NavBarUbicacion>

      <div className="mt-5 flex flex-col  justicefy-center items-center">
          <div className="mb-10">
             <DataCard variant={"compose"} dataCardOptions={composeDataCardOptions} />
          </div>
          <div>
            <h1 className="text-[14px]">Datos Personales</h1>
            <ProfileForm></ProfileForm>
          </div>
      </div>
    </main>
  );
};
export default page;
