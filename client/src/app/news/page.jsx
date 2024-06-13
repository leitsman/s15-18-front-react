"use client";
import { Stack } from "@/components/layout/stack";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
const page = () => {
  const textVision1 = {
    iconName: "arrowRight",
    title: "Visión",
    image: "/images/residuos_chatarra.png",
    alt: "asdasdad",
    content: `Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo
un protocolo. La fase del fin de la vida...`,
  };
  const textVision2 = {
    iconName: "arrowRight",
    title: "Visión",
    image: "/images/residuos_chatarra.png",
    alt: "asdasdad",
    content: `Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo
un protocolo. La fase del fin de la vida...`,
  };
  const textVision3 = {
    iconName: "arrowRight",
    title: "Visión",
    image: "/images/residuos_chatarra.png",
    alt: "asdasdad",
    content: `Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo
un protocolo. La fase del fin de la vida...`,
  };
  const noImage = false;
  const noIcon = false;
  const reverse = false;
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <BreadCrumbs currentRoute="Noticias e información">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <Button className="w-full h-full bg-white flex items-center justify-between">
          <div className="flex flex-col max-md:text-xs w-full">
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              Impacto ambiental del manejo de
            </Text>
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              residuos al reparar un celular
            </Text>
          </div>
          <Icon iconName="rightArrow" size="md" className="text-custom-gradient-from ml-2" />
        </Button>

        <Stack
          noMargins
          variant="inline"
          className={cn(reverse && "flex-row-reverse justify-center", "gap-2")}
        >
          {noImage ? null : (
            <Image
              src={textVision1.image}
              alt={textVision1.alt}
              width={100}
              height={100}
              className="size-[100px]"
              priority
            />
          )}
          <Text variant={"body"} size="xs" className="line-clamp-6">
            {textVision1.content}
          </Text>
        </Stack>
        <Button className="w-full h-full bg-white flex items-center justify-between">
          <div className="flex flex-col max-md:text-xs w-full">
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              Impacto ambiental del manejo de
            </Text>
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              residuos al reparar un celular
            </Text>
          </div>
          <Icon iconName="rightArrow" size="md" className="text-custom-gradient-from ml-2" />
        </Button>
        <Stack
          noMargins
          variant="inline"
          className={cn(reverse && "flex-row-reverse justify-center", "gap-2")}
        >
          <Text variant={"body"} size="xs" className="line-clamp-6">
            {textVision2.content}
          </Text>
          {noImage ? null : (
            <Image
              src={textVision2.image}
              alt={textVision2.alt}
              width={100}
              height={100}
              className="size-[100px]"
              priority
            />
          )}
        </Stack>
        <Button className="w-full h-full bg-white flex items-center justify-between">
          <div className="flex flex-col max-md:text-xs w-full">
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              Impacto ambiental del manejo de
            </Text>
            <Text
              size="md"
              variant="subtitle"
              className="text-custom-gradient-from font-sans block"
            >
              residuos al reparar un celular
            </Text>
          </div>
          <Icon iconName="rightArrow" size="md" className="text-custom-gradient-from ml-2" />
        </Button>
        <Stack
          noMargins
          variant="inline"
          className={cn(reverse && "flex-row-reverse justify-center", "gap-2")}
        >
          {noImage ? null : (
            <Image
              src={textVision3.image}
              alt={textVision3.alt}
              width={100}
              height={100}
              className="size-[100px]"
              priority
            />
          )}
          <Text variant={"body"} size="xs" className="line-clamp-6">
            {textVision3.content}
          </Text>
        </Stack>
      </div>
    </main>
  );
};
