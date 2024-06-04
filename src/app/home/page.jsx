import { NavBar } from "@/components/features/navbar/NavBar";
import { ContentCard } from "@/components/ui/content_card";
import React from "react";

/* 
Además de reciclar, podes buscarle un nuevo uso lejos de ser un teléfono móvil: una de las opciones es convertir nuestro viejo teléfono en una cámara de vigilancia para la casa o para los niños, algo que es tan sencillo a partir de la instalación de aplicaciones
 */

const contentOptions1 = {
  iconName: "bell",
  title: "asdasdad",
  content:
    "Además de reciclar, podes buscarle un nuevo uso lejos de ser un teléfono móvil: una de las opciones es convertir nuestro viejo teléfono en una cámara de vigilancia para la casa o para los niños, algo que es tan sencillo a partir de la instalación de aplicaciones",
};
const contentOptions2 = {
  iconName: "bell",
  title: "asdasdad",
  image: "/images/placeholder.webp",
  alt: "asdasdad",
  content:
    "Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo un protocolo. La fase del fin de la vida útil (EOL) de teléfonos móviles genera una gran cantidad de desechos tóxicos que impone graves impactos en la salud humana y el medio ambiente",
};
const Home = () => {
  return (
    <>
      <NavBar variant="home" />
      <main className="">
        <article>
          <section>
            <banner className="bg-orange-700 flex w-full h-32 mb-10">
              banner
            </banner>
          </section>
          <ContentCard contentOptions={contentOptions1} noImage noIcon />
          <ContentCard contentOptions={contentOptions2} noIcon />

          <section className="mb-10">
            <div className="flex flex-row items-center gap-3 mb-5">
              <icono className=" bg-green-600 h-10 w-10 flex items-center justify-center rounded-[50%]">
                icon
              </icono>
              <h2 className="">Sistema de Puntaje</h2>
            </div>
            <div>
              <div className="bg-red-600 w-20 h-32 float-start mt-1">
                imagen
              </div>
              <p>
                Los desechos electrónicos son considerados una crisis en aumento
                y tú como técnico debes ser parte de la solución, es por ello
                que su desecho o reciclaje se debe hacer bajo un protocolo. La
                fase del fin de la vida útil (EOL) de teléfonos móviles genera
                una gran cantidad de desechos tóxicos que impone graves impactos
                en la salud humana y el medio ambiente.
              </p>
            </div>
          </section>
          <button className="bg-amber-400 p-1 rounded-xl mx-auto flex">
            Quiero Reciclar
          </button>
        </article>
        <section>
          <h2>Categorias</h2>
          <div>
            <span>Cables</span>
            <span>Baterias</span>
            <span>Dispositivos generales</span>
            <span>refrigerador</span>
            <span>termostatos</span>
          </div>
        </section>
        <section>
          <h2>Dispositivos Medianos</h2>
          <div>
            <span>Cables</span>
            <span>Baterias</span>
            <span>Dispositivos generales</span>
            <span>refrigerador</span>
            <span>termostatos</span>
          </div>
        </section>
      </main>
      <footer>this is footer</footer>
    </>
  );
};

export default Home;
