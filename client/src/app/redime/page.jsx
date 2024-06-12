import { MenuDrawer } from "@/components/features/menu_drawer/MenuDrawer";
import { NavBar } from "@/components/features/navbar/NavBar";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { DataCard } from "@/components/ui/data_card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Text } from "@/components/ui/text";
import { CLIENT_ROUTES } from "@/constants/routes.client";

const singleDataCardOptions = {
  mainContent: "PUNTAJE",
  secondaryContent: "Historial",
  secondaryLinkTo: CLIENT_ROUTES.HISTORY,
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      50 pts.
    </Text>
  )
};


function RedimePlace() {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-2">
      <div className="flex justify-between *:font-bold">
        <div className="w-full h-52 flex justify-center items-center bg-gray-300 rounded-t-3xl">
          FOTO
        </div>
      </div>
      <div className="*:font-semibold flex flex-col gap-1">
        <div className="flex justify-between items-center *:font-bold">
          <p>Restaurante los Pepitos</p>
          <div className="px-8 py-1 bg-gray-300 rounded-3xl">Canjear</div>
        </div>
        <div>
          <p>Cena para dos personas con todo incluido</p>
        </div>
        <div>
          <p>50 Puntos.</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Av. General Paz 489</p>
          <p>Horario: 20:00 a 00:00</p>
        </div>
        <div>
          <p>Contacto: xxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

const page = () => {
  const redimePlaces = Array(10).fill();

  return (
    <>
      <main className="w-full h-full flex flex-col gap-10 py-5">
        {/* HEADER */}
        <BreadCrumbs currentRoute={'PROMOCIONES'} >
          <MenuDrawer />
        </BreadCrumbs>


        {/* USER POINTS */}

        <DataCard variant={"single"} dataCardOptions={singleDataCardOptions} />

        {/* Places to redime points */}
        <ScrollArea className="w-full h-[80dvh]">
          <div className="w-full h-96 mt-10 flex flex-col  justify-between items-center gap-5">
            {redimePlaces.map((_, idx) => (
              <RedimePlace key={idx} />
            ))}
          </div>
          <ScrollBar direction="vertical" />
        </ScrollArea>
      </main>
    </>
  );
};

export default page;
