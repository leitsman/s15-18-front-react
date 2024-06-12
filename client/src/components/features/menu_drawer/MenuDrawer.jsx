'use client'

import { Stack } from "@/components/layout/stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Icon } from "@/components/ui/icon"
import { Logo } from "@/components/ui/logo"
import { ModeToggle } from "@/components/ui/mode_toggle"
import { Text } from "@/components/ui/text"
import { CLIENT_ROUTES } from "@/constants/routes.client"
import { useRouter } from "next/navigation"

const navIconsArr = [
  {
    iconName: "home",
    label: "Home",
    link: CLIENT_ROUTES.HOME
  },
  {
    iconName: "user",
    label: "Profile",
    link: CLIENT_ROUTES.PROFILE
  },
  {
    iconName: "help",
    label: "Help",
    link: CLIENT_ROUTES.HOME
  },
  {
    iconName: "logOut",
    label: "Salir",
    link: CLIENT_ROUTES.HOME
  },
]

export function MenuDrawer() {
  const router = useRouter()

  function redirectToRoute(route) {
    router.push(route)
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger><Icon iconName={"menu"} size="md" /></DrawerTrigger>
      <DrawerContent className="h-[100dvh]">
        <DrawerHeader>
          <DrawerClose className="flex justify-end">
            <Icon className="size-8 border border-custom-gradient-from rounded-full p-2" iconName="close" />
          </DrawerClose>
        </DrawerHeader>

        <Stack variant="vertical" distribution="center" alignment="center" className="gap-5">
          <div className="flex flex-col items-center gap-5">
            <Avatar className="size-40">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <Text variant="subtitle">PEPITA FLORES</Text>
            </div>
          </div>

          <div>
            <ModeToggle />
          </div>

          <div className="w-full">

          </div>

          <div className="w-full flex flex-col gap-5">
            {navIconsArr.map((item, idx) => (
              <Stack key={idx} noMargins distribution="between" alignment="center" className="w-full hover:bg-gray-200 p-1 rounded-3xl overflow-hidden" onClick={() => redirectToRoute(item.link)}>
                <div className="flex items-center gap-5">
                  <Icon variant="circular" circularColor="gradient" iconName={item.iconName} className="text-white" />
                  <Text variant="body">
                    {item.label}
                  </Text>
                </div>
                <Icon iconName="rightArrow" />
              </Stack>
            ))}
          </div>

          <div>
            <Logo />
          </div>
        </Stack>
      </DrawerContent>
    </Drawer>
  )
}