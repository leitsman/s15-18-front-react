"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";
import { toast } from "@/components/ui/use-toast";
import { LoginSchema } from "@/schemas/login.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: valibotResolver(LoginSchema),
  });

  const handleLogin = async (data) => {
    const BASE_URL = "http://localhost:3000/api";
    const path = "/auth/login";

    async function signInUser() {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (resData.data) redirect("/");
      toast({
        variant: "destructive",
        title: "Upsss 🤭",
        description: "Credenciales de usuario invalidas",
      });
    }
    async function handlePromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(signInUser());
        }, 200);
      });
    }

    startTransition(async () => handlePromise());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="flex flex-col items-center gap-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="email"
                  label="Email"
                  type="email"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="contraseña"
                  label="Contraseña"
                  type="password"
                  field={field}
                />
              )}
            />

            <div className="w-full flex flex-col items-center gap-2 mt-10">
              <Text
                variant="body"
                size="sm"
                className="font-bold text-blue-700"
              >
                ¿olvidaste la contraseña?
              </Text>
              <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col items-center">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full"
                  >
                    <Text
                      size="md"
                      variant="subtitle"
                      className="text-white font-serif"
                    >
                      {!isPending ? (
                        "Iniciar sesión"
                      ) : (
                        <Icon iconName="loader" className="animate-spin" />
                      )}
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
