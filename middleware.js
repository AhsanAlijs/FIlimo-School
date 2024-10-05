import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const protectedRoutes = [
  '/textbook',
  '/language/[id]',
  '/lesson/[id]',
  '/degree',
  '/award',
  '/points',
  '/loginstep',
  '/shedule',
  '/learning',
  '/buysubscription',
  '/profile',
  '/editprofile',
  '/newstudent',
  '/editstudent',
  '/parents',
  '/profilepassword',
  '/passwordchangev',
  '/passwordchange2',
  '/educationbase',
  '/avatar',
  '/firsttextbook',
  '/kidsreadyforschool',
  '/learning',
  '/startlearning',
  '/payment',
  '/questionanswer',
  '/home2'
];

export function middleware(req) {
  const { cookies } = req;
  const token = cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  // Log details for debugging
  console.log(`Request Pathname: ${pathname}`);
  console.log(`Token: ${token}`);

  // Allow requests for static files, Next.js assets, or any other assets like images and fonts
  if (pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.startsWith('/images') || pathname.startsWith('/fonts')) {
    console.log('Allowing static assets');
    return NextResponse.next();
  }

  // Handle protected routes
  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    const loginURL = new URL('/signin', req.nextUrl.origin);
    console.log(`Redirecting to login: ${loginURL.href}`);
    return NextResponse.redirect(loginURL);
  }

  // Example: Redirect authenticated users away from non-protected pages
  // if (token && !protectedRoutes.some(route => pathname.startsWith(route))) {
  //   const profileURL = new URL('/profile', req.nextUrl.origin);
  //   console.log(`Redirecting to profile: ${profileURL.href}`);
  //   return NextResponse.redirect(profileURL);
  // }

  console.log('Allowing request to proceed');
  return NextResponse.next();
}
