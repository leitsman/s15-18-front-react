"use client";

import Image from "next/image";
import React, { useState } from "react";
import eyeOpen from "../../app/assets/Loginimages/ojo-abierto.png";
import eyeClosed from "../../app/assets/Loginimages/ojo-cerrado.png";
import { FormControl, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export const Textfield = ({ className, placeholder, label, type, field }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormItem className="relative">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <>
          <Input
            className={cn(type === "password" ? "pr-10" : "", className)}
            placeholder={placeholder}
            type={showPassword ? "text" : type}
            {...field}
          />
          {type === "password" && (
            <div
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-10 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showPassword ? (
                <Image src={eyeOpen} alt="open eye" width={24} height={24} />
              ) : (
                <Image src={eyeClosed} alt="close eye" width={24} height={24} />
              )}
            </div>
          )}
        </>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
