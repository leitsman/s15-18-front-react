import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen h-screen border-4 border-black border-dashed flex flex-col justify-center items-center'>

      <div className='w-3/5 flex flex-col justify-center items-center gap-10'>
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
              <div className='w-4/5 h-12 px-2 bg-gray-300 flex justify-center items-center'>
                Iniciar sesión
              </div>
              <p>¿Olvidaste tu contraseña?</p>
            </div>
          </form>
        </div>
        <div>
          <div className='w-full flex flex-col gap-10'>
            <div className='w-full px-4 py-2 border-4 border-black rounded-lg'>
              Continuar con Google
            </div>
            <div className='flex flex-col items-center '>
              <div>
                ¿No tienes una cuenta?
              </div>
              <div className='w-3/4 h-12 px-2 bg-gray-300 flex justify-center items-center'>
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