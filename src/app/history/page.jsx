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
                
                {Histories.map((hist, key)=>(
                    <div className='relative grid grid-cols-2 bg-red-200'>
                        <div className='relative'>
                            <Image layout='fill' objectFit='cover' src='/riki1.jpeg'/>
                        </div>
                        <p className='max-w-prose py-12 px-4'>
                            {hist.description_short}
                        </p>
                    </div>
                    
                ))}
            </div>
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}
