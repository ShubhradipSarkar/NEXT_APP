"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {Spinner} from "@nextui-org/react";
  import { Button } from '@/components/ui/button'
  import {CldImage, CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
  import { useToast } from "@/components/ui/use-toast"
  import { Textarea } from '@/components/ui/textarea'

  export default function History() {
    const [Histories, setHistories] = useState([]);
    const [imgUrl, SetImgUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const { toast } = useToast()
    const [url, seturl] = useState("");
    const [titleNew, settitleNew] = useState("");
    const [descriptionNew, setdescriptionNew] = useState("");
    const [isadmin, setIsAdmin] = useState(false);
    const [buttonText, setButtonText] = useState("Upload Image")
    const handelImageUpload = async(result) => {
        try {
            console.log(result)
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
    const PostHistory = async() => {
        try {
            const upload = await axios.post("/api/users/history",{
                description: descriptionNew,
                photo_url: url,
                title: titleNew,
            })
            toast({
                title: "History Uploaded to history wall",
                description: "Refresh page to see",
            })
            settitleNew("");
            setdescriptionNew("");
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "post could not be uploaded",
                
            })
            console.log("could not add add history", error);
        }
    }
    const deleteHistory = async(_id) => {
        try {
            const deleteCat = await axios.put("/api/users/history_delete",{
                _id: _id,
            })
            toast({
                title: "Deleted Card",
                description: "Refresh page to see",
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Card couldn't be deleted",
                
            })
        }
    }
    useEffect(() => {
        const getContent = async() => {
            try {
                const history = await axios.get("/api/users/history");
                //SetImgUrl(history.data.Post.photo_url[0]);
                setHistories(history.data.Post);
                //console.log(history.data.Post);

                const whoIsMe = await axios.get("/api/users/me");
                console.log(whoIsMe)
                setIsAdmin(whoIsMe.data.data.isAdmin);

            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        }
        getContent();
    }, []);
    return (
        <NextUIProvider>
        <div>
            <Navbar_/>
            {isadmin && 
            <center>
            <CldUploadButton
                options={{ multiple: true }}
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
                onUpload={handelImageUpload}
            >
                <span>
                <Button variant="bluish" className='w-80 2xl:w-80 md:w-80 inline-center'>{buttonText==='Upload Image'? (<div className='w-80'>Upload Image <center><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></center></div>):(buttonText)}</Button>
                </span>
            </CldUploadButton>
            <div className="grid w-80 gap-2">
            <Textarea placeholder="Title of the content" value={titleNew} onChange={(e)=>{settitleNew(e.target.value)}}/>
            <Textarea placeholder="Description" value={descriptionNew} onChange={(e)=>{setdescriptionNew(e.target.value)}}/>
            <Button onClick={PostHistory}><div className='text-semibold'>Post </div><div><Image src="/Mouse_Pointer_001.png" alt="lol" width={40} height={40}/></div></Button>
            </div>
            </center>
            }
            
            <center><p className='text-3xl m-1 italic'>History Page</p></center>
            <div className='items-center justify-center flex flex-row flex-wrap min-h-screen m-3'>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
                <div className='flex flex-row flex-wrap'>
                    {Histories.map((hist, key)=>(
                        
                        <Card className="m-3 md:w-[250px]">
                            <div className='flex flex-row'>
                            <p className="p-1 italic text-bold">{hist.title} <svg width="15" height="15"  xmlns="http://www.w3.org/2000/svg"><path d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></p>
                            
                            </div>
                        
                        <center>
                            <div className="clip-path:circle(50px at 0 100px)">
                            <CldImage
                                src={hist.photo_url[0]}
                                loading='lazy'
                                alt="/image_profile.png"
                                width="320"
                                height="320"
                                crop='fill'
                            />
                            </div>
                            
                            {/* {isadmin && <div><Button variant="default" size="sm" onClick={deletePhotoFromGallery}>Delete Image</Button></div> } */}
                            <CardHeader>
                                {/* <CardTitle>{author}</CardTitle> */}
                                <p className="max-w-80 text-gray-400">{hist.description_short}</p>
                            </CardHeader>

                        </center>
                        <Link href={`history/${hist._id}`}>
                        <Button variant='bluish' size='sm' className='m-2'>Read more <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
                        </Link>
                        {isadmin && 
                        <Button size='sm' className='text-red-500 text-bold m-2 aline-end' onClick={()=>deleteHistory(hist._id)}><div className='flex inline-center'><p className='text-black'>DELETE  </p></div></Button>
                        }
                        </Card>
                        
                    ))}
                </div>
                
                )}
                
            </div>
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}
