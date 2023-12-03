import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  // interface Session {
  //   data: any
  // }

  interface User {
    id?: number | string;
    name: string | null;
    email: string | null;
    email_verified: boolean;
    have_image: boolean;
    image_url: string;
    status: string;
    role: string;
    oauth: {
      line: {
        connected: boolean,
        name?: string,
        picture?: string|null
      }
      google: {
        connected: boolean,
        name?: string,
        picture?: string|null
      }
    };
    signinWith: string;
    access_token: string;
    token_type: string;
    expire_in: number;
  } 

  interface Session extends DefaultSession {
    user?: User | undefined | null
  }

}

declare module "next-auth/jwt" {
  interface JWT {
    id?: number | string;
    name: string | null;
    email: string | null;
    email_verified: boolean;
    have_image: boolean;
    image_url: string;
    status: string;
    role: string;
    oauth: {
      line: {
        connected: boolean,
        name?: string,
        picture?: string|null
      }
      google: {
        connected: boolean,
        name?: string,
        picture?: string|null
      }
    };
    signinWith: string;
    access_token: string;
    token_type: string;
    expire_in: number;
  }
}

