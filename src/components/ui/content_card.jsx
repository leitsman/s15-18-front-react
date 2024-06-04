import React from "react";
import { Container } from "../layout/container";
import { Stack } from "../layout/stack";
import { Icon } from "./icon";
import { Text } from "./text";
import { Button } from "./button";
import Image from "next/image";

export const ContentCard = ({ contentOptions }) => {
  return (
    <Container noMargins className="gap-5">
      <Stack
        noMargins
        variant="inline"
        distribution="between"
        alignment="center"
      >
        <div className="flex items-center gap-5">
          <Icon
            variant="circular"
            circularColor="gradient"
            iconName={contentOptions.iconName}
            size="md"
            className="text-white"
          />
          <Text variant="body">{contentOptions.title}</Text>
        </div>
        <Button variant="ghost" className="h-fit p-0">
          <Icon iconName={"rightArrow"} />
        </Button>
      </Stack>
      <Stack noMargins variant="inline" className="gap-2">
        <Image
          src={contentOptions.image}
          alt={contentOptions.alt}
          width={100}
          height={100}
          className="size-[100px]"
        />
        <Text variant={"body"} size="xs" className="line-clamp-6">
          {contentOptions.content}
        </Text>
      </Stack>
    </Container>
  );
};
