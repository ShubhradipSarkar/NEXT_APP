"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function History() {
    const [Histories, setHistories] = useState([]);
    const [imgUrl, SetImgUrl] = useState("");
    useEffect(() => {
        const getContent = async() => {
            try {
                const history = await axios.get("/api/users/history");
                //SetImgUrl(history.data.Post.photo_url[0]);
                setHistories(history.data.Post);
                console.log(history.data.Post);
            } catch (error) {
                
            }
        }
        getContent();
    }, []);
    return (
        <NextUIProvider>
        <div>
            <Navbar_/>
            <div>
                History Page
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
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}
