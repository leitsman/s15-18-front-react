"use client";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";
const LoginForm = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-6">
        <div className="w-full">
          <form className=" flex flex-col items-center gap-5">
            <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="Email o usuario"
              type="email"
            ></Textfield>
            <Textfield
              className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none"
              placeholder="Contraseña"
              type="password"
            ></Textfield>
          </form>
        </div>
        <div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col items-center ">
              <a href="#">
                <Text
                  size="xs"
                  variant="subtitle"
                  className="text-custom-gradient-from font-bold"
                >
                  ¿Olvidaste tu contraseña?
                </Text>
              </a>
              <Button className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="text-white font-serif"
                >
                  Iniciar sesión
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
