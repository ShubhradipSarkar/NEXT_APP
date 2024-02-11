import { connect } from "@/DBConfig/DBConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        // Checking if user exists
        const userExists = await User.findOne({email});
        if(userExists){
            return NextResponse.json({error: "User already exists"},{status: 400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Save User
        const NewUser = new User({
            username, 
            email,
            password: hashedPassword,
        })
        await NewUser.save();

        return NextResponse.json({
            message: "User created",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}

export async function PUT(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { _id, profile_picture } = reqBody;
    
        // Check if user exists
        const existingUser = await User.findOne({ _id: _id });
        if (!existingUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
    
        // Update isAdmin field
        existingUser.profile_picture = profile_picture;
        await existingUser.save();
    
        return NextResponse.json({
            message: "User updated",
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    }