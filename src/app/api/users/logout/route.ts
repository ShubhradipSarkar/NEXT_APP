import { NextResponse } from "next/server";

export async function POST() {
    try {
        

        return NextResponse.json({what:"what are you trying to do man"});
        
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500});
    }
    
}
export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logged out",
            success: true,
        })
        response.cookies.delete("token");

        return response;
        
    } catch (error: any) {
        return NextResponse.json({error: error.message},
            {status: 500});
    }
    
}