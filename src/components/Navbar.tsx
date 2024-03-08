"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import AboutUsButton from "@/components/NavbarButtons/AboutUs"
import PhotoButton from "@/components/NavbarButtons/PhotoButton"
import CateGoriesButton from "@/components/NavbarButtons/CateGoriesButton"
import HistoryMovButton from "@/components/NavbarButtons/HistoryMovButton"
import PresentMovButton from "@/components/NavbarButtons/PresentMovButton"
import ContactButton from "@/components/NavbarButtons/ContactButton"
import { useEffect } from "react";
import axios from "axios"
import MessageButton from "@/components/NavbarButtons/MessageButton"
import AdminOnlyButton from "@/components/NavbarButtons/AdminOnlyButton"
import JoinClubButton from "@/components/NavbarButtons/JoinClubButton"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"

export default function Navbar_() {
    const [state, setState] = React.useState(false);
    const [ismember, setIsmember] = React.useState(false);
    const [isadmin, setisadmin] = React.useState(false);
    const [user, setUser] = React.useState("");
    const router = useRouter();
    const { data: session} = useSession()
    console.log(session);
    // useEffect(() => {
    //     const Membeship = async () => {
    //         const users = await axios.get("/api/users/me");
    //         setUser(users.data.data.username);
    //         setIsmember(users.data.data.isMember);
    //         setisadmin(users.data.data.isAdmin);
    //     };
        
    //     Membeship();
          
        
    // }, []);
    
    const logOut = async() => {
        try {
            const response = await axios.get('/api/users/logout');
            console.log(response);
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div className=" w-full">
            <div className="bg-white ">
                <div className="alltop">
                    <div className="top">
                        <div>
                        
                            <center>
                                <div className="flex items-center justify-center">
                                    <div className="px-2">
                                       <Image
                                            src="/LOGO.png"
                                            width={80}
                                            height={80}
                                            alt="kaka"
                                        />
                                    </div>
                                    <div>
                                    <div className="text-black py-2 text-3xl items-center">
                                        {" "}
                                        শান্তিপুর সায়েন্স ক্লাব
                                    </div>
                                    {" "}
                                    <div style={{ textDecoration: "none" }}>
                                        <div className="name">
                                            <h5>
                                                <span className="font-sans italic font-bold text-xl" style={{ color: "green" }}> Santipur </span>
                                                <span className="font-sans italic font-bold text-xl" style={{ color: "#1B5E20" }}> Science </span>{" "}
                                                <span className="font-sans italic font-bold text-xl" style={{ color: "black" }}> Club</span>{" "}
                                                <span className="text-lg italic" style={{ color: "black", fontWeight: "bold" }}>
                                                    {" "}
                                                    (SINCE-1982)
                                                </span>
                                            </h5>
                                        </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                            </center>
                            <div className="flex justify-end">
                            
                            </div>
                        </div>
                    </div>
                    <center>
                        {" "}
                        <div
                        className="bg-white m-0 font-bold text-lime-800"
                            
                        >
                            বাংলার জনবিজ্ঞান আন্দোলনে একটি পথিকৃত সংগঠন | A PIONEER PEOPLE&apos;S SCIENCE ORGANIZATION OF BENGAL
                        </div>
                        {" "}
                        <div className={` text-black italic xl:block ${state ? "block" : "hidden"}`}>{session?.user?.username}</div>
                    </center>
                    
                </div>
            </div>

            <nav className="bg-white w-full md:border-0 z-0">
                <div className="items-center px-4 max-w-screen-xl mx-auto  md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="xl:hidden flex flex-row self-end justify-items-end">
                            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border" onClick={() => setState(!state)}>
                                <Menu/>
                            </button>
                            <p className={`m-2 text-black italic xl:block ${!state ? "block" : "hidden"}`}>{session?.user?.username}</p>
                            
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 xl:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            
                            <div className="text-gray-600 flex flex-col xl:flex-row hover:text-indigo-600 items-center">
                                {session?.user?.isAdmin && <AdminOnlyButton/>}
                                <AboutUsButton />
                                <CateGoriesButton/>
                                <PresentMovButton/>
                                <HistoryMovButton/>
                                {!session?.user?.isMember && <JoinClubButton/>}
                                <PhotoButton/>
                                <ContactButton/>
                                {session?.user?.isMember && <MessageButton/>}
                                <Button variant="admin" onClick={logOut}>Logout</Button>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
