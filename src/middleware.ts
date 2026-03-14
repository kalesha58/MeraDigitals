import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect /admin routes
    if (pathname.startsWith('/admin')) {

        // Allow access to login page
        if (pathname === '/admin/login') {
            return NextResponse.next();
        }

        // Check for admin session cookie
        const token = request.cookies.get('admin_session')?.value;

        if (!token) {
            // Redirect to login if no token
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
