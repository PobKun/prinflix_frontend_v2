import {
    MOVIE_CATEGORY_RESPONE_TYPE,
    MOVIE_LIST_REQUEST_TYPE,
    MOVIE_LIST_RESPONE_TYPE,
    MOVIE_LISTFAV_RESPONE_TYPE,
    MOVIE_LISTRECOMMEND_RESPONE_TYPE,
    MOVIE_DELADD_FAVORITE_RESPONE_TYPE,
    MOVIE_WATCH_RESPONE_TYPE,
    MOVIE_DETAIL_RESPONE_TYPE
} from '@/types/MovieType'

export const FetchMovieCategory = async (authorization: string) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/movie/category'
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_CATEGORY_RESPONE_TYPE
}


export const FetchMovie = async (authorization: string,data:MOVIE_LIST_REQUEST_TYPE) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie?keyword=${data.keyword ?? ''}&category=${data.category ?? ''}&page=1&limit=100&sort=${data.sort ?? ''}`
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_LIST_RESPONE_TYPE
}

export const FetchMovieFavorite = async (authorization: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/favorite`
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_LISTFAV_RESPONE_TYPE
}

export const FetchMovieDetail = async (authorization: string,uuid: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/${uuid}`
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_DETAIL_RESPONE_TYPE
}


export const FetchMovieRecommend = async (authorization: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/recommend`
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_LISTRECOMMEND_RESPONE_TYPE
}

export const FetchMovieAddFavorite = async (authorization: string,uuid: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/${uuid}/favorite`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
        body: JSON.stringify({})
    })
    const json = await res.json()
    return json as MOVIE_DELADD_FAVORITE_RESPONE_TYPE
}

export const FetchMovieDelFavorite = async (authorization: string,uuid: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/${uuid}/favorite`
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_DELADD_FAVORITE_RESPONE_TYPE
}

export const FetchWatchMovie = async (authorization: string,uuid: string) => {
    const url:string = `${process.env.NEXT_PUBLIC_API_URL}/v1/movie/${uuid}/watch`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
    })
    const json = await res.json()
    return json as MOVIE_WATCH_RESPONE_TYPE
}
