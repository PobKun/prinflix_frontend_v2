import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {useRouter} from 'next/navigation';
import { useMutation } from "@tanstack/react-query";
import { FetchReset } from "@/utils/fetchs/AuthPasswordBased";
import { RESET_REQUEST_TYPE } from "@/types/AuthType";
import { ResetTypeValidationSchema,ResetvalidationSchema } from "@/types/FormType";
import alertPopup from "@/utils/alertPopup";

export default function ResetComponent({session_id}: {session_id:string}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetTypeValidationSchema>({
    resolver: zodResolver(ResetvalidationSchema),
  });
  
  const mutation = useMutation({
      mutationFn: async (data:RESET_REQUEST_TYPE) => {
        return await FetchReset(data)
      },
  })
  const onSubmit: SubmitHandler<ResetTypeValidationSchema> = (data) => {
    alertPopup('loading','')   
    mutation.mutate({password: data.password ?? '',session_id: decodeURIComponent(session_id as string)},{
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
        <h1>Reset Password</h1>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-12 m-auto mt-[1rem] mb-[4rem]'>
                <div className="col-span-12 mb-[16px]">
                  <div className="relative w-full">
                    <input type="password" autoComplete="password" id="password" className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none peer" placeholder=" " {...register('password')}/>
                    <label htmlFor="password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">New password</label>
                    {errors.password && (
                      <p className="text-xs text-red-500 mt-2">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-12 mb-[16px]">
                  <div className="relative w-full">
                    <input type="password" id="confirm_password" className="block rounded-[0.25rem] px-3 pb-5 pt-5 w-full text-sm text-gray-900 auth-input-flix appearance-none border-0 focus:outline-none peer" placeholder=" " {...register('confirmPassword')}/>
                    <label htmlFor="confirm_password" className="absolute auth-input-flix duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[rgba(255, 255, 255, 0.7)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confrim password</label>
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-2">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-12 mt-[24px]">
                  <button className='btn-flix h-[62px] w-full' type="submit">Confirm</button>
                </div>
            </div>
           </form>
        </div>
      </div>
    </>
  )
}
