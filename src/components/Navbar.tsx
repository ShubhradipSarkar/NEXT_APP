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


export default function Navbar_() {
    const [state, setState] = React.useState(false);

    

    return (
        <div className="fixed top-0 w-full">
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
                            
                        </div>
                    </div>
                    <center>
                        {" "}
                        <div
                        className="bg-white m-0 p-2 font-bold text-lime-800"
                            
                        >
                            বাংলার জনবিজ্ঞান আন্দোলনে একটি পথিকৃত সংগঠন | A PIONEER SCIENCE ORGANIZATION FOR PEOPLE OF BENGAL
                        </div>{" "}
                    </center>
                </div>
            </div>

            <nav className="bg-white w-full md:border-0 z-0">
                <div className="items-center px-4 max-w-screen-xl mx-auto  md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        
                        <div className="xl:hidden">
                            <button
                                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 justify-self-center pb-3 xl:block md:pb-0 md:mt-0 ${
                            state ? "block" : "hidden"
                        }`}
                    >
                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            
                            <div className="text-gray-600 flex flex-col xl:flex-row hover:text-indigo-600 items-center">
                                <AboutUsButton />
                                <CateGoriesButton/>
                                <PresentMovButton/>
                                <HistoryMovButton/>
                                <PhotoButton/>
                                <ContactButton/>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
