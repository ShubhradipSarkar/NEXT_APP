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
  
export default function History() {
    const [Histories, setHistories] = useState([]);
    const [imgUrl, SetImgUrl] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getContent = async() => {
            try {
                const history = await axios.get("/api/users/history");
                //SetImgUrl(history.data.Post.photo_url[0]);
                setHistories(history.data.Post);
                console.log(history.data.Post);
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
            <center>History Page</center>
            <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
                <div>
                    {Histories.map((hist, key)=>(
                        <Link href={`history/${hist._id}`}>
                        <div className='m-2 p-2' >
                            <Image 
                            src="/lock.png"
                            alt="..."
                            width={50}
                            height={50}
                            />
                            <p>{hist._id}</p>
                            <p>{hist.photo_url[0]}</p>
                            <p>{hist.title}</p>
                            <p>{hist.description_short}</p>

                        </div>
                        </Link>
                    ))}
                </div>
                )}
                
            </div>
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}
