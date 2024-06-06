"use client";
import Image from "next/image";
import React from "react";
import LoginForm from "@/components/features/login/loginform";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Stack } from "@/components/layout/stack";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-center">
          <Logo />
        </div>
        <div className="w-full">
          <h1 className="text-black text-center text-2xl">BIENVENIDOS</h1>
          <LoginForm />
        </div>

        <div className="w-full flex flex-col gap-10 ">
          <Stack variant="inline" alignment="center" className="gap-2">
            <hr className="w-full border border-foreground" />
            <p>o</p>
            <hr className="w-full border border-foreground" />
          </Stack>

          <div className="w-full flex flex-col gap-3 justify-center">
            <Button className="w-full border-custom-gradient-to border-2 rounded-full bg-white hover:bg-white">
              <Text
                size="sm"
                variant="subtitle"
                className="bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to text-transparent bg-clip-text"
              >
                Continuar con Google
              </Text>
            </Button>

            <Stack
              noMargins
              variant="inline"
              alignment="center"
              className="*:w-full"
            >
              <div className="w-full text-xs">¿No tienes una cuenta?</div>
              <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                  Registrarse
                </Text>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
