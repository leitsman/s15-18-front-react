"use client";

import { Form, FormField } from "@/components/ui/form";
import { RegisterSchema } from "@/schemas/register.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm as UseForm } from "react-hook-form";
import { ProfileInput } from "./profileInputs";

const ProfileForm = () => {
  const form = UseForm({
    defaultValues: {
      name: "Pepita Flores",
      address: "San Patricio 1234",
      location: "San Rafael",
      email: "pepitaflores@gmail.com",
      password: "password",
    },
    resolver: valibotResolver(RegisterSchema),
  });

  function handleRegister() {
    console.log("hola");
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-4">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleRegister)}
              className="flex flex-col items-center gap-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <ProfileInput
                    className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none bg-[#0180A7] text-white placeholder:text-white"
                    placeholder="nombre"
                    label="Nombre"
                    type="text"
                    field={field}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <ProfileInput
                    className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none bg-[#0180A7] text-white placeholder:text-white"
                    placeholder="dirección"
                    label="Dirección"
                    type="text"
                    field={field}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <ProfileInput
                    className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none bg-[#0180A7] text-white placeholder:text-white "
                    placeholder="location"
                    label="Localidad"
                    type="text"
                    field={field}
                  />
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <ProfileInput
                    className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none bg-[#0180A7] text-white placeholder:text-white"
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
                  <ProfileInput
                    className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none bg-[#0180A7] text-white placeholder:text-white"
                    placeholder="password"
                    label="Contraseña"
                    type="password"
                    field={field}
                  />
                )}
              />

              <div>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex flex-col items-center"></div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;
