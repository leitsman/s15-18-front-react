import React from 'react'
import Image from "next/image";
const page = () => {
  return (
    <main className="w-screen h-screen border-2 border-black border-dashed ">
        <div className="gap-2 mx-5 flex flex-row justicefy-center items-center">
            <button className="text-xs w-12 h-12 bg-gray-700 rounded-full">icono</button>
            <div className="text-lg">Configuración</div>
            <div className="pl-60 gap-2 m-5 flex  justicefy-center items-center">
                <button className=" text-xs w-12 h-12  bg-gray-400 rounded">Menu</button>
            </div>
        
        </div>
        <div className="text-xs flex flex-col  justicefy-center items-center">
            <div className="bg-gray-300 rounded-lg flex flex-col  mb-2 p-5">
            <div><button className="text-xs w-10 h-10 bg-gray-700 rounded-full m-2">Foto</button>
                Pepita Flores</div>
            <div>pepitaflores@gmail.com</div>
            <div>----------------------------------</div>
                <div className="gap-2 mx-5 flex flex-row justicefy-center items-center">
                    <div className="text-xs">PUNTAJE </div>
                    <div className="text-xs pl-10"> 50pts.</div>
                </div>

            </div>
         
            <div className="mb-40">
                <div className="">
                    <button className="w-60 h-10 bg-gray-200 rounded-lg m-2"><button className="text-xs w-5 h-5 bg-gray-700 rounded-full m-2">!!</button>Datos personales</button>
                </div>
                <div className="">
                    <button className="w-60 h-10 bg-gray-200 rounded-lg m-2"><button className="text-xs w-5 h-5 bg-gray-700 rounded-full m-2">!!</button>Seguridad</button>
                </div>
                <div className="">
                    <button className="w-60 h-10 bg-gray-200 rounded-lg m-2"><button className="text-xs w-5 h-5 bg-gray-700 rounded-full m-2">!!</button>Privacidad</button>
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
