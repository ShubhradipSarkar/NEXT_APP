// "use client"
// import React, { useState, useEffect } from 'react'
// import Navbar_ from '@/components/Navbar'
// import Content from "@/components/Content"
// import { useRouter } from 'next/navigation';
// import { useParams } from 'next/navigation'
// import Footer_ from '@/components/Footer';
// import axios from 'axios';
// import { NextUIProvider } from '@nextui-org/react'
// import {Spinner} from "@nextui-org/react";
// import Image from 'next/image';
// import ImageDisplay from '@/components/ImageDisplay'
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from '@/components/ui/button';
// import { useToast } from "@/components/ui/use-toast"
// import Link from 'next/link';

// export default function UserProfile({params}) {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const params_uri = useParams()
//     const [IsAdmin, setIsAdmin] = useState(false);
//     const [text, settext] = useState("");
//     const [Id, setId] = useState("");
//     const [title, settitle] = useState("");
//     const { toast } = useToast()

//     console.log('ID:', params_uri.id);

//     const updateContent = async() => {
//         try {
//             const update = await axios.put("/api/users/present",{
//                 _id: Id,
//                 title: title,
//                 description: text,
//             })
//             toast({
//                 title: "present Description Updated!!!",
//                 // description: "Your messages motivate us to work harder and better",
//             })
//         } catch (error) {
//             console.log(error);
//             toast({
//                 variant: "destructive",
//                 title: "Uh oh! Something went wrong.",
//                 description: "present could not be updated...",
                
//             })
//         }
//     }

//     useEffect(() => {
//         const getall = async() => {
//             try {
//                 const dt = await axios.put("/api/users/present_each",{
//                     _id: params_uri.id
//                 })
//                 console.log(dt);
//                 setData(dt.data.Post);
//                 // console.log(data.description)
//                 setId(dt.data.Post._id);
//                 settitle(dt.data.Post.title);
//                 settext(dt.data.Post.description);

//                 const whoIsMe = await axios.get("/api/users/me");
//                 //console.log(whoIsMe)
//                 setIsAdmin(whoIsMe.data.data.isAdmin);
//             } catch (error) {
//                 console.log(error);
//             } finally{
//                 setLoading(false);
//             }
//         }
//         getall();
//     }, []);
    
//     //console.log("piki", data);
    
    
//     return (
//         <NextUIProvider>
//         <div className='min-h-screen '>
//             <Link href='/present/'>
//             <Button size='sm' className='m-2'>Go Back <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
//             </Link>
//             <div className='min-h-screen'>
//             {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
            
//             <center>
//                 <div className='min-h-screen border border-blue-500 m-2 rounded'>
//                     <p className='p-3 text-3xl'>{data.title}</p>
//                     <ImageDisplay images={data.photo_url}/>
                    
                    
//                     <div className='m-3 p-3'>{data.description}</div >
//                 </div>
//             </center>
            

//             )}
            
//             </div>
//             {IsAdmin && 
//             <div >
//             <center><p className='text-blue-500 text-xl'>Edit Content (Only for admins)</p></center>
//             <center><div ><Textarea value={text} onChange={(e)=>{settext(e.target.value)}} className='w-2/3 p-3'/> <Button size='sm' className='m-2' onClick={updateContent}>Update Content</Button></div></center>
//             </div>
//             }
//             <Footer_/>
//         </div>
//         </NextUIProvider>
//     )
// }

"use client"
import React, { useState, useEffect } from 'react'
import Navbar_ from '@/components/Navbar'
import Content from "@/components/Content"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import Footer_ from '@/components/Footer';
import axios from 'axios';
import { NextUIProvider } from '@nextui-org/react'
import {Spinner} from "@nextui-org/react";
import Image from 'next/image';
import ImageDisplay from '@/components/ImageDisplay'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';

export default function UserProfile({params}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const params_uri = useParams()
    const [IsAdmin, setIsAdmin] = useState(false);
    const [text, settext] = useState("");
    const [Id, setId] = useState("");
    const [title, settitle] = useState("");
    const { toast } = useToast()

    console.log('ID:', params_uri.id);

    const updateContent = async() => {
        try {
            const update = await axios.put("/api/users/present",{
                _id: Id,
                title: title,
                description: text,
            })
            toast({
                title: "present Description Updated!!!",
                // description: "Your messages motivate us to work harder and better",
            })
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "present could not be updated...",
                
            })
        }
    }

    useEffect(() => {
        const getall = async() => {
            try {
                const dt = await axios.put("/api/users/present_each",{
                    _id: params_uri.id
                })
                console.log(dt);
                setData(dt.data.Post);
                // console.log(data.description)
                setId(dt.data.Post._id);
                settitle(dt.data.Post.title);
                settext(dt.data.Post.description);

                const whoIsMe = await axios.get("/api/users/me");
                //console.log(whoIsMe)
                setIsAdmin(whoIsMe.data.data.isAdmin);
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false);
            }
        }
        getall();
    }, []);
    
    //console.log("piki", data);
    
    
    return (
        <NextUIProvider>
        <div className='min-h-screen '>
            <Link href='/present/'>
            <Button size='sm' className='m-2'>Go Back <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Button>
            </Link>
            <div className='min-h-screen'>
            {loading ? (<center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> ) : (
            
            <center>
                <div className='min-h-screen border border-blue-500 m-2 rounded'>
                    <p className='p-3 text-3xl'>{data.title}</p>
                    <ImageDisplay images={data.photo_url}/>
                    
                    
                    <div className='m-3 p-3'>{data.description}</div >
                </div>
            </center>
            

            )}
            
            </div>
            {IsAdmin && 
            <div >
            <center><p className='text-blue-500 text-xl'>Edit Content (Only for admins)</p></center>
            <center><div ><Textarea value={text} onChange={(e)=>{settext(e.target.value)}} className='w-2/3 p-3'/> <Button size='sm' className='m-2' onClick={updateContent}>Update Content</Button></div></center>
            </div>
            }
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}