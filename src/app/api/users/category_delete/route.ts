import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import Category from "@/models/categoryModel";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {_id, photo_url} = reqBody

        // Save Message
        const Post = await Category.findOne({_id: _id});

        const arr = Post.photo_url;
        arr.push(photo_url);

        await Post.save();

        return NextResponse.json({
            message: "Image Uploaded",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}



export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {_id} = reqBody;
        
        const Post = await Category.findOneAndDelete({_id: _id});
        
        

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
