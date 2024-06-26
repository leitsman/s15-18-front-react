import Link from "next/link";

import { NavBar } from "@/components/features/navbar/NavBar";
import { DataCard } from "@/components/ui/data_card";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { Stack } from "@/components/layout/stack";
import { ContentCard } from "@/components/ui/content_card";
import { BadgeC } from "@/components/ui/badge_claro";
import { CLIENT_ROUTES } from "@/constants/routes.client";
import { getCurrentUserInfo } from "@/actions/getUserInfo";

const composeDataCardOptions = {
  mainContent: "PUNTAJE",
  secondaryContent: "Historial",
  secondaryLinkTo: CLIENT_ROUTES.HISTORY,
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>

    </Text>
  ),
  extraSectionElements: (
    <>
      <Stack noMargins variant="inline" distribution="between">
        <Link href={CLIENT_ROUTES.RECYCLE.ROOT} className="w-fit flex flex-col items-center">
          <Icon
            variant="circular"
            size="lg"
            iconName={"eco"}
            className={"text-black"}
          />
          <Text variant={"body"} size="sm">
            ¡Quiero reciclar!
          </Text>
        </Link>
        <Link href={CLIENT_ROUTES.REDIME} className="w-fit flex flex-col items-center">
          <Icon
            variant="circular"
            size="lg"
            iconName={"redeem"}
            className={"text-black"}
          />
          <Text variant={"body"} size="sm">
            Canjear puntos
          </Text>
        </Link>
      </Stack>
    </>
  ),
};

const contentCardOptions = {
  title: "ReCycle Tips",
  iconName: "recycle",
  image: "/dispositivos/todosreciclando.webp",
  alt: "",
  link: "/tips",
  content:
    "Además de reciclar, podes buscarle un nuevo uso lejos de ser un teléfono móvil: una de las opciones es  convertir nuestro viejo teléfono en una cámara de vigilancia para la casa o para los niños, algo que es tan sencillo a partir de la instalación de",
};

const contentCardOptions2 = {
  title: "Noticias e información",
  iconName: "news",
  image: "/dispositivos/money.webp",
  alt: "",
  link: "/news",
  content:
    "Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo un protocolo. La fase del fin de la vida útil (EOL) de teléfonos móviles genera una gran cantidad de desechos tóxicos que impone graves impactos en la salud humana y el medio ambiente.",
};

export default async function Home() {
  const userData = await getCurrentUserInfo()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5 lg:p-24 gap-5">
      <NavBar />
      <DataCard variant={"compose"} dataCardOptions={{
        mainContent: "PUNTAJE",
        secondaryContent: "Historial",
        secondaryLinkTo: CLIENT_ROUTES.HISTORY,
        iconName: "rightArrow",
        secondSectionElements: (
          <Text variant={"body"} className={"font-bold"}>
            {!userData?.data?.totalPoints ? 0 : userData?.data?.totalPoints}
          </Text>
        ),
        extraSectionElements: (
          <>
            <Stack noMargins variant="inline" distribution="between">
              <Link href={CLIENT_ROUTES.RECYCLE.ROOT} className="w-fit flex flex-col items-center">
                <Icon
                  variant="circular"
                  size="lg"
                  iconName={"eco"}
                  className={"text-black"}
                />
                <Text variant={"body"} size="sm">
                  ¡Quiero reciclar!
                </Text>
              </Link>
              <Link href={CLIENT_ROUTES.REDIME} className="w-fit flex flex-col items-center">
                <Icon
                  variant="circular"
                  size="lg"
                  iconName={"redeem"}
                  className={"text-black"}
                />
                <Text variant={"body"} size="sm">
                  Canjear puntos
                </Text>
              </Link>
            </Stack>
          </>
        ),
      }} />
      <ContentCard contentOptions={contentCardOptions} />
      <ContentCard contentOptions={contentCardOptions2} />
      <Stack noMargins distribution="between" alignment="center" className="h-20 gap-3">
        <BadgeC className="h-20 flex items-center justify-center gap-1">
          <Text variant="body" size="sm">
            Centros de acopio
          </Text>
          <Icon iconName="recycle" variant="circular" className="text-black" />
        </BadgeC>
        <BadgeC className="h-20 flex items-center justify-center gap-1">
          <Text variant="body" size="sm">
            Registrarse como recividor
          </Text>
          <Icon iconName="recycle" variant="circular" className="text-black" />
        </BadgeC>
      </Stack>
    </main>
  );
}
