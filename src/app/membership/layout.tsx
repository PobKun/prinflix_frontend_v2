import type { Metadata } from 'next'
import { headers } from 'next/headers';
import RootMembership from '@/components/RootMembership';

export const metadata: Metadata = {
  title: 'PRINFLIX MEMBERSHIP',
  description: 'Streaming platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <RootMembership>
        {children}
      </RootMembership>
  )
}
