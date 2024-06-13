import { getCurrentUserInfo } from "@/actions/getUserInfo";
import { RecycledItemsContainer } from "@/components/features/recycled_items/RecycledItemsContainer";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React from "react";

const singleDataCardOptions = {
  mainContent: "PUNTAJE",
  secondaryContent: "home",
  secondaryLinkTo: "/",
  iconName: "leftArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      50 pts.
    </Text>
  ),
};
const page = async () => {
  const userData = await getCurrentUserInfo()

  return (
    <main className="w-full h-full flex flex-col gap-10 ">
      {/* HEADER */}
      <BreadCrumbs currentRoute="History">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>

      {/* USER POINTS */}
      <DataCard variant="single" dataCardOptions={singleDataCardOptions} />

      {/* USER HISTORY */}
      <RecycledItemsContainer data={userData.data.recyclingHistory} />
    </main>
  );
};

export default page;
