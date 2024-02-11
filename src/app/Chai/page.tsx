"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar_ from "@/components/Navbar"
import Footer_ from "@/components/Footer";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
function ChaiPage() {
    const router = useRouter();
    const [userId, setuserId] = useState("");
    const showId = async() => {
        try {
            const id = await axios.get('/api/users/me');
            setuserId(id.data.data._id);
        } catch (error) {
            
        }
    }
    const logout = async() => {
        try {
            const response = await axios.get('/api/users/logout');
            console.log(response);
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
        }
    }
    const handelImageUpload = (result: CldUploadWidgetResults) => {
        console.log("result", result.info!.url);
    }
    return (
        <main className="h-full flex justify-center items-center flex-col">
            <Navbar_/>
            <div className="">
            <CldUploadButton
                options={{ multiple: true }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onUpload={handelImageUpload}
            >
                <span>
                Upload
                </span>
            </CldUploadButton>

                <div>ChaiPage </div>
                <h1>{userId}</h1>
                <button className="px-6 py-2 bg-blue-500 rounded
                    my-3 hover:bg-blue-800">Test button</button>
                <Button variant='outline' onClick={logout}>Logout</Button>
                <Button variant='outline' onClick={showId}>show id</Button>
            </div>
            
            <Footer_/>
        </main>
    )
}

export default ChaiPage