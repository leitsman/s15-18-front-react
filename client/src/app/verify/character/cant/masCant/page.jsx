import React from "react";
import { InputDNI } from "@/components/ui/input";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import { Logo } from "@/components/ui/logo";

const singleDataCardOptionsCategorias = {
  mainContent: "Cantidad",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: <Text variant={"body"} className={"font-bold"}></Text>,
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

        <div className="mt-2 rounded-xl flex flex-col  border-2 justicefy-center items-center">
          <div className="mb-2  w-full font-serif">
            <DataCard
              variant="single"
              dataCardOptions={singleDataCardOptionsCategorias}
            />
          </div>
          <div className="mb-5 h-7 w-full font-serif">
            <input
              type="text"
              className="text-sm rounded-full border-2 border-custom-gradient-from"
            ></input>
          </div>
          <div className="flex flex-row">
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
                Finalizar
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
