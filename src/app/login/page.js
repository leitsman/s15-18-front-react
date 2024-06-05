"use client";
import Image from "next/image";
import React from "react";
import logo from "../../app/assets/logorecycle.png";
import LoginForm from "@/components/features/login/loginform";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-center">
          <Image src={logo} width={200} height={200} alt="imagen" />
        </div>
        <div className="w-full">
          <h1 className="text-black text-center text-2xl">BIENVENIDOS</h1>
          <LoginForm></LoginForm>
          {/* <form className=' flex flex-col items-center gap-5'>
            <div className='w-full h-12 pl-2 pr-10 bg-gray-300 flex items-center'>
              E-mail o numero
            </div>
            <div className='w-full h-12 pl-2 pr-10 bg-gray-300 flex items-center'>
              Contraseña
            </div>
            <div className='w-4/5  flex flex-col justify-center items-center'>
              <div className='w-4/5 h-12 gap-2 m-3 px-2 bg-gray-300 flex justify-center items-center rounded-lg'>
                Iniciar sesión
              </div>
              <p className='text-xs'>¿Olvidaste tu contraseña?</p>
            </div>
          </form> */}
        </div>
        <div>
          <div className="w-full flex flex-col gap-3">
            <Button className="border-custom-gradient-to border-2 rounded-full bg-white hover:bg-white">
              <Text
                size="sm"
                variant="subtitle"
                className="text-custom-gradient-to"
              >
                Continuar con Google
              </Text>
            </Button>

            <div className="flex items-center space-x-11">
              <div className="text-xs">¿No tienes una cuenta?</div>
              <Button className="w-32 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="text-white font-serif"
                >
                  Registrarse
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
