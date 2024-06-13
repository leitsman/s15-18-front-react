import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Text } from "@/components/ui/text";
import Image from "next/image";

export function CarrouselCard({ data }) {
  return (
    <CarouselItem className="border-2 rounded-3xl bg-card p-0">
      <div className="flex flex-col p-5 gap-2">
        <div className="bg-indigo-800 rounded-t-2xl h-32 w-full">
          <Image scr={data.image} />
        </div>
        <h3 className="text-ellipsis">{data.title}</h3>
        <span>Puntos: {data.points}</span>
        <span>{data.center}</span>
        <div className="flex justify-center">
          <Button
            type="button"
            className="w-48 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full"
          >
            <Text
              size="md"
              variant="subtitle"
              className="text-white font-serif"
            >
              Seleccionar
            </Text>
          </Button>
        </div>
      </div>
    </CarouselItem>
  )
}