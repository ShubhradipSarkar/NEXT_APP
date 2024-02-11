import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBConfig/DBConfig";

connect();

export async function POST(request: NextRequest) {
    try {
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const Me = await User.findOne({_id: userId}).select("-password");

        return NextResponse.json({
            message: "User Found",
            data: Me
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
