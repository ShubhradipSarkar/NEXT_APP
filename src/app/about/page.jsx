// "use client"
// import React from 'react'
// import Navbar_ from '@/components/Navbar'
// import Footer_ from '@/components/Footer'
// import Card_ from '@/components/Card'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Skeleton } from "@/components/ui/skeleton"
// // import Loader from "react-loader-spinner"; 
// // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
// import {NextUIProvider} from "@nextui-org/react";
// import {Spinner} from "@nextui-org/react";
// //import PaginationControls from '@/components/PaginationControls'

// function About({
//     searchParams,
//   }) {
//     const [Data, setData] = useState([]);
//     const [isloading, SetIsloading] = useState(true);
//     // const page = searchParams['page'] ?? '1'
//     // const per_page = searchParams['per_page'] ?? '5'
    
//     // const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
//     // const end = start + Number(per_page) // 5, 10, 15 ...

    

//     useEffect(() => {
        

//         fetch('/api/users/members')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setData(data)
//             SetIsloading(false);
//             //const entries = Data.member.slice(start, end)
//         })
//     }, []);
//     return (
//         <NextUIProvider>
//         <div className='min-h-screen'>
//             <Navbar_/>
//                 <div className='min-h-screen'> 
//                 {isloading ? (
                    
//                     <center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                    
                    
//                         ) : (
//                             <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
//                                 {entries.map((data)=>(
//                                     <Card_ userId={data._id } username={data.username} email={data.email} admin={data.isAdmin} key={data.email} public_id={data.profile_picture} className='m-3 w-auto'/>
//                                 ))}
                                
//                             </div>
//                         )}
//                 </div>
//                 <PaginationControls
//                     hasNextPage={end < Data.member.length}
//                     hasPrevPage={start > 0}
//                 />
//             <Footer_/>
//         </div>
//         </NextUIProvider>
//     )
// }

// export default About

"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import Card_ from '@/components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton } from "@/components/ui/skeleton"
// import Loader from "react-loader-spinner"; 
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import {NextUIProvider} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import PaginationControls from '@/components/PaginationControls';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function About({
    searchParams,
  }) {
    const [Data, setData] = useState([]);
    const [isloading, SetIsloading] = useState(true);
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '10'

    // mocked, skipped and limited in the real app
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...

    useEffect(() => {
        

        fetch('/api/users/members')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data.member)
            SetIsloading(false);
        })
    }, []);

    const entries = Data.slice(start, end);

    return (
        <NextUIProvider>
        <div className='min-h-screen'>
            <Navbar_/>
            <div className="fixed top-4 right-0">
                <Link href="/library_">
                    <button style={{
                        position: 'absolute',
                        backgroundImage: 'linear-gradient(to right, #0205bd, #e605e2)',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '1 rem',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: '2',
                    }} className="rounded-full shadow-lg">
                    Library
                    </button>
                </Link>
            </div>
            
                <div className='min-h-screen'> 
                {isloading ? (
                    
                    <center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                    
                    
                        ) : (
                            <div className='items-center justify-center flex flex-row flex-wrap  m-3'>
                                {entries.map((data)=>(
                                    <Card_ userId={data._id } username={data.username} email={data.email} admin={data.isAdmin} key={data.email} public_id={data.profile_picture} className='m-3 w-auto'/>
                                ))}
                                
                            </div>
                        )}
                </div>
                <center><PaginationControls
                urlfor="about"
                hasNextPage={end < Data.length}
                hasPrevPage={start > 0}
            /></center>
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}

export default About