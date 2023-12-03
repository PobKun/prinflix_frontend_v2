'use client'
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { FetchRegister } from "@/utils/fetchs/AuthPasswordBased";
import { REGISTER_REQUEST_TYPE } from "@/types/AuthType";
import {RegistervalidationSchema,RegisterTypeValidationSchema } from "@/types/FormType";
import { useSession } from 'next-auth/react'
import alertPopup from "@/utils/alertPopup";
import {useRouter} from 'next/navigation';
import { useState,useEffect } from "react";

export default function HomeComponent() {
  const {data: session, status , update: sessionUpdate} = useSession()

  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<RegisterTypeValidationSchema>({
    resolver: zodResolver(RegistervalidationSchema),
  });

  const [emailTemp,setEmailTemp] = useState<string>('')

  const changeEmail = (email:string) => {
    setValue('email',email ?? '')
    setEmailTemp(getValues('email') ?? '')
  }
  

  const mutation = useMutation({
      mutationFn: async (data:REGISTER_REQUEST_TYPE) => {
        return await FetchRegister(data)
      },
  })
  const onSubmit: SubmitHandler<RegisterTypeValidationSchema> = (data) => {
    alertPopup('loading','')
    mutation.mutate(data,{
        onSuccess: (data_mutation) => {
            console.log('mutation data',data_mutation);
            if(data_mutation.success) {
              alertPopup('success',data_mutation.data ?? '-')
              router.push('/auth/login')
              return
            }else{
              if(typeof data_mutation.error === 'string') {
                alertPopup('error',data_mutation.error ?? '-')
                return
              }
              let message = ''
              data_mutation.error?.map((data,i)=> {
                message += `<p>${data.field} : ${data.error_message}</p>` 
              })
              alertPopup('error',message ?? '-')
              return
            }
            return
        },
        onError: (error:unknown) => {
            alertPopup('error',(error as Error).message ?? '-')
            return
        }
    })
  };

  useEffect(()=>{
    if(localStorage.getItem('clickLoginSocial') && localStorage.getItem('clickLoginSocial') === 'true') {
      localStorage.removeItem('clickLoginSocial')
    }
  },[])

  return (
<>
    <div className='m-auto z-[0]'> 
        <div className="px-3">
          <h1 className='text-[2rem] lg:text-[3rem] font-bold'>Unlimited movies, TV shows, and more</h1>
          <div className='mt-[1rem] mb-[1.5rem]'>
          <p className="text-[1.5rem] lg:text-[1.125rem] font-normal">Watch anytime. Sleep anywhere.</p>
          </div>
          <p className="text-[1.25rem] lg:text-[1.125rem] font-normal">Ready to watch? {status === 'authenticated' ? 'Click now.' : 'Enter your email to create your membership.'}</p>
          {status === 'authenticated' ? 
          <div className='grid grid-cols-12 gap-4 m-auto mt-[1rem] max-w-[90%] lg:max-w-[36.625rem]'>
            <div className="col-span-1 sm:col-span-2"></div>
            <div className="col-span-10 sm:col-span-8">
              <Link href={'/membership'} className='btn btn-flix h-[62px] m-2 w-full'>Watch Video</Link>
            </div>
            <div className="col-span-1 sm:col-span-2"></div>
          </div>
          :
          <div className='grid grid-cols-12 gap-4 m-auto mt-[1rem] max-w-[90%] lg:max-w-[36.625rem]'>
             <div className="col-span-8">
              <div className="relative w-full m-2">
                  <input type="email" autoComplete="email" id="emailMain" className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 prin-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " value={emailTemp}  onChange={(e:any) => changeEmail(e.target.value)} />
                  <label htmlFor="emailMain" className="absolute prin-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email Address</label>
              </div>
            </div>
            <div className="col-span-4">
              <label htmlFor="my_modal_register" className='btn btn-flix h-[62px] m-2 w-full'>Get Started <FaAngleRight className="inline-block" /></label>
            </div>
          </div>
          }
        </div>
      </div>

      <div className="z-[999]">
      <input type="checkbox" id="my_modal_register" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div>
            <label htmlFor="my_modal_register" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
          </div>
          <div className="mt-[45px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='grid grid-cols-12 mt-[1rem] mb-[4rem]'>
                      <div className="col-span-12 mb-[16px]">
                        <div className="relative w-full mb-[16px] text-start">
                          <input type="email" autoComplete="email" id="email" className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('email')} onChange={(e:any) => changeEmail(e.target.value)} />
                          <label htmlFor="email" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-2">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-12 mb-[16px]">
                        <div className="relative w-full mb-[16px] text-start">
                          <input type="text" autoComplete="name" id="name" minLength={2} maxLength={200} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('name')} />
                          <label htmlFor="name" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
                          {errors.name && (
                            <p className="text-xs text-red-500 mt-2">
                              {errors.name?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-12 mb-[16px]">
                        <div className="relative w-full mb-[16px] text-start">
                          <input type="password" autoComplete="password" id="password" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('password')} />
                          <label htmlFor="password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                          {errors.password && (
                            <p className="text-xs text-red-500 mt-2">
                              {errors.password?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-12">
                        <div className="relative w-full mb-[16px] text-start">
                          <input type="password" id="confirmPassword" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('confirmPassword')} />
                          <label htmlFor="confirmPassword" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password</label>
                          {errors.confirmPassword && (
                            <p className="text-xs text-red-500 mt-2">
                              {errors.confirmPassword?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-12 mt-[24px]">
                          {mutation.isPending ?
                          <button className='btn-flix h-[62px] w-full' type="button" disabled><span className="loading loading-spinner"></span> Loading</button>
                          : 
                          <button className='btn-flix h-[62px] w-full' type="submit">Sign Up</button>
                          }
                      </div>
                  </div>
                </form> 
              <div>
                <div className="text-[#737373]">
                  If you already have an account <Link href="/auth/login" className='text-white hover:underline hover:underline-offset-4'> Sign In now</Link>.
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>

</>
  )

}
