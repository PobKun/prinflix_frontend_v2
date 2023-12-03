'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { CHANGEPASSOWORD_REQUEST_TYPE } from "@/types/AccountType";
import { FetchChangePassword } from "@/utils/fetchs/Account";
import { ChangePasswordvalidationSchema,ChangePasswordTypeValidationSchema } from "@/types/FormType";
import alertPopup from "@/utils/alertPopup";
import { Dispatch, SetStateAction } from "react";

export default function FormChangePassword ({authToken,setModel,refetchSession}: {authToken:string,setModel: Dispatch<SetStateAction<boolean>>,refetchSession:()=>void}) {  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ChangePasswordTypeValidationSchema>({
        resolver: zodResolver(ChangePasswordvalidationSchema),
      });
      
      const mutation = useMutation({
          mutationFn: async (data:CHANGEPASSOWORD_REQUEST_TYPE) => {
            return await FetchChangePassword(authToken,data)
          },
      })
      const onSubmit: SubmitHandler<ChangePasswordTypeValidationSchema> = (data) => {
        alertPopup('loading','')
        mutation.mutate({current_password: data.currentPassword,new_password: data.password},{
            onSuccess: (data_mutation) => {
                console.log('mutation data',data_mutation);
                if(data_mutation.success) {
                  reset()
                  setModel(false)
                  refetchSession()
                  alertPopup('success',data_mutation.data ?? '-')
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
    return (
        <div className="mt-[45px]">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-12 mt-[1rem] mb-[4rem]'>
                <div className="col-span-12 mb-[16px]">
                    <div className="relative w-full mb-[16px] text-start">
                    <input type="password" autoComplete="password" id="password" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('currentPassword')} />
                    <label htmlFor="password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Current Password</label>
                    {errors.currentPassword && (
                        <p className="text-xs text-red-500 mt-2">
                        {errors.currentPassword?.message}
                        </p>
                    )}
                    </div>
                </div>
                <div className="col-span-12 mb-[16px]">
                    <div className="relative w-full mb-[16px] text-start">
                    <input type="password" autoComplete="password" id="password" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('password')} />
                    <label htmlFor="password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">New Password</label>
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
                    <label htmlFor="confirmPassword" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm New Password</label>
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
                    <button className='btn-flix h-[62px] w-full' type="submit">Confirm</button>
                    }
                </div>
            </div>
            </form> 
        </div>
    )
}