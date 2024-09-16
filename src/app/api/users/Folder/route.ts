import { connect } from "@/DBConfig/DBConfig";
// import Gallery from "@/models/photoGalleryModel";
import { NextRequest, NextResponse } from "next/server";
import Folder from "@/models/folder";
import { getServerSession } from "next-auth/next"
// import  authOptions  from "@/app/auth/[...nextauth]";
connect()

export async function POST(request: NextRequest, response: NextResponse){
    // const session = await getServerSession(request, response, authOptions)
    try {
        const reqBody = await request.json()
        console.log("year and folder name = ", reqBody)
        const {year, folderName} = reqBody
        //const description_short = description.slice(0,50)+"...";
        // Save Message
        console.log("year and folder name = ", reqBody)
        
        const NewFolder = new Folder({
            year,
            
        })
        NewFolder.Folders.push({folderName: folderName})
        await NewFolder.save();
        const FolderCreated = await Folder.findOne({year: year});
        const newFolderCreate = await FolderCreated.Folders.push({folderName: folderName, photo_url: []});
        console.log('iiiiiiiiiiiiiiiiiiiiiiiiiii',newFolderCreate);
        //await newFolderCreate.save();
        return NextResponse.json({
            NewFolder,
            message: "Folder Created",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {

    try {
        const Post = await Folder.find({});
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
        const {year, folderName, img} = reqBody;
        //const description_short = description.slice(0,50);
        const folderFind = await Folder.findOne({year: year});
        
        // if(title!=="") {
        //     Post.title=title;
        // }
        // if(description!==""){
        //     Post.description=description;
        //     Post.description_short=description_short;
        // }
        if(img === ""){
            return NextResponse.json({status: 500})
        }
        console.log("folder searching =======",folderFind);
        const found = folderFind.Folders;
        console.log("found folder === ",found);
        await found.push(img);
        await found.save();
        return NextResponse.json({
            message: "Folder Updated",
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
