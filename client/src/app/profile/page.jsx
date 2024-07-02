import React from "react";

import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { NavBarUbicacion } from "@/components/features/navbar/NavBarUbicacion";
import { Stack } from "@/components/layout/stack";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { Icon } from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const singleDataCardOptions = {
  mainContent: "Datos Personales",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: <Text variant={"body"} className={"font-bold"}></Text>,
  secondaryLinkTo: ""
};
const singleDataCardOptionsSeguridad = {
  mainContent: "Seguridad",
  secondaryContent: "",
  iconName: "candado",
  secondSectionElements: <Text variant={"body"} className={"font-bold"}></Text>,
  secondaryLinkTo: ""
};
const singleDataCardOptionsPrivacidad = {
  mainContent: "Privacidad",
  secondaryContent: "",
  iconName: "candado",
  secondSectionElements: <Text variant={"body"} className={"font-bold"}></Text>,
  secondaryLinkTo: ""
};
const singleDataCardOptionsNotificaciones = {
  mainContent: "Notificaciones",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: <Text variant={"body"} className={"font-bold"}></Text>,
  secondaryLinkTo: ""
};

const page = () => {
  return (
    <main className="w-full h-screen ">
      <BreadCrumbs currentRoute="Configuración">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <NavBarUbicacion variant="perfil" className=""></NavBarUbicacion>
      <div className="mt-5 flex flex-col  justicefy-center items-center">
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
