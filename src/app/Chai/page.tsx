"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ChaiPage() {
    const router = useRouter();
    const [userId, setuserId] = useState("");
    const showId = async() => {
        try {
            const id = await axios.get('/api/users/me');
            setuserId(id.data.data._id);
        } catch (error) {
            
        }
    }
    const logout = async() => {
        try {
            await axios.get('/api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
    }
    return (
        <main className="h-full flex justify-center items-center flex-col">
            <div>ChaiPage </div>
            <h1>{userId}</h1>
            <button className="px-6 py-2 bg-blue-500 rounded
                my-3 hover:bg-blue-800">Test button</button>
            <Button variant='outline' onClick={logout}>Logout</Button>
            <Button variant='outline' onClick={showId}>show id</Button>
        </main>
    )
}

export default ChaiPage