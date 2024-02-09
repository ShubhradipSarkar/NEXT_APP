"use client";

import axios from 'axios';
import React, { useEffect } from 'react'


export default function Test() {
    useEffect(() => {
        const TT = async() => {
            const k=await axios.get("/api/users/messages");
            console.log(k);
        }
        TT();
    }, []);
    return (
        <div>
            Nothing
        </div>
    )
}
