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
const textPointsSystem = {
  iconName: "arrowRight",
  title: "Sistema de Puntaje",
  image: "/images/placeholder.webp",
  alt: "asdasdad",
  content: `En Recycle, recompensamos tus esfuerzos por cuidar el medio ambiente. Por cada dispositivo electrónico que recicles a través de nuestra plataforma, ganarás puntos que podrás canjear por promociones y descuentos en establecimientos aliados que comparten nuestro compromiso con la sostenibilidad. ¡Recicla, acumula puntos y disfruta de beneficios mientras ayudas a proteger el planeta!`,
};
const Home = () => {
  return (
    <>
      <NavBar design="home" />
      <main>
        <article>
          <section>
            <banner className="bg-orange-700 flex w-full h-32 mb-10 rounded-t-3xl">
              banner
            </banner>
          </section>
          <ContentCard contentOptions={textAboutUs} noImage noIcon />
          <ContentCard contentOptions={textMission} noIcon />
          <ContentCard contentOptions={textPointsSystem} noIcon />
          <Button className="flex mx-auto">Quiero Reciclar</Button>
        </article>
        <section className="mb-5">
          <h2 className="text-lg">Categorias</h2>
          <div className="flex flex-row overflow-x-scroll gap-3">
            <span className="bg-green-400 px-3 py-3 rounded-lg  min-w-max">
              Cables
            </span>
            <span className="bg-green-400 px-3 py-3 rounded-lg  min-w-max">
              Baterias
            </span>
            <span className="bg-green-400 px-3 py-3 rounded-lg  min-w-max">
              Dispositivos moviles
            </span>
            <span className="bg-green-400 px-3 py-3 rounded-lg  min-w-max">
              Refrigerador
            </span>
            <span className="bg-green-400 px-3 py-3 rounded-lg  min-w-max">
              Termostatos
            </span>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-lg mb-5">Dispositivos Medianos</h2>
          <Carousel className="bg-slate-200 w-[70%] mx-auto">
            <CarouselContent className="">
              <CarouselItem className="pl-5 border-solid border-2 border-indigo-600">
                <div className="flex flex-col p-5 gap-2">
                  <div className="bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto">
                    soy la imagen
                  </div>
                  <h3 className="text-ellipsis">Celular</h3>
                  <span>20 puntos</span>
                  <span>Centro de acopio</span>
                  <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
                    Quiero Reciclar
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-5 border-solid border-2 border-indigo-600">
                <div className="flex flex-col p-5 gap-2">
                  <div className="bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto">
                    soy la imagen
                  </div>
                  <h3 className="text-ellipsis">pilas acomodativas</h3>
                  <span>20 puntos</span>
                  <span>Centro de acopio</span>
                  <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
                    Quiero Reciclar
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-5 border-solid border-2 border-indigo-600">
                <div className="flex flex-col p-5 gap-2">
                  <div className="bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto">
                    soy la imagen
                  </div>
                  <h3 className="text-ellipsis">lavadora lg samsumg rkj3-30</h3>
                  <span>20 puntos</span>
                  <span>Centro de acopio</span>
                  <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
                    Quiero Reciclar
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-5 border-solid border-2 border-indigo-600">
                <div className="flex flex-col p-5 gap-2">
                  <div className="bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto">
                    soy la imagen
                  </div>
                  <h3 className="text-ellipsis">pila</h3>
                  <span>20 puntos</span>
                  <span>Centro de acopio</span>
                  <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
                    Quiero Reciclar
                  </button>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-5 border-solid border-2 border-indigo-600">
                <div className="flex flex-col p-5 gap-2">
                  <div className="bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto">
                    soy la imagen
                  </div>
                  <h3 className="text-ellipsis">robacorriente</h3>
                  <span>20 puntos</span>
                  <span>Centro de acopio</span>
                  <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
                    Quiero Reciclar
                  </button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="mb-5 flex gap-3 flex-col">
          <h2 className="text-lg text-center mb-4 font-bold">
            Preguntas frecuentes
          </h2>
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

// <header className=" bg-slate-500 h-20 p-2 flex flex-row items-center justify-between">
//   <div className="flex flex-row items-center gap-1">
//     <logo className="bg-green-600 h-9 w-9 flex items-center justify-center rounded-[50%]">
//       logo
//     </logo>
//     <h1>Recicle</h1>
//   </div>
//   <nav>
//     <ul className="flex flex-row gap-1">
//       <li className="bg-fuchsia-400 px-2 flex items-center text-center rounded-3xl">
//         Registrarme
//       </li>
//       <li className="bg-fuchsia-400 px-2 flex items-center text-center rounded-3xl">
//         Iniciar Sesion
//       </li>
//     </ul>
//   </nav>
// </header>
