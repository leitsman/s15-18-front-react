import React from "react";
import RegisterForm from "../../components/features/register/registerform";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Stack } from "@/components/layout/stack";
import { Logo } from "@/components/ui/logo";

const Page = () => {
  return (
    <Stack
      noMargins
      variant="vertical"
      distribution="center"
      alignment="center"
      className="h-[100dvh] gap-10 "
    >
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full flex justify-center">
          <Logo />
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
    </Stack>
  );
};
export default Page;
