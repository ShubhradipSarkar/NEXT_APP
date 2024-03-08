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
import { signIn } from "next-auth/react";

const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
})


function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            
            const response = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
              });
            
            router.push("/history");
           
            
        } catch (error:any) {
            console.log("Login failed", error.response.data.error);
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-5">
            {loading?(<center><h1 className="m-3">Please Wait...</h1></center>):(<center><h1 className="m-3">Login</h1></center>)}
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            
                            <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="email" {...field}/>
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
                    <center><Button type="submit">Login</Button></center>
                </form>
            </Form>
            <Link href="/signup" className="m-3 text-cyan-500">Do not have an Account Register here</Link>
        </div>
    )
}

export default LoginPage