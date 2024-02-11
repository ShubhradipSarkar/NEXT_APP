import { connect } from "@/DBConfig/DBConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, mobile} = reqBody

        // Save Message
        const NewMessage = new User({
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


//TODO
export async function PUT(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, name, mob, profession, dob, guardian, interest, bGR, edu} = reqBody

        // Save Message
        const existingUser = await User.findOne({email: email});
        
        console.log(existingUser);
        existingUser.name = name;
        existingUser.isMember = true;
        existingUser.mob=mob;
        existingUser.profession=profession;
        existingUser.dob=dob;
        existingUser.guardian=guardian;
        existingUser.interest=interest;
        existingUser.bGR = bGR;
        existingUser.edu=edu;

        await existingUser.save();

        return NextResponse.json({
            message: "User Updated and made member",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function GET(request: NextRequest) {
    try {
        const member = await User.find({isMember: true});
        console.log(member);
        return NextResponse.json({
            member
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
