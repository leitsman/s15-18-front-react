import { NavBar } from "@/components/features/navbar/NavBar";
import { MockRecycledItems } from "@/components/features/recycled_items/recycledItems.content";
import { RecycledItemsContainer } from "@/components/features/recycled_items/RecycledItemsContainer";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";

function RecycledItem() {
  return (
    <div className="w-full p-3  h-24 flex flex-col justify-between bg-gray-300">
      <div className="flex justify-between *:font-bold">
        <p>CELULAR</p>
        <p>20 puntos</p>
      </div>
      <div className="flex justify-between *:font-bold">
        <p>Fecha de reciclaje</p>
        <p>Centro de acopio</p>
      </div>
    </div>
  );
}

const singleDataCardOptions = {
  mainContent: "PUNTAJE",
  secondaryContent: "Historial",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      50 pts.
    </Text>
  ),
};
const page = () => {
  const recycledItems = Array(4).fill();

  return (
    <main className="w-full h-full flex flex-col gap-10 ">
      {/* HEADER */}
      <BreadCrumbs currentRoute="History">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>

      {/* USER POINTS */}
      <DataCard variant="single" dataCardOptions={singleDataCardOptions} />

      {/* USER HISTORY */}
      <RecycledItemsContainer data={MockRecycledItems} />
    </main>
  );
};

export default page;
