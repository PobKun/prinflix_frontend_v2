'use client'
import { useState , useEffect} from "react";
import { useSession,signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPlay,FaHeart,FaStickyNote,FaInfo,FaUser } from "react-icons/fa";
import alertPopup from "@/utils/alertPopup";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "@/components/Logo";
import { useScrollPosition } from "@/components/hook/UseScrollPosition";
import { useQuery,useMutation } from "@tanstack/react-query";
import { FetchMovieCategory,FetchMovie, FetchMovieRecommend, FetchMovieFavorite, FetchWatchMovie, FetchMovieDelFavorite,FetchMovieAddFavorite } from "@/utils/fetchs/Movie";

export default function HomeMemberShip() {


  

  const {data: session,update: sessionUpdate} = useSession()
  const [showModelDetail,setShowModelDetail] = useState<boolean>(false)
  const [detailBanner,setDetailBanner] = useState<{
    name: string,
    detail: string,
    image: string,
    uuid: string,
    favorite: boolean
  }>({
    name: '',
    detail: '',
    image: '',
    uuid: '',
    favorite: false
  })
  
  const [slideNow,setSlideNow] = useState<any>({drama: 0, recommend: 0, action: 0, favorite: 0})
  useEffect(()=>{
    console.log('slideNow',slideNow);
  },[slideNow])

  useEffect(()=>{
    if(localStorage.getItem('clickLoginSocial') && localStorage.getItem('clickLoginSocial') === 'true') {
      localStorage.removeItem('clickLoginSocial')
    }
  },[])
  const scrollPosition = useScrollPosition()
  

  const queryCategory =  useQuery({
    queryKey: ['GET_CATEGORY'],
    queryFn: () => FetchMovieCategory(session?.user?.token_type + ' ' + session?.user?.access_token),
  });

  const queryMovie =  useQuery({
    queryKey: ['GET_MOVIE'],
    queryFn: () => FetchMovie(session?.user?.token_type + ' ' + session?.user?.access_token, {}),
  });

  const queryRecommend =  useQuery({
    queryKey: ['GET_MOVIE_RECOMMEND'],
    queryFn: () => FetchMovieRecommend(session?.user?.token_type + ' ' + session?.user?.access_token),
  });

  useEffect(()=>{
    console.log('detailBanner',detailBanner);
    
    if(!queryRecommend.isLoading && detailBanner.name === '') {
      if(queryRecommend.data?.success === true  && (queryRecommend.data?.data?.result_data.length ?? 0) >= 1) {
        setDetailBanner({name: queryRecommend.data?.data?.result_data[0].title ?? '-',detail: queryRecommend.data?.data?.result_data[0].description ?? '-',image: queryRecommend.data?.data?.result_data[0].thumbnail ?? '',uuid: queryRecommend.data?.data?.result_data[0].uuid ?? '-',favorite: queryRecommend.data?.data?.result_data[0].is_favorite ?? false})
      }
    }
  },[queryRecommend,detailBanner])
  

  const mutationAdd = useMutation({
      mutationFn: async (uuid:string) => {
        return await FetchMovieAddFavorite(session?.user?.token_type + ' ' + session?.user?.access_token,uuid)
      },
  })

  const mutationDel = useMutation({
      mutationFn: async (uuid:string) => {
        return await FetchMovieDelFavorite(session?.user?.token_type + ' ' + session?.user?.access_token,uuid)
      },
  })

  const mutationWatch = useMutation({
    mutationFn: async (uuid:string) => {
      return await FetchWatchMovie(session?.user?.token_type + ' ' + session?.user?.access_token,uuid)
    },
  })
  
  
  const setFavorite = (uuid:string,type:boolean) => {
    if(type === false) {
      alertPopup('loading','')
      mutationAdd.mutate(uuid,{
          onSuccess: (data_mutation) => {
              console.log('mutation data',data_mutation);
              if(data_mutation.success) {
                alertPopup('close','')
                queryMovie.refetch()
                setDetailBanner((prev)=> ({...prev,favorite: true}))
                // alertPopup('success',data_mutation.data ?? '-')
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
    }else{
      alertPopup('loading','')
      mutationDel.mutate(uuid,{
          onSuccess: (data_mutation) => {
              console.log('mutation data',data_mutation);
              if(data_mutation.success) {
                alertPopup('close','')
                // queryRecommend.refetch()
                queryMovie.refetch()
                setDetailBanner((prev)=> ({...prev,favorite: false}))
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
    }
  };

  // FetchMovieCategory
  

  return (
    <> 
      {(queryCategory.isLoading || queryMovie.isLoading || queryRecommend.isLoading) &&
       <div className="wrapper-loader m-auto">
         <div className="m-auto">  <span className="loading loading-spinner loading-lg m-auto"></span></div>
      </div>
      }
      <header className={`fixed w-full px-5 py-3 z-[999] ${scrollPosition >= 5 ? 'bg-[#141414] shadow-lg': ''}`}>
        <div className="flex items-center justify-between space-x-2 md:space-x-10">
          <Logo />
          <div className="flex gap-4">
            <div className="my-auto truncate w-[80px]">{session?.user?.name}</div>
              
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" > 
              {(session?.user?.have_image ?? false) === false ? 
                  <div className='p-3 bg-[#fff] rounded-md'>
                      <FaUser className="inline-block text-[#000] text-[25px]" /> 
                  </div>
              : 
                  <div>
                      <Image src={session?.user?.image_url ?? ''}  width={0} height={0} sizes="100vw" className="w-[50px] h-auto rounded-md" alt="Profile icon" />
                  </div>
              } 
              </div>
              <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${scrollPosition >= 5 ? 'mt-4': 'mt-2'}`}>
                <li><Link href={'/membership'}>Watch VDO</Link></li>
                {/* <li><Link href={'/membership/favorite'}>Favorite</Link></li> */}
                <li><Link href={'/membership/profile'}>Profile</Link></li>
                <div className="py-1"><hr /></div>
                <li><button onClick={()=>signOut()}>Sign out</button></li>
              </ul>
            </div>
         
          </div>
        </div>
      </header>
      <div className="relative  min-h-screen bg-gradient-membership-banner">
        <div className="flex min-h-screen flex-col justify-center px-6 py-2">
          <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            {detailBanner.name !== '' && 
              <>
                <Image src={detailBanner.image} 
                width={0}
                height={0}
                sizes="100vw"
                alt="banner"
                  className="absolute top-0 left-0 -z-10 h-screen w-screen object-cover" 
                  unoptimized
                />
                <h1 className="max-w-[16ch] text-2xl line-clamp-2 text-shadow-lg md:text-4xl lg:text-7xl">{detailBanner.name}</h1>
                <p className="max-w-xs text-justify text-xs line-clamp-4 text-shadow-xl md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">{detailBanner.detail}</p>
                <div className="flex space-x-4">
                  <Link href={'/membership/video/'+detailBanner.uuid} className="px-4 py-2 bg-white text-black rounded-md hover:opacity-70 flex"><FaPlay className="mt-[3px] me-[3px]" /> Play</Link>
                  <button onClick={()=> setShowModelDetail(true)} className="px-4 py-2 bg-gray-600/70 rounded-md  hover:opacity-70 flex" type="button"><FaInfo className="mt-[3px] me-[3px]" /> More Info</button>
                  <button onClick={()=>setFavorite(detailBanner.uuid,detailBanner.favorite )}> <FaHeart className={`text-[25px] ${detailBanner.favorite === true ? 'text-[red]' : ''}`} /> </button>
                </div>
              </>
            }
          </div>
          <section className="-space-y-4 md:space-y-20">
                   <div className="mb-5">
                      <div className="mb-2">
                      <h2 className="text-[20px] font-bold">Recommend</h2>
                      {(!queryRecommend.isLoading && queryRecommend.data?.success === true  && (queryRecommend.data?.data?.result_data.length ?? 0) >= 1) &&
                          <div>
                            <Slider {...{
                              className: 'px-[5px] sm:px-[20px] relative',
                              dots: false,
                              swipeToSlide: true,
                              infinite: true,
                              autoplay: true,
                              autoplaySpeed: 5000,
                              slidesToScroll: 1,
                              slidesPerRow: 1,
                              rows: 1,
                              centerMode: false,
                              arrows: false,
                              slidesToShow: Math.min(queryRecommend.data?.data?.result_data.length ?? 0,5),
                              responsive: [
                                {
                                  breakpoint: 767.99,
                                  settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true,
                                  }
                                },
                                {
                                  breakpoint: 450,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                  }
                                },
                              ]
                              }
                            }>
                              {queryRecommend.data?.data?.result_data.map((data,n:number) => {
                                    return (
                                    <div key={n}   onClick={()=>setDetailBanner({name: data.title,detail: data.description,image: data.thumbnail,uuid: data.uuid,favorite: data.is_favorite ?? false})} className="p-1 sm:p-2 group w-full ease-in-out duration-300 transition-all">
                                      <div className="group-hover:scale-125 group-hover:shadow-popup ease-in-out duration-300 transition-all">
                                        <Image
                                            src={data.thumbnail}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full h-auto rounded-sm"
                                            alt="thumbnail movie"
                                        />
                                        <div className="backdrop-card hidden group-hover:block"></div>
                                      </div>
                                    </div>
                                    )
                              })}
                            </Slider>
                          </div>
                      }
                    </div>
                  </div>
          {(!queryCategory.isLoading && queryCategory.data?.success === true && (queryCategory.data?.data?.length ?? 0) >= 1
          && !queryMovie.isLoading && queryMovie.data?.success === true  && (queryMovie.data?.data?.result_data.length ?? 0) >= 1) &&
              <>
              {queryCategory.data?.data?.map((item,i:number) => (
                <div key={i} className="mb-5">
                  <div className="mb-2">
                  <h2 className="text-[20px] font-bold">{item.name}</h2>
                  </div>

                  <Slider {...{
                    className: 'px-[5px] sm:px-[20px] relative',
                    dots: false,
                    swipeToSlide: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    centerMode: false,
                    arrows: false,
                    slidesToShow: Math.min(queryMovie.data?.data?.result_data.length ?? 0,5),
                    afterChange: current => setSlideNow((prevState:any) => ({...prevState,[item.id]:current})),
                    responsive: [
                      {
                        breakpoint: 767.99,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          infinite: true,
                        }
                      },
                      {
                        breakpoint: 450,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1,
                          infinite: true,
                        }
                      },
                    ]
                    }
                  }>
                    {queryMovie.data?.data?.result_data.map((data,n:number) => {
                        if(data.category_id === item.id) {
                          return (
                          <div key={n} onClick={()=>setDetailBanner({name: data.title,detail: data.description,image: data.thumbnail,uuid: data.uuid,favorite: data.is_favorite ?? false})} className="p-1 sm:p-2 group w-full ease-in-out duration-300 transition-all">
                            <div className="group-hover:scale-125 group-hover:shadow-popup ease-in-out duration-300 transition-all">
                              <Image
                                  src={data.thumbnail}
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  className="w-full h-auto rounded-sm"
                                  alt="thumbnail movie"
                                  
                              />
                              <div className="backdrop-card hidden group-hover:block"></div>
                            </div>
                          </div>
                          )
                        }
                    })}
                  </Slider>

                </div>
              ))}
              </>
            }
          </section>
        </div>

        <div>
              <input type="checkbox" id="my_modal_detail" className="modal-toggle"  checked={showModelDetail} onChange={(e) => setShowModelDetail(!showModelDetail)}  />
              <div className="modal" role="dialog">
                  <div className="modal-box">
                    <div>
                        <label htmlFor="my_modal_detail" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
                    </div>
                   <div>
                    <h4 className="font-bold"> {detailBanner.name}</h4>
                      <p>
                        {detailBanner.detail}
                      </p>
                   </div>
                </div>
              </div>
          </div>

{/* 
        <div className="container mx-auto px-[1.5rem]">
          <div>

          </div>

          {category !== false &&
              <>
              {category.map((item:any,i:number) => (
                <div key={i} className="mb-5">
                  <div className="mb-2">
                  <h2 className="text-[20px] font-bold">{item.name}</h2>
                  </div>

                  <Slider {...{
                    className: 'px-[20px] relative',
                    dots: false,
                    swipeToSlide: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    centerMode: false,
                    arrows: false,
                    slidesToShow: Math.min(item.data.length,5),
                    afterChange: current => setSlideNow((prevState:any) => ({...prevState,[item.identify]:current})),
                    responsive: [
                      {
                        breakpoint: 767.99,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          infinite: true,
                        }
                      },
                      {
                        breakpoint: 430,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                        }
                      },
                    ]
                    }
                  }>
                    {item.data.map((data:any,n:number) => (
                      <div key={n} className="p-2 group w-full ease-in-out duration-300 transition-all">
                        <div className="group-hover:scale-125 group-hover:shadow-popup ease-in-out duration-300 transition-all">
                          <Image
                              src={data.img}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="w-full h-auto rounded-lg	"
                              alt="TEST"
                          />
                          <div className="relative w-full opacity-0	group-hover:opacity-100 z-[40]">
                            <div className="w-full absolute bottom-[15px] lg:bottom-[25px]">
                              <div className="flex justify-center gap-2 :gap-4">
                                <div className="bg-icon-popup hover:bg-icon-popup-hover rounded-[50%] w-[23px] h-[23px] lg:w-[32px] lg:h-[32px] text-center group/btn1  ease-in-out duration-300 transition-all">
                                  <FaPlay className="text-center mx-auto text-[13px] mt-[5.5px] lg:text-[17px] lg:mt-[7.5px] group-hover/btn1:color-platform" />
                                </div>
                                <div className="bg-icon-popup hover:bg-icon-popup-hover rounded-[50%] w-[23px] h-[23px] lg:w-[32px] lg:h-[32px] text-center group/btn2  ease-in-out duration-300 transition-all">
                                  <FaStickyNote className="text-center mx-auto text-[13px] mt-[6px] lg:text-[17px] lg:mt-[8px] group-hover/btn2:color-platform" />
                                </div>
                                {data.favorite === true ?
                                <div className="bg-icon-popup-hover rounded-[50%] w-[23px] h-[23px] lg:w-[32px] lg:h-[32px] text-center ease-in-out duration-300 transition-all">
                                  <FaHeart className="text-center mx-auto text-[13px] mt-[6px] lg:text-[17px] lg:mt-[8px] color-platform" />
                                </div>
                                :
                                <div className="bg-icon-popup hover:bg-icon-popup-hover rounded-[50%] w-[23px] h-[23px] lg:w-[32px] lg:h-[32px] text-center group/btn3  ease-in-out duration-300 transition-all">
                                  <FaHeart className="text-center mx-auto text-[13px] mt-[6px] lg:text-[17px] lg:mt-[8px] group-hover/btn3:color-platform" />
                                </div>
                                }
                          
                              </div>
                            </div>
                          </div>
                           <div className="backdrop-card hidden group-hover:block"></div>

              
                        </div>
                      </div>
  
                    ))}
                  </Slider>

                </div>
              ))}
              </>
            }
        </div> */}


      </div>
    </>
  )
}