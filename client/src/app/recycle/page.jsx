'use client'

import React from 'react';
import { BreadCrumbs } from '@/components/ui/breadCrumbs';
import { MenuDrawer } from '@/components/features/menu_drawer/MenuDrawer';
import { DataCard } from '@/components/ui/data_card';
import { CLIENT_ROUTES } from '@/constants/routes.client';
import { Text } from '@/components/ui/text';
import { HorizontalSlider } from '@/components/ui/horizontal_slider';
import { BadgeC } from '@/components/ui/badge_claro';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { CarrouselCard } from '@/components/features/carrousel/CarrouselCard';


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


const badges = [
  {
    id: 1,
    element: <BadgeC>Cables</BadgeC>
  },
  {
    id: 2,
    element: <BadgeC>Baterías</BadgeC>
  },
  {
    id: 3,
    element: <BadgeC>Dispositivos grandes</BadgeC>
  },
  {
    id: 4,
    element: <BadgeC>Dispositivos medianos</BadgeC>
  },
  {
    id: 5,
    element: <BadgeC>DIspositivos pequeños</BadgeC>
  }
]

const Page = () => {


  const devices = [{
    id: 1,
    element: <CarrouselCard data={{
      image: "/images/home/placeholder.webp",
      alt: "celular",
      title: "Celular",
      points: "20",
      center: "center"
    }} />
  }, {
    id: 2,
    element: <CarrouselCard data={{
      image: "/images/home/placeholder.webp",
      alt: "celular",
      title: "Celular",
      points: "20",
      center: "center"
    }} />
  },
  {
    id: 3,
    element: <CarrouselCard data={{
      image: "/images/home/placeholder.webp",
      alt: "celular",
      title: "Celular",
      points: "20",
      center: "center"
    }} />
  },
  {
    id: 4,
    element: <CarrouselCard data={{
      image: "/images/home/placeholder.webp",
      alt: "celular",
      title: "Celular",
      points: "20",
      center: "center"
    }} />
  },
  {
    id: 5,
    element: <CarrouselCard data={{
      image: "/images/home/placeholder.webp",
      alt: "celular",
      title: "Celular",
      points: "20",
      center: "center"
    }} />
  },]

  return (
    <main className='flex flex-col w-full h-full gap-6'>

      <BreadCrumbs currentRoute={'quiero reciclar'}>
        <MenuDrawer />
      </BreadCrumbs>

      <DataCard variant="single" dataCardOptions={singleDataCardOptions} />

      <Text variant='subtitle'>Categorías</Text>
      <HorizontalSlider elements={badges} />

      <Text variant='subtitle'>Dispositivos a reciclar</Text>

      <Carousel className="w-[85%] mx-auto">
        <CarouselContent className="ml-2 gap-1">
          <HorizontalSlider elements={devices} />
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default Page;