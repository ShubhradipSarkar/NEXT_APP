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
        <div>
            
            <div className=''>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
                // <div className='m-3 p-3'>
                //     <Image 
                //         src="/lock.png"
                //         alt="..."
                //         width={50}
                //         height={50}
                //     />
                //     <p>{data.title}</p>
                //     <p>{data.description}</p>
                // </div>
                <div className="relative flex flex-row flex-wrap bg-clip-border rounded-xl bg-white text-gray-700 shadow-md max-w-[48rem] flex-row">
  <div
    className="relative w-2/5 md:w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <Image 
        src="/Mouse_Pointer_001.png"
        alt='LUL'
        
        height={170}
        width={170}
    />
  </div>
  <div className="p-6">
    <h6
      className="mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      startups
    </h6>
    <h4 className="mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Lyft launching cross-platform service this week
    </h4>
    <p className="mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a href="#" className="inline-block"><button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
            )}
            
            </div>
            
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}