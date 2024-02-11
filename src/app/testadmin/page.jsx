"use client";

import axios from 'axios';
import React, { useEffect } from 'react'



export default function Test() {
  //const data = await getData()
    useEffect(() => {
        const TT = async() => {
            const k=await fetch("/api/users/members",
            {
              next:{
                revalidate: 0
              }
            }
            );
            console.log(await k.json());
        }
        TT();
    }, []);
    return (
        <div>
            Nothing
        </div>
    )
}
