"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import {CldImage, CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { useSession } from "next-auth/react";

export default function Card_({userId, username, email, admin, public_id}) {
    
    const { data: session } = useSession();
    const myId = session?.user.id;
    const isadmin = session?.user.isAdmin;
    const { toast } = useToast()
    

    if(!public_id){
        public_id='/image_profile.png'
    }

    //console.log(imageUrlToShow)
    // useEffect(() => {
    //     const findMe = async() => {
    //         try {
    //             const whoIsMe = await axios.get("/api/users/me");
    //             setmyId(whoIsMe.data.data._id)
    //             setisadmin(whoIsMe.data.data.isAdmin);
                
    //         } catch (error) {
                
    //         }
    //     }
    //     findMe();
    // }, []);
    const makeAdmin = async() => {
        
        try {
            const updateAdmin = await axios.put("/api/users/signup",{
                _id:userId,
                isAdmin: true,
            })
            toast({
                title: `${username} is added as new admin`,
                description: "Reload page once...",
            })
            
        } catch (error) {
            console.log("couldn't add as admin", error);
            toast({
                variant: "destructive",
                title: "Uh oh! Some issue came...",
                description: `There was a problem and ${username} couldn't be added as admin.`,
                
            })
        }
    }
    const removeAdmin = async() => {
        
        try {
            const updateAdmin = await axios.put("/api/users/signup",{
                _id:userId,
                isAdmin: false,
            })
            toast({
                title: `${username} is removed from Admin`,
                description: "Reload page once...",
            })
            
        } catch (error) {
            console.log("couldn't remove admin", error);
            toast({
                variant: "destructive",
                title: "Uh oh! Some issue came...",
                description: `There was a problem and ${username} couldn't be removed from admin.`,
                
            })
        }
    }
    const handelImageUpload = async(result) => {
        try {
            console.log("result", result.info.url);
            const DBUpload = await axios.put("/api/users/ProfilePic",{
                _id: userId,
                profile_picture: result.info.url,
            })
        } catch (error) {
            console.log("error uploading image", error);
        }
        
    }
    return (
        <Card className="m-3 md:w-[200px]">
            {admin ? (<p className="p-1 italic text-bold">Admin</p>):(<p className="p-4 text-yellow-500 text-bold">   </p>)}
            <center>
                
                <CldImage
                    src={public_id}
                    width="150"
                    height="150"
                    crop="fill"
                />
            
            
            {/* <CldImage src={result.public_id} width={result.width} height={result.height} alt="" /> */}
            <CardHeader>
            {(myId===userId) && <CldUploadButton
                options={{ multiple: true }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onUpload={handelImageUpload}
            >
                <span>
                <Button variant="bluish" size="sm">Change Image</Button>
                </span>
            </CldUploadButton>}
            <CardTitle>{username}</CardTitle>
            <CardDescription>{email}</CardDescription>
        </CardHeader>
            </center>
        
        <center>
        <CardFooter className="flex justify-between">
            <center><Button variant="outline" size="default">View </Button>
            {isadmin && !admin && <Button variant="default" size="default" onClick={makeAdmin}>Appoint Admin </Button>}
            {isadmin && admin && <Button variant="default" size="default" onClick={removeAdmin}>Remove Admin </Button>}
            </center>
            
        </CardFooter>
        </center>
        
        </Card>
    )
}
