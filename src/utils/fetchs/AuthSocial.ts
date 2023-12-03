import {
    CONNECT_LINE_RESPONSE_TYPE,
    CONNECT_GOOGLE_RESPONSE_TYPE,
    OAUTH_SOCIAL_RESPONSE_TYPE,
    OAUTH_SOCIAL_REQUEST_TYPE,
    DISCONNECT_SOCIAL_RESPONSE_TYPE
} from '@/types/AuthType'
const apiKey = process.env.API_KEY ?? 'apikey1234567890'

export const FetchConnectLine = async (authorization:string) => {
    
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/line/connect'
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
    return json as CONNECT_LINE_RESPONSE_TYPE
}

export const FetchConnectGoogle = async (authorization:string) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/google/connect'
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
    return json as CONNECT_GOOGLE_RESPONSE_TYPE
}

export const FetchDisconnectLine = async (authorization:string) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/line/disconnect'
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
    return json as DISCONNECT_SOCIAL_RESPONSE_TYPE
}


export const FetchDisconnectGoogle = async (authorization:string) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/google/disconnect'
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
    return json as DISCONNECT_SOCIAL_RESPONSE_TYPE
}



export const FetchOAuthLine = async (jsonData:OAUTH_SOCIAL_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/line/login'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': apiKey
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as OAUTH_SOCIAL_RESPONSE_TYPE
}

export const FetchOAuthGoogle = async (jsonData:OAUTH_SOCIAL_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/google/login'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': apiKey
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as OAUTH_SOCIAL_RESPONSE_TYPE
}