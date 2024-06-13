import React from "react";
import Image from "next/image";
import { Container } from "../layout/container";
import { Stack } from "../layout/stack";
import { Icon } from "./icon";
import { Text } from "./text";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ContentCard = ({
  contentOptions,
  noImage = false,
  noIcon = false,
  reverse = false,
}) => {
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
        {noIcon ? null : (
          <Link href={contentOptions?.link ? contentOptions?.link : "/"} className="h-fit p-0">
            <Icon iconName={"rightArrow"} />
          </Link>
        )}
      </Stack>
      <Stack noMargins variant="inline" className={cn(reverse && "flex-row-reverse", "gap-2")}>
        {noImage ? null : (
          <Image
            src={contentOptions.image}
            alt={contentOptions.alt}
            width={100}
            height={100}
            className="size-[100px]"
            priority
          />
        )}
        <Text variant={"body"} size="xs" className="line-clamp-6">
          {contentOptions.content}
        </Text>
      </Stack>
    </Container>
  );
};
