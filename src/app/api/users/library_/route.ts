import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import Library from "@/models/LibraryModel";
import { LibraryBig } from "lucide-react";

connect()

export async function POST(request: NextRequest){
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


export async function GET(request: NextRequest) {
    try {
        const allBooks = await Library.find({});

        return NextResponse.json({
            allBooks
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
