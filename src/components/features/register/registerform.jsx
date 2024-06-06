"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";
import { RegisterSchema } from "@/schemas/register.schema";
import { Form, FormField } from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    defaultValues: {
      name: "",
      dni: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: valibotResolver(RegisterSchema),
  });

  const handleRegister = async (data) => {
    const BASE_URL = "http://localhost:3000/api";
    const path = "/auth/login";

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log("Success!"));
      }, 2000);
    });

    async function handlePromise() {
      const res = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log(resData);
      return resData;
    }

    startTransition(async () => handlePromise());

    console.log(data);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="flex flex-col items-center gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="nombre"
                  label="Nombre"
                  type="text"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="dni"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="dni"
                  label="DNI"
                  type="text"
                  field={field}
                />
              )}
            />

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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="confirmación"
                  label="Confirmación de Contraseña"
                  type="password"
                  field={field}
                />
              )}
            />

            <div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col items-center">
                  <Button
                    type="submit"
                    className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full"
                  >
                    <Text
                      size="md"
                      variant="subtitle"
                      className="text-white font-serif"
                    >
                      {!isPending ? (
                        "Registrarse"
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

export default RegisterForm;
