"use client"

import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import axios from "axios";
import { useState } from "react";
import Image from 'next/image';
import {CldImage, CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from 'react';
import { image } from '@nextui-org/react';
import Card_Gallery from '@/components/Card_Gallery'
import {NextUIProvider} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast"

function Gallery() {
    const [ismember, setismember] = useState(false);
    const [url, seturl] = useState("");
    const [description, setdescription] = useState("");
    const [author, setauthor] = useState("");
    const [Images, setImages] = useState([]);
    const [isloading, SetIsloading] = useState(true);
    const [isadmin, setIsAdmin] = useState(false);
    const { toast } = useToast()

    useEffect(() => {
        const findMe = async() => {
            try {
                const whoIsMe = await axios.get("/api/users/me");
                
                setismember(whoIsMe.data.data.isMember);
                setauthor(whoIsMe.data.data.username);
                setIsAdmin(whoIsMe.data.data.isAdmin);
                const image = await axios.get("/api/users/Gallery");
                //console.log(image.data.Photo);
                setImages(image.data.Photo);
                
                
            } catch (error) {
                
            } finally {
                SetIsloading(false);
            }
        }
        findMe();
    }, []);

    const handelImageUpload = async(result) => {
        try {
            console.log("result", result.info.url);
            seturl(result.info.url);
            toast({
                title: "Image uploaded, now add description",
                // description: "Your messages motivate us to work harder and better",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Image could not be uploaded.",
                
            })
            console.log("error uploading image", error);
        }
        
    }

    const postImage = async() => {
        try {
            const upload = await axios.post("/api/users/Gallery",{
                description: description,
                photo_url: url,
                author: author,
            })
            toast({
                title: "Photo Uploaded to Gallery",
                description: "Refresh page to see",
            })
            setdescription("");
            //console.log("uploaded", upload);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "post could not be uploaded",
                
            })
            console.log("could not add image to gallery", error);
        }
    }
    return (
        <NextUIProvider>
        <div>
            <Navbar_/>

            {ismember && 
            <div>
            <center>
            <CldUploadButton
                options={{ multiple: true }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onUpload={handelImageUpload}
            >
                <span>
                <Button variant="bluish" size="sm">Upload Image</Button>
                </span>
            </CldUploadButton>
            <div className="grid w-80 gap-2">
            <Textarea placeholder="Description of the image" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
            <Button onClick={postImage}>Post Image</Button>
            </div>
            </center>
            </div>
            }
            <div className='flex flex-row flex-wrap m-3 items-center justify-center'>
                <p className='text-4xl '>Image Gallery</p>
                
            </div>
            
            {isloading ? 
                (
                <center><div className='p-8 m-8'><Spinner label="Loading Images..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                ):
                (
                <div className='flex flex-row flex-wrap'>
                {
                    Images.map((data,idx)=>(
                        
                        <div className='w-80'> <Card_Gallery  description={data.description} author={data.author} key={idx} public_id={data.photo_url} isadmin={isadmin}/></div>
                    ))
                }
                </div>
            )}
                
                
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}

export default Gallery