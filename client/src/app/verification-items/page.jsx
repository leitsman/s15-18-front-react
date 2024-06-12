"use client";
import AccordionItems from "@/components/features/accordion-items/accordion";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

const verification = () => {
  return (
    <main className="w-full h-full flex flex-col space-y-3 justify-center items-center">
      <BreadCrumbs currentRoute="Dispositivo a Reciclar">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <Text
        variant="title"
        size="md"
        children="Caracteristicas del dispositivo"
        className="text-custom-gradient-from font-bold"
      />
      <AccordionItems />
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
    </main>
  );
};
export default verification;
