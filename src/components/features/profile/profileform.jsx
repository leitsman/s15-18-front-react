"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";

const ProfileForm = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-4">
        <div className="w-full">
          <form className=" flex flex-col items-center gap-0">
          <Textfield
              className="w-72 h-9  placeholder-custom focus:outline-none"
              placeholder="Nombre"
              type="text"
            ></Textfield>         
            <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="Pepita Flores"
              type="text"
            ></Textfield>
            <Textfield
              className="w-72 h-9 placeholder-custom focus:outline-none"
              placeholder="Direccion"
              type="text"
            ></Textfield>
              <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="San Patricio 1234"
              type="text"
            ></Textfield>
            <Textfield
              className="w-72 h-9  placeholder-custom focus:outline-none"
              placeholder="Localidad"
              type="text"
            ></Textfield>
             <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="San Rafael"
              type="text"
            ></Textfield>
            <Textfield
              className="w-72 h-9  placeholder-custom focus:outline-none"
              placeholder="Email"
              type="email"
            ></Textfield>
            <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="pepitaflores@gmail.com"
              type="email"
            ></Textfield>
             <Textfield
              className="w-72 h-9  placeholder-custom focus:outline-none"
              placeholder="Contraseña"
              type="text"
            ></Textfield>
             <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="********"
              type="password"
            ></Textfield>
          </form>
        </div>
        <div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col items-center ">
              <Button className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="text-black font-serif"
                >
                  Editar Datos
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;
