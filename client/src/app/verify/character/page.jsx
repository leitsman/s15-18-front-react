import React from "react";
import { InputDNI } from "@/components/ui/input";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import { Logo } from "@/components/ui/logo";

const singleDataCardOptions = {
    mainContent: "Categorias",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsPuntaje = {
    mainContent: "Puntaje",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsCantidad = {
    mainContent: "Cantidad",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsDispositivos ={
    mainContent: "Dispositivos",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
const page = () => {
  return (
    <main className="w-full h-screen">
        <BreadCrumbs currentRoute="Dispositivo a Reciclar">
            <Icon iconName="menu" size="lg" />
        </BreadCrumbs>
        <div className="mt-5 flex flex-col  justicefy-center items-center">
          <div className="mb-5">
             <h1 className="text-[14px]">Caracteristicas del dispositivo</h1>
          </div>
        <div className="mt-5 flex flex-col  justicefy-center items-center">
            <div className="mb-5 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptions} />
            </div>
            <div className="mb-5 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsDispositivos} />
            </div>
            <div className="mb-5  w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsCantidad} />
            </div>
            <div className="mb-5  w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsPuntaje} />
            </div>
            <div>
                <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                 Continuar
                </Text>
                </Button>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
          <Logo />
      </div>
    </main>
  );
};
export default page;
