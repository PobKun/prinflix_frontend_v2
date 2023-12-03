// 'use client'
import './globals.css'
import Logo from '@/components/Logo'
import Link from 'next/link'

export default function NotFound() {
  return (
        <div className="wrapper-notfound m-auto">
            <div className='m-auto text-center'>
            <div className='mb-3 m-auto text-center'>
                <Logo className='m-auto' removeClassNormal={false} />
            </div>
            <h2 className='text-[#fff] text-[20px]'>Not Found Page!</h2>
            <div className='mt-3 text-[#ccc] text-[14px]'>Could not find requested resource</div>
            <div className='mt-5'>
                <Link href={'/'} className="btn btn-outline">RETURN HOME PAGE</Link>
            </div>
            </div>
        </div>
  )
}