import React from "react";
import { InputDNI } from "@/components/ui/input";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import { Logo } from "@/components/ui/logo";
const page = () => {
  return (
    <main className="w-full h-screen">
        <BreadCrumbs currentRoute="Dispositivo a Reciclar">
            <Icon iconName="menu" size="lg" />
        </BreadCrumbs>
        <div className="mt-5 flex flex-col  justicefy-center items-center">
            <div>
                <Button className="w-full bg-[#289008] rounded-xl">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                Registrar otro dispositivo
                </Text>
                </Button>
            </div>
        
            <div className="mt-5">
                <Button className="w-full bg-[#289008] rounded-xl">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                 Finalizar Proceso
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