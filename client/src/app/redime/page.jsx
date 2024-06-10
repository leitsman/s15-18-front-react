import RedimeCard from "@/components/features/redime/redimeCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const page = () => {
  const redimePlaces = Array(3).fill();

  return (
    <>
      <main className="flex flex-col gap-10 ">
        {/* HEADER */}
        <div className="w-full flex p-2 justify-between items-center h-16 ">
          <div className="flex justify-center items-center gap-5 ">
            <div className="flex justify-center items-center size-10 rounded-full bg-gray-500">
              <h2 className="text-sm text-white">Icon</h2>
            </div>
            <div>
              <h2 className="font-bold">PROMOCIONES</h2>
            </div>
          </div>
          <div className="flex justify-center items-center size-5 outline-4 outline-green-500 outline-dashed"></div>
        </div>

        <ScrollArea className="w-full h-[80dvh]">
          {/* USER POINTS */}
          <div className="w-full p-5 justify-between  h-20 bg-gray-300 rounded-2xl flex flex-col items-start">
            <div className="w-full flex justify-between">
              <h2 className="font-bold">PUNTAJE</h2>
              <div className="flex items-center gap-5">
                <h2 className="font-bold">Historial</h2>
                <div className="size-3 outline-4 outline-green-500 outline-dashed"></div>
              </div>
            </div>
            <h2 className="font-bold">50 pts.</h2>
          </div>

          {/* Places to redime points */}
          <div className="w-full mt-10 flex flex-col  justify-between items-center gap-5">
            {redimePlaces.map((_, idx) => (
              <RedimeCard key={idx} />
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
      </main>
      <nav className="w-screen h-24 flex flex-col justify-center items-center gap-10 p-5 border-4 border-green-500 border-dashed font-bold">
        NAVBAR LAYOUT
      </nav>
    </>
  );
};

export default page;
