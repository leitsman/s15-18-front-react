import React from "react";
import { InputDNI } from "@/components/ui/input";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Logo} from "@/components/ui/logo"


const page = () => {
  return (
    <main className="w-full h-screen">
      <BreadCrumbs currentRoute="Dispositivo a Reciclar">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <div className="mt-5 flex flex-col  justicefy-center items-center">
          <div className="mb-10">
             <h1 className="text-[14px]">Datos Personales</h1>
          </div>
          <div>
            <h2 className="text-[10px]">Documento de identidad</h2>
            /****** input DNI */


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
      <div className="w-full flex justify-center">
          <Logo />
      </div>
    </main>
  );
};
export default page;
