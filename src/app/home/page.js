/* eslint-disable react/no-unescaped-entities */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

const Home = () => {
    return (
        <>
            <header className=' bg-slate-500 h-20 p-2 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-1'>
                    <logo className='bg-green-600 h-9 w-9 flex items-center justify-center rounded-[50%]'>logo</logo>
                    <h1>Recicle</h1>
                </div>
                <nav>
                    <ul className='flex flex-row gap-1'>
                        <li className='bg-fuchsia-400 px-2 flex items-center text-center rounded-3xl'>Registrarme</li>
                        <li className='bg-fuchsia-400 px-2 flex items-center text-center rounded-3xl'>Iniciar Sesion</li>
                    </ul>
                </nav>
            </header>
            <main className='m-6'>
                <article className='mb-5'>
                    <section>
                        <banner className='bg-orange-700 flex w-full h-32 mb-10'>banner</banner>
                    </section>
                    <section className='mb-10'>
                        <div className='flex flex-row items-center gap-3 mb-5'>
                            <icono className='bg-green-600 h-10 w-10 flex items-center justify-center rounded-[50%]'>icon</icono>
                            <h2 className='text-lg'>Sobre Nosotros</h2>
                        </div>
                        <p>Además de reciclar, podes buscarle un nuevo uso lejos de ser un teléfono móvil: una de las opciones es  convertir nuestro viejo teléfono en una cámara de vigilancia para la casa o para los niños, algo que es tan sencillo a partir de la instalación de aplicaciones</p>
                    </section>
                    <section className='mb-10'>
                        <div className='flex flex-row items-center gap-3 mb-5'>
                            <icono className='bg-green-600 h-10 w-10 flex items-center justify-center rounded-[50%]'>icon</icono>
                            <h2 className='text-lg'>Mision y Visión</h2>
                        </div>
                        <div>
                            <div className='bg-red-600 w-20 h-32 float-start mt-1'>imagen</div>
                            <p>Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo un protocolo. La fase del fin de la vida útil (EOL) de teléfonos móviles genera una gran cantidad de desechos tóxicos que impone graves impactos en la salud humana y el medio ambiente.</p>
                        </div>
                    </section>
                    <section className='mb-10'>
                        <div className='flex flex-row items-center gap-3 mb-5'>
                            <icono className='bg-green-600 h-10 w-10 flex items-center justify-center rounded-[50%]'>icon</icono>
                            <h2 className='text-lg'>Sistema de Puntaje</h2>
                        </div>
                        <div>
                            <div className='bg-red-600 w-20 h-32 float-start mt-1'>imagen</div>
                            <p>Los desechos electrónicos son considerados una crisis en aumento y tú como técnico debes ser parte de la solución, es por ello que su desecho o reciclaje se debe hacer bajo un protocolo. La fase del fin de la vida útil (EOL) de teléfonos móviles genera una gran cantidad de desechos tóxicos que impone graves impactos en la salud humana y el medio ambiente.</p>
                        </div>
                    </section>
                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                </article>
                <section className='mb-5'>
                    <h2 className='text-lg'>Categorias</h2>
                    <div className='flex flex-row overflow-x-scroll gap-3'>
                        <span className='bg-green-400 px-3 py-3 rounded-lg  min-w-max'>Cables</span>
                        <span className='bg-green-400 px-3 py-3 rounded-lg  min-w-max'>Baterias</span>
                        <span className='bg-green-400 px-3 py-3 rounded-lg  min-w-max'>Dispositivos moviles</span>
                        <span className='bg-green-400 px-3 py-3 rounded-lg  min-w-max'>Refrigerador</span>
                        <span className='bg-green-400 px-3 py-3 rounded-lg  min-w-max'>Termostatos</span>
                    </div>
                </section>
                <section className='mb-5'>
                    <h2 className='text-lg'>Dispositivos Medianos</h2>
                    <Carousel className='bg-slate-200 w-[70%] mx-auto'>
                        <CarouselContent className=''>
                            <CarouselItem className='pl-5 border-solid border-2 border-indigo-600'>
                                <div className='flex flex-col p-5 gap-2'>
                                    <div className='bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto'>soy la imagen</div>
                                    <h3 className='text-ellipsis'>Celular</h3>
                                    <span>20 puntos</span>
                                    <span>Centro de acopio</span>
                                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='pl-5 border-solid border-2 border-indigo-600'>
                                <div className='flex flex-col p-5 gap-2'>
                                    <div className='bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto'>soy la imagen</div>
                                    <h3 className='text-ellipsis'>pilas acomodativas</h3>
                                    <span>20 puntos</span>
                                    <span>Centro de acopio</span>
                                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='pl-5 border-solid border-2 border-indigo-600'>
                                <div className='flex flex-col p-5 gap-2'>
                                    <div className='bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto'>soy la imagen</div>
                                    <h3 className='text-ellipsis'>lavadora lg samsumg rkj3-30</h3>
                                    <span>20 puntos</span>
                                    <span>Centro de acopio</span>
                                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='pl-5 border-solid border-2 border-indigo-600'>
                                <div className='flex flex-col p-5 gap-2'>
                                    <div className='bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto'>soy la imagen</div>
                                    <h3 className='text-ellipsis'>pila</h3>
                                    <span>20 puntos</span>
                                    <span>Centro de acopio</span>
                                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                                </div>
                            </CarouselItem>
                            <CarouselItem className='pl-5 border-solid border-2 border-indigo-600'>
                                <div className='flex flex-col p-5 gap-2'>
                                    <div className='bg-indigo-800 rounded-t-2xl h-32 w-full mx-auto'>soy la imagen</div>
                                    <h3 className='text-ellipsis'>robacorriente</h3>
                                    <span>20 puntos</span>
                                    <span>Centro de acopio</span>
                                    <button className='bg-amber-400 p-1 rounded-xl mx-auto flex'>Quiero Reciclar</button>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>
                <section className='mb-5 flex gap-3 flex-col'>
                    <h2 className='text-lg text-center mb-4 font-bold'>Preguntas frecuentes</h2>
                    <h3 className='text-lg text-gray-600'>1. ¿Cómo funciona el sistema de puntaje de Recycle?</h3>
                    <p>Al reciclar tus dispositivos electrónicos a través de nuestra plataforma, acumulas puntos que puedes canjear por promociones y descuentos en establecimientos colaboradores. Cada dispositivo tiene un valor en puntos basado en su tipo y estado.</p>
                    <h3 className='text-lg text-gray-600'>2. ¿Dónde puedo encontrar los centros de acopio para reciclar mis dispositivos?</h3>
                    <p>En nuestra webapp, encontrarás una sección dedicada a localizar los centros de acopio más cercanos a tu ubicación. Simplemente ingresa tu dirección y te mostraremos las opciones disponibles.</p>
                    <h3 className='text-lg text-gray-600'>3. ¿Qué tipos de dispositivos electrónicos puedo reciclar con Recycle?</h3>
                    <p>Puedes reciclar una amplia variedad de dispositivos electrónicos, incluyendo teléfonos móviles, laptops, tablets, cámaras, y más. Consulta nuestra lista completa en la sección "Cómo reciclar" de nuestra webapp.</p>
                    <h3 className='text-lg text-gray-600'>4. ¿Cómo puedo canjear mis puntos por promociones y descuentos?</h3>
                    <p>Una vez que hayas acumulado puntos, visita la sección "Recompensas" en nuestra webapp para ver las promociones y descuentos disponibles. Selecciona la oferta que deseas y sigue las instrucciones para canjear tus puntos.</p>
                </section>
            </main>
            {/* <footer>this is footer</footer> */}
        </>
    );
};

export default Home;