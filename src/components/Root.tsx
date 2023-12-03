'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Root({
    children,
  }: {
    children: React.ReactNode
})  {
    const pathname = usePathname()
    console.log('pathname',pathname);
    return (
        <div>
            <Navbar />
            <div className='h-auto'>
            <div className='default-box-banner'>
                <div className='sub-box-banner'>
                    <div className='doublesub-box-banner'>
                    <div className='banner-bg-image '></div>
                    {/* <Image src='/assets/images/banner/banner-main.jpeg' width="0" height="0" sizes="100vw" className="banner-bg-image" alt={`main_banner`} unoptimized priority /> */}
                    <div className={"default-banner " + (pathname !== '/' ? 'max-[767.9px]:bg-[#000]' : '')}
                    style={{
                        backgroundImage:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
                    }}
                    data-uia="nmhp-card-hero+gradient"></div>
                    </div>
                </div>
                {children}
            </div>
            <Footer />
            </div>
        </div>
     )
}