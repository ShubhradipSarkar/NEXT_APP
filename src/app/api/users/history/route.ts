import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import History from "@/models/historyModel";
import { getServerSession } from "next-auth/next"
// import  authOptions  from "@/app/auth/[...nextauth]";
connect()

export async function POST(request: NextRequest, response: NextResponse){
    // const session = await getServerSession(request, response, authOptions)
    try {
        const reqBody = await request.json()
        const {description, photo_url, title} = reqBody
        const description_short = description.slice(0,50)+"...";
        // Save Message
        const NewPost = new History({
            description,
            description_short,
            photo_url,
            title,
        })
        await NewPost.save();

        return NextResponse.json({
            message: "History Uploaded",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {

    try {
        const Post = await History.find({}).select("-description");
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
        const Post = await History.findOne({_id: _id});
        
        if(title!=="") {
            Post.title=title;
        }
        if(description!==""){
            Post.description=description;
            Post.description_short=description_short;
        }
        
        await Post.save();
        return NextResponse.json({
            message: "History Updated",
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
