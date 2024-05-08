import { NextResponse } from "next/server";

const { createMiddlewareClient } = require("@supabase/auth-helpers-nextjs");

export async function middleware(req) {

    const res = NextResponse.next()

    const safePaths = [
        "/auth/register",
    ]

    
    if (safePaths.includes(req.nextUrl.pathname)) {
        return res
    }
    
    const supabase = createMiddlewareClient({ req, res });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    
    if (!session) {
        return NextResponse.rewrite(new URL("/auth/login", req.url));
    }

    return res
}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}