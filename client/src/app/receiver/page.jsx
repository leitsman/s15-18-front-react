'use client'

import React, { useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { FormField, Form } from '@/components/ui/form'
import { Text } from '@/components/ui/text'
import { Textfield } from '@/components/ui/textcomp'
import { useForm } from 'react-hook-form'


const page = () => {
  function handleLogin(data) {
    console.log(data);
  }

  const form = useForm({
    defaultValues: {
      dni: ""
    },
  });

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
              name="dni"
              render={({ field }) => (
                <Textfield
                  className="w-80 h-9 border-b-2 border-b-green-300 placeholder-custom focus:outline-none"
                  placeholder="dni"
                  label="dni"
                  type="text"
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
                      Consultar
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default page


