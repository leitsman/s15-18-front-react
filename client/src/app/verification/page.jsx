"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
const page = () => {
  return (
    <main className="w-full h-full flex flex-col space-y-3 justify-center items-center">
      <BreadCrumbs currentRoute="Dispositivo a Reciclar">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <Text
        className="text-custom-gradient-from font-bold"
        variant="title"
        size="md"
      >
        Datos personales
      </Text>

      <form className="space-y-3">
        <Text variant="subtitle" size="sm">
          Documento de identidad
        </Text>
        <input
          type="text"
          className="text-sm rounded-full border-2 border-custom-gradient-from"
        ></input>
        <div className="flex justify-end items-end space-y-10">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full block "
          >
            <Text
              size="md"
              variant="subtitle"
              className="text-white font-serif text-center"
            >
              Continuar
            </Text>
          </Button>
        </div>
      </form>
    </main>
  );
};
export default page;
