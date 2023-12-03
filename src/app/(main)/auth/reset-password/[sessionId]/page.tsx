'use client'
import ResetComponent from '@/components/Auth/Reset'



export default function Forgot({params}: {params: {sessionId: string}}) {
  // console.log(params.sessionId as string);
  
  return (
    <>
      <ResetComponent session_id={String(params.sessionId)} />
    </>
  )
}
