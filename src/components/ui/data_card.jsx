import React from "react";
import { Icon } from "@/components/ui/icon";
import { Stack } from "../layout/stack";
import { Button } from "./button";
import { Container } from "../layout/container";
import { Text } from "./text";

export const DataCard = ({ variant, dataCardOptions }) => {
  const variants = {
    single: (
      <Stack
        variant="vertical"
        distribution="center"
        className="h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white"
      >
        <Container noMargins className={"py-3 gap-2"}>
          <Stack
            noMargins
            variant="inline"
            distribution="between"
            alignment="center"
          >
            <h2 className="font-bold">{dataCardOptions.mainContent}</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">{dataCardOptions.secondaryContent}</h2>
              <Button variant="ghost" className="h-fit p-0">
                <Icon iconName={dataCardOptions.iconName} />
              </Button>
            </div>
          </Stack>
          <Stack noMargins>{dataCardOptions.secondSectionElements}</Stack>
        </Container>
      </Stack>
    ),
    compose: (
      <Stack
        variant="vertical"
        noMargins
        distribution="center"
        className="h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white"
      >
        <Container className={"py-3 gap-2"}>
          <Stack
            noMargins
            variant="inline"
            distribution="between"
            alignment="center"
          >
            <h2 className="font-bold">{dataCardOptions.mainContent}</h2>
            <div className="flex items-center gap-2">
              <h2 className="font-bold">{dataCardOptions.secondaryContent}</h2>
              <Button variant="ghost" className="h-fit p-0">
                <Icon iconName={dataCardOptions.iconName} />
              </Button>
            </div>
          </Stack>
          <Stack noMargins>{dataCardOptions.secondSectionElements}</Stack>
        </Container>
        <hr />
        <Container className={"px-10"}>
          {dataCardOptions.extraSectionElements}
        </Container>
      </Stack>
    ),
  };

  return variants[variant];
};
