import React from "react";
import { cn } from "@/lib/utils";
import { Lora } from 'next/font/google';
import { Poppins } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


//Nyala - titles, subtitles y botones - similar Lora
//Poppins - body text


/* TODO 
Implementar fuente Nayala desde Tailwind.config 
*/


/**
 * Componente funcional que representa un texto con diferentes variantes y tamaños.
 * @param {Object} props - Las propiedades del texto.
 * @param {string} props.variant - La variante del texto (por defecto: "title", "subtitle" o "body").
 * @param {string} props.size - El tamaño del texto (por defecto: "xs", "sm", "md" o "lg").
 * @param {string} props.children - El contenido del texto.
 * @param {string} props.className - Clases CSS adicionales para el texto.
 * @returns {ReactElement} El elemento de texto renderizado.
 */
export const Text = ({ variant, size = "md", children, className }) => {
  const sizes = {
    xs: "text-[13px]",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const variants = {
    title: <h1 className={cn(sizes[size], lora.className, className)}>{children}</h1>,
    subtitle: <h2 className={cn(sizes[size], lora.className, className)}>{children}</h2>,
    body: <p className={cn(sizes[size], poppins.className, className)}>{children}</p>,
  };

  return variants[variant];
};
