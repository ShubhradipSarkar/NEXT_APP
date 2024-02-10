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
        const getData = async() => {
            try {
                const allData = await axios.get("/api/users/members");
                console.log(allData);
                setData(allData.data.member);
            } catch (error) {
                console.log(error);
            } finally {
                SetIsloading(false);
            }
        }
        getData();
    }, []);
    return (
        <NextUIProvider>
        <div>
            <Navbar_/>
                <div>
                {isloading ? (
                    
                    <center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                    
                    
                        ) : (
                            <div className="flex flex-row flex-wrap">
                            {Data.map((data)=>(
                                <Card_ userId={data._id } username={data.name} email={data.mobile} admin={data.isAdmin} key={data.email} className='m-3 w-auto'/>
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