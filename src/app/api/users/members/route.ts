import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBConfig/DBConfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const member = await User.find({isMember: true}).select("-password");

        return NextResponse.json({
            member
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}
