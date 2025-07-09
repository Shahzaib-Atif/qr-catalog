import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        '/admin/:path*', // Protects /admin and all its sub-routes
    ],
};

export function middleware(req: NextRequest) {
    const session = req.cookies.get("session");

    if (!session) {
        const loginUrl = new URL('/auth/signin', req.nextUrl.origin);
        loginUrl.searchParams.set('redirect', req.nextUrl.pathname + req.nextUrl.search);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}
