import React from "react";
import ProfileForm from "../../components/features/profile/profileform";
import { Icon } from "@/components/ui/icon";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/layout/stack";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { Photo } from "@/components/ui/photo"

const composeDataCardOptions = {

  mainContent: "Pepita Flores",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      <div className="flex flex-row gap-10">
        <div>
          <h3>pepitaflores@gmail.com</h3>
        </div>
        <div>
          <Photo></Photo>
        </div>
      </div>
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
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 gap-5">
      <BreadCrumbs currentRoute="Configuración">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      
      <DataCard variant={"compose"} dataCardOptions={composeDataCardOptions} />
      <div className="text-xs flex flex-col  justicefy-center items-center">
        <div>
          <div>
            <h1 className="text-[14px] mb-5">Datos Personales</h1>
            <ProfileForm></ProfileForm>
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
