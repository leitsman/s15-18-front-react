"use client";

import React, { useState } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export const ProfileInput = ({
  className,
  placeholder,
  label,
  type,
  field,
}) => {
  const [allowInput, setAllowInput] = useState(true);

  return (
    <FormItem className="relative">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            className={cn(className)}
            placeholder={placeholder}
            type={type}
            {...field}
            disabled={allowInput && true}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setAllowInput(!allowInput)}
            className="absolute top-1 right-2 w-fit h-fit rounded-full p-1 bg-white"
          >
            <Icon iconName="pencil" />
          </Button>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
