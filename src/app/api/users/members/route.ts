import { connect } from "@/DBConfig/DBConfig";
import Member from "@/models/MemberModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, mobile} = reqBody

        // Save Message
        const NewMessage = new Member({
            name, 
            mobile,
            
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

export async function GET(request: NextRequest) {
    try {
        const member = await Member.find({});
        console.log(member);
        return NextResponse.json({
            member
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
