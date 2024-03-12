"use client"
import React, { use } from 'react'
import Navbar_ from '@/components/Navbar'
import Footer_ from '@/components/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card_msg from '@/components/Card_msg'
import {NextUIProvider} from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";

function messagesForMembers() {
    const [Messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMessages = async() => {
            try {
                const response = await axios.get("/api/users/messages");
                setMessages(response.data.AllMessages);
              } catch (error) {
                console.error('Error fetching messages:', error);
              } finally {
                setLoading(false);
              }
        }
        getMessages();
        
    }, []);
  return (
    <NextUIProvider>
    <div >
        <Navbar_/>
        <div className='m-3 w-1/3'>
        {loading ? (
          
            <center><div className='p-8 m-8'><Spinner label="Loading..." color="success" size='lg' className='m-8 p-8'/></div></center> 
          
           
            ) : (
            <ul className='m-2'>
                {Messages.map((message) => (
                    <center className='m-2'>
                    <Card_msg name={message.name} mobile={message.mobile} subject={message.subject} message={message.message} className='m-3'/>
                    </center>
                // <li key={message._id}>{message.name}</li>
                // Adjust the property (e.g., message.text) according to your actual message structure
                ))}
            </ul>
            )}
        </div>
        <Footer_/>
    </div>
    </NextUIProvider>
  )
}

export default messagesForMembers