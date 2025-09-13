import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get('user-token');
  const url = request.nextUrl;
  const homeUrl = new URL('/', request.url);

  const urls = ['/admin/panel', '/admin/carsAdmin', '/admin/blogAdmin', '/admin/usersAdmin']

  if (!tokenCookie) {
    if (url.pathname.startsWith('/profile')) {
        return NextResponse.redirect(homeUrl); // redireciona para /
    }

    if (urls.some(path => url.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

  let userData: any;
  try {
    userData = jwtDecode(tokenCookie.value); // agora decodifica JWT
  } catch {
    return NextResponse.redirect(homeUrl);
  }

  console.log(userData);

  const isAdmin = userData?.isAdmin;

  if (url.pathname.startsWith('/admin')) {
    if (isAdmin) return NextResponse.next();
    return NextResponse.redirect(homeUrl);
  }

  if (url.pathname.startsWith('/profile')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/admin/:path*'],
};