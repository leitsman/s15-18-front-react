"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Text } from "@/components/ui/text";
import { Textfield } from "@/components/ui/textfield";
import { PersonCreationSchema } from "@/schemas/personCreation.schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm as UseForm } from "react-hook-form";
import { Stack } from "@/components/layout/stack";
import { SERVER_ROUTES } from "@/constants/server.routes";
import { getUserToken } from "@/actions/getUserToken";
import { Icon } from "@/components/ui/icon";

const OnboardingForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = UseForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dni: "",

      addressName: "",
      postalCode: "",
      latitud: "",
      longitud: "",
      city: "",
      country: "",
      phone: "",
    },
    resolver: valibotResolver(PersonCreationSchema),
  });

  async function handlePersonCreation(data) {
    const token = await getUserToken();

    const parsedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      dni: data.dni,
      address: {
        addressName: data.addressName,
        postalCode: data.postalCode,
        latitud: "",
        longitud: "",
        city: data.city,
        country: data.country,
        phone: data.phone,
      },
    };

    startTransition(async () => {
      const tokenObj = await getUserToken();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${SERVER_ROUTES.person.create}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenObj.token}`,
          },
          body: JSON.stringify(parsedData),
        }
      );
      if (res.ok) {
        console.log("Person created successfully");
      }
    });
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handlePersonCreation)}
          className="flex flex-col items-center gap-5"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <Textfield
                className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                placeholder="Nombre"
                label="Nombre"
                type="text"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <Textfield
                className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                placeholder="Apellido"
                label="Apellido"
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
                placeholder="DNI"
                label="DNI"
                type="text"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="addressName"
            render={({ field }) => (
              <Textfield
                className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                placeholder="Nombre de dirección"
                label="Nombre de dirección"
                type="text"
                field={field}
              />
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <Textfield
                className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                placeholder="Teléfono"
                label="Teléfono"
                type="text"
                field={field}
              />
            )}
          />

          <Stack
            noMargins
            variant="inline"
            distribution="center"
            className="gap-5"
          >
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <Textfield
                  className="w-20 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="Ciudad"
                  label="Ciudad"
                  type="text"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <Textfield
                  className="w-20 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="País"
                  label="País"
                  type="text"
                  field={field}
                />
              )}
            />

            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <Textfield
                  className="w-28 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="Código postal"
                  label="Código postal"
                  type="text"
                  field={field}
                />
              )}
            />
          </Stack>

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
                      "Guardar"
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
  );
};

export default OnboardingForm;
