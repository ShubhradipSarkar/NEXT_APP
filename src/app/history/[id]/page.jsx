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
export default function UserProfile({params}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const params_uri = useParams()
    console.log('ID:', params_uri.id);
    useEffect(() => {
        const getall = async() => {
            try {
                const dt = await axios.put("/api/users/history_each",{
                    _id: params_uri.id
                })
                //console.log(dt);
                setData(dt.data.Post);
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
            
            <div className='min-h-screen'>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
            
            <center>
                <div className='min-h-screen'>
                    <p className='p-3 text-3xl'>{data.title}</p>
                    <ImageDisplay images={data.photo_url}/>
                    
                    
                    <p className='m-3 p-3'>{data.description}</p>
                </div>
            </center>
            

            )}
            
            </div>
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}