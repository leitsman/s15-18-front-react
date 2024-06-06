"use client";

import Image from "next/image";
import React from "react";
import RegisterForm from "../../components/features/register/registerform";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useTheme } from "next-themes";

const Page = () => {
  const userTheme = useTheme();

  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-center">
          {userTheme.theme === "light" ? (
            <Image
              src="/logo/logoNegro.webp"
              alt="logo"
              width={200}
              height={200}
            />
          ) : (
            <Image
              src="/logo/logoBlanco.webp"
              alt="logo"
              width={200}
              height={200}
            />
          )}
        </div>
        <h1 className="text-center text-5xl max-sm:text-2xl">Crea tu cuenta</h1>
        <Button className="border-custom-gradient-to border-2 rounded-full bg-white hover:bg-white">
          <Text
            size="sm"
            variant="subtitle"
            className="text-custom-gradient-to"
          >
            Continuar con Google
          </Text>
        </Button>
      </div>

      <RegisterForm />
    </main>
  );
};
export default Page;
