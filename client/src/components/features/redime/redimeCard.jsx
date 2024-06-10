import { Button } from "@/components/ui/button";
import React from "react";

const RedimeCard = () => {
  return (
    <div className="w-full  h-full flex flex-col justify-between gap-2 border-green-500 border-2 rounded-2xl p-3 md:max-w-[29rem]">
      <div className="flex justify-between *:font-bold">
        <div className="w-full h-52 flex justify-center items-center bg-gray-300 rounded-t-3xl">
          FOTO
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Restaurante los Pepitos</p>
          <Button className="px-6 rounded-3xl bg-custom-gradient-to text-md">
            Canjear
          </Button>
        </div>
        <p>Cena para dos personas con todo incluido</p>
        <p className="text-custom-gradient-from">50 Puntos.</p>
        <p>Av. General Paz 489</p>
        <p>Horario: 20:00 a 00:00 Hrs</p>
        <p>Contacto: xxxxxxxxxx</p>
      </div>
    </div>
  );
};

export default RedimeCard;
