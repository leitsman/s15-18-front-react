import React from "react";
import { Icon } from "@/components/ui/icon";
import { Stack } from "../layout/stack";
import { Button, buttonVariants } from "./button";
import { Container } from "../layout/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

/**
 * Componente que muestra un DataCard con diferentes variantes.
 * @param {string} variant - La variante del DataCard a mostrar (single o compose).
 * @param {object} dataCardOptions - Opciones del DataCard que incluyen contenido principal, secundario, icono, y elementos adicionales.
 * @returns {JSX.Element} - Elemento JSX que representa el DataCard.
 */
export const DataCard = ({ variant, dataCardOptions }) => {
  const variants = {
    single: (
      <Stack
        variant="vertical"
        distribution="center"
        className="h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white"
      >
        <Container noMargins className={"py-3 gap-2"}>
          <Stack
            noMargins
            variant="inline"
            distribution="between"
            alignment="center"
          >
            <h2 className="font-bold">{dataCardOptions.mainContent}</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">{dataCardOptions.secondaryContent}</h2>
              <Link className={cn(buttonVariants({ variant: 'ghost' }), "h-fit p-0")} href={dataCardOptions.secondaryLinkTo}>
                <Icon iconName={dataCardOptions.iconName} />
              </Link>
            </div>
          </Stack>
          <Stack noMargins>{dataCardOptions.secondSectionElements}</Stack>
        </Container>
      </Stack>
    ),
    compose: (
      <Stack
        variant="vertical"
        noMargins
        distribution="center"
        className="h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white"
      >
        <Container className={"py-3 gap-2"}>
          <Stack
            noMargins
            variant="inline"
            distribution="between"
            alignment="center"
          >
            <h2 className="font-bold">{dataCardOptions.mainContent}</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">{dataCardOptions.secondaryContent}</h2>
              <Link className={cn(buttonVariants({ variant: 'ghost' }), "h-fit p-0")} href={dataCardOptions.secondaryLinkTo}>
                <Icon iconName={dataCardOptions.iconName} />
              </Link>
            </div>
          </Stack>
          <Stack noMargins>{dataCardOptions.secondSectionElements}</Stack>
        </Container>
        <hr />
        <Container className={"px-10"}>
          {dataCardOptions.extraSectionElements}
        </Container>
      </Stack>
    ),
    avatar: (
      <Stack
        variant="vertical"
        noMargins
        distribution="center"
        className="h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white"
      >
        <Container className={"py-3 gap-2"}>
          <div className="flex justify-center">
            <Avatar className="size-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <Stack
            noMargins
            variant="inline"
            distribution="between"
            alignment="center"
          >
            <h2 className="font-bold">{dataCardOptions.mainContent}</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">{dataCardOptions.secondaryContent}</h2>
              <Link className={cn(buttonVariants({ variant: 'ghost' }), "h-fit p-0")} href={dataCardOptions.secondaryLinkTo}>
                <Icon iconName={dataCardOptions.iconName} />
              </Link>
            </div>
          </Stack>
          <Stack noMargins>{dataCardOptions.secondSectionElements}</Stack>
        </Container>
        <hr />
        <Container className={"px-10"}>
          {dataCardOptions.extraSectionElements}
        </Container>
      </Stack>
    )
  };

  return variants[variant];
};
