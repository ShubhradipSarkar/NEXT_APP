import { connect } from "@/DBConfig/DBConfig";
import Messages from "@/models/MessagesModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, mobile, subject, message} = reqBody

        // Save Message
        const NewMessage = new Messages({
            name, 
            mobile,
            subject,
            message,
        })
        await NewMessage.save();

        return NextResponse.json({
            message: "Message Sent",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest){
    try {
        const AllMessage = await Messages.find({});
        const AllMessages=AllMessage.reverse();
        return NextResponse.json({
            AllMessages
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

