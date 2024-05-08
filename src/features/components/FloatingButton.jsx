import { Button } from '@/components/ui/button'
import { UserPlus } from 'lucide-react'
import React from 'react'

export const FloatingButton = () => {
  return (
    <div className='max-w-lg w-fit absolute bottom-10 right-[38rem] z-10 flex mx-auto '>
        <Button className='rounded-full p-0 px-4 py-7'>
        <UserPlus />
        </Button>
    </div>
  )
}
