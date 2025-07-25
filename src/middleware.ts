// src/middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    // This is where users will be redirected if they are not logged in.
    signIn: '/auth/login', 
  }
})

// This config applies the middleware ONLY to the path(s) you list.
export const config = { 
  matcher: [
    '/Home' // Protects the /Home route
  ]
}