import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Protect API routes that require authentication
    if (req.nextUrl.pathname.startsWith('/api/books') && req.method !== 'GET') {
      if (!req.nextauth.token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to public routes
        if (req.nextUrl.pathname === '/' || 
            req.nextUrl.pathname === '/auth/signin' ||
            req.nextUrl.pathname.startsWith('/api/auth') ||
            req.nextUrl.pathname === '/api/books' && req.method === 'GET') {
          return true
        }
        
        // Require authentication for protected routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    '/add/:path*',
    '/api/books/:path*',
    '/api/auth/signup',
  ]
} 