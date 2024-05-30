import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen h-screen border-4 border-black border-dashed flex flex-col justify-center items-center'>
      <div className='w-3/5 flex flex-col justify-center items-center gap-6'>
        <div >
          ¡BIENVENIDOS!
        </div>
        <div className='w-1/2 bg-gray-300'>
          <Image
            src=''
            width={168.95}
            height={168.95}
            alt='imagen de perfil' />
        </div>
        <div className='w-full'>
          <form className=' flex flex-col items-center gap-5'>
            <div className='w-full h-12 pl-2 pr-10 bg-gray-300 flex items-center'>
              E-mail o numero
            </div>
            <div className='w-full h-12 pl-2 pr-10 bg-gray-300 flex items-center'>
              Contraseña
            </div>
            <div className='w-4/5  flex flex-col justify-center items-center'>
              <div className='w-4/5 h-12 gap-2 m-3 px-2 bg-gray-300 flex justify-center items-center rounded-lg'>
                Iniciar sesión
              </div>
              <p className='text-xs'>¿Olvidaste tu contraseña?</p>
            </div>
          </form>
        </div>
        <div>
          <div className='w-full flex flex-col gap-3'>
            <div className='w-full h-12 pl-2 pr-10 bg-gray-300 flex items-center '>
              Ingresar con Google
            </div>
            <div className='flex flex-col items-center '>
              <div className='text-xs'>
                ¿No tienes una cuenta?
              </div>
              <div className='w-3/4 h-12 px-2 m-2 bg-gray-300 flex justify-center items-center rounded-lg'>
                REGISTRARSE
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default page