import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer_() {
    return (
        <footer className="bg-gray-900 ">
        <div
            className="
            container
            flex flex-col flex-wrap
            px-4
            py-12
            mx-auto
            items-center
            justify-center
            md:items-center
            lg:items-start
            md:flex-row md:flex-nowrap
        "
        >
            
            <div className="flex-shrink-0 w-90 md:mx-0">
            
            <p className=" text-md text-center text-justify text-white-400 font-bold">
            Address : Tapati Bhawan, 12/1 Gourhari Thakur Lane, Duttapara, Santipur, Nadia, Pin-741404
            </p>
            <br />
            <p className=" text-xs text-center text-justify text-gray-400 ">
            Contact the developer at: shubhradipsarkar@gmail, contact number: +91-6294537321, NIT Durgapur 2024 Batch, 
            </p>
            
            <div className="flex justify-center mt-4 space-x-4 lg:mt-2">
                <Link href={""}>
                <Facebook className="text-blue-500" />
                </Link>
                <Link href={""}>
                <Twitter className="text-sky-300" />
                </Link>
                <Link href={""}>
                <Instagram className="text-pink-500" />
                </Link>
                <Link href={""}>
                <Linkedin className="text-blue-400" />
                </Link>
            </div>
            </div>
            
            
        </div>
        <div className="flex justify-center -mt-12">
            <p className="text-center text-white pb-2 p-5  ">
            @2024 All rights reserved by your website.
            </p>
        </div>
        </footer>
    )
}