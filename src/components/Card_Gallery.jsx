"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"


export default function Card_Gallery({description, author, public_id}) {
    
    return (
        <Card className="m-3 md:w-[250px]">
            <p className="p-1 italic text-bold">{author}</p>
            <center>
                <Image
                    src={public_id}
                    
                    alt="/image_profile.png"
                    width={120}
                    height={120}
                    
                />
                <CardHeader>
                    {/* <CardTitle>{author}</CardTitle> */}
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </center>
        </Card>
    )
}
