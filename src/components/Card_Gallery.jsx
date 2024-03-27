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
            const deletePhoto = await axios.put("/api/users/Gallery",{
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
                <div style={{position: 'relative'}}>
                <Image
                    src={public_id}
                    
                    alt="/image_profile.png"
                    width={320}
                    height={320}
                    
                />
                {isadmin && <div style={{position: 'absolute', top: '90%', left: '65%'}}><div onClick={deletePhotoFromGallery}>OOOOOO<Image src="/trash.png" alt="delete" width={50} height={50}/></div></div> }
                </div>
                
                
                <CardHeader>
                    {/* <CardTitle>{author}</CardTitle> */}
                    <p className="max-w-80">{description}</p>
                </CardHeader>
            </center>
        </Card>
    )
}
