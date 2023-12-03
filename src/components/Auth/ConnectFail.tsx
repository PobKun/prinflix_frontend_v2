import Link from "next/link"
import Logo from "@/components/Logo"

export default function ConnectFailComponent() {
 
  return (
    <>
       <div className="wrapper-notfound m-auto">
            <div className='m-auto text-center'>
            <div className='mb-3 m-auto text-center'>
                <Logo className='m-auto' removeClassNormal={false} />
            </div>
            <h2 className='text-error text-[20px] font-bold'>FAIL</h2>
            <div className='mt-3 text-[#ccc] text-[14px]'>incomplete connect social</div>
            <div className='mt-5'>
                <Link href={'/membership/profile'} className="btn btn-outline">RETURN PROFILE PAGE</Link>
            </div>
            </div>
       </div>
    </>
  )
}
