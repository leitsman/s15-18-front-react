import React from "react";
import { Stack } from "../layout/stack";
import { Icon } from "./icon";
import { Text } from "./text";
import { Button } from "./button";

export const BreadCrumbs = ({ currentRoute }) => {
  return (
    <Stack variant="inline" distribution="start" alignment="center">
      <Button className="p-0 w-fit h-fit bg-transparent hover:bg-transparent text-foreground">
        <Icon iconName="leftArrow" size="md" className="" />
      </Button>
      <Text variant="subtitle" className="w-full text-center">
        {currentRoute}
      </Text>
    </Stack>
  );
};
