"use client"
import React, { useState, useEffect } from 'react'
import Navbar_ from '@/components/Navbar'
import Content from "@/components/Content"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import Footer_ from '@/components/Footer';
import axios from 'axios';
import { NextUIProvider } from '@nextui-org/react'
import {Spinner} from "@nextui-org/react";
import Image from 'next/image';
import ImageDisplay from '@/components/ImageDisplay'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';

export default function UserProfile({params}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const params_uri = useParams()
    const [IsAdmin, setIsAdmin] = useState(false);
    const [text, settext] = useState("");
    const [Id, setId] = useState("");
    const [title, settitle] = useState("");
    const { toast } = useToast()

    console.log('ID:', params_uri.id);

    const updateContent = async() => {
        try {
            const update = await axios.put("/api/users/history",{
                _id: Id,
                title: title,
                description: text,
            })
            toast({
                title: "History Description Updated!!!",
                // description: "Your messages motivate us to work harder and better",
            })
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "History could not be updated...",
                
            })
        }
    }

    useEffect(() => {
        const getall = async() => {
            try {
                const dt = await axios.put("/api/users/history_each",{
                    _id: params_uri.id
                })
                console.log(dt);
                setData(dt.data.Post);
                // console.log(data.description)
                setId(dt.data.Post._id);
                settitle(dt.data.Post.title);
                settext(dt.data.Post.description);

                const whoIsMe = await axios.get("/api/users/me");
                //console.log(whoIsMe)
                setIsAdmin(whoIsMe.data.data.isAdmin);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        }
        getall();
    }, []);
    
    //console.log("piki", data);
    
    
    return (
        <NextUIProvider>
        <div className='min-h-screen'>
            <Link href='/history/'>
            <Button size='sm' className='m-2'>Go Back</Button>
            </Link>
            <div className='min-h-screen'>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
            
            <center>
                <div className='min-h-screen'>
                    <p className='p-3 text-3xl'>{data.title}</p>
                    <ImageDisplay images={data.photo_url}/>
                    
                    
                    <div className='m-3 p-3'>{data.description}</div >
                </div>
            </center>
            

            )}
            
            </div>
            {IsAdmin && 
            <div >
            <center><p className='text-blue-500 text-xl'>Edit Content (Only for admins)</p></center>
            <center><div><Textarea value={text} onChange={(e)=>{settext(e.target.value)}} className='h-full 2xl:w-full md:w-80 p-3'/> <Button onClick={updateContent}>Update Content</Button></div></center>
            </div>
            }
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}