import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function RedimePlace() {
  return (
    <div className="w-full  h-full flex flex-col justify-between gap-2">
      <div className="flex justify-between *:font-bold">
        <div className="w-full h-52 flex justify-center items-center bg-gray-300 rounded-t-3xl">
          FOTO
        </div>
      </div>
      <div className="*:font-semibold flex flex-col gap-1">
        <div className="flex justify-between items-center *:font-bold">
          <p>Restaurante los Pepitos</p>
          <div className="px-8 py-1 bg-gray-300 rounded-3xl">Canjear</div>
        </div>
        <div>
          <p>Cena para dos personas con todo incluido</p>
        </div>
        <div>
          <p>50 Puntos.</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Av. General Paz 489</p>
          <p>Horario: 20:00 a 00:00</p>
        </div>
        <div>
          <p>Contacto: xxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
}

const page = () => {
  const redimePlaces = Array(10).fill();

  return (
    <>
      <main className="w-screen h-[calc(100vh-96px)] flex flex-col gap-10 py-5 px-10 ">
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
            <h2 className="font-bold">PUNTAJE</h2>
            <h2 className="font-bold">50 pts.</h2>
          </div>

          {/* Places to redime points */}
          <div className="w-full h-96 mt-10 flex flex-col  justify-between items-center gap-5">
            {redimePlaces.map((_, idx) => (
              <RedimePlace key={idx} />
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
