import { NavBar } from "@/components/features/navbar/NavBar";
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
const page = () => {
  const recycledItems = Array(4).fill();

  return (
    <>
      <main className="w-full h-[calc(100vh-96px)] flex flex-col gap-10 ">
        {/* HEADER */}
        <NavBar />

        {/* USER POINTS */}
        <div className="w-full p-5 justify-between  h-20 bg-gray-300 rounded-2xl flex flex-col items-start">
          <h2 className="font-bold">PUNTAJE</h2>
          <h2 className="font-bold">50 pts.</h2>
        </div>

        {/* USER HISTORY */}
        <div className="w-full h-96 flex flex-col p-2 justify-between items-center  divide-y-2 divide-black">
          {recycledItems.map((_, idx) => (
            <RecycledItem key={idx} />
          ))}
        </div>
      </main>
      <nav className="w-screen h-24 flex flex-col justify-center items-center gap-10 p-5 border-4 border-green-500 border-dashed font-bold">
        NAVBAR LAYOUT
      </nav>
    </>
  );
};

export default page;
