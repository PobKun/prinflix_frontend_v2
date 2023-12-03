import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {useRouter} from 'next/navigation';
import { useMutation } from "@tanstack/react-query";
import { FetchForgot } from "@/utils/fetchs/AuthPasswordBased";
import { FORGOT_REQUEST_TYPE } from "@/types/AuthType";
import { ForgotvalidationSchema,ForgotTypeValidationSchema } from "@/types/FormType";
import alertPopup from "@/utils/alertPopup";

export default function ForgotComponent() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotTypeValidationSchema>({
    resolver: zodResolver(ForgotvalidationSchema),
  });
  
  const mutation = useMutation({
      mutationFn: async (data:FORGOT_REQUEST_TYPE) => {
        return await FetchForgot(data)
      },
  })
  const onSubmit: SubmitHandler<ForgotTypeValidationSchema> = (data) => {
    alertPopup('loading','')
    mutation.mutate(data,{
        onSuccess: (data_mutation) => {
            console.log('mutation data',data_mutation);
            if(data_mutation.success) {
              alertPopup('success',data_mutation.data ?? '-')
              router.push('/')
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
    <>
      <div className='m-auto w-full min-h-[450px] md:w-[450px] box-auth z-[1]'> 
        <h1>Forgot Password</h1>
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
                <div className="col-span-12 mt-[24px]">
                  <button className='btn-flix h-[62px] w-full' type="submit">Confirm</button>
                </div>
            </div>
           <div>
            <div className="text-[#737373]">
              Login to Prinflix? <Link href="/auth/login" className='text-white hover:underline hover:underline-offset-4'> Sign in now</Link>.
            </div>
           </div>
           </form>
        </div>
      </div>
    </>
  )
}
