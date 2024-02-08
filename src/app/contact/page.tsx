"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import axios from "axios";
import { useState } from "react";
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    contact: z.string().min(2).max(50),
    subject: z.string().min(2).max(50),
    message: z.string().min(2).max(50),
})


function contact() {
    //const router = useRouter();
    //const [error, setError] = useState('');
    
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
                    
                <center><Button type="submit">Send Message</Button></center>
                
        </div>
                </div>
            </div>
            <Footer_/>
        </div>
    )
}

export default contact