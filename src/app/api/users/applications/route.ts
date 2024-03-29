import { connect } from "@/DBConfig/DBConfig";
import Member from "@/models/MemberModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, guardian, email, dob, mob, edu, profession, bGR, interest} = reqBody

        // Save Message
        const NewMember = new Member({
            name, guardian, email, dob, mob, edu, profession, bGR, interest
            
        })
        await NewMember.save();

        return NextResponse.json({
            message: "Application Sent",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {
    try {
        const newApplication = await Member.find({});
        //console.log(member);
        return NextResponse.json({
            newApplication
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email} = reqBody;
        console.log(email);
        console.log("....................................")
        const user = await Member.findOne({email: email});
        console.log(user);
        const user1 = await Member.findOneAndDelete({email: email});
        
        
        return NextResponse.json({
            message: "Application deleted",
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
