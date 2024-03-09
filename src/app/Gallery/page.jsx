// "use client"

// import React from 'react'
// import Navbar_ from '@/components/Navbar'
// import Footer_ from '@/components/Footer'
// import axios from "axios";
// import { useState } from "react";
// import Image from 'next/image';
// import {CldImage, CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
// import { Button } from '@/components/ui/button';
// import { Textarea } from "@/components/ui/textarea"
// import { useEffect } from 'react';
// import { image } from '@nextui-org/react';
// import Card_Gallery from '@/components/Card_Gallery'
// import {NextUIProvider} from "@nextui-org/react";
// import {Spinner} from "@nextui-org/react";
// import { useToast } from "@/components/ui/use-toast"

// function Gallery() {
//     const [ismember, setismember] = useState(false);
//     const [url, seturl] = useState("");
//     const [description, setdescription] = useState("");
//     const [author, setauthor] = useState("");
//     const [Images, setImages] = useState([]);
//     const [isloading, SetIsloading] = useState(true);
//     const [isadmin, setIsAdmin] = useState(false);
//     const { toast } = useToast()
//     const [buttonText, setButtonText] = useState("Upload Image")
//     useEffect(() => {
//         const findMe = async() => {
//             try {
//                 const image = await axios.get("/api/users/Gallery");
//                 //console.log(image.data.Photo);
//                 setImages(image.data.Photo);
//                 const whoIsMe = await axios.get("/api/users/me");
                
//                 setismember(whoIsMe.data.data.isMember);
//                 setauthor(whoIsMe.data.data.username);
//                 setIsAdmin(whoIsMe.data.data.isAdmin);
                
                
                
//             } catch (error) {
                
//             } finally {
//                 SetIsloading(false);
//             }
//         }
//         findMe();
//     }, []);

//     const handelImageUpload = async(result) => {
//         try {
//             //console.log("result", result.info.url);
//             setButtonText(result.info.original_filename);
//             seturl(result.info.url);
//             toast({
//                 title: "Image uploaded, now add description",
//                 // description: "Your messages motivate us to work harder and better",
//             })
//         } catch (error) {
//             toast({
//                 variant: "destructive",
//                 title: "Uh oh! Something went wrong.",
//                 description: "Image could not be uploaded.",
                
//             })
//             console.log("error uploading image", error);
//         }
        
//     }

//     const postImage = async() => {
//         try {
//             const upload = await axios.post("/api/users/Gallery",{
//                 description: description,
//                 photo_url: url,
//                 author: author,
//             })
//             toast({
//                 title: "Photo Uploaded to Gallery",
//                 description: "Refresh page to see",
//             })
//             setdescription("");
//             //console.log("uploaded", upload);
//         } catch (error) {
//             toast({
//                 variant: "destructive",
//                 title: "Uh oh! Something went wrong.",
//                 description: "post could not be uploaded",
                
//             })
//             console.log("could not add image to gallery", error);
//         }
//     }
//     return (
//         <NextUIProvider>
//         <div>
//             <Navbar_/>
//             <div className='min-h-screen'>
//             {ismember && 
//             <div>
//             <center>
//             <CldUploadButton
//                 options={{ multiple: true }}
//                 uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
//                 onUpload={handelImageUpload}
//             >
//                 <span>
//                 <Button variant="bluish" >{buttonText==='Upload Image'? (<div>Upload Image <center><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></center></div>):(buttonText)}</Button>
//                 </span>
//             </CldUploadButton>
//             <div className="grid w-80 gap-2">
//             <Textarea placeholder="Description of the image" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
//             <Button onClick={postImage}>Post Image</Button>
//             </div>
//             </center>
//             </div>
//             }
//             <div className='flex flex-row flex-wrap m-3 items-center justify-center'>
//                 <p className='text-4xl '>Image Gallery</p>
                
//             </div>
            
//             {isloading ? 
//                 (
//                 <center><div className='p-8 m-8'><Spinner label="Loading Images..." color="success" size='lg' className='m-8 p-8'/></div></center> 
//                 ):
//                 (
//                 <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
//                 {
//                     Images.map((data,idx)=>(
                        
//                         <div className='w-80'> <Card_Gallery  description={data.description} author={data.author} key={idx} public_id={data.photo_url} isadmin={isadmin}/></div>
//                     ))
//                 }
//                 </div>
//             )}
                
                
//             </div>
//             <Footer_/>
//         </div>
//         </NextUIProvider>
//     )
// }

// export default Gallery

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
import { useSession } from "next-auth/react";

function Gallery() {
    const { data: session } = useSession();
    const [ismember, setismember] = useState(false);
    const [url, seturl] = useState("");
    const [description, setdescription] = useState("");
    const [author, setauthor] = useState("");
    const [Images, setImages] = useState([]);
    const [isloading, SetIsloading] = useState(true);
    const [isadmin, setIsAdmin] = useState(false);
    const { toast } = useToast()
    const [buttonText, setButtonText] = useState("Upload Image")
    useEffect(() => {
        const findMe = async() => {
            try {
                const image = await axios.get("/api/users/Gallery");
                //console.log(image.data.Photo);
                setImages(image.data.Photo);
                // const whoIsMe = await axios.get("/api/users/me");
                
                // setismember(whoIsMe.data.data.isMember);
                // setauthor(whoIsMe.data.data.username);
                // setIsAdmin(whoIsMe.data.data.isAdmin);
                
                
                
            } catch (error) {
                
            } finally {
                SetIsloading(false);
            }
        }
        findMe();
    }, []);

    const handelImageUpload = async(result) => {
        try {
            //console.log("result", result.info.url);
            setButtonText(result.info.original_filename);
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
            <div className='min-h-screen'>
            {session?.user?.isAdmin && 
            <div>
            <center>
            <CldUploadButton
                options={{ multiple: true }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onUpload={handelImageUpload}
            >
                <span>
                <Button variant="bluish" >{buttonText==='Upload Image'? (<div>Upload Image <center><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></center></div>):(buttonText)}</Button>
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
                <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
                {
                    Images.map((data,idx)=>(
                        
                        <div className='w-80'> <Card_Gallery  description={data.description} author={data.author} key={idx} public_id={data.photo_url} isadmin={session?.user?.isAdmin}/></div>
                    ))
                }
                </div>
            )}
                
                
            </div>
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}

export default Gallery