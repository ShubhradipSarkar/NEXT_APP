"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import axios from "axios";
import { useState } from "react";
// import { toast } from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import Image from 'next/image';

import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"


function contact() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const { toast } = useToast()

    const SubMitMessage = async() => {
        try {
            const MsgSent = await axios.post("/api/users/messages",{
                name: name,
                mobile: mobile,
                subject: subject,
                message: message
            });
            toast({
                title: "Message was sent",
                description: "Your messages motivate us to work harder and better",
            })
            
            setName("");
            setMobile("");
            setSubject("");
            setMessage("");

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem and your message couldn't be sent.",
                
            })
        }
    }

    return (
        
        <div>
            <Navbar_/>
            
            <div className='flex flex-row flex-wrap min-h-screen'>
                
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
                    <Input placeholder='Mobile No' className='w-80 m-2' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                    <Input placeholder='Subject' className='w-80 m-2' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                    <Input placeholder='Message' className='w-80 m-2 py-8' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                <center><Button variant="default" className='p-2' onClick={SubMitMessage}><div className='text-semibold'>Send Message</div><div><Image src="/Mouse_Pointer_001.png" alt="lol" width={40} height={40}/></div></Button></center>
                
        </div>
                </div>
            </div>
            <Footer_/>
        </div>
        
    )
}

export default contact