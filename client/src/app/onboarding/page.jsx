import OnboardingForm from '@/components/features/onboarding/OnboardingForm'
import { Logo } from '@/components/ui/logo'
import { Text } from '@/components/ui/text'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center'><Logo /></div>
      <Text variant='subtitle' size='lg' className='font-bold bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to bg-clip-text text-transparent'>
        Completa la creación de usuario para continuar
      </Text>
      <OnboardingForm />
    </div>
  )
}

export default page