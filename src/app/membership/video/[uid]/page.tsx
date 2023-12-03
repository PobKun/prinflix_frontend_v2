'use client'
import Link from "next/link"
import { useQuery } from "@tanstack/react-query";
import { FetchMovieDetail } from "@/utils/fetchs/Movie";
import { useSession } from "next-auth/react";

export default function VideoShow({params}: {params: {uid: string}}) {
  const {data: session} = useSession()

  const {data,isLoading} =  useQuery({
    queryKey: ['GET_MOVIE_DETAIL'],
    queryFn: () => FetchMovieDetail(session?.user?.token_type + ' ' + session?.user?.access_token,params.uid),
  });

  return (
    <>
    <div className="container mx-auto px-3 py-5">
        {(!isLoading && data?.success === true) &&
          <div>
            <div className='mb-3'>
              <div className="text-sm breadcrumbs">
                  <ul>
                      <li><Link href={'/membership'}>Home</Link></li> 
                      <li><Link href={'/membership/profile'}>Watch</Link></li> 
                  </ul>
              </div>
          </div>
          <iframe className="w-full aspect-video mx-auto" src={process.env.NEXT_PUBLIC_WEB_URL_IFRAME+"/htmlStatic?vid="+params.uid} frameBorder={0} width="100%" scrolling="no" id="iframeVDOShowing" allowFullScreen={true}></iframe>
          <div className="mt-5">
            <h4 className="font-bold">{data?.data?.title ?? '-'}</h4>
            <p>
            {data?.data?.description ?? '-'}
            </p>
          </div>
        </div>
        }
     </div>
    </>
  )
}
