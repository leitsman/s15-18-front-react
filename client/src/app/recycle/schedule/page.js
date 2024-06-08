import React from 'react';
import { Button } from "@/components/ui/button"

const Page = () => {
    return (
        <main className='flex flex-col w-screen h-screen gap-6'>
            <section className='flex flex-col w-screen h-screen gap-6 p-8'>
                <div className='flex justify-center items-center py-1 px-4 w-full'>
                    <div className='flex items-center'>
                        <div className=''>v</div>
                        <h2 className='ml-2 font-sans font-semibold size-5 w-auto text-center' >¡Quiero Reciclar!</h2>
                    </div>


                </div>
                <div className='flex flex-col w-full h-[90px] rounded-xl bg-gray-200 p-4'>
                    <div className='flex justify-between'>
                        <h2 className='font-sans font-semibold'>PUNTAJE</h2>
                        <div className='flex '>
                            <h2 className='font-sans font-semibold mr-4'>Historial</h2>
                            <h2>V</h2>
                        </div>
                    </div>
                    <h2 className='font-sans font-semibold mt-4'>50pts.</h2>
                </div>
                <div className='flex flex-col mt-3'>
                    <div className='flex justify-center items-center w-full h-[194px] rounded-tl-xl rounded-tr-xl bg-gray-200'>
                        IMAGEN
                    </div>
                    <div className='flex flex-col gap-1 mt-2 px-1'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-sans font-semibold text-base'>Centro de Acopio</h2>
                            <Button variant="outline" className='rounded-3xl bg-gray-200 text-xs px-3 py-0 h-[25px] w-[120px] font-sans font-semibold'>INDICACIONES</Button>
                        </div>

                        <div className='flex justify-between'>
                            <h6 className='font-sans font-semibold text-sm tracking-tighter'>Av.General Paz 489</h6>
                            <h6 className='font-sans font-semibold text-sm tracking-tighter'>Horario: 16:00 a 20:00hs.</h6>

                        </div>
                        <h6 className='font-sans font-semibold text-sm tracking-tighter'>Contacto: xxxxxxxxx</h6>
                    </div>
                </div>

                <section>
                    <div className='flex items-center'>
                        <div className='w-8 h-8 border-2 border-gray-500 bg-gray-500 rounded-full text-[9px] text-white flex justify-center items-center'>Icono</div>
                        <h5 className='font-sans font-semibold text-base tracking-tighter ml-2'>Dispositivo a Reciclar</h5>

                    </div>
                    <div className='w-full flex mt-3'>
                        <div className='w-16 h-16 bg-gray-200 text-xs flex justify-center items-center'>Imagen</div>
                        <div className='flex flex-col ml-2 justify-center'>
                            <h5 className='font-sans font-semibold text-base tracking-tighter'>CELULAR</h5>
                            <h6 className='font-sans font-semibold text-xs tracking-tighter'>20 PUNTOS</h6>
                        </div>
                    </div>

                </section>

            </section>

            <footer>
                <div className='w-full h-16 py-2 bg-gray-200 flex flex-col justify-evenly items-center' >

                    <div className='w-full flex justify-between items-center'>
                        <div className='flex flex-col justify-center items-center w-[33%]'>
                            <div className='w-8 h-8 border-2 border-gray-500 bg-gray-500 rounded-full text-[9px] text-white flex justify-center items-center'>icono</div>
                            <h5 className='font-sans font-semibold text-sm tracking-tighter'>Home</h5>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[33%]'>
                            <div className='w-8 h-8 border-2 border-gray-500 bg-gray-500 rounded-full text-[9px] text-white flex justify-center items-center'>Icono</div>
                            <h5 className='font-sans font-semibold text-sm tracking-tighter'>Perfil</h5>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[33%]'>
                            <div className='w-8 h-8 border-2 border-gray-500 bg-gray-500 rounded-full text-[9px] text-white flex justify-center items-center'>Icono</div>
                            <h5 className='font-sans font-semibold text-sm tracking-tighter'>Información</h5>
                        </div>


                    </div>
                </div>

            </footer>
        </main>

    );
};

export default Page;

