import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {useRouter , redirect} from 'next/navigation';
import { LoginvalidationSchema,LoginTypeValidationSchema } from "@/types/FormType";
import { signIn,useSession } from "next-auth/react";
import alertPopup from "@/utils/alertPopup";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginComponent() {
  const {status} = useSession()
  const [alertMessage,setAlertMessage] = useState<string>('')
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypeValidationSchema>({
    resolver: zodResolver(LoginvalidationSchema),
  });
  
  const onSubmit: SubmitHandler<LoginTypeValidationSchema> = async (data) => {
    alertPopup('loading','')
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result?.error) {
      alertPopup('error',result?.error ?? '-')
      return
    } else {
      if(result?.ok === true) {
        const urlParams = new URLSearchParams(new URL(decodeURI(result?.url ?? '/')).search);
        console.log('TRUE',urlParams.get('callbackUrl') ?? '/');
        alertPopup('success','Login Complete').then(()=>{
          router.push(urlParams.get('callbackUrl') ?? '/')
        })
        return
      }
    }
  };

  useEffect(()=>{
    if(status === 'authenticated') {
      redirect('/')
    }

    if(localStorage.getItem('clickLoginSocial') && localStorage.getItem('clickLoginSocial') === 'true') {
      setAlertMessage('Please login with password and connect social in profile page before sign-in with social')
      localStorage.removeItem('clickLoginSocial')
    }
  },[status])

  const setLoginwithSocail = () => {
      localStorage.setItem('clickLoginSocial','true')
  }
  
  return (
    <>
      <div className='m-auto w-full min-h-[450px] md:w-[450px] box-auth z-[1]'> 
        <h1>Sign In</h1>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-12 m-auto mt-[1rem] mb-[4rem]'>
                <div className="col-span-12 mb-[16px]">
                  <div className="relative w-full">
                    <input type="email" autoComplete="email" id="email" className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none peer" placeholder=" " {...register('email')}/>
                    <label htmlFor="email" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email Address</label>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-2">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="relative w-full mb-[16px]">
                    <input type="password" autoComplete="password" id="password" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('password')} />
                    <label htmlFor="password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                    {errors.password && (
                      <p className="text-xs text-red-500 mt-2">
                        {errors.password?.message}
                      </p>
                    )}
                    <div className="flex justify-end">
                      <div className="mt-2">
                      <Link href={'/auth/forgot'} className="text-[10px] text-error">Forgot password.</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 mt-[24px]">
                  <button className='btn-flix h-[62px] w-full' type="submit">Sign In</button>
                </div>
            </div>
           <div>
            <div className="mb-3">
                <div className="flex gap-4 justify-start">
                      <div>
                        <Image src="/assets/images/social/line.png" onClick={()=> { setLoginwithSocail(); signIn('line');} }  width={0} height={0} sizes="100vw" className="w-[30px] h-auto" alt="Line" />
                      </div>  
                      <div>
                        <Image src="/assets/images/social/google.png" onClick={()=> { setLoginwithSocail(); signIn('google');}}  width={0} height={0} sizes="100vw" className="w-[30px] h-auto" alt="Line" />
                      </div>
                </div>
                <div>
                    <p className="text-xs text-red-500 mt-2">
                      {alertMessage}
                    </p>
                </div>
            </div>
            <div className="text-[#737373]">
              New to Prinflix? <Link href="/" className='text-white hover:underline hover:underline-offset-4'> Sign up now</Link>.
            </div>
           </div>
           </form>
        </div>

      </div>

    </>
  )
}
