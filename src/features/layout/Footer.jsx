import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import { Home, PenSquare, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='py-2 flex justify-between container fixed bottom-0 left-0 right-0 gap-1 bg-background max-w-lg border-t border-accent'>
        <Link href="/" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}>
            <Home size={16} />
        </Link>
        <Link href="/write" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}>
            <PenSquare size={16} />
        </Link>
        <Link href="/profile" className={clsx(buttonVariants({variant: 'ghost'}), "flex-1")}>
            <User size={16} />
        </Link>
    </div>
  )
}
