"use client"
import React, { useState, useEffect } from 'react'
import Navbar_ from '@/components/Navbar'
import Content from "@/components/Content"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import Footer_ from '@/components/Footer';
import axios from 'axios';

export default function UserProfile({params}) {
    const [data, setData] = useState([]);
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
            }
        }
        getall();
    }, []);
    
    //console.log("piki", data);
    
    
    return (
        <div>
            <Navbar_/>
            <div className='min-h-screen'>
            <p>{data.title}</p>
            <p>{data.description}</p>
            </div>
            
            <Footer_/>
        </div>
    )
}