"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function ChaiPage() {
    const router = useRouter();
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
            <button className="px-6 py-2 bg-blue-500 rounded
                my-3 hover:bg-blue-800">Test button</button>
            <Button variant='outline' onClick={logout}>Logout</Button>
        </main>
    )
}

export default ChaiPage