// import React from 'react'
"use client"  

import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"



import { Checkbox } from "@/components/ui/checkbox"
import { setErrorMap } from 'zod';
import axios from 'axios';


export default function InputForm() {
  const { toast } = useToast()
  const [name, setname] = useState("");
  const [guardian, setguardian] = useState("");
  const [edu, setedu] = useState("");
  const [email, setemail] = useState("");
  const [mob, setmob] = useState("");
  const [bGR, setbGR] = useState("");
  const [interest, setinterest] = useState("");
  const [profession, setprofession] = useState("");
  const [dob, setdob] = useState("");
  const [check, setcheck] = useState(0);
  const [errorMsg, seterrorMsg] = useState("");
  useEffect(() => {
      const Membeship = async () => {
          const users = await axios.get("/api/users/me");
          
          
          setemail(users.data.data.email);
        };
      
        Membeship();
        
      
  }, []);
  const submitApplication = async() => {
    if(check===false || check===0){
      seterrorMsg("Click the checkbox to continue");
      return;
    }
    if(!name || !edu || !guardian || !mob || !dob){
      
      seterrorMsg("Name, Educational Qualification, Guardian's name, Mobile No, Date of Birth are required")
      return;
    }
    try {
      
      const newApplication = axios.post("/api/users/applications",{
        name:name,
        guardian:guardian,
        edu:edu,
        email:email,
        mob:mob,
        bGR:bGR,
        interest:interest,
        profession: profession,
        dob: dob,
        check: check
      })
      toast({
          title: "Application sent",
          description: `${name}, Thanks for choosing to be a part of us... We will review your application and get back to you through your mobile number ${mob}`,
      })

    } catch (error) {
      toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem and your Application couldn't be sent.",
          
      })
      console.log(error);
    }
    
  }
  return (
    <div>
    <Navbar_ />
    <center>
        
        
        <div className='m-5 p-5'>
          <Label htmlFor="name">Name*</Label>
          <Input placeholder="Your Name" className='xl:w-[700px] w-80 m-2' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        </div>
        <div className='xl:w-[700px] w-80 m-2'><Checkbox id="terms" value={check} onClick={(e)=>{setcheck(!check)}}/>
          <label
            htmlFor="terms"
            className="text-sm p-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-30"
          >
            I hereby acknowledge my commitment to actively contribute to the Santipur Science Club and agree to comply with its rules and guidelines.
          </label>
        </div>


        <div >
          <Label htmlFor="gname" >Guardian's Name*</Label>
          <Input placeholder="Your guardian's name" className='xl:w-[700px] w-80 m-2' value={guardian} onChange={(e)=>{setguardian(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Date of Birth*</Label>
          <Input placeholder="DD/MM/YY" className='xl:w-[700px] w-80 m-2' value={dob} onChange={(e)=>{setdob(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Educational Qualification*</Label>
          <Input placeholder="Your educational qualification" className='xl:w-[700px] w-80 m-2' value={edu} onChange={(e)=>{setedu(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Profession</Label>
          <Input placeholder="Your profession" className='xl:w-[700px] w-80 m-2' value={profession} onChange={(e)=>{setprofession(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Blood Group*</Label>
          <Input placeholder="Example: O- " className='xl:w-[700px] w-80 m-2' value={bGR} onChange={(e)=>{setbGR(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Interests</Label>
          <Input placeholder="Your Interests" className='xl:w-[700px] w-80 m-2' value={interest} onChange={(e)=>{setinterest(e.target.value)}}/>
        </div>
        <div >
          <Label htmlFor="email">Mobile No.*</Label>
          <Input type="email" id="email" className='xl:w-[700px] w-80 m-2' placeholder="Example: +91-9876543210" value={mob} onChange={(e)=>{setmob(e.target.value)}}/>
        </div>
        
        <div className='p-4'><center><div className='text-red-500'>{errorMsg}</div></center>
        <center><Button onClick={submitApplication} variant="bluish" size="sm">Submit Application</Button></center></div>
        
      
        </center>
    
    <Footer_/>
    </div>
   
  );
}



// import React from 'react';
// import Navbar_ from '@/components/Navbar';
// import Footer_ from '@/components/Footer';

// function JoinClub() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar_ />
//       <div className="container mx-auto p-8">
//         <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-2xl font-bold mb-4">Join Science Club</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="text"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clubInterest">
//                 I want to join Science club and do lots of works.
//               </label>
//               <textarea
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="clubInterest"
//                 placeholder="Write about your interest in the Science club"
//                 rows="4"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guardianName">
//                 Name of the guardian
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="guardianName"
//                 type="text"
//                 placeholder="Guardian's Name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
//                 Date of birth
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="dob"
//                 type="text"
//                 placeholder="DD/MM/YY"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eduQualification">
//                 Educational Qualification
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="eduQualification"
//                 type="text"
//                 placeholder="Educational Qualification"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
//                 Profession
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="profession"
//                 type="text"
//                 placeholder="Profession"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodGroup">
//                 Blood group
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="bloodGroup"
//                 type="text"
//                 placeholder="Blood group"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestFields">
//                 Interested in fields
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="interestFields"
//                 type="text"
//                 placeholder="Interested in fields"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNo">
//                 Mobile No.
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="mobileNo"
//                 type="text"
//                 placeholder="Your Mobile No."
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email ID
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="text"
//                 placeholder="Your Email ID"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer_ />
//     </div>
//   );
// }

// export default JoinClub;
