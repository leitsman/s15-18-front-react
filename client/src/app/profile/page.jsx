import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import React from "react";
import { NavBarUbicacion } from "@/components/features/navbar/NavBarUbicacion";
import { Stack } from "@/components/layout/stack";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { Icon } from "@/components/ui/icon";
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

const singleDataCardOptions = {
  mainContent: "Datos Personales",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptionsSeguridad = {
  mainContent: "Seguridad",
  secondaryContent: "",
  iconName: "candado",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptionsPrivacidad = {
  mainContent: "Privacidad",
  secondaryContent: "",
  iconName: "candado",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptionsNotificaciones ={
  mainContent: "Notificaciones",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};

const page = () => {
  return (
    <main className="w-full h-screen ">
       <BreadCrumbs currentRoute="Configuración">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <div className="mt-5 flex flex-col  justicefy-center items-center">
          <div className="mb-5 w-full">
            <DataCard variant={"compose"} dataCardOptions={composeDataCardOptions} />
          </div>
          <div className="mb-5 w-full ">
             <DataCard variant="single" dataCardOptions={singleDataCardOptions} />
          </div>
          <div className="mb-5 w-full ">
             <DataCard variant="single" dataCardOptions={singleDataCardOptionsNotificaciones} />
          </div>
          <div className="mb-5  w-full">
            <DataCard variant="single" dataCardOptions={singleDataCardOptionsSeguridad} />
          </div>
          <div className="mb-5  w-full">
            <DataCard variant="single" dataCardOptions={singleDataCardOptionsPrivacidad} />
          </div>
      </div>

    </main>
  );
};

export default page;
