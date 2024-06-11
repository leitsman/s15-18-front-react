import React from "react";
import { InputDNI } from "@/components/ui/input";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import { Logo } from "@/components/ui/logo";

const singleDataCardOptionsCategorias = {
    mainContent: "Categorias",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsCables = {
    mainContent: "Cables",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsBaterias = {
    mainContent: "Baterias",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsDispGrande ={
    mainContent: "Disp. Grande",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };

  const singleDataCardOptionsDispMediano ={
    mainContent: "Disp. Mediano",
    secondaryContent: "",
    iconName: "rightArrow",
    secondSectionElements: (
      <Text variant={"body"} className={"font-bold"}>
        
      </Text>
    ),
  };
  const singleDataCardOptionsDispChico ={
    mainContent: "Disp. Chico",
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
          <div className="mb-2">
             <h1 className="text-[14px]">Caracteristicas del dispositivo</h1>
          </div>

        <div className="mt-2 flex flex-col  border-2 justicefy-center items-center">
            <div className="mb-2  w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsCategorias} />
            </div>
            <div className="mb-5 h-7 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsCables} />
            </div>
            <div className="mb-5 h-7 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsBaterias} />
            </div>
            <div className="mb-5 h-7 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsDispGrande} />
            </div>
            <div className="mb-5 h-7 w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsDispMediano} />
            </div>
            <div className="mb-5  w-full font-serif">
                <DataCard variant="single" dataCardOptions={singleDataCardOptionsDispChico} />
            </div>
            <div className="flex flex-row">
                <div>
                <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                 Borrar
                </Text>
                </Button>
            </div>
            <div>
                <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                 Aplicar
                </Text>
                </Button>
            </div>
            </div>
            <div className="mt-5">
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