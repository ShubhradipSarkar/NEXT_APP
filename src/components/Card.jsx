"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { useState, useEffect } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"

export default function Card_({userId, username, email, admin}) {
    const [isadmin, setisadmin] = useState(false);
    const { toast } = useToast()

    useEffect(() => {
        const findMe = async() => {
            try {
                const whoIsMe = await axios.get("/api/users/me");
                
                setisadmin(whoIsMe.data.data.isAdmin);
                
            } catch (error) {
                
            }
        }
        findMe();
    }, []);
    const makeAdmin = async() => {
        
        try {
            const updateAdmin = await axios.put("/api/users/signup",{
                _id:userId,
                isAdmin: true,
            })
            toast({
                title: `${username} is added as new admin`,
                description: "Reload page once...",
            })
            
        } catch (error) {
            console.log("couldn't add as admin", error);
            toast({
                variant: "destructive",
                title: "Uh oh! Some issue came...",
                description: `There was a problem and ${username} couldn't be added as admin.`,
                
            })
        }
    }
    return (
        <Card className="m-3 md:w-[200px]">
            {admin ? (<p className="p-1 italic text-bold">Admin</p>):(<p className="p-4 text-yellow-500 text-bold">   </p>)}
            <center>
            <Image
            src="/image_profile.png"
            
            alt="Riki"
            width={80}
            height={40}
            className="m-2"
            />
            <CardHeader>
            
            <CardTitle>{username}</CardTitle>
            <CardDescription>{email}</CardDescription>
        </CardHeader>
            </center>
        
        <center>
        <CardFooter className="flex justify-between">
            <center><Button variant="outline" size="default">View </Button>
            {isadmin && !admin && <Button variant="default" size="default" onClick={makeAdmin}>Appoint Admin </Button>}
            
            </center>
            
        </CardFooter>
        </center>
        
        </Card>
    )
}
