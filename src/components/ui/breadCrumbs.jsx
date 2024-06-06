"use client";

import React from "react";
import { Stack } from "../layout/stack";
import { Icon } from "./icon";
import { Text } from "./text";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const BreadCrumbs = ({ currentRoute, children }) => {
  const router = useRouter();

  return (
    <Stack variant="inline" distribution="start" alignment="center">
      <Button
        className="p-0 w-fit h-fit bg-transparent hover:bg-transparent text-foreground"
        onClick={() => router.back()}
      >
        <Icon iconName="leftArrow" size="lg" className="" />
      </Button>
      <Text variant="subtitle" size="lg" className="w-full text-center ">
        {currentRoute}
      </Text>
      {children}
    </Stack>
  );
};
