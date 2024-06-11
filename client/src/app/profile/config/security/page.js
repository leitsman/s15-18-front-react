import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";


const singleDataCardOptions = {
  mainContent: "Seguridad",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const page = () => {
  const recycledItems = Array(4).fill();

  return (
    <main className="w-full h-full flex flex-col gap-10 ">
      {/* HEADER */}
      <BreadCrumbs currentRoute="Perfil">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>

      {/* USER POINTS */}
      <DataCard variant="single" dataCardOptions={singleDataCardOptions} />

    
    </main>
  );
};

export default page;
