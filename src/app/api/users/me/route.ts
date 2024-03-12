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
export async function PUT(request: NextRequest) {
    try {
        //const userId = await getDataFromToken(request);
        const reqBody = await request.json();
        const {id} = reqBody

        const Me = await User.findOne({_id: id});

        return NextResponse.json({
            message: "User Found",
            data: Me
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
