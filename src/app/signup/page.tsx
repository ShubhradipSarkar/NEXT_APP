"use client";
import Link from "next/link";
import React from 'react'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Router } from "next/router";
import Image from "next/image";
import { signIn } from "next-auth/react";

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    username: z.string().min(2).max(50),
})


function SignUp() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            username: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", values)
            router.push("/login");
        } catch (error:any) {
            console.log("Registration failed", error);
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-5">
            {loading?(<center><h1 className="text-2xl m-3">We are registering you...</h1></center>):(<center><h1 className=" text-2xl m-3">Register User</h1></center>)}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="name" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="email" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="password" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <center className="text-red-500">{error}</center>
                    <center><Button type="submit" className="text-md">Register</Button></center>
                </form>
            </Form>
            <p className="m-3">Already have an account?<Link href="/login" className="text-cyan-500"> Login here</Link></p>
            <p className="m-6">Or</p>
            <center><Button className="text-md" onClick={()=>signIn("google")}>Sign in with Google <Image src="/google.png" alt="google" width={40} height={40} /></Button></center>
        </div>
    )
}

export default SignUp