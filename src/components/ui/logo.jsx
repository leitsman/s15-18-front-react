"use client";

import Image from "next/image";
import React from "react";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * Componente de Logo.
 * params (number) width: default 200
 * params (number) height: default 200
 * Muestra un logo en función del tema actual.
 * @returns {JSX.Element} Elemento JSX que muestra el logo.
 */
export const Logo = ({ width = 150, height = 150 }) => {
  const userTheme = useTheme();
  const currentTheme = userTheme.theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <Image
          src={"/logo/logoBlanco.webp"}
          alt="logo"
          width={width}
          height={height}
          className={cn(`w-[${width}px] h-auto aspect-square`)}
          priority
        />
      ) : (
        <Image
          src={"/logo/logoNegro.webp"}
          alt="logo"
          width={width}
          height={height}
          className={cn(`w-[${width}px] h-auto aspect-square`)}
          priority
        />
      )}
    </div>
  );
};
