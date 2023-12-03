import ReactQueryProvider from '@/Provider/ReactQueryProvider'
import AuthProvider from '@/Provider/AuthProvider';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prinflix | watching vdo every time',
  description: 'ใช่เพื่อการศึกษาเท่านั้น',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={kanit.className}>
        <AuthProvider session={session}>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </AuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
