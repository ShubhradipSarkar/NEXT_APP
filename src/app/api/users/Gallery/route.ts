import { connect } from "@/DBConfig/DBConfig";
import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {description, photo_url, author} = reqBody

        // Save Message
        const NewPhoto = new Gallery({
            description,
            photo_url,
            author,
        })
        await NewPhoto.save();

        return NextResponse.json({
            message: "Image Uploaded",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {
    try {
        const Photo = await Gallery.find({});
        //console.log(member);
        return NextResponse.json({
            Photo
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
