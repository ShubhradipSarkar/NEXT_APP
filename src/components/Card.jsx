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


export default function Card_({username, email}) {
    return (
        <Card className="m-3 md:w-[200px]">
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
            <center><Button variant="outline" size="default">View</Button></center>
            
        </CardFooter>
        </center>
        
        </Card>
    )
}
