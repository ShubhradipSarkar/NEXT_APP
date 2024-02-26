import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import History from "@/models/historyModel";
import Category from "@/models/categoryModel";
connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {description, photo_url, title} = reqBody
        const description_short = description.slice(0,50)+"...";
        // Save Message
        const NewPost = new Category({
            description,
            description_short,
            photo_url,
            title,
        })
        await NewPost.save();

        return NextResponse.json({
            message: "Category Uploaded",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {
    try {
        const Post = await Category.find({}).select("-description");
        //console.log(member);
        return NextResponse.json({
            Post
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {_id, title, description} = reqBody;
        const description_short = description.slice(0,50);
        const Post = await Category.findOne({_id: _id});
        
        if(title!=="") {
            Post.title=title;
        }
        if(description!==""){
            Post.description=description;
            Post.description_short=description_short;
        }
        
        await Post.save();
        return NextResponse.json({
            message: "Category Updated",
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
