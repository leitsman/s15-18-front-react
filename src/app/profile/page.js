import React from 'react'
import Image from "next/image";
const page = () => {
  return (
    <main className="w-screen h-screen border-2 border-black border-dashed ">
 
      <div className="gap-2 mx-5 flex flex-row justicefy-center items-center">
        <button className="text-xs w-12 h-12 bg-gray-700 rounded-full">icono</button>
        <div className="text-lg">Perfil</div>
        <div className="pl-80 gap-2 m-5 flex  justicefy-center items-center">
          <button className=" text-xs w-12 h-12  bg-gray-400 rounded">Menu</button>
        </div>
        
      </div>
      <div className="text-xs flex flex-col  justicefy-center items-center">
        <div className="bg-gray-300 rounded-lg flex flex-col items-center mb-2 p-5">
          <div className="rounded-full">
            <Image
                src=""
                width={50}
                height={50}
                alt="imagen de perfil"/>
          </div>
          <div>Pepita Flores</div>
          <div>pepitaflores@gmail.com</div>
          <div>Puntaje Total 50pts.</div>
        </div> 
        <div>
          <form className="flex flex-col place-items-start gap-3">
            <div className="w-full">
              Datos Personales
            </div>
            <div className="w-full h-12 pl-2 bg-gray-300 flex flex flex-col place-items-start">
              <div>Nombre</div>
              <div>pepita Flores</div>
            </div>
            <div className="w-full h-12 pl-2 bg-gray-300 flex place-items-start flex flex-col">
              <div>Direccion</div>
              <div>San Patricio 1234</div>
              </div>
            <div className="w-full h-12 pl-2 bg-gray-300 flex place-items-start flex flex-col">
              <div>Localidad</div>
              <div>San Rafael</div>
            </div>
            <div className="w-full h-12 pl-2 bg-gray-300 flex place-items-start flex flex-col">
              <div>Email</div>
              <div>pepitaflores@gmail.com</div>
            </div>
            <div className="w-full h-12 pl-2 bg-gray-300 flex place-items-start flex flex-col">
              <div>contraseña</div>
              <div>******</div>
            </div>
          </form>
          <div className="flex flex-col justicefy-center items-center">
            <button className="w-40 h-10 bg-gray-200 rounded-lg m-2">Editar Datos</button>
          </div>
        </div>
        
        <div className="flex flex-row bg-gray-300 justicefy-center items-center space-x-7 ">
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">icono</button>
            Home
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">icono</button>
            Perfil
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">icono</button>
            Promociones
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">icono</button>
            Informacion
          </div>
          <div className=" flex  flex-col justicefy-center items-center">
            <button className="w-12 h-12 bg-gray-700 rounded-full">icono</button>
            Ayuda
          </div>
        </div>
      </div>
      </main>

)
}

export default page
