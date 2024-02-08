"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import Image from 'next/image';


import { Input } from "@/components/ui/input"


function contact() {
    const [name, setName] = useState("");
    const [mobile, setmobile] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    
    const SubMitMessage = async() => {
        try {
            const MsgSent = await axios.post("/api/users/messages",{
                name: name,
                mobile: mobile,
                subject: subject,
                message: message
            });
            setName("");
            setmobile("");
            setsubject("");
            setmessage("");

        } catch (error) {
            
        }
    }

    return (
        <div>
            <Navbar_/>
            
            <div className='flex flex-row flex-wrap'>
                
                <div className=' p-8 m-3  rounded-md box-border w-full xl:w-1/2'>
                    <center>
                    <h2 className="text-4xl text-sky-400 p-3" >Address</h2>
                    <p className='text-gray-300 pt-9'>Tapati Bhawan <br/> 12/1 Gourhari Thakur Lane<br/> Duttapara<br/> PO+PS-Santipur <br/>Nadia, Pin-741404</p>
                    </center>
                </div>
                
                <div className=' p-3 m-3  rounded-md box-border w-full xl:w-2/5'>
                <div className="flex flex-col items-center justify-center max-h-screen py-5">
                <center><h1 className="m-3 text-4xl">Message Us</h1></center>
                    <Input placeholder='Name' className='w-80 m-2' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <Input placeholder='Mobile No' className='w-80 m-2' value={mobile} onChange={(e)=>{setmobile(e.target.value)}}/>
                    <Input placeholder='Subject' className='w-80 m-2' value={subject} onChange={(e)=>{setsubject(e.target.value)}}/>
                    <Input placeholder='Message' className='w-80 m-2 py-8' value={message} onChange={(e)=>{setmessage(e.target.value)}}/>
                <center><Button variant="default" className='p-2' onClick={SubMitMessage}><div className='text-semibold'>Send Message</div><div><Image src="/Mouse_Pointer_001.png" alt="lol" width={40} height={40}/></div></Button></center>
                
        </div>
                </div>
            </div>
            <Footer_/>
        </div>
    )
}

export default contact