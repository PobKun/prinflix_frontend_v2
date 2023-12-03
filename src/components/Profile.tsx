'use client'

import { FetchConnectLine,FetchConnectGoogle,FetchDisconnectLine,FetchDisconnectGoogle} from '@/utils/fetchs/AuthSocial';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { FaUser } from 'react-icons/fa'
import alertPopup from "@/utils/alertPopup";
import { FaCheckCircle,FaTimesCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import reloadSession from '@/utils/reloadSession';
import { useEffect,useRef, useState } from 'react';
import FormChangePassword from '@/components/Account/FormChangePassword';
import FormChangeProfile from '@/components/Account/FormChangeProfile';
import Link from 'next/link';

export default function ProfileComponent() { 
  const {data: session,update: sessionUpdate} = useSession()
  const [showModelChangePassword,setShowModelChangePassword] = useState<boolean>(false)
  const [showModelChangeProfile,setShowModelChangeProfile] = useState<boolean>(false)

  const refetchSession = () => {
    console.log(['refetchSession']);
    sessionUpdate({
        token_type:session?.user?.token_type,
        access_token:session?.user?.access_token,
        expire_in: session?.user?.expire_in,
        signinWith: session?.user?.signinWith
    })
    reloadSession()
  }

  const isCalledRef = useRef<boolean>(false);
  useEffect(() => {
    if(!isCalledRef.current) {
        isCalledRef.current = true;
        sessionUpdate({
            token_type:session?.user?.token_type,
            access_token:session?.user?.access_token,
            expire_in: session?.user?.expire_in,
            signinWith: session?.user?.signinWith
        })
        reloadSession()
    }
  }, [session?.user?.token_type,session?.user?.access_token,session?.user?.expire_in,session?.user?.signinWith,sessionUpdate]);


  const router = useRouter()
  const connectSocial = async (social:string) => {    
    const authToken = session?.user?.token_type + ' ' + session?.user?.access_token    
    if(social === 'line') {
        const data = await FetchConnectLine(authToken);
        if(data.success === true) {
            router.push(data.data?.auth_url ?? '/')
        }else{
            if(typeof data.error === 'string') {
                alertPopup('error',data.error ?? '-')
                return
            }
            let message = ''
            data.error?.map((data,i)=> {
                message += `<p>${data.field} : ${data.error_message}</p>` 
            })
            alertPopup('error',message ?? '-')
            return
        }
    }else if(social === 'google') {
        const data = await FetchConnectGoogle(authToken);
        if(data.success === true) {
            router.push(data.data?.auth_url ?? '/')
        }else{
            if(typeof data.error === 'string') {
                alertPopup('error',data.error ?? '-')
                return
            }
            let message = ''
            data.error?.map((data,i)=> {
                message += `<p>${data.field} : ${data.error_message}</p>` 
            })
            alertPopup('error',message ?? '-')
            return
        }
    }
  }


  const disconnectSocial = async (social:string) => {
    const authToken = session?.user?.token_type + ' ' + session?.user?.access_token
    if(social === 'line') {
        const data = await FetchDisconnectLine(authToken);
        if(data.success === true) {
            refetchSession()
            alertPopup('success',data.data ?? '-')
        }else{
            if(typeof data.error === 'string') {
                alertPopup('error',data.error ?? '-')
                return
            }
            let message = ''
            data.error?.map((data,i)=> {
                message += `<p>${data.field} : ${data.error_message}</p>` 
            })
            alertPopup('error',message ?? '-')
            return
        }
    }else if(social === 'google') {
        const data = await FetchDisconnectGoogle(authToken);
        if(data.success === true) {
            refetchSession()
            alertPopup('success',data.data ?? '-')
        }else{
            if(typeof data.error === 'string') {
                alertPopup('error',data.error ?? '-')
                return
            }
            let message = ''
            data.error?.map((data,i)=> {
                message += `<p>${data.field} : ${data.error_message}</p>` 
            })
            alertPopup('error',message ?? '-')
            return
        }
    }
  }

  return (
    <>
      <div className="container mx-auto px-3 py-5">
            <div className='mb-3'>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link href={'/membership'}>Home</Link></li> 
                        <li><Link href={'/membership/profile'}>Profile</Link></li> 
                    </ul>
                </div>
            </div>
            <div className='flex gap-8'>
                <div> {(session?.user?.have_image ?? false) === false ? 
                    <div className='p-4 bg-[#fff] rounded-full'>
                        <FaUser className="inline-block text-[#000] text-[40px]" /> 
                    </div>
                : 
                    <div>
                        <Image src={session?.user?.image_url ?? ''}  width={0} height={0} sizes="100vw" className="w-[72px] h-auto rounded-full" alt="Profile icon" />
                    </div>
                } 
                </div>
                <div className='my-auto'>
                <span className='font-bold text-[20px]'>{(session?.user?.name)}</span>
                <br />
                <span className='text-[#b0b0b0] text-[14px]'> Role: {(session?.user?.role)}</span>
                </div>
            </div>
            <div className='border-b border-[#777] w-full py-2'></div>
            <div className='flex flex-col text-[#b0b0b0] '>
                <div className='py-5 flex flex-col sm:flex-row'>
                    <div className='w-full sm:w-[50%] my-auto py-4 sm:py-0'>
                        <div className='flex gap-2'>
                            <Image src="/assets/images/social/line.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Line" /> Line Connect : 
                            {
                                session?.user?.oauth.line.connected === true ?
                                <FaCheckCircle className="text-success mt-[5px] " /> 
                                :
                                <FaTimesCircle className="text-error mt-[5px] " /> 
                            }
                        </div>
                    </div>
                    <div className='w-full sm:w-[50%] text-start sm:text-end'>
                        {session?.user?.oauth.line.connected === true ?
                         <button className="btn btn-outline" onClick={()=>disconnectSocial('line')}><Image src="/assets/images/social/line.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Line disconnect" /> DISCONNECT</button>
                        :   
                        <button className="btn btn-outline" onClick={()=>connectSocial('line')}><Image src="/assets/images/social/line.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Line connect" /> CONNECT</button>
                        }
                    </div>
                </div> 
                <div className='border-b border-[#4b4b4b] w-full'></div>
                <div className='py-5 flex flex-col sm:flex-row'>
                    <div className='w-full sm:w-[50%] my-auto py-4 sm:py-0'>
                        <div className='flex gap-2'>
                            <Image src="/assets/images/social/google.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Line" /> Google Connect : 
                            {
                                session?.user?.oauth.google.connected === true ?
                                <FaCheckCircle className="text-success mt-[5px] " /> 
                                :
                                <FaTimesCircle className="text-error mt-[5px] " /> 
                            }
                        </div>
                    </div>
                    <div className='w-full sm:w-[50%] text-start sm:text-end'>
                        {session?.user?.oauth.google.connected === true ?
                        <button className="btn btn-outline" onClick={()=>disconnectSocial('google')}><Image src="/assets/images/social/google.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Google disconnect" /> DISCONNECT</button>
                        :   
                        <button className="btn btn-outline" onClick={()=>connectSocial('google')}><Image src="/assets/images/social/google.png"  width={0} height={0} sizes="100vw" className="w-[25px] h-auto" alt="Google connect" /> CONNECT</button>
                        }
                    </div>
                </div> 
                <div className='border-b border-[#4b4b4b] w-full'></div>
                <div className='py-5 flex flex-col sm:flex-row'>
                    <div className='w-full sm:w-[50%] my-auto py-4 sm:py-0'>
                        <div className='flex gap-2'>
                            Email verify : 
                            {
                                session?.user?.email_verified === true ?
                                <FaCheckCircle className="text-success mt-[5px] " /> 
                                :
                                <FaTimesCircle className="text-error mt-[5px] " /> 
                            }
                        </div>
                    </div>
                    <div className='w-full sm:w-[50%] text-start sm:text-end'>
                        <span>{(session?.user?.email)}</span>
                    </div>
                </div> 
                <div className='border-b border-[#4b4b4b] w-full'></div>
                <div className='py-5 flex justify-between'>
                <button onClick={()=> setShowModelChangePassword(true)} className="btn btn-outline w-[45%]">Change Password</button>
                <button onClick={()=> setShowModelChangeProfile(true)} className="btn btn-outline w-[45%]">Change Profile</button>
            </div>
            </div>

            <div>
                <input type="checkbox" id="my_modal_changepassowrd" className="modal-toggle" checked={showModelChangePassword} onChange={(e) => setShowModelChangePassword(!showModelChangePassword)} />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                    <div>
                        <label htmlFor="my_modal_changepassowrd" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
                    </div>
                        <FormChangePassword authToken={session?.user?.token_type + ' ' + session?.user?.access_token} setModel={setShowModelChangePassword} refetchSession={()=>refetchSession()}/>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="my_modal_changeprofile" className="modal-toggle"  checked={showModelChangeProfile} onChange={(e) => setShowModelChangeProfile(!showModelChangeProfile)}  />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                    <div>
                        <label htmlFor="my_modal_changeprofile" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
                    </div>
                        <FormChangeProfile authToken={session?.user?.token_type + ' ' + session?.user?.access_token} setModel={setShowModelChangeProfile} refetchSession={()=>refetchSession()}/>
                    </div>
                </div>
            </div>

      </div>
    </>
  )
}
