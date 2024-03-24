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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  
export default function Card_({userId, username, email, admin, public_id}) {
    
    const { data: session} = useSession();
    const myId = session?.user.id;
    const isadmin = session?.user.isAdmin;
    const [profile, setprofile] = useState([]);
    const [img, setImg] = useState(`${public_id}`);
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
    const readProfile = async() => {
        try {
            const profileData = await axios.put("/api/users/me",{
                id: userId,
            })
            setprofile(profileData.data.data);
            console.log(profile);
        } catch (error) {
            
        }
    }
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
            //update({ name: "John Doe" })
            
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
            setImg(result.info.url);
        } catch (error) {
            console.log("error uploading image", error);
        }
        
    }
    return (

        <Card className="m-3 w-80">
            {admin ? (<p style={{color: '#FFD700'}} className="p-1 italic text-yellow-500 text-bold">Admin</p>):(<p className="p-4 text-yellow-500 text-bold">   </p>)}
            <center>
                
                <div style={{position: 'relative'}}>
                    <div style={{boxSizing:'border-box', width:'170', height:'170', borderRadius: '25px'}}>
                        <CldImage
                            src={img}
                            width="170"
                            height="170"
                            crop="fill"
                            loading="lazy"
                            //overlays={overlays}
                            style={{borderRadius: '100%'}}
                            className="rounded-lg"
                        />
                    </div>
                
                {(myId===userId) && <CldUploadButton
                        options={{ multiple: true }}
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                        onUpload={handelImageUpload}
                        style={{position: 'absolute', top: '80%', left: '65%'}}
                    >
                        
                        <Image src="/pen.png" alt="Edit Image" width={40} height={40}></Image>
                        
                </CldUploadButton>}
                </div>
                
            
            {/* <CldImage src={result.public_id} width={result.width} height={result.height} alt="" /> */}
            <CardHeader>
                
                <CardTitle>{username}</CardTitle>
                <CardDescription>{email}</CardDescription>
            </CardHeader>
            </center>
        
        <center>
        <CardFooter className="flex justify-between">
            <center>
            <Popover>
            <PopoverTrigger onClick={readProfile}><Button variant="outline" size="default" >View </Button></PopoverTrigger>
            <PopoverContent className="w-2/3 m-auto">
                
                <Card >
                    <CardHeader>
                        <center>
                        
                            <CldImage src={public_id} width="150" height="150" crop="fill"/>
                        
                        </center>
                    </CardHeader>
                    <CardContent>
                        <center><p className="text-blue-500 m-2 italic">{profile.profession}</p></center>
                        <p className="m-2 p-1 border border-emerald-600 rounded">Name: {username || "--"}</p>
                        <p className="m-2 p-1 border rounded">Guardian: {profile.guardian || "--"}</p>
                        <p className="m-2 p-1 border rounded">Email: {email || "--"}</p>
                        <p className="m-2 p-1 border rounded">date of birth: {profile.dob || "--"}</p>
                        <p className="m-2 p-1 border rounded">Education: {profile.edu || "--"}</p>
                        <p className="m-2 p-1 border rounded">Mobile: {profile.mob || "--"}</p>
                        <p className="m-2 p-1 border rounded">Blood group: {profile.bGR || "--"}</p>
                    </CardContent>
                </Card>

            </PopoverContent>
            </Popover>
                
                
            {isadmin && !admin && <Button variant="default" size="default" onClick={makeAdmin}>Appoint as Admin </Button>}
            {isadmin && admin && <Button variant="default" size="default" onClick={removeAdmin}>Remove Adminship </Button>}
            </center>
            
        </CardFooter>
        </center>
        
        </Card>
    )
}
