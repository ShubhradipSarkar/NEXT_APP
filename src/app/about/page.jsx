"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import Card_ from '@/components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function About() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const allData = await axios.get("/api/users/members");
            console.log(allData.data.member);
            setData(allData.data.member);
        }
        getData();
    }, []);
    return (
        <div>
            <Navbar_/>
                <div className="flex flex-row flex-wrap">
                    {Data.map((data)=>(
                        <Card_ username={data.username} email={data.email} key={data.email} className='m-3 w-auto'/>
                    ))}
                    
                </div>
            <Footer_/>
        </div>
    )
}

export default About