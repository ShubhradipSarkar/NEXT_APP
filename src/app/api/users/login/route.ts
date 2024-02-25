import { connect } from "@/DBConfig/DBConfig";
import jwt from "jsonwebtoken" 
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Check existance of user
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "Invalid Username"}, {status:400});
        }

        // Compair password
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status:400});
        }

        // prepare jwt 
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY!,
            {expiresIn: "72h"});

        // Response and cookie setting
        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        //localStorage.setItem("token", token);
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

