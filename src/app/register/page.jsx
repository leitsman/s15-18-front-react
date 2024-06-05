import Image from "next/image";
import React from "react";
import RegisterForm from "../../components/features/register/registerform";
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text";
import logo from "../../app/assets/logorecycle.png";
const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-center">
          <Image src={logo} width={200} height={200} alt="imagen" />
        </div>
        <h1 className="text-center text-5xl max-sm:text-2xl">Crea tu cuenta</h1>
        <Button className="border-custom-gradient-to border-2 rounded-full bg-white hover:bg-white"><Text size="sm" variant="subtitle" className="text-custom-gradient-to">Continuar con Google</Text></Button>
      </div>

      <RegisterForm />
    </main>
  );
};
export default page;
