'use client'
import Image from 'next/image'
import Footer from '@/components/Footer';

export default function RootMembership({
    children,
  }: {
    children: React.ReactNode
})  {
    return (
        <div>
            {children}
        </div>
     )
}