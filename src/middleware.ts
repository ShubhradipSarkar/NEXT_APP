import { NextResponse, NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt";


export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup'
    const specialPath = path === '/joinClub'
    //const token = request.cookies.get('token')?.value || ''
    //console.log("the request url = ", req);
    const token = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET,
    })

    if(isPublicPath && token){
        //console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",token);
        return NextResponse.redirect(new URL('/history', req.nextUrl))
    }
    if(specialPath && !token){
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    // if(!isPublicPath && !token){
    //     return NextResponse.redirect(new URL('/login', request.nextUrl))
    // }
}
 
export const config = {
    matcher: [
        '/joinClub',
        '/about',
        '/newmembershipapplication',
        '/joinClub',
        '/profile',
        '/login',
        '/signup',
    ]
}