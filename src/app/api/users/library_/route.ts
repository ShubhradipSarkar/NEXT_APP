import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import Library from "@/models/LibraryModel";
import { LibraryBig } from "lucide-react";
import { getToken } from "next-auth/jwt"
import { getServerSession } from "next-auth/next"
// import  {authOptions}  from "@/app/api/auth/[...nextauth]"
import { authOptions } from "../../auth/[...nextauth]/route";
// import { AuthOptions } from "next-auth";
// import { NextApiRequest, NextApiResponse } from "next";
connect()

export async function POST(request: NextRequest, response: NextResponse){
    // const token = await getToken({ request });
    
    try {
        const reqBody = await request.json()
        const {author, book, amount} = reqBody

        const NewBook = new Library({
            author,
            book, 
            amount,
        })
        await NewBook.save();

        // await Post.save();

        return NextResponse.json({
            message: "Book pushed in gallery",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}


export async function GET(request: NextRequest, response: NextResponse) {
    // const session = await getServerSession(request, response, authOptions);
    // const token = await getToken({ request })
    // console.log(token);
    // const session = await getServerSession(request, response, authOptions);  
    // console.log(session);
    try {
        const allBooks = await Library.find({});

        return NextResponse.json({
            allBooks
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
