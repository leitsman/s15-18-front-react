'use client'

import { Stack } from "@/components/layout/stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Icon } from "@/components/ui/icon"
import { Logo } from "@/components/ui/logo"
import { ModeToggle } from "@/components/ui/mode_toggle"
import { Text } from "@/components/ui/text"

export function MenuDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger><Icon iconName={"menu"} size="md" /></DrawerTrigger>
      <DrawerContent className="h-[100dvh]">

        <Stack variant="vertical" distribution="center" alignment="center" className="">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <Text variant="body">PEPITA FLORES</Text>
          </div>

          <div>
            <ModeToggle />
          </div>

          <div>
            nav icons
          </div>

          <div>
            <Logo />
          </div>
        </Stack>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}