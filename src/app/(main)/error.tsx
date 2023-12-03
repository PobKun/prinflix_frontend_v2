'use client'
import '../globals.css'
import Logo from '@/components/Logo'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="wrapper-error m-auto">
          <div className='m-auto text-center'>
            <div className='mb-3 m-auto text-center'>
              <Logo className='m-auto' removeClassNormal={false} />
            </div>
             <h2 className='text-[#fff] text-[20px]'>Something went wrong!</h2>
            <div className='mt-3 text-[#ccc] text-[14px]'>{error.message ?? '-'}</div>
            <div className='mt-5'>
              <button className="btn btn-outline"  onClick={() => reset()}>Try again</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}