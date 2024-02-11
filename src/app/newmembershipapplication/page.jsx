"use client"
import React from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import { useEffect } from 'react';
import axios from 'axios';
import ApplicationCard from "@/components/ApplicationCard"
function page() {
    const [Applications, setApplications] = React.useState([]);
    useEffect(() => {
        const getApplications = async() => {
            const applications = await axios.get("/api/users/applications");
            //console.log(applications.data.newApplication)
            setApplications(applications.data.newApplication);
        }
        getApplications();
    }, []);
    return (
        <div>
            <Navbar_/>
            <div>
                New Applications
                {Applications.map((app)=>(
                    <div className='m-3'>
                        <ApplicationCard name={app.name} email={app.email} guardian={app.guardian} dob={app.dob} mob={app.mob} profession={app.profession} interest={app.interest} bGR={app.bGR} edu={app.edu}/>
                    </div>
                    
                ))}

            </div>
            <Footer_/>
        </div>
    )
}

export default page