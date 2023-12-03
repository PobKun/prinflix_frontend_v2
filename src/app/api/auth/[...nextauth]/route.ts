import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import LineProvider from "next-auth/providers/line";
import GoogleProvider from "next-auth/providers/google";
import { FetchLogin , FetchVerifyToken} from "@/utils/fetchs/AuthPasswordBased";
import { FetchOAuthGoogle , FetchOAuthLine} from "@/utils/fetchs/AuthSocial";
import { LoginvalidationSchema,LoginTypeValidationSchema } from "@/types/FormType";
import jwt from "jsonwebtoken"
const authUrl = process.env.NEXTAUTH_URL ?? 'http://localhost:4000';

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: `${authUrl}/auth/login`, 
        // error: `${authUrl}/auth/error`
    },
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 วัน
    },
    callbacks: {
      async signIn({ user, account, profile, email, credentials}) {
        return true
      },
      async jwt({ token, trigger, user, session}) { 
        console.log(trigger,session,user);
        if(trigger === 'update') {
          if(session.access_token && session.token_type && session.token_type  && session.signinWith) {
            const verify = await FetchVerifyToken({token_type: session.token_type ?? '',access_token: session.access_token ?? ''})
            if(verify.success !== true) {
              if(typeof verify.error === 'string') {
                throw new Error(verify.error ?? '-');
              }
              throw new Error('Verify token error');
            }
            const verifyEmail = verify.data?.email_verified ?? false
            if(verifyEmail === false) {
              throw new Error('Please verify your account. The link has been sent to your email.');
            }
            const verifyStatus =  verify.data?.status ?? 'inactive'
            if(verifyStatus !== 'active') {
              throw new Error('This your account. inactive.');
            }
            let imageUrl = ''
            let have_image = false
            if(session.signinWith === 'line') {
              imageUrl = (verify.data?.oauth.line.connected === true) ? verify.data?.oauth.line.picture ?? '' : ''
              have_image = (imageUrl === '') ? false : true
            }else if(session.signinWith === 'google') {
              imageUrl = (verify.data?.oauth.google.connected === true) ? verify.data?.oauth.google.picture ?? '' : ''
              have_image = (imageUrl === '') ? false : true
            }else if(session.signinWith === 'password_based') {
              imageUrl = verify.data?.image_url ?? ''
              have_image = (imageUrl === '') ? false : true
            }
            
            token.id = verify.data?.session_id ?? String(Date.now()),
            token.name = verify.data?.name ?? '',
            token.email = verify.data?.email ?? '',
            token.email_verified = verify.data?.email_verified ?? false,
            token.have_image = have_image ?? false,
            token.image_url = imageUrl ?? '',
            token.status = verify.data?.status ?? '',
            token.role = verify.data?.role ?? '',
            token.access_token = session.access_token ?? ''
            token.token_type = session.token_type ?? ''
            token.expire_in = session.expire_in ?? 0
            token.signinWith = session.signinWith ?? 'password_based'
            token.oauth = verify.data?.oauth ?? {line: {connected: false},google: {connected: false}}
          }
        }
        if(user) {
          token.id = user.id
          token.name = user.name
          token.email = user.email
          token.email_verified = user.email_verified
          token.have_image = user.have_image
          token.image_url = user.image_url
          token.status = user.status
          token.role = user.role
          token.access_token = user.access_token
          token.token_type = user.token_type
          token.expire_in = user.expire_in
          token.signinWith = user.signinWith
          token.oauth = user.oauth
        }

        return token 
      },
      async session({ session, token, user }) {
        if (token && session.user) {
          session.user.id = token.id
          session.user.name = token.name
          session.user.email = token.email
          session.user.email_verified = token.email_verified
          session.user.have_image = token.have_image
          session.user.image_url = token.image_url
          session.user.status = token.status
          session.user.role = token.role
          session.user.access_token = token.access_token
          session.user.token_type = token.token_type
          session.user.expire_in = token.expire_in
          session.user.signinWith = token.signinWith
          session.user.oauth = token.oauth
        }
        return session
      },
    },
    useSecureCookies: (process.env.NODE_ENV === "production") ? true : false,
    providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {   

          const safe = await LoginvalidationSchema.safeParse(credentials)
          if(safe.success !== true) {        
            throw new Error("Format errors.");
          }

          const data = await FetchLogin({email:safe.data.email,password:safe.data.password})
          if(data.success !== true) {
            if(typeof data.error === 'string') {
              throw new Error(data.error ?? '-');
            }
            let message = ''
            data.error?.map((v,i)=> {
              if(i === 0) {
                message = `${v.field} : ${v.error_message}` 
              }
            })
            throw new Error(message);
          }
          const verify = await FetchVerifyToken({token_type: data.data?.token_type ?? '',access_token: data.data?.access_token ?? ''})
          if(verify.success !== true) {
            if(typeof verify.error === 'string') {
              throw new Error(verify.error ?? '-');
            }
            throw new Error('Verify token error');
          }
          const verifyEmail = verify.data?.email_verified ?? false
          if(verifyEmail === false) {
            throw new Error('Please verify your account. The link has been sent to your email.');
          }
          const verifyStatus =  verify.data?.status ?? 'inactive'
          if(verifyStatus !== 'active') {
            throw new Error('This your account. inactive.');
          }
            
          return {
            id: verify.data?.session_id ?? String(Date.now()),
            name: verify.data?.name ?? '',
            email: verify.data?.email ?? '',
            email_verified: verify.data?.email_verified ?? false,
            have_image: verify.data?.have_image ?? false,
            image_url: verify.data?.image_url ?? '',
            status: verify.data?.status ?? '',
            role: verify.data?.role ?? '',
            oauth: {
              line: {
                connected: verify.data?.oauth.line.connected ?? false,
                name: verify.data?.oauth.line.name ?? '',
                picture:  verify.data?.oauth.line.picture ?? ''
              },
              google: {
                connected: verify.data?.oauth.google.connected ?? false,
                name: verify.data?.oauth.google.name ?? '',
                picture:  verify.data?.oauth.google.picture ?? ''
              },
            },
            signinWith: 'password_based',
            access_token: data.data?.access_token ?? '',
            token_type: data.data?.token_type ?? '',
            expire_in: data.data?.expire_in ?? 0,
          }
      },
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID as string,
      clientSecret: process.env.LINE_CLIENT_SECRET as string,
     
      profile: async (profile) => {
        console.log('[AN][NEXTAUTH][LINE] >',profile); 
        if(!profile.sub) {
          throw new Error('error profile response line')
        }

        const data = await FetchOAuthLine({user_id: profile.sub})
        if(data.success !== true) {
          if(typeof data.error === 'string') {
            throw new Error(data.error ?? '-');
          }
          let message = ''
          data.error?.map((v,i)=> {
            if(i === 0) {
              message = `${v.field} : ${v.error_message}` 
            }
          })
          throw new Error(message);
        }
        const verify = await FetchVerifyToken({token_type: data.data?.token_type ?? '',access_token: data.data?.access_token ?? ''})
        if(verify.success !== true) {
          if(typeof verify.error === 'string') {
            throw new Error(verify.error ?? '-');
          }
          throw new Error('Verify token error');
        }
        const verifyEmail = verify.data?.email_verified ?? false
        if(verifyEmail === false) {
          throw new Error('Please verify your account. The link has been sent to your email.');
        }
        const verifyStatus =  verify.data?.status ?? 'inactive'
        if(verifyStatus !== 'active') {
          throw new Error('This your account. inactive.');
        }

        const imageUrl = (verify.data?.oauth.line.connected === true) ? verify.data?.oauth.line.picture : ''
        const have_image = (imageUrl === '') ? false : true
        return {
          id: verify.data?.session_id ?? String(Date.now()),
          name: verify.data?.name ?? '',
          email: verify.data?.email ?? '',
          email_verified: verify.data?.email_verified ?? false,
          have_image: have_image,
          image_url: imageUrl ?? '',
          status: verify.data?.status ?? '',
          role: verify.data?.role ?? '',
          oauth: {
            line: {
              connected: verify.data?.oauth.line.connected ?? false,
              name: verify.data?.oauth.line.name ?? '',
              picture:  verify.data?.oauth.line.picture ?? ''
            },
            google: {
              connected: verify.data?.oauth.google.connected ?? false,
              name: verify.data?.oauth.google.name ?? '',
              picture:  verify.data?.oauth.google.picture ?? ''
            },
          },
          signinWith: 'line',
          access_token: data.data?.access_token ?? '',
          token_type: data.data?.token_type ?? '',
          expire_in: data.data?.expire_in ?? 0,
        }
       }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile: async (profile) => {
        console.log('[AN][NEXTAUTH][GOOGLE] >',profile);       
        if(!profile.sub) {
          throw new Error('error profile response google')
        }
        
        const data = await FetchOAuthGoogle({user_id: profile.sub})
        if(data.success !== true) {
          if(typeof data.error === 'string') {
            throw new Error(data.error ?? '-');
          }
          let message = ''
          data.error?.map((v,i)=> {
            if(i === 0) {
              message = `${v.field} : ${v.error_message}` 
            }
          })
          throw new Error(message);
        }
        const verify = await FetchVerifyToken({token_type: data.data?.token_type ?? '',access_token: data.data?.access_token ?? ''})
        if(verify.success !== true) {
          if(typeof verify.error === 'string') {
            throw new Error(verify.error ?? '-');
          }
          throw new Error('Verify token error');
        }
        const verifyEmail = verify.data?.email_verified ?? false
        if(verifyEmail === false) {
          throw new Error('Please verify your account. The link has been sent to your email.');
        }
        const verifyStatus =  verify.data?.status ?? 'inactive'
        if(verifyStatus !== 'active') {
          throw new Error('This your account. inactive.');
        }

        const imageUrl = (verify.data?.oauth.google.connected === true) ? verify.data?.oauth.google.picture : ''
        const have_image = (imageUrl === '') ? false : true
        return {
          id: verify.data?.session_id ?? String(Date.now()),
          name: verify.data?.name ?? '',
          email: verify.data?.email ?? '',
          email_verified: verify.data?.email_verified ?? false,
          have_image: have_image,
          image_url: imageUrl ?? '',
          status: verify.data?.status ?? '',
          role: verify.data?.role ?? '',
          oauth: {
            line: {
              connected: verify.data?.oauth.line.connected ?? false,
              name: verify.data?.oauth.line.name ?? '',
              picture:  verify.data?.oauth.line.picture ?? ''
            },
            google: {
              connected: verify.data?.oauth.google.connected ?? false,
              name: verify.data?.oauth.google.name ?? '',
              picture:  verify.data?.oauth.google.picture ?? ''
            },
          },
          signinWith: 'google',
          access_token: data.data?.access_token ?? '',
          token_type: data.data?.token_type ?? '',
          expire_in: data.data?.expire_in ?? 0,
        }
        
       }
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


