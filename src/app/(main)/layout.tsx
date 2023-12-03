import type { Metadata } from 'next'
import { headers } from 'next/headers';
import Root from '@/components/Root';

export const metadata: Metadata = {
  title: 'PRINFLIX',
  description: 'Streaming platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const x_next_pathname = headers().get('x-next-pathname') as string;
  
  return (
      <Root>
        {children}
      </Root>
  )
}
