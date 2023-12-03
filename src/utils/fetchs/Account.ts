import {
    CHANGEPASSOWORD_REQUEST_TYPE,
    CHANGEPASSOWORD_RESPONE_TYPE,
    CHANGEPROFILE_REQUEST_TYPE,
    CHANGEPROFILE_RESPONE_TYPE
} from '@/types/AccountType'

export const FetchChangePassword = async (authorization: string,jsonData:CHANGEPASSOWORD_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/account/password'
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as CHANGEPASSOWORD_RESPONE_TYPE
}

export const FetchEditProfile = async (authorization: string,jsonData:CHANGEPROFILE_REQUEST_TYPE) => {
    const url:string = process.env.NEXT_PUBLIC_API_URL+'/v1/account/profile'
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authorization
        },
        body: JSON.stringify(jsonData)
    })
    const json = await res.json()
    return json as CHANGEPROFILE_RESPONE_TYPE
}
