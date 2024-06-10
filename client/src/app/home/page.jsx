import { NavBar } from "@/components/features/navbar/NavBar";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ui/content_card";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BadgeC } from "@/components/ui/badge_claro";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/layout/stack";

const textAboutUs = {
  iconName: "arrowRight",
  title: "Sobre Nosotros",
  content: `Recycle es una plataforma innovadora dedicada a facilitar el reciclaje de dispositivos electrónicos, ofreciendo a los usuarios información esencial y localización de centros de acopio. Nuestra webapp acompaña a las personas en cada paso del proceso de reciclaje, asegurando que sus dispositivos sean gestionados de manera responsable y ecológica. Además, proporcionamos recursos educativos sobre cómo reciclar adecuadamente, la contaminación generada por los productos electrónicos y formas de reutilizarlos para minimizar el impacto ambiental.
  Una de nuestras características más destacadas es nuestro sistema de motivación y retribución. Por cada dispositivo reciclado, los usuarios ganan puntos que pueden canjear por promociones y descuentos en comercios que colaboran con nosotros y promueven prácticas amigables con el medio ambiente. Nos apasiona el cuidado del medio ambiente y creemos que, juntos, podemos hacer una diferencia significativa.`,
};
const textMission = {
  iconName: "arrowRight",
  title: "Misión",
  image: "/images/placeholder.webp",
  alt: "asdasdad",
  content: `Nuestra misión es empoderar a las personas a reciclar sus dispositivos electrónicos de manera fácil y efectiva, proporcionando las herramientas y la información necesarias para reducir la contaminación y promover la reutilización de los recursos. A través de nuestro sistema de retribución por puntos, incentivamos a los usuarios a participar activamente en el reciclaje, recompensándolos con beneficios en establecimientos comprometidos con el cuidado ambiental. Queremos crear una comunidad consciente y activa en la preservación del medio ambiente, haciendo del reciclaje una práctica accesible y común para todos.`,
};
const textVision = {
  iconName: "arrowRight",
  title: "Visión",
  image: "/images/placeholder.webp",
  alt: "asdasdad",
  content: `Nuestra visión es convertirnos en la plataforma líder en reciclaje de dispositivos electrónicos, transformando la forma en que las personas gestionan sus residuos tecnológicos. Aspiramos a ser un referente en educación ambiental y sostenibilidad, inspirando a las generaciones actuales y futuras a adoptar hábitos de consumo más responsables y a contribuir activamente en la protección del planeta. Con nuestro sistema de retribución por puntos, buscamos motivar a más personas a reciclar y colaborar con comercios que promuevan prácticas ecológicas, fomentando una economía circular y sostenible.`,
};
const textPointsSystem = {
  iconName: "arrowRight",
  title: "Sistema de Puntaje",
  image: "/images/placeholder.webp",
  alt: "asdasdad",
  content: `En Recycle, recompensamos tus esfuerzos por cuidar el medio ambiente. Por cada dispositivo electrónico que recicles a través de nuestra plataforma, ganarás puntos que podrás canjear por promociones y descuentos en establecimientos aliados que comparten nuestro compromiso con la sostenibilidad. ¡Recicla, acumula puntos y disfruta de beneficios mientras ayudas a proteger el planeta!`,
};

function CarrouselCard() {
  return (
    <CarouselItem className="border-2 rounded-3xl bg-card p-0">
      <div className="flex flex-col p-5 gap-2">
        <div className="bg-indigo-800 rounded-t-2xl h-32 w-full">
          soy la imagen
        </div>
        <h3 className="text-ellipsis">Celular</h3>
        <span>20 puntos</span>
        <span>Centro de acopio</span>
        <Button
          type="button"
          className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full"
        >
          <Text
            size="md"
            variant="subtitle"
            className="text-white font-serif"
          >
            Registrarme
          </Text>
        </Button>
      </div>
    </CarouselItem>
  )
}
const Home = () => {

  const arr = Array.from({ length: 10 }, (_, i) => i)
  return (
    <>
      <NavBar design="home" />
      <main className="flex flex-col gap-10">
        <article className="flex flex-col gap-10" >
          <section>
            <Image
              className="bg-orange-700 flex w-full h-32  rounded-t-3xl"
              src="/images/home/bannerHome.webp"
              alt="banner home"
              unoptimized
              width={500}
              height={300}
            ></Image>
          </section>
          <ContentCard contentOptions={textAboutUs} noImage noIcon />
          <ContentCard contentOptions={textMission} noIcon />
          <ContentCard contentOptions={textVision} noIcon reverse />
          <ContentCard contentOptions={textPointsSystem} noIcon />
          <Stack noMargins distribution="center">
            <Button
              type="button"
              className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full"
            >
              <Text
                size="md"
                variant="subtitle"
                className="text-white font-serif"
              >
                Quiero reciclar
              </Text>
            </Button>
          </Stack>
        </article>
        <section className="flex flex-col gap-5">
          <h2 className="text-lg">Categorias</h2>
          <div className="flex flex-row overflow-x-scroll gap-3">
            <BadgeC>
              Cables
            </BadgeC>
            <BadgeC>
              Baterías
            </BadgeC>
            <BadgeC>
              Dispositivos moviles
            </BadgeC>
            <BadgeC>
              Refrigerador
            </BadgeC>
            <BadgeC>
              Termostatos
            </BadgeC>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-lg mb-5">Dispositivos Medianos</h2>
          <Carousel className="w-[85%] mx-auto">
            <CarouselContent className="ml-2 gap-1">
              {arr.map((data, idx) => (
                <CarrouselCard key={idx} data={data} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="mb-5 flex gap-3 flex-col">
          <Text variant="subtitle" className="text-lg text-center mb-4 font-bold">
            Preguntas frecuentes
          </Text>
          <h3 className="text-lg text-gray-600">
            1. ¿Cómo funciona el sistema de puntaje de Recycle?
          </h3>
          <p>
            Al reciclar tus dispositivos electrónicos a través de nuestra
            plataforma, acumulas puntos que puedes canjear por promociones y
            descuentos en establecimientos colaboradores. Cada dispositivo tiene
            un valor en puntos basado en su tipo y estado.
          </p>
          <h3 className="text-lg text-gray-600">
            2. ¿Dónde puedo encontrar los centros de acopio para reciclar mis
            dispositivos?
          </h3>
          <p>
            En nuestra webapp, encontrarás una sección dedicada a localizar los
            centros de acopio más cercanos a tu ubicación. Simplemente ingresa
            tu dirección y te mostraremos las opciones disponibles.
          </p>
          <h3 className="text-lg text-gray-600">
            3. ¿Qué tipos de dispositivos electrónicos puedo reciclar con
            Recycle?
          </h3>
          <p>
            {`Puedes reciclar una amplia variedad de dispositivos electrónicos,
            incluyendo teléfonos móviles, laptops, tablets, cámaras, y más.
            Consulta nuestra lista completa en la sección "Cómo reciclar" de
            nuestra webapp.`}
          </p>
          <h3 className="text-lg text-gray-600">
            4. ¿Cómo puedo canjear mis puntos por promociones y descuentos?
          </h3>
          <p>
            {`Una vez que hayas acumulado puntos, visita la sección "Recompensas"
            en nuestra webapp para ver las promociones y descuentos disponibles.
            Selecciona la oferta que deseas y sigue las instrucciones para
            canjear tus puntos.`}
          </p>
        </section>
      </main>
      {/* <footer>this is footer</footer> */}
    </>
  );
};

export default Home;
