export const Container = ({
  children,
  className,
  spacing = "md",
  showOutline,
  noMargins,
}) => {
  const baseStyle = "w-full h-full flex";
  const spacings = {
    sm: "px-4 py-2",
    md: "px-8 py-2",
    lg: "px-12 py-2",
  };

  return (
    <div
      className={cn(
        baseStyle,
        spacings[spacing],
        showOutline && "outline outline-1 outline-gray-300",
        noMargins && "p-0",
        className,
      )}
    >
      {children}
    </div>
  );
};
