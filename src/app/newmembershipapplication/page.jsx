"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import { useEffect } from 'react';
import axios from 'axios';
import ApplicationCard from "@/components/ApplicationCard"
import {NextUIProvider} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";

function page() {
    const [Applications, setApplications] = React.useState([]);
    const [isloading, SetIsloading] = React.useState(true);

    useEffect(() => {
        try {
            const getApplications = async() => {
                const applications = await axios.get("/api/users/applications");
                //console.log(applications.data.newApplication)
                setApplications(applications.data.newApplication);
            }
            getApplications();
        } catch (error) {
            console.log(error);
        } finally {
            SetIsloading(false);
        }
        
    }, []);
    return (
        <NextUIProvider>
        <div>
            <Navbar_/>
            <div>
                <center><div className='text-4xl m-2 text-sky-500'>New Applications</div></center>
                {isloading ? (
                    
                    <center><div className='p-8 m-8'><Spinner label="Loading Applications..." color="success" size='lg' className='m-8 p-8'/></div></center> 
                    
                    
                        ) : (
                            <div>
                                {Applications.map((app, key)=>(
                                    <div className='m-3' key={app.email}>
                                        <ApplicationCard name={app.name} email={app.email} guardian={app.guardian} dob={app.dob} mob={app.mob} profession={app.profession} interest={app.interest} bGR={app.bGR} edu={app.edu} />
                                    </div>
                                    
                                ))}
                            </div>
                        )}
                

            </div>
            <Footer_/>
        </div>
        </NextUIProvider>
    )
}

export default page