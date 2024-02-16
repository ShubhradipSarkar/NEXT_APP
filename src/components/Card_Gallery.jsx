"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import axios from "axios"


export default function Card_Gallery({description, author, public_id, isadmin}) {
    
    const deletePhotoFromGallery = async() => {
        try {
            const deletePhoto = axios.put("/api/users/Gallery",{
                photo_url:public_id,
            })
            window.location.reload();
        } catch (error) {
            console.log("could not delete photo");

        }
    }
    return (
        <Card className="m-3 md:w-[250px]">
            <p className="p-1 italic text-bold">{author}</p>
            <center>
                <div className="clip-path:circle(50px at 0 100px)">
                <Image
                    src={public_id}
                    
                    alt="/image_profile.png"
                    width={320}
                    height={320}
                    
                />
                </div>
                
                {isadmin && <div><Button variant="default" size="sm" onClick={deletePhotoFromGallery}>Delete Image</Button></div> }
                <CardHeader>
                    {/* <CardTitle>{author}</CardTitle> */}
                    <p className="max-w-80">{description}</p>
                </CardHeader>
            </center>
        </Card>
    )
}
