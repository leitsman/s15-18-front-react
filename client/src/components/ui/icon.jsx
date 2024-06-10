import React from "react";
import { iconNames } from "@/constants/icons";
import { cn } from "@/lib/utils";

/**
 * Componente funcional que representa un ícono con diferentes variantes y tamaños.
 * @param {Object} props - Las propiedades del ícono.
 * @param {string} props.variant - La variante del ícono (por defecto: "default" o "circular").
 * @param {string} props.iconName - El nombre del ícono a mostrar. (de constants/icons)
 * @param {string} props.size - El tamaño del ícono (por defecto: "sm", "md" o "lg").
 * @param {string} props.circularColor - El color de fondo del ícono circular.
 * @param {string} props.className - Clases CSS adicionales para el ícono.
 * @returns {ReactElement} El elemento de ícono renderizado.
 */
export const Icon = ({
  variant = "default",
  iconName,
  size = "sm",
  circularColor = "white",
  className,
}) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  const outterSize = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const styles = cn(sizes[size], className);

  const circularColors = {
    white: "bg-white",
    black: "bg-black",
    green: "bg-green-500",
    gradient:
      "bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to",
  };

  const IconElement = React.createElement(iconNames[iconName], {
    className: styles,
  });

  const variants = {
    default: IconElement,
    circular: (
      <div
        className={cn(
          outterSize[size],
          "flex justify-center items-center rounded-full bg-white size-fit p-3",
          circularColors[circularColor],
        )}
      >
        {IconElement}
      </div>
    ),
  };

  return variants[variant];
};
