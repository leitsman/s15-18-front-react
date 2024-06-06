import Welcome from "@/components/mdx/Welcome.mdx";
import { NavBar } from "@/components/features/navbar/NavBar";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { Stack } from "@/components/layout/stack";
import { ContentCard } from "@/components/ui/content_card";
import { MockRecycledItems } from "@/components/features/recycled_items/recycledItems.content";
import { RecycledItemsContainer } from "@/components/features/recycled_items/RecycledItemsContainer";
import { Button } from "@/components/ui/button";
import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { ModeToggle } from "@/components/ui/mode_toggle";

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

const composeDataCardOptions = {
  mainContent: "PUNTAJE",
  secondaryContent: "Historial",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      50 pts.
    </Text>
  ),
  extraSectionElements: (
    <Stack noMargins variant="inline" distribution="between">
      <div className="w-fit flex flex-col items-center">
        <Icon
          variant="circular"
          size="lg"
          iconName={"eco"}
          className={"text-black"}
        />
        <Text variant={"body"} size="sm">
          ¡Quiero reciclar!
        </Text>
      </div>
      <div className="w-fit flex flex-col items-center">
        <Icon
          variant="circular"
          size="lg"
          iconName={"redeem"}
          className={"text-black"}
        />
        <Text variant={"body"} size="sm">
          Canjear puntos
        </Text>
      </div>
    </Stack>
  ),
};

const contentCardOptions = {
  title: "ReCycle Tips",
  iconName: "recycle",
  image: "/images/placeholder.webp",
  alt: "",
  content:
    "Además de reciclar, podes buscarle un nuevo uso lejos de ser un teléfono móvil: una de las opciones es  convertir nuestro viejo teléfono en una cámara de vigilancia para la casa o para los niños, algo que es tan sencillo a partir de la instalación de",
};

const contentCardOptions2 = {
  title: "Noticias e información",
  iconName: "news",
  image: "/images/placeholder.webp",
  alt: "",
  content:
    "Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo un protocolo. La fase del fin de la vida útil (EOL) de teléfonos móviles genera una gran cantidad de desechos tóxicos que impone graves impactos en la salud humana y el medio ambiente.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 gap-5">
      <h1 className="font-semibold">Hola team: s15-18-t-java-react</h1>
      <ModeToggle />

      <NavBar />
      <Icon variant="circular" circularColor="green" iconName={"bell"} />
      <DataCard variant={"single"} dataCardOptions={singleDataCardOptions} />
      <DataCard variant={"compose"} dataCardOptions={composeDataCardOptions} />
      <ContentCard contentOptions={contentCardOptions} />
      <ContentCard contentOptions={contentCardOptions2} />
      <RecycledItemsContainer data={MockRecycledItems} />
      <Welcome />

      <Button className="flex justify-center items-center gap-5">
        <Text variant={"body"}>hola</Text>
        <Icon iconName={"rightArrow"} />
      </Button>

      <BreadCrumbs currentRoute={"Historial"} />
    </main>
  );
}
