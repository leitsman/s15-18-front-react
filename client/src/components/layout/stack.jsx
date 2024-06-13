import { cn } from "@/lib/utils";

/**
 *
 * Renderiza un componente contenedor con opciones de estilo personalizables para crear un layout vertical u horizontal.
 * @param {Object} props - El objeto de props que contiene las siguientes propiedades:
 * @param {ReactNode} children - Los elementos hijos que se renderizarán dentro del contenedor.
 * @param {string} className - Clases CSS adicionales que se aplicarán al contenedor.
 * @param {string} variant - La variante del diseño del contenedor (por defecto, en línea, * vertical).
 * @param {string} spacing - El tamaño de espaciado para el relleno (sm, md, lg).
 * @param {string} distribution - La distribución de elementos a lo largo del eje principal * (inicio, centro, fin).
 * @param {string} alignment - La alineación de elementos a lo largo del eje transversal (inicio, * centro, fin).
 * @param {boolean} showOutline - Si se debe mostrar un contorno alrededor del contenedor.
 * @param {boolean} noMargins - Si se deben eliminar los márgenes predeterminados del contenedor.
 * @returns {JSX.Element} Un elemento div que representa el contenedor estilizado con las propiedades especificadas.
 */
export const Stack = ({
  children,
  className,
  variant = "default",
  spacing = "md",
  distribution,
  alignment,
  showOutline,
  noMargins,
  ...rest
}) => {
  const baseStyle = "w-full h-fit flex";

  const containerVariants = {
    default: cn(baseStyle),
    inline: cn(baseStyle, "flex-row"),
    vertical: cn(baseStyle, "flex-col"),
  };

  const distributions = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  const alignments = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    between: "justify-between",
  };

  const spacings = {
    sm: "px-4 py-2",
    md: "px-8 py-2",
    lg: "px-12 py-2",
  };

  return (
    <div
      className={cn(
        containerVariants[variant],
        distributions[distribution],
        alignments[alignment],
        spacings[spacing],
        showOutline && "outline-dashed outline-3 outline-gray-300",
        noMargins && "p-0",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
