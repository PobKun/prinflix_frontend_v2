'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { CHANGEPROFILE_REQUEST_TYPE } from "@/types/AccountType";
import { FetchEditProfile } from "@/utils/fetchs/Account";
import { ChangeProfilevalidationSchema,ChangeProfileTypeValidationSchema } from "@/types/FormType";
import alertPopup from "@/utils/alertPopup";
import { Dispatch, SetStateAction } from "react";

export default function FormChangeProfile ({authToken,setModel,refetchSession}: {authToken:string,setModel: Dispatch<SetStateAction<boolean>>,refetchSession: ()=>void}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<ChangeProfileTypeValidationSchema>({
        resolver: zodResolver(ChangeProfilevalidationSchema),
      });
      
      const mutation = useMutation({
          mutationFn: async (data:CHANGEPROFILE_REQUEST_TYPE) => {
            return await FetchEditProfile(authToken,data)
          },
      })
      const onSubmit: SubmitHandler<ChangeProfileTypeValidationSchema> = (data) => {
        alertPopup('loading','')
        mutation.mutate(data,{
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
                    <input type="text" autoComplete="fullname" id="fullname" minLength={8} maxLength={100} className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none  peer" placeholder=" " {...register('name')} />
                    <label htmlFor="fullname" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
                    {errors.name && (
                        <p className="text-xs text-red-500 mt-2">
                        {errors.name?.message}
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