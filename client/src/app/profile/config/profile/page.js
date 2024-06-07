import React from "react";
const page = () => {
  return (
    <main className="w-screen h-screen border-2 border-black border-dashed ">
      <div className="gap-2 mx-5 flex flex-row justicefy-center items-center">
        <button className="text-xs w-12 h-12 bg-gray-100 rounded-full">
          #
        </button>
        <div className="text-lg">Perfil</div>
      </div>
      <div className="text-xs flex flex-col  justicefy-center items-center">
        <div className="mb-80">
          <div className="">
            <button className="w-60 h-10 bg-gray-200 rounded-lg m-2">
              <button className="text-xs w-5 h-5 bg-gray-700 rounded-full m-2">
                !!
              </button>
              Datos personales
            </button>
          </div>
        </div>

        <div className="flex flex-row bg-gray-300 justicefy-center items-center space-x-7 ">
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">
              icono
            </button>
            Home
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">
              icono
            </button>
            Perfil
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">
              icono
            </button>
            Promociones
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">
              icono
            </button>
            Informacion
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">
              icono
            </button>
            Ayuda
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
