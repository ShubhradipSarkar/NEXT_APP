"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import Card_ from '@/components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton } from "@/components/ui/skeleton"
// import Loader from "react-loader-spinner"; 
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import {NextUIProvider} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
function About() {
    const [Data, setData] = useState([]);
    const [isloading, SetIsloading] = useState(true);
    useEffect(() => {
        

        fetch('/api/users/members')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
            SetIsloading(false);
        })
    }, []);
    return (
        <NextUIProvider>
        <div className='min-h-screen'>
            <Navbar_/>
                <div className='min-h-screen'> 
                {isloading ? (
                    
                    <center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                    
                    
                        ) : (
                            <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
                                {Data.member.map((data)=>(
                                    <Card_ userId={data._id } username={data.username} email={data.email} admin={data.isAdmin} key={data.email} public_id={data.profile_picture} className='m-3 w-auto'/>
                                ))}
                                
                            </div>
                        )}
                </div>
                
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}

export default About