'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useSession } from 'next-auth/react'
import { FaUser , FaAngleDown} from 'react-icons/fa'
import { signOut } from "next-auth/react";

export default function Navbar() {
    const pathname = usePathname()
    const {data: session, status , update: sessionUpdate} = useSession()

    return (
        <div className='header-nav'>
          <header className='h-[80px] lg:h-[92px] px-[2em] py-[1.5rem]'>
            <nav className='container mx-auto'>
              {/* <Image src='/assets/images/logo.png' width="0" height="0" sizes="100vw" className="w-auto h-auto max-h-[24px] md:max-h-[40px] me-auto" alt={`main_banner`} priority /> */}
              <div className='flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between'>
                <div className='py-[4px]'>
                  <Link href='/'>
                    <Logo />
                  </Link>
                </div>
                <div className='lg:py-[4px]'>
                 { (pathname === '/') &&
                  <>
                  {status === 'authenticated' ?
                      <div className="dropdown dropdown-bottom dropdown-start sm:dropdown-end">
                        <label tabIndex={0} className='btn-membership max-h-[32px] py-[5px] px-[11px] truncate'>
                          {(session?.user?.have_image ?? false) === false ? <FaUser className="inline-block mt-[-5px] me-[5px]" /> : <></>} 
                         <span>Hi, {(session?.user?.name ?? '').slice(0, 15)}{((session?.user?.name ?? '').length > 15) ? ".." : ""}</span>
                          <FaAngleDown className="inline-block ms-[5px]"/>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                          <li><Link href={'/membership/profile'}>Profile</Link></li>
                          <li><Link href={'/membership'}>Watch Video</Link></li>
                          <li><button onClick={() => signOut()}>Logout</button></li>
                        </ul>
                      </div>
                    :
                    <Link href='/auth/login'>
                      <button className='btn-flix max-h-[32px] py-[5px] px-[11px]'>Sign In</button>
                    </Link>
                  }
                  </>
                  
                 }
                </div>
              </div>
            </nav>
          </header>
        </div>
     )
}