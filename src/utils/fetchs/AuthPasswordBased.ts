import {
    LOGIN_REQUEST_TYPE,
    LOGIN_RESPONSE_TYPE,
    REGISTER_REQUEST_TYPE,
    REGISTER_RESPONSE_TYPE,
    FORGOT_REQUEST_TYPE,
    FORGOT_RESPONSE_TYPE,
    RESET_REQUEST_TYPE,
    RESET_RESPONSE_TYPE,
    VERIFYTOKEN_REQUEST_TYPE,
    VERIFYTOKEN_RESPONSE_TYPE
} from '@/types/AuthType'

export const FetchLogin = async (jsonData:LOGIN_REQUEST_TYPE) => {        
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/login'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })    
    const json = await res.json()    
    return json as LOGIN_RESPONSE_TYPE
}


export const FetchVerifyToken = async (jsonData:VERIFYTOKEN_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/token/verify'
    const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `${jsonData.token_type} ${jsonData.access_token}`,
        },
    })
    const json = await res.json()
    return json as VERIFYTOKEN_RESPONSE_TYPE
}

export const FetchRegister = async (jsonData:REGISTER_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/register'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as REGISTER_RESPONSE_TYPE
}

export const FetchForgot = async (jsonData:FORGOT_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/forgot_password'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as FORGOT_RESPONSE_TYPE
}


export const FetchReset = async (jsonData:RESET_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/auth/reset_password'
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as RESET_RESPONSE_TYPE
}