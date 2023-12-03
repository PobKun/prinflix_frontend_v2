import { withAuth } from "next-auth/middleware"
const authUrl = process.env.NEXTAUTH_URL ?? 'http://localhost:4000';
export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
    //   const path = req.nextUrl.pathname;
    //   // Check if the middleware is processing the
    //   // route which requires a specific role
    //   if (path.startsWith("/admin")) {
    //     return token?.role === "admin";
    //   }

    //   // By default return true only if the token is not null
    //   // (this forces the users to be signed in to access the page)
      return token !== null;
    }
  },
  pages: {
    signIn: `${authUrl}/auth/login`,
    error: `${authUrl}/auth/login`
  }
})

export const config = {
  matcher: [
    "/membership/:path*"
  ]
}

// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//   function middleware (req) {},
//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         if (req.nextUrl.pathname.startsWith('/membership') && token === null) {
//           console.log('tokentoken',token);
          
//           return false
//         }
//         return true
//       }
//     }
//   }
// )